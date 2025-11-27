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
let getCategoryMapping = () => ({});
try {
  const mappingContent = fs.readFileSync(contentMappingPath, 'utf8');
  eval(mappingContent);
  // Verifica che getCategoryMapping sia definito
  if (typeof getCategoryMapping === 'undefined') {
    // Se non esiste, crea una funzione helper
    getCategoryMapping = (slug) => {
      return categoryContentMapping[slug] || categoryContentMapping['default'] || {};
    };
  }
} catch (e) {
  console.warn('⚠️  Category-content-mapping.js non trovato, userò valori default');
  getCategoryMapping = () => ({
    actionNoun: 'contatti',
    actionNounPlural: 'contatti',
    serviceTerm: 'servizi online',
    stat1: 'Sceglie il servizio',
    heroSubtitle: 'Aumenta i clienti del 300% con un sito web professionale.'
  });
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
      
      // Ottieni mapping personalizzato per categoria
      const mapping = getCategoryMapping(category.slug);
      
      // Capitalizza nome località (usato in più punti)
      const locationNameCapitalized = location.name.charAt(0).toUpperCase() + location.name.slice(1);
      
      // Sostituzioni contenuti base
      article = article.replace(/Sito Web per Ristorante a Trastevere, Roma/g, articleTitle);
      article = article.replace(/Sito Web per Ristorante a Trastevere/g, `Sito Web per ${category.name} a ${location.name}`);
      article = article.replace(/Ristoranti • Trastevere, Roma/g, `${category.name} • ${location.name}, ${location.city}`);
      article = article.replace(/Trastevere, Roma/g, `${location.name}, ${location.city}`);
      article = article.replace(/Trastevere/g, location.name);
      article = article.replace(/trastevere/g, location.slug);
      
      // Sostituzioni categoria con maiuscole corrette
      // Prima sostituisci le occorrenze con contesto (per evitare sostituzioni errate)
      article = article.replace(/\bRistoranti?\b/g, category.name);
      article = article.replace(/\bristoranti?\b/g, category.name.toLowerCase());
      article = article.replace(/\bristoranti\b/g, category.plural || category.name.toLowerCase());
      article = article.replace(/\bRistoranti\b/g, category.plural || category.name);
      
      // Correggi "il ristorante" -> "il/la [categoria]" con articolo corretto
      const articleDef = category.name.match(/^[AEIOU]/i) ? 'l\'' : (category.name.match(/^[F]/i) ? 'la' : 'il');
      const articleIndef = category.name.match(/^[AEIOU]/i) ? 'un\'' : 'un';
      article = article.replace(/\bil ristorante\b/gi, `${articleDef} ${category.name.toLowerCase()}`);
      article = article.replace(/\bun ristorante\b/gi, `${articleIndef} ${category.name.toLowerCase()}`);
      article = article.replace(/\bdel ristorante\b/gi, `dell${category.name.match(/^[AEIOU]/i) ? '\'' : 'a'} ${category.name.toLowerCase()}`);
      article = article.replace(/\bper ristorante\b/gi, `per ${category.name.toLowerCase()}`);
      
      // Correggi "il/la agenzie" -> "le agenzie" (per plurali)
      if (category.plural) {
        article = article.replace(/\bil ${category.plural.toLowerCase()}\b/gi, `le ${category.plural.toLowerCase()}`);
        article = article.replace(/\bun ${category.plural.toLowerCase()}\b/gi, `le ${category.plural.toLowerCase()}`);
        article = article.replace(/\bdel ${category.plural.toLowerCase()}\b/gi, `delle ${category.plural.toLowerCase()}`);
      }
      
      // Correggi duplicati tipo "agenzie immobiliari immobiliari"
      article = article.replace(new RegExp(`\\b${category.plural || category.name.toLowerCase()} ${category.plural || category.name.toLowerCase()}\\b`, 'gi'), category.plural || category.name.toLowerCase());
      
      // Sostituzioni località
      if (location.city !== 'Roma') {
        article = article.replace(/, Roma/g, `, ${location.city}`);
        article = article.replace(/\bRoma\b/g, location.city);
        article = article.replace(/\broma\b/g, location.city.toLowerCase());
      }
      
      // Sostituzioni personalizzate usando mapping
      // Hero subtitle - sostituisci tutto il paragrafo hero-subtitle
      if (mapping.heroSubtitle) {
        let heroSubtitle = mapping.heroSubtitle
          .replace(/\bristoranti?\b/gi, category.plural || category.name.toLowerCase())
          .replace(/\bRistoranti?\b/g, category.plural || category.name)
          .replace(/\bTrastevere\b/g, locationNameCapitalized)
          .replace(/\bRoma\b/g, location.city)
          .replace(/\btrastevere\b/g, location.slug)
          .replace(/\broma\b/g, location.city.toLowerCase());
        
        // Aggiungi località se non presente
        if (!heroSubtitle.includes(locationNameCapitalized) && !heroSubtitle.includes(location.name)) {
          heroSubtitle = heroSubtitle.replace(/\.$/, ` a ${locationNameCapitalized}, ${location.city}.`);
        } else {
          // Sostituisci località con versione capitalizzata
          heroSubtitle = heroSubtitle.replace(new RegExp(location.name, 'gi'), locationNameCapitalized);
        }
        
        // Sostituisci l'intero paragrafo hero-subtitle
        article = article.replace(
          /<p class="hero-subtitle">[\s\S]*?<\/p>/,
          `<p class="hero-subtitle">\n            ${heroSubtitle}</p>`
        );
      } else {
        // Fallback: sostituisci solo "Aumenta i clienti" con termine appropriato
        const increaseTerm = mapping.actionNounPlural || mapping.actionNoun || 'clienti';
        article = article.replace(/Aumenta i clienti del 300%/gi, `Aumenta i ${increaseTerm} del 300%`);
        article = article.replace(/Aumenta le clienti del 300%/gi, `Aumenta le ${increaseTerm} del 300%`);
      }
      
      // Correggi "il tuo agenzie" -> "la tua agenzia" o "le tue agenzie"
      if (category.plural) {
        article = article.replace(/\bil tuo ${category.plural.toLowerCase()}\b/gi, `le tue ${category.plural.toLowerCase()}`);
        article = article.replace(/\bdel tuo ${category.plural.toLowerCase()}\b/gi, `delle tue ${category.plural.toLowerCase()}`);
      } else {
        const articlePoss = category.name.match(/^[AEIOU]/i) ? 'la tua' : 'il tuo';
        article = article.replace(/\bil tuo ${category.name.toLowerCase()}\b/gi, `${articlePoss} ${category.name.toLowerCase()}`);
      }
      
      // Correggi breadcrumb - sostituzione diretta
      const categoryNameLower = category.plural ? category.plural.toLowerCase() : category.name.toLowerCase();
      const categoryNameProper = category.plural || category.name;
      
      // Sostituzione diretta nel breadcrumb
      article = article.replace(
        `${categoryNameLower} • ${locationNameCapitalized}`,
        `${categoryNameProper} • ${locationNameCapitalized}`
      );
      
      // Pattern per breadcrumb con stile inline (fallback)
      article = article.replace(
        new RegExp(`${categoryNameLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')} •`, 'gi'),
        `${categoryNameProper} •`
      );
      
      // Sostituisci "undefined" rimanenti
      article = article.replace(/\bundefined\b/gi, mapping.actionNounPlural || mapping.actionNoun || 'clienti');
      
      // Sostituzioni termini specifici
      article = article.replace(/\bprenotazioni\b/gi, mapping.actionNounPlural || mapping.actionNoun);
      article = article.replace(/\bprenotazioni al mese\b/gi, `${mapping.actionNounPlural || mapping.actionNoun} al mese`);
      article = article.replace(/\bprenotazioni\/mese\b/gi, `${mapping.actionNounPlural || mapping.actionNoun}/mese`);
      article = article.replace(/\bfoto del menu\b/gi, mapping.serviceTerm === 'menu online' ? 'foto del menu' : (mapping.serviceTerm || 'servizi'));
      article = article.replace(/\bmenu\b/gi, mapping.serviceTerm === 'menu online' ? 'menu' : (mapping.serviceTerm || 'servizi'));
      article = article.replace(/\bSceglie il ristoranti?\b/gi, mapping.stat1 || `Sceglie ${articleDef} ${category.name.toLowerCase()}`);
      article = article.replace(/\bSceglie l'?agenzie immobiliari\b/gi, mapping.stat1 || `Sceglie ${articleDef} ${category.name.toLowerCase()}`);
      
      // Correggi "il agenzie" -> "l'agenzia" o "le agenzie"
      article = article.replace(/\bil agenzie\b/gi, `le ${category.plural || category.name.toLowerCase()}`);
      article = article.replace(/\bun agenzie\b/gi, `un${category.name.match(/^[AEIOU]/i) ? '\'' : ''} ${category.name.toLowerCase()}`);
      article = article.replace(/\bdel agenzie\b/gi, `delle ${category.plural || category.name.toLowerCase()}`);
      
      // Correggi maiuscole nel titolo breadcrumb e altri titoli
      article = article.replace(new RegExp(`${category.name.toLowerCase()} •`, 'gi'), `${category.name} •`);
      article = article.replace(new RegExp(`${category.plural ? category.plural.toLowerCase() : category.name.toLowerCase()} •`, 'gi'), `${category.plural || category.name} •`);
      
      // Correggi nome località nel breadcrumb e titoli (prima lettera maiuscola)
      // locationNameCapitalized già definito sopra alla riga 151
      article = article.replace(new RegExp(`• ${location.name.toLowerCase()},`, 'gi'), `• ${locationNameCapitalized},`);
      article = article.replace(new RegExp(`• ${location.slug},`, 'gi'), `• ${locationNameCapitalized},`);
      article = article.replace(new RegExp(`a ${location.name.toLowerCase()}\\b`, 'gi'), `a ${locationNameCapitalized}`);
      article = article.replace(new RegExp(`a ${location.slug}\\b`, 'gi'), `a ${locationNameCapitalized}`);
      
      // Correggi anche nel titolo hero
      article = article.replace(new RegExp(`<span class="text-gradient">[^<]*${location.name.toLowerCase()}[^<]*</span>`, 'gi'), 
        `<span class="text-gradient">${category.name} a ${locationNameCapitalized}</span>`);
      
      // Sostituisci statistiche specifiche se disponibili
      if (mapping.stat1) {
        article = article.replace(/Sceglie il ristoranti? in base alle foto del menu/gi, mapping.stat1);
        article = article.replace(/Sceglie l'?agenzie immobiliari in base alle foto del menu/gi, mapping.stat1);
        article = article.replace(/Sceglie il servizio in base alle servizi online/gi, mapping.stat1);
      }
      
      // Sostituisci "foto del menu" con termine appropriato
      if (mapping.serviceTerm && mapping.serviceTerm !== 'menu online') {
        article = article.replace(/foto del menu/gi, mapping.serviceTerm === 'annunci immobiliari' ? 'foto delle proprietà' : mapping.serviceTerm);
      }
      
      // Sostituisci testo problema se disponibile
      if (mapping.problemDetail) {
        article = article.replace(/Un ristoranti? a \w+ senza sito web perde in media.*?prenotazioni al mese/gi, mapping.problemDetail);
        article = article.replace(/Un'?agenzie immobiliari a \w+ senza sito web perde in media.*?prenotazioni al mese/gi, mapping.problemDetail);
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

