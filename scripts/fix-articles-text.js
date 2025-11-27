#!/usr/bin/env node

/**
 * Script VELOCE per correggere testi negli articoli esistenti
 * Fa solo le sostituzioni essenziali per correggere i problemi segnalati
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
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.html') && f !== 'ristorante-trastevere-roma.html');

console.log(`\n🔧 Correzione testi in ${files.length} articoli...\n`);

let fixed = 0;
let errors = 0;

files.forEach((file, index) => {
  if ((index + 1) % 100 === 0) {
    process.stdout.write(`\r⏳ Progress: ${index + 1}/${files.length}`);
  }
  
  try {
    const filePath = path.join(blogDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Estrai categoria e località dal nome file
    const match = file.match(/^([^-]+)-([^-]+)-([^-]+)\.html$/);
    if (!match) return;
    
    const categorySlug = match[1];
    const locationSlug = match[2];
    const city = match[3];
    
    const category = categories.find(c => c.slug === categorySlug);
    if (!category) return;
    
    const mapping = getCategoryMapping(categorySlug);
    const locationNameCapitalized = locationSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    
    // 1. Correggi breadcrumb: "agenzie immobiliari •" -> "Agenzie Immobiliari •"
    const categoryNameProper = category.plural || category.name;
    content = content.replace(
      new RegExp(`(${category.plural ? category.plural.toLowerCase() : category.name.toLowerCase()}) •`, 'g'),
      `${categoryNameProper} •`
    );
    
    // 2. Correggi hero subtitle: "Aumenta i clienti" -> mapping corretto
    if (mapping.heroSubtitle) {
      let heroSubtitle = mapping.heroSubtitle
        .replace(/\bristoranti?\b/gi, category.plural || category.name.toLowerCase())
        .replace(/\bRistoranti?\b/g, category.plural || category.name)
        .replace(/\bTrastevere\b/g, locationNameCapitalized)
        .replace(/\bRoma\b/g, city.charAt(0).toUpperCase() + city.slice(1))
        .replace(/\btrastevere\b/g, locationSlug)
        .replace(/\broma\b/g, city.toLowerCase());
      
      if (!heroSubtitle.includes(locationNameCapitalized)) {
        heroSubtitle = heroSubtitle.replace(/\.$/, ` a ${locationNameCapitalized}, ${city.charAt(0).toUpperCase() + city.slice(1)}.`);
      }
      
      content = content.replace(
        /<p class="hero-subtitle">[\s\S]*?<\/p>/,
        `<p class="hero-subtitle">\n            ${heroSubtitle}</p>`
      );
    }
    
    // 3. Sostituisci "prenotazioni" con termine appropriato
    content = content.replace(/\bprenotazioni\b/gi, mapping.actionNounPlural || mapping.actionNoun || 'contatti');
    content = content.replace(/\bprenotazioni al mese\b/gi, `${mapping.actionNounPlural || mapping.actionNoun} al mese`);
    content = content.replace(/\bprenotazioni\/mese\b/gi, `${mapping.actionNounPlural || mapping.actionNoun}/mese`);
    
    // 4. Sostituisci "foto del menu" con termine appropriato
    if (mapping.serviceTerm && mapping.serviceTerm !== 'menu online') {
      content = content.replace(/foto del menu/gi, mapping.serviceTerm === 'annunci immobiliari' ? 'foto delle proprietà' : mapping.serviceTerm);
      content = content.replace(/Sceglie il servizio in base alle servizi online/gi, mapping.stat1 || 'Sceglie il servizio');
    }
    
    // 5. Correggi "il agenzie" -> "le agenzie"
    if (category.plural) {
      content = content.replace(/\bil ${category.plural.toLowerCase()}\b/gi, `le ${category.plural.toLowerCase()}`);
      content = content.replace(/\bun ${category.plural.toLowerCase()}\b/gi, `un'${category.name.toLowerCase()}`);
      content = content.replace(/\bdel ${category.plural.toLowerCase()}\b/gi, `delle ${category.plural.toLowerCase()}`);
    }
    
    // 6. Correggi "il tuo agenzie" -> "le tue agenzie"
    if (category.plural) {
      content = content.replace(/\bil tuo ${category.plural.toLowerCase()}\b/gi, `le tue ${category.plural.toLowerCase()}`);
      content = content.replace(/\bdel tuo ${category.plural.toLowerCase()}\b/gi, `delle tue ${category.plural.toLowerCase()}`);
    }
    
    // 7. Correggi duplicati
    content = content.replace(new RegExp(`\\b${category.plural || category.name.toLowerCase()} ${category.plural || category.name.toLowerCase()}\\b`, 'gi'), 
      category.plural || category.name.toLowerCase());
    
    // 8. Correggi "undefined"
    content = content.replace(/\bundefined\b/gi, mapping.actionNounPlural || mapping.actionNoun || 'clienti');
    
    // 9. Correggi nome località minuscolo nel titolo
    content = content.replace(new RegExp(`a ${locationSlug}\\b`, 'gi'), `a ${locationNameCapitalized}`);
    
    fs.writeFileSync(filePath, content, 'utf8');
    fixed++;
    
  } catch (error) {
    errors++;
    if (errors <= 5) {
      console.error(`\n❌ Errore in ${file}: ${error.message}`);
    }
  }
});

process.stdout.write('\n');
console.log(`\n✨ Correzione completata!`);
console.log(`✅ Articoli corretti: ${fixed}`);
console.log(`❌ Errori: ${errors}`);


