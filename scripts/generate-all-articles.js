#!/usr/bin/env node

/**
 * Script per generare TUTTI gli articoli blog
 * Genera tutte le combinazioni categoria × località
 * 
 * Uso:
 *   node scripts/generate-all-articles.js
 *   node scripts/generate-all-articles.js --skip-existing  (salta articoli già esistenti)
 */

const fs = require('fs');
const path = require('path');

// Carica configurazione
const configPath = path.join(__dirname, '../config/site-config.js');
const configContent = fs.readFileSync(configPath, 'utf8');
// Esegui il contenuto per definire SITE_CONFIG
eval(configContent);
// Verifica che SITE_CONFIG sia definito
if (typeof SITE_CONFIG === 'undefined') {
  console.error('❌ Errore: SITE_CONFIG non definito. Verifica config/site-config.js');
  process.exit(1);
}

// Carica categorie, località, statistiche, mapping contenuti e illustrazioni
const categoriesPath = path.join(__dirname, '../data/categories.js');
const locationsPath = path.join(__dirname, '../data/locations.js');
const statisticsPath = path.join(__dirname, '../data/statistics.js');
const contentMappingPath = path.join(__dirname, '../data/category-content-mapping.js');
const illustrationsPath = path.join(__dirname, '../data/illustrations.js');

let categories = [];
let locations = [];
let sectorStatistics = {};
let categoryContentMapping = {};
let getCategoryMapping = () => ({});
let sectorIllustrations = {};

try {
  const categoriesContent = fs.readFileSync(categoriesPath, 'utf8');
  eval(categoriesContent.replace('const categories', 'categories'));
} catch (e) {
  console.error('❌ Errore caricamento categories.js:', e.message);
  process.exit(1);
}

try {
  const locationsContent = fs.readFileSync(locationsPath, 'utf8');
  eval(locationsContent.replace('const locations', 'locations'));
} catch (e) {
  console.error('❌ Errore caricamento locations.js:', e.message);
  process.exit(1);
}

try {
  const statisticsContent = fs.readFileSync(statisticsPath, 'utf8');
  eval(statisticsContent.replace('const sectorStatistics', 'sectorStatistics'));
} catch (e) {
  console.warn('⚠️  File statistics.js non trovato, userò valori di default');
}

try {
  const mappingContent = fs.readFileSync(contentMappingPath, 'utf8');
  eval(mappingContent);
} catch (e) {
  console.warn('⚠️  File category-content-mapping.js non trovato, userò sostituzioni generiche');
}

try {
  const illustrationsContent = fs.readFileSync(illustrationsPath, 'utf8');
  eval(illustrationsContent.replace('const sectorIllustrations', 'sectorIllustrations'));
} catch (e) {
  console.warn('⚠️  File illustrations.js non trovato, userò illustrazione default');
}

// Parse argomenti
const args = process.argv.slice(2);
const skipExisting = args.includes('--skip-existing');

console.log('🚀 Generazione articoli blog...\n');
console.log(`📊 Categorie: ${categories.length}`);
console.log(`📍 Località: ${locations.length}`);
console.log(`📝 Articoli totali: ${categories.length * locations.length}\n`);

// Carica template base (articolo esistente)
const templatePath = path.join(__dirname, '../blog/ristorante-trastevere-roma.html');
if (!fs.existsSync(templatePath)) {
  console.error('❌ Template articolo non trovato:', templatePath);
  process.exit(1);
}

let templateBase = fs.readFileSync(templatePath, 'utf8');

// Directory output
const outputDir = path.join(__dirname, '../blog');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

let generated = 0;
let skipped = 0;
let errors = 0;
const totalArticles = categories.length * locations.length;
let currentIndex = 0;

console.log(`\n📊 Generazione articoli:`);
console.log(`   Categorie: ${categories.length}`);
console.log(`   Località: ${locations.length}`);
console.log(`   Totale articoli: ${totalArticles}\n`);

// Genera tutti gli articoli
categories.forEach((category, catIndex) => {
  locations.forEach((location, locIndex) => {
    currentIndex++;
    
    // Progress ogni 50 articoli
    if (currentIndex % 50 === 0) {
      console.log(`⏳ Progress: ${currentIndex}/${totalArticles} (${generated} generati, ${skipped} saltati, ${errors} errori)`);
    }
    const articleSlug = `${category.slug}-${location.slug}-${location.city.toLowerCase()}`;
    const outputPath = path.join(outputDir, `${articleSlug}.html`);
    
    // Skip se esiste già
    if (skipExisting && fs.existsSync(outputPath)) {
      skipped++;
      return;
    }
    
    try {
      // Genera contenuto articolo
      let article = templateBase;
      
      // Sostituzioni base
      const articleTitle = `Sito Web per ${category.name} a ${location.name}, ${location.city}`;
      const articleDescription = `Crea il sito web per il tuo ${category.name.toLowerCase()} a ${location.name}, ${location.city}. Aumenta clienti, visibilità online, SEO locale. Preventivo gratuito.`;
      const articleKeywords = `sito web ${category.name.toLowerCase()}, ${category.name.toLowerCase()} ${location.name}, ${category.name.toLowerCase()} ${location.city}, ${category.keywords.join(', ')}`;
      const canonicalUrl = `${SITE_CONFIG.SITE_URL}/blog/${articleSlug}.html`;
      
      // Sostituisci titolo
      article = article.replace(
        /<title>([^<]+)<\/title>/,
        `<title>${articleTitle} | ${SITE_CONFIG.SITE_NAME}</title>`
      );
      
      // Sostituisci meta description
      article = article.replace(
        /<meta name="description" content="[^"]+">/,
        `<meta name="description" content="${articleDescription}">`
      );
      
      // Sostituisci keywords
      article = article.replace(
        /<meta name="keywords" content="[^"]+">/,
        `<meta name="keywords" content="${articleKeywords}">`
      );
      
      // Sostituisci OG title
      article = article.replace(
        /<meta property="og:title" content="[^"]+">/,
        `<meta property="og:title" content="${articleTitle} | ${SITE_CONFIG.SITE_NAME}">`
      );
      
      // Sostituisci OG description
      article = article.replace(
        /<meta property="og:description" content="[^"]+">/,
        `<meta property="og:description" content="${articleDescription}">`
      );
      
      // Sostituisci OG URL e canonical
      article = article.replace(
        /<meta property="og:url" content="[^"]+">/g,
        `<meta property="og:url" content="${canonicalUrl}">`
      );
      article = article.replace(
        /<link rel="canonical" href="[^"]+">/g,
        `<link rel="canonical" href="${canonicalUrl}">`
      );
      
      // Sostituisci Schema.org headline
      article = article.replace(
        /"headline":\s*"[^"]+"/,
        `"headline": "${articleTitle}"`
      );
      
      // Carica statistiche e mapping contenuti per categoria
      const stats = sectorStatistics[category.slug] || sectorStatistics['ristorante'] || {};
      const contentMap = getCategoryMapping(category.slug);
      
      // Sostituisci contenuti specifici categoria/località
      // Hero title
      article = article.replace(
        /Sito Web per Ristorante a Trastevere/g,
        `Sito Web per ${category.name} a ${location.name}`
      );
      
      // Hero subtitle - personalizza per categoria usando mapping
      const heroSubtitleText = contentMap.heroSubtitle 
        ? contentMap.heroSubtitle.replace('Trastevere', location.name)
        : `Aumenta i ${contentMap.clientTerm} del <strong style="color: var(--neon-cyan);">300%</strong> con un sito web professionale. ${category.description} a ${location.name}, ${location.city}.`;
      article = article.replace(
        /Aumenta le prenotazioni del <strong[^>]*>300%<\/strong>[^<]+/,
        heroSubtitleText
      );
      
      // Badge categoria
      article = article.replace(
        /Ristoranti • Trastevere, Roma/,
        `${category.name} • ${location.name}, ${location.city}`
      );
      
      // Sostituzioni specifiche per categoria usando mapping
      const categoryReplacements = {
        // Termini base
        'prenotazioni': contentMap.actionNounPlural || 'prenotazioni',
        'prenotazione': contentMap.actionNoun || 'prenotazione',
        'prenotare': contentMap.actionVerb || 'prenotare',
        'menu online': contentMap.serviceTerm || 'servizi online',
        'prenotazioni 24/7': `${contentMap.actionNounPlural || 'prenotazioni'} 24/7`,
        'conto medio': category.slug === 'hotel' ? 'tariffa media' :
                      category.slug === 'meccanico' || category.slug === 'idraulico' ? 'preventivo medio' :
                      category.slug === 'dentista' ? 'visita media' :
                      'conto medio',
        'clienti': contentMap.clientTerm || 'clienti',
        'il tuo ristorante': `il tuo ${category.name.toLowerCase()}`,
        'il tuo locale': `la tua ${category.name.toLowerCase()}`,
        'locale': category.name.toLowerCase(),
        'ristorante': category.name.toLowerCase(),
        'Ristorante': category.name,
        'ristoranti': category.plural || category.name.toLowerCase(),
        'Ristoranti': category.plural || category.name,
        // Termini ricerca
        'ristorante Trastevere': `${contentMap.searchTerm || category.name.toLowerCase()} ${location.name}`,
        'dove mangiare a Trastevere': `dove trovare ${contentMap.searchTerm || category.name.toLowerCase()} a ${location.name}`
      };
      
      // Applica sostituzioni categoria-specifiche
      Object.keys(categoryReplacements).forEach(oldText => {
        const regex = new RegExp(oldText, 'gi');
        article = article.replace(regex, categoryReplacements[oldText]);
      });
      
      // Sostituzioni aggiuntive per problema/soluzione
      if (contentMap.problemText) {
        article = article.replace(
          /Senza un sito web, stai perdendo migliaia di clienti potenziali ogni giorno che cercano ristoranti online\./g,
          contentMap.problemText.replace('Trastevere', location.name)
        );
      }
      
      if (contentMap.solutionText) {
        article = article.replace(
          /Un sito web professionale ti permette di accettare prenotazioni 24\/7, mostrare il tuo menu con foto appetitose e apparire su Google Maps quando qualcuno cerca nella tua zona\./g,
          contentMap.solutionText.replace('Trastevere', location.name)
        );
      }
      
      // Sostituisci riferimenti a "Trastevere" con località
      article = article.replace(/Trastevere/g, location.name);
      article = article.replace(/trastevere/gi, location.slug);
      
      // Sostituisci "Roma" con città se diversa
      if (location.city !== 'Roma') {
        article = article.replace(/Roma/g, location.city);
        article = article.replace(/roma/gi, location.city.toLowerCase());
      }
      
      // Personalizza sezione "Perché [Località]"
      const locationSectionTitle = `Perché ${location.name} è`;
      article = article.replace(
        /Perché Trastevere è/g,
        locationSectionTitle
      );
      
      // Personalizza FAQ per categoria
      if (category.slug !== 'ristorante') {
        // Sostituisci FAQ specifiche ristorante
        article = article.replace(
          /Quanto costa un sito web per ristorante\?/g,
          `Quanto costa un sito web per ${category.name.toLowerCase()}?`
        );
        article = article.replace(
          /sito web per ristorante costa/g,
          `sito web per ${category.name.toLowerCase()} costa`
        );
        article = article.replace(
          /ristoranti a Trastevere/g,
          `${category.plural || category.name.toLowerCase()} a ${location.name}`
        );
      }
      
      // SOSTITUISCI ILLUSTRAZIONE SVG PER CATEGORIA
      const illustrationKey = `${category.slug}-hero`;
      let categoryIllustration = sectorIllustrations[illustrationKey] || sectorIllustrations['default-hero'] || sectorIllustrations['ristorante-hero'] || '';
      
      if (categoryIllustration) {
        // Genera ID unici per evitare conflitti tra articoli
        const uniqueId = articleSlug.replace(/[^a-z0-9]/g, '').substring(0, 8);
        
        // Sostituisci tutti gli ID nei gradienti con versioni uniche
        categoryIllustration = categoryIllustration.replace(/id="([^"]+)"/g, (match, id) => {
          return `id="${id}-${uniqueId}"`;
        });
        
        // Aggiorna tutti i riferimenti url(#id) con i nuovi ID
        categoryIllustration = categoryIllustration.replace(/url\(#([^)]+)\)/g, (match, id) => {
          return `url(#${id}-${uniqueId})`;
        });
        
        // Assicurati che l'SVG abbia gli attributi corretti
        if (!categoryIllustration.includes('style=')) {
          categoryIllustration = categoryIllustration.replace(
            /<svg([^>]*)>/,
            '<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto;">'
          );
        }
        
        // Trova e sostituisci l'SVG nell'hero-illustration div
        // Pattern più robusto: cerca il div hero-illustration e tutto il contenuto SVG
        const heroIllustrationPattern = /<div class="hero-illustration"[^>]*>[\s\S]*?<\/svg>[\s\S]*?<\/div>/;
        
        if (heroIllustrationPattern.test(article)) {
          // Sostituisci l'intero contenuto del div
          const newIllustration = `<div class="hero-illustration" style="max-width: 100%; height: auto;">\n            ${categoryIllustration.trim()}\n          </div>`;
          article = article.replace(heroIllustrationPattern, newIllustration);
        } else {
          // Fallback: cerca solo l'SVG (senza il div wrapper)
          const svgOnlyPattern = /<svg width="400" height="300"[^>]*>[\s\S]*?<\/svg>/;
          if (svgOnlyPattern.test(article)) {
            article = article.replace(svgOnlyPattern, categoryIllustration.trim());
          } else {
            // Ultimo fallback: cerca qualsiasi SVG
            const anySvgPattern = /<svg[^>]*>[\s\S]*?<\/svg>/;
            if (anySvgPattern.test(article)) {
              article = article.replace(anySvgPattern, categoryIllustration.trim());
            }
          }
        }
      }
      
      // Personalizza statistiche se disponibili
      if (stats.problem?.stats && stats.problem.stats.length > 0) {
        // Sostituisci statistiche nella sezione "Il Problema"
        stats.problem.stats.forEach((stat, index) => {
          const statPattern = new RegExp(`<div class="stat-value">[^<]+</div>\\s*<div class="stat-label">[^<]+</div>`, 'g');
          // Questo è complesso, meglio sostituire manualmente i pattern specifici
        });
      }
      
      // Salva articolo
      fs.writeFileSync(outputPath, article, 'utf8');
      generated++;
      
      // Progress ogni 50 articoli
      const total = (catIndex * locations.length) + locIndex + 1;
      if (total % 50 === 0) {
        console.log(`⏳ Progress: ${total}/${categories.length * locations.length} (${generated} generati, ${skipped} saltati)`);
      }
      
    } catch (error) {
      console.error(`❌ Errore generando ${articleSlug}:`, error.message);
      errors++;
    }
  });
});

console.log('\n✨ Generazione completata!');
console.log(`✅ Articoli generati: ${generated}`);
console.log(`⏭️  Articoli saltati: ${skipped}`);
console.log(`❌ Errori: ${errors}`);
console.log(`📁 Directory: ${outputDir}`);
console.log(`📊 Totale processati: ${currentIndex}/${totalArticles}`);

if (generated > 0) {
  console.log('\n💡 Prossimi passi:');
  console.log('   1. Verifica alcuni articoli generati');
  console.log('   2. Personalizza contenuti specifici per categoria se necessario');
  console.log('   3. Aggiungi contenuti unici per località se necessario');
}

