#!/usr/bin/env node

/**
 * Script OTTIMIZZATO per generare TUTTI gli articoli blog
 * Versione veloce con progress logging e gestione errori migliorata
 */

const fs = require('fs');
const path = require('path');

// Carica configurazione
const configPath = path.join(__dirname, '../config/site-config.js');
// Usa require per caricare come modulo
delete require.cache[require.resolve(configPath)];
const SITE_CONFIG = require(configPath);

if (!SITE_CONFIG || typeof SITE_CONFIG !== 'object') {
  console.error('❌ Errore: SITE_CONFIG non valido. Verifica config/site-config.js');
  process.exit(1);
}

// Carica dati
const categoriesPath = path.join(__dirname, '../data/categories.js');
const locationsPath = path.join(__dirname, '../data/locations.js');
const statisticsPath = path.join(__dirname, '../data/statistics.js');
const contentMappingPath = path.join(__dirname, '../data/category-content-mapping.js');
const illustrationsPath = path.join(__dirname, '../data/illustrations.js');

let categories = [];
let locations = [];
let sectorStatistics = {};
let categoryContentMapping = {};
let sectorIllustrations = {};

// Carica categorie
const categoriesContent = fs.readFileSync(categoriesPath, 'utf8');
eval(categoriesContent.replace('const categories', 'categories'));

// Carica località
const locationsContent = fs.readFileSync(locationsPath, 'utf8');
eval(locationsContent.replace('const locations', 'locations'));

// Carica statistiche (opzionale)
try {
  const statisticsContent = fs.readFileSync(statisticsPath, 'utf8');
  eval(statisticsContent.replace('const sectorStatistics', 'sectorStatistics'));
} catch (e) {
  console.warn('⚠️  Statistics.js non trovato, userò valori default');
}

// Carica mapping contenuti (opzionale)
try {
  const mappingContent = fs.readFileSync(contentMappingPath, 'utf8');
  eval(mappingContent);
} catch (e) {
  console.warn('⚠️  Category-content-mapping.js non trovato');
}

// Carica illustrazioni (opzionale)
try {
  const illustrationsContent = fs.readFileSync(illustrationsPath, 'utf8');
  eval(illustrationsContent.replace('const sectorIllustrations', 'sectorIllustrations'));
} catch (e) {
  console.warn('⚠️  Illustrations.js non trovato');
}

// Carica template
const templatePath = path.join(__dirname, '../blog/ristorante-trastevere-roma.html');
const templateBase = fs.readFileSync(templatePath, 'utf8');

// Directory output
const outputDir = path.join(__dirname, '../blog');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const skipExisting = process.argv.includes('--skip-existing');
const totalArticles = categories.length * locations.length;
let generated = 0;
let skipped = 0;
let errors = 0;
let currentIndex = 0;

console.log(`\n📊 Generazione articoli:`);
console.log(`   Categorie: ${categories.length}`);
console.log(`   Località: ${locations.length}`);
console.log(`   Totale articoli: ${totalArticles}`);
console.log(`   Skip esistenti: ${skipExisting ? 'Sì' : 'No'}\n`);

// Genera articoli
for (const category of categories) {
  for (const location of locations) {
    currentIndex++;
    
    // Progress ogni 100 articoli
    if (currentIndex % 100 === 0) {
      process.stdout.write(`\r⏳ Progress: ${currentIndex}/${totalArticles} (${generated} generati, ${skipped} saltati, ${errors} errori)`);
    }
    
    const articleSlug = `${category.slug}-${location.slug}-${location.city.toLowerCase()}`;
    const outputPath = path.join(outputDir, `${articleSlug}.html`);
    
    // Skip se esiste già
    if (skipExisting && fs.existsSync(outputPath)) {
      const fileContent = fs.readFileSync(outputPath, 'utf8');
      // Verifica se il file è valido (contiene SITE_CONFIG o è completo)
      if (fileContent.includes('SITE_CONFIG') || fileContent.length > 1000) {
        skipped++;
        continue;
      }
      // Se il file è vuoto o incompleto, rigeneralo
    }
    
    try {
      let article = templateBase;
      
      // Sostituzioni base
      const articleTitle = `Sito Web per ${category.name} a ${location.name}, ${location.city}`;
      const articleDescription = `Crea il sito web per il tuo ${category.name.toLowerCase()} a ${location.name}, ${location.city}. Aumenta clienti, visibilità online, SEO locale. Preventivo gratuito.`;
      const articleKeywords = `sito web ${category.name.toLowerCase()}, ${category.name.toLowerCase()} ${location.name}, ${category.name.toLowerCase()} ${location.city}${category.keywords ? ', ' + category.keywords.join(', ') : ''}`;
      const canonicalUrl = `${SITE_CONFIG.SITE_URL}/blog/${articleSlug}.html`;
      
      // Sostituzioni meta tags
      article = article.replace(/<title>([^<]+)<\/title>/, `<title>${articleTitle} | ${SITE_CONFIG.SITE_NAME}</title>`);
      article = article.replace(/<meta name="description" content="[^"]+">/, `<meta name="description" content="${articleDescription}">`);
      article = article.replace(/<meta name="keywords" content="[^"]+">/, `<meta name="keywords" content="${articleKeywords}">`);
      article = article.replace(/<meta property="og:title" content="[^"]+">/, `<meta property="og:title" content="${articleTitle} | ${SITE_CONFIG.SITE_NAME}">`);
      article = article.replace(/<meta property="og:description" content="[^"]+">/, `<meta property="og:description" content="${articleDescription}">`);
      article = article.replace(/<meta property="og:url" content="[^"]+">/g, `<meta property="og:url" content="${canonicalUrl}">`);
      article = article.replace(/<link rel="canonical" href="[^"]+">/g, `<link rel="canonical" href="${canonicalUrl}">`);
      
      // Sostituzioni contenuti
      article = article.replace(/Sito Web per Ristorante a Trastevere, Roma/g, articleTitle);
      article = article.replace(/Sito Web per Ristorante a Trastevere/g, `Sito Web per ${category.name} a ${location.name}`);
      article = article.replace(/Ristoranti • Trastevere, Roma/g, `${category.name} • ${location.name}, ${location.city}`);
      article = article.replace(/Trastevere, Roma/g, `${location.name}, ${location.city}`);
      article = article.replace(/Trastevere/g, location.name);
      article = article.replace(/trastevere/g, location.slug);
      article = article.replace(/Ristorante/g, category.name);
      article = article.replace(/ristorante/g, category.name.toLowerCase());
      article = article.replace(/ristoranti/g, category.plural || category.name.toLowerCase());
      article = article.replace(/Ristoranti/g, category.plural || category.name);
      
      if (location.city !== 'Roma') {
        article = article.replace(/, Roma/g, `, ${location.city}`);
        article = article.replace(/Roma/g, location.city);
        article = article.replace(/roma/g, location.city.toLowerCase());
      }
      
      // Rimuovi SVG personalizzati e usa placeholder semplice (come homepage)
      // La homepage non ha SVG illustrativo, quindi rimuoviamo la sezione hero-illustration
      const heroIllustrationPattern = /<div class="hero-illustration"[^>]*>[\s\S]*?<\/svg>[\s\S]*?<\/div>/;
      if (heroIllustrationPattern.test(article)) {
        // Sostituisci con placeholder semplice senza SVG
        const simplePlaceholder = `<div class="hero-illustration" style="max-width: 100%; height: auto; display: flex; align-items: center; justify-content: center; min-height: 300px;">
            <div style="width: 200px; height: 200px; border-radius: 50%; background: linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(168, 85, 247, 0.2)); display: flex; align-items: center; justify-content: center; box-shadow: 0 0 40px rgba(34, 211, 238, 0.3);">
              <span style="font-size: 4rem; opacity: 0.6;">${category.icon || '⚡'}</span>
            </div>
          </div>`;
        article = article.replace(heroIllustrationPattern, simplePlaceholder);
      }
      
      // Salva articolo
      fs.writeFileSync(outputPath, article, 'utf8');
      generated++;
      
    } catch (error) {
      errors++;
      if (errors <= 10) { // Mostra solo i primi 10 errori
        console.error(`\n❌ Errore generando ${articleSlug}: ${error.message}`);
      }
    }
  }
}

process.stdout.write('\n'); // Nuova riga dopo progress
console.log('\n✨ Generazione completata!');
console.log(`✅ Articoli generati: ${generated}`);
console.log(`⏭️  Articoli saltati: ${skipped}`);
console.log(`❌ Errori: ${errors}`);
console.log(`📁 Directory: ${outputDir}`);
console.log(`📊 Totale processati: ${currentIndex}/${totalArticles}`);

