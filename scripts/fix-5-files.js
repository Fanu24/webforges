#!/usr/bin/env node

/**
 * Script che processa SOLO 5 file alla volta per evitare blocchi
 * Esegui questo script più volte finché non dice "Nessun file da processare"
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
const lockFile = path.join(blogDir, '.fix-progress.txt');

// Leggi progresso
let processedFiles = [];
if (fs.existsSync(lockFile)) {
  processedFiles = fs.readFileSync(lockFile, 'utf8').split('\n').filter(f => f.trim());
}

const allFiles = fs.readdirSync(blogDir)
  .filter(f => f.endsWith('.html') && f !== 'ristorante-trastevere-roma.html' && !processedFiles.includes(f))
  .map(f => path.join(blogDir, f));

if (allFiles.length === 0) {
  console.log('\n✅ Tutti i file sono stati processati!');
  if (fs.existsSync(lockFile)) {
    fs.unlinkSync(lockFile);
  }
  process.exit(0);
}

const filesToProcess = allFiles.slice(0, 5); // Solo 5 file
console.log(`\n🔧 Processando ${filesToProcess.length} file (${allFiles.length} rimanenti)...\n`);

let fixed = 0;

filesToProcess.forEach(filePath => {
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
    
    // 1. Rimuovi testi fuori contesto per categorie non-turistiche
    if (!['ristorante', 'pizzeria', 'hotel', 'bed-and-breakfast', 'agriturismo', 'trattoria'].includes(categorySlug)) {
      // Rimuovi sezioni su turisti, serate, eventi
      content = content.replace(/Comunica Eventi e Offerte[\s\S]{0,500}?massimizza i ricavi\./g, '');
      content = content.replace(/Promuovi serate speciali[\s\S]{0,500}?massimizza i ricavi\./g, '');
      content = content.replace(/2\+ Milioni di Turisti all'Anno/g, 'Migliaia di Clienti Online');
      content = content.replace(/turisti all'anno/gi, 'clienti online');
      content = content.replace(/Con oltre 2 milioni di turisti/gi, 'Con migliaia di ricerche online');
      content = content.replace(/catturare turisti e romani in giro/gi, 'catturare clienti nella zona');
      content = content.replace(/per catturare turisti/gi, 'per catturare clienti');
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
    
    // 4. Sostituisci termini
    content = content.replace(/\bprenotazioni\b/gi, mapping.actionNounPlural || mapping.actionNoun || 'contatti');
    content = content.replace(/\bprenotazioni al mese\b/gi, `${mapping.actionNounPlural || mapping.actionNoun} al mese`);
    
    // 5. Correggi articoli
    if (category.plural) {
      content = content.replace(new RegExp(`\\bil ${category.plural.toLowerCase()}\\b`, 'gi'), `le ${category.plural.toLowerCase()}`);
      content = content.replace(new RegExp(`\\bun ${category.plural.toLowerCase()}\\b`, 'gi'), `un'${category.name.toLowerCase()}`);
      content = content.replace(new RegExp(`\\bil tuo ${category.plural.toLowerCase()}\\b`, 'gi'), `le tue ${category.plural.toLowerCase()}`);
    }
    
    // 6. Correggi "undefined"
    content = content.replace(/\bundefined\b/gi, mapping.actionNounPlural || mapping.actionNoun || 'clienti');
    
    // 7. Rimuovi "foto del menu" per non-food
    if (!['ristorante', 'pizzeria', 'trattoria'].includes(categorySlug)) {
      content = content.replace(/foto del menu/gi, mapping.serviceTerm || 'servizi');
    }
    
    // 8. Correggi "Perfetto per il tuo [categoria]"
    const articlePoss = category.plural ? 'le tue' : (category.name.match(/^[AEIOU]/i) ? 'la tua' : 'il tuo');
    content = content.replace(/Perfetto per il tuo \w+/gi, `Perfetto per ${articlePoss} ${category.name.toLowerCase()}`);
    
    // 9. Correggi "conto medio per Persona" per non-ristoranti
    if (!['ristorante', 'pizzeria', 'trattoria'].includes(categorySlug)) {
      content = content.replace(/conto medio per Persona/gi, 'valore medio per cliente');
      content = content.replace(/Con un conto medio di €50 a persona/gi, 'Con un valore medio di €500 per cliente');
    }
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      fixed++;
    }
    
    // Salva progresso
    processedFiles.push(fileName);
    fs.writeFileSync(lockFile, processedFiles.join('\n'), 'utf8');
    
  } catch (error) {
    console.error(`❌ ${path.basename(filePath)}: ${error.message}`);
  }
});

console.log(`✅ Completato! ${fixed} file corretti.`);
console.log(`📊 Rimanenti: ${allFiles.length - filesToProcess.length}`);
console.log(`\n💡 Esegui di nuovo questo script per processare altri 5 file.`);


