#!/usr/bin/env node

/**
 * Script per generare nuovi articoli blog dal template
 * 
 * Uso:
 *   node scripts/generate-article.js --category=ristoranti --location=trastevere-roma
 *   node scripts/generate-article.js --category=hotel --location=centro-storico-roma
 */

const fs = require('fs');
const path = require('path');

// Carica configurazione
const configPath = path.join(__dirname, '../config/site-config.js');
const configContent = fs.readFileSync(configPath, 'utf8');
eval(configContent); // Esegue il file per ottenere SITE_CONFIG

// Parse argomenti da command line
const args = process.argv.slice(2);
const params = {};
args.forEach(arg => {
  const [key, value] = arg.replace('--', '').split('=');
  params[key] = value;
});

// Validazione parametri richiesti
if (!params.category || !params.location) {
  console.error('❌ Errore: Specifica category e location');
  console.log('Uso: node scripts/generate-article.js --category=ristoranti --location=trastevere-roma');
  process.exit(1);
}

// Carica dati categorie e località
const categoriesPath = path.join(__dirname, '../data/categories.js');
const locationsPath = path.join(__dirname, '../data/locations.js');

let categories = [];
let locations = [];

try {
  const categoriesContent = fs.readFileSync(categoriesPath, 'utf8');
  eval(categoriesContent.replace('const categories', 'categories'));
} catch (e) {
  console.warn('⚠️  File categories.js non trovato');
}

try {
  const locationsContent = fs.readFileSync(locationsPath, 'utf8');
  eval(locationsContent.replace('const locations', 'locations'));
} catch (e) {
  console.warn('⚠️  File locations.js non trovato');
}

// Trova categoria e località
const category = categories.find(c => c.slug === params.category);
const location = locations.find(l => l.slug === params.location);

if (!category) {
  console.error(`❌ Categoria "${params.category}" non trovata`);
  process.exit(1);
}

if (!location) {
  console.error(`❌ Località "${params.location}" non trovata`);
  process.exit(1);
}

// Genera informazioni articolo
const articleSlug = `${category.slug}-${location.slug}`;
const articleTitle = `Sito Web per ${category.name} a ${location.name}, ${location.city}`;
const articleDescription = `Crea il sito web per il tuo ${category.name.toLowerCase()} a ${location.name}, ${location.city}. Aumenta clienti, visibilità online, SEO locale. Preventivo gratuito.`;
const articleKeywords = `sito web ${category.name.toLowerCase()}, sito ${category.name.toLowerCase()} ${location.name}, ${category.name.toLowerCase()} ${location.city}`;

const canonicalUrl = `${SITE_CONFIG.SITE_URL}/blog/${articleSlug}.html`;

// Carica template
const templatePath = path.join(__dirname, '../templates/article-template.html');
let template = fs.readFileSync(templatePath, 'utf8');

// Sostituisci placeholder
const replacements = {
  '{{SITE_NAME}}': SITE_CONFIG.SITE_NAME,
  '{{SITE_NAME_SHORT}}': SITE_CONFIG.SITE_NAME_SHORT,
  '{{SITE_URL}}': SITE_CONFIG.SITE_URL,
  '{{SITE_URL_BASE}}': SITE_CONFIG.SITE_URL_BASE,
  '{{CURRENT_YEAR}}': SITE_CONFIG.CURRENT_YEAR,
  '{{ARTICLE_TITLE}}': articleTitle,
  '{{ARTICLE_DESCRIPTION}}': articleDescription,
  '{{ARTICLE_KEYWORDS}}': articleKeywords,
  '{{ARTICLE_CATEGORY}}': category.name,
  '{{ARTICLE_LOCATION}}': `${location.name}, ${location.city}`,
  '{{ARTICLE_SLUG}}': articleSlug,
  '{{CANONICAL_URL}}': canonicalUrl,
  '{{NAV_HOME}}': SITE_CONFIG.NAV_HOME,
  '{{NAV_SERVICES}}': SITE_CONFIG.NAV_SERVICES,
  '{{NAV_CONTACTS}}': SITE_CONFIG.NAV_CONTACTS,
  '{{CTA_TEXT}}': SITE_CONFIG.CTA_TEXT,
  '{{FOOTER_TEXT}}': SITE_CONFIG.FOOTER_TEXT
};

Object.keys(replacements).forEach(placeholder => {
  template = template.replace(new RegExp(placeholder, 'g'), replacements[placeholder]);
});

// Sostituisci contenuti dinamici (da implementare con template engine più avanzato)
// Per ora usa placeholder che verranno sostituiti manualmente o con script più complesso
template = template.replace('{{HERO_CONTENT}}', '<!-- Hero content da generare -->');
template = template.replace('{{ARTICLE_CONTENT}}', '<!-- Article content da generare -->');

// Salva articolo generato
const outputDir = path.join(__dirname, '../blog');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, `${articleSlug}.html`);
fs.writeFileSync(outputPath, template, 'utf8');

console.log('✅ Articolo generato con successo!');
console.log(`📄 File: ${outputPath}`);
console.log(`🔗 URL: ${canonicalUrl}`);
console.log(`📝 Titolo: ${articleTitle}`);
console.log('\n⚠️  Nota: Ricorda di aggiungere il contenuto HERO_CONTENT e ARTICLE_CONTENT manualmente o con template più avanzato.');

