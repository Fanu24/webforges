#!/usr/bin/env node

/**
 * Script ULTRA-SEMPLICE: processa UN SOLO file
 * Esegui questo script passando il nome del file come parametro
 */

const fs = require('fs');
const path = require('path');

if (process.argv.length < 3) {
  console.log('Uso: node scripts/fix-one-file.js nome-file.html');
  process.exit(1);
}

const fileName = process.argv[2];
const filePath = path.join(__dirname, '../blog', fileName);

if (!fs.existsSync(filePath)) {
  console.error(`File non trovato: ${fileName}`);
  process.exit(1);
}

// Carica mapping
const mappingPath = path.join(__dirname, '../data/category-content-mapping.js');
const mappingContent = fs.readFileSync(mappingPath, 'utf8');
eval(mappingContent);

// Carica categorie
const categoriesPath = path.join(__dirname, '../data/categories.js');
const categoriesContent = fs.readFileSync(categoriesPath, 'utf8');
eval(categoriesContent.replace('const categories', 'categories'));

const match = fileName.match(/^([^-]+)-([^-]+)-([^-]+)\.html$/);
if (!match) {
  console.error('Nome file non valido');
  process.exit(1);
}

const categorySlug = match[1];
const locationSlug = match[2];
const city = match[3];

const category = categories.find(c => c.slug === categorySlug);
if (!category) {
  console.error('Categoria non trovata');
  process.exit(1);
}

const mapping = getCategoryMapping(categorySlug);
const locationNameCapitalized = locationSlug.split('-').map(w => 
  w.charAt(0).toUpperCase() + w.slice(1)
).join(' ');
const cityCapitalized = city.charAt(0).toUpperCase() + city.slice(1);
const categoryNameProper = category.plural || category.name;

console.log(`Correggendo: ${fileName}`);
console.log(`Categoria: ${category.name}`);
console.log(`Località: ${locationNameCapitalized}, ${cityCapitalized}\n`);

let content = fs.readFileSync(filePath, 'utf8');
const originalContent = content;

// Sostituzioni semplici e dirette
const replacements = [
  // Breadcrumb
  [`${category.plural ? category.plural.toLowerCase() : category.name.toLowerCase()} •`, `${categoryNameProper} •`],
  
  // Hero subtitle
  ['Aumenta i clienti del 300%', mapping.heroSubtitle ? mapping.heroSubtitle.split(' del 300%')[0] + ' del 300%' : 'Aumenta i clienti del 300%'],
  
  // Termini specifici
  ['prenotazioni', mapping.actionNounPlural || 'contatti'],
  ['prenotazioni al mese', `${mapping.actionNounPlural || 'contatti'} al mese`],
  ['prenotazioni/mese', `${mapping.actionNounPlural || 'contatti'}/mese`],
  
  // Articoli
  [`il ${category.plural ? category.plural.toLowerCase() : category.name.toLowerCase()}`, category.plural ? `le ${category.plural.toLowerCase()}` : `il ${category.name.toLowerCase()}`],
  [`un ${category.plural ? category.plural.toLowerCase() : category.name.toLowerCase()}`, category.plural ? `un'${category.name.toLowerCase()}` : `un ${category.name.toLowerCase()}`],
  [`il tuo ${category.plural ? category.plural.toLowerCase() : category.name.toLowerCase()}`, category.plural ? `le tue ${category.plural.toLowerCase()}` : `il tuo ${category.name.toLowerCase()}`],
  
  // Undefined
  ['undefined', mapping.actionNounPlural || 'clienti'],
  
  // Località
  [`a ${locationSlug}`, `a ${locationNameCapitalized}`],
  [`• ${locationSlug},`, `• ${locationNameCapitalized},`],
];

// Rimuovi testi fuori contesto per non-turistiche
if (!['ristorante', 'pizzeria', 'hotel', 'bed-and-breakfast', 'agriturismo', 'trattoria'].includes(categorySlug)) {
  replacements.push(
    ['2+ Milioni di Turisti all\'Anno', 'Migliaia di Clienti Online'],
    ['turisti all\'anno', 'clienti online'],
    ['Con oltre 2 milioni di turisti', 'Con migliaia di ricerche online'],
    ['catturare turisti', 'catturare clienti'],
    ['per catturare turisti', 'per catturare clienti'],
    ['conto medio per Persona', 'valore medio per cliente'],
    ['Con un conto medio di €50 a persona', 'Con un valore medio di €500 per cliente'],
    ['foto del menu', mapping.serviceTerm || 'servizi'],
  );
}

// Applica sostituzioni
replacements.forEach(([old, newText]) => {
  content = content.split(old).join(newText);
});

// Rimuovi sezioni problematiche
if (!['ristorante', 'pizzeria', 'hotel', 'bed-and-breakfast', 'agriturismo', 'trattoria'].includes(categorySlug)) {
  // Rimuovi sezione "Comunica Eventi"
  const eventSection = /Comunica Eventi e Offerte[\s\S]{0,800}?massimizza i ricavi\./g;
  content = content.replace(eventSection, '');
}

// Salva
if (content !== originalContent) {
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('✅ File corretto!');
} else {
  console.log('ℹ️  Nessuna modifica necessaria');
}

process.exit(0);


