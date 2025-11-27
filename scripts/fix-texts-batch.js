#!/usr/bin/env node

/**
 * Script che processa file in BATCH PICCOLI per evitare blocchi
 * Corregge testi fuori contesto per categoria
 */

const fs = require('fs');
const path = require('path');

// Carica mapping
const mappingPath = path.join(__dirname, '../data/category-content-mapping.js');
const mappingContent = fs.readFileSync(mappingPath, 'utf8');
eval(mappingContent);

// Carica categorie
const categoriesPath = path.join(__dirname, '../data/categories.js');
const categoriesContent = fs.readFileSync(categoriesPath, 'utf8');
eval(categoriesContent.replace('const categories', 'categories'));

const blogDir = path.join(__dirname, '../blog');
const allFiles = fs.readdirSync(blogDir)
  .filter(f => f.endsWith('.html') && f !== 'ristorante-trastevere-roma.html')
  .map(f => path.join(blogDir, f));

const BATCH_SIZE = 10; // Processa solo 10 file alla volta
let totalFixed = 0;
let totalErrors = 0;

console.log(`\n🔧 Correzione testi in ${allFiles.length} articoli (batch da ${BATCH_SIZE})...\n`);

// Processa in batch
for (let i = 0; i < allFiles.length; i += BATCH_SIZE) {
  const batch = allFiles.slice(i, i + BATCH_SIZE);
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  const totalBatches = Math.ceil(allFiles.length / BATCH_SIZE);
  
  console.log(`📦 Batch ${batchNum}/${totalBatches} (file ${i + 1}-${Math.min(i + BATCH_SIZE, allFiles.length)})`);
  
  batch.forEach(filePath => {
    try {
      const fileName = path.basename(filePath);
      const match = fileName.match(/^([^-]+)-([^-]+)-([^-]+)\.html$/);
      if (!match) return;
      
      const categorySlug = match[1];
      const locationSlug = match[2];
      const city = match[3];
      
      const category = categories.find(c => c.slug === categorySlug);
      if (!category) return;
      
      const mapping = getCategoryMapping(categorySlug);
      const locationNameCapitalized = locationSlug.split('-').map(w => 
        w.charAt(0).toUpperCase() + w.slice(1)
      ).join(' ');
      const cityCapitalized = city.charAt(0).toUpperCase() + city.slice(1);
      
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // 1. Rimuovi testi completamente fuori contesto per categoria
      // Testi da rimuovere per categorie non-turistiche
      if (!['ristorante', 'pizzeria', 'hotel', 'bed-and-breakfast', 'agriturismo', 'trattoria'].includes(categorySlug)) {
        // Rimuovi sezioni su "serate speciali", "eventi", "turisti"
        content = content.replace(/Comunica Eventi e Offerte[\s\S]*?massimizza i ricavi\./g, '');
        content = content.replace(/Promuovi serate speciali[\s\S]*?massimizza i ricavi\./g, '');
        content = content.replace(/2\+ Milioni di Turisti all'Anno/g, 'Migliaia di Clienti Online');
        content = content.replace(/turisti all'anno/g, 'clienti online');
        content = content.replace(/Con oltre 2 milioni di turisti/g, 'Con migliaia di ricerche online');
        content = content.replace(/centro è uno dei quartieri più iconici e frequentati di Milano\. Con oltre 2 milioni di turisti/g, 
          `${locationNameCapitalized} è una zona strategica di ${cityCapitalized}. Con migliaia di ricerche online`);
        content = content.replace(/Trastevere è uno dei quartieri più turistici di Roma\. Ogni giorno, centinaia di persone cercano/g,
          `${locationNameCapitalized} è una zona strategica di ${cityCapitalized}. Ogni giorno, centinaia di persone cercano`);
      }
      
      // 2. Correggi breadcrumb
      const categoryNameProper = category.plural || category.name;
      content = content.replace(
        new RegExp(`(${category.plural ? category.plural.toLowerCase() : category.name.toLowerCase()}) •`, 'g'),
        `${categoryNameProper} •`
      );
      
      // 3. Correggi hero subtitle
      if (mapping.heroSubtitle) {
        let heroSubtitle = mapping.heroSubtitle
          .replace(/\bristoranti?\b/gi, category.plural || category.name.toLowerCase())
          .replace(/\bRistoranti?\b/g, category.plural || category.name)
          .replace(/\bTrastevere\b/g, locationNameCapitalized)
          .replace(/\bRoma\b/g, cityCapitalized);
        
        if (!heroSubtitle.includes(locationNameCapitalized)) {
          heroSubtitle = heroSubtitle.replace(/\.$/, ` a ${locationNameCapitalized}, ${cityCapitalized}.`);
        }
        
        content = content.replace(
          /<p class="hero-subtitle">[\s\S]*?<\/p>/,
          `<p class="hero-subtitle">\n            ${heroSubtitle}</p>`
        );
      }
      
      // 4. Sostituisci termini generici
      content = content.replace(/\bprenotazioni\b/gi, mapping.actionNounPlural || mapping.actionNoun || 'contatti');
      content = content.replace(/\bprenotazioni al mese\b/gi, `${mapping.actionNounPlural || mapping.actionNoun} al mese`);
      
      // 5. Correggi "il agenzie" -> "le agenzie"
      if (category.plural) {
        content = content.replace(new RegExp(`\\bil ${category.plural.toLowerCase()}\\b`, 'gi'), `le ${category.plural.toLowerCase()}`);
        content = content.replace(new RegExp(`\\bun ${category.plural.toLowerCase()}\\b`, 'gi'), `un'${category.name.toLowerCase()}`);
        content = content.replace(new RegExp(`\\bil tuo ${category.plural.toLowerCase()}\\b`, 'gi'), `le tue ${category.plural.toLowerCase()}`);
      }
      
      // 6. Correggi "undefined"
      content = content.replace(/\bundefined\b/gi, mapping.actionNounPlural || mapping.actionNoun || 'clienti');
      
      // 7. Correggi "foto del menu" per categorie non-food
      if (!['ristorante', 'pizzeria', 'trattoria'].includes(categorySlug)) {
        content = content.replace(/foto del menu/gi, mapping.serviceTerm || 'servizi');
        content = content.replace(/Sceglie il servizio in base alle servizi online/gi, mapping.stat1 || 'Sceglie il servizio');
      }
      
      // 8. Correggi "Perfetto per il tuo [categoria]" con articolo corretto
      const articlePoss = category.plural ? 'le tue' : (category.name.match(/^[AEIOU]/i) ? 'la tua' : 'il tuo');
      content = content.replace(/Perfetto per il tuo \w+/gi, `Perfetto per ${articlePoss} ${category.name.toLowerCase()}`);
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        totalFixed++;
      }
      
    } catch (error) {
      totalErrors++;
      if (totalErrors <= 5) {
        console.error(`  ❌ ${path.basename(filePath)}: ${error.message}`);
      }
    }
  });
  
  // Pausa tra batch per evitare blocchi
  if (i + BATCH_SIZE < allFiles.length) {
    // Piccola pausa
    const start = Date.now();
    while (Date.now() - start < 100) {} // 100ms pause
  }
}

console.log(`\n✨ Completato!`);
console.log(`✅ Articoli corretti: ${totalFixed}`);
console.log(`❌ Errori: ${totalErrors}`);


