#!/usr/bin/env node

/**
 * Script per aggiornare tutti gli articoli esistenti quando cambia la configurazione
 * 
 * Uso:
 *   node scripts/update-all-articles.js
 * 
 * Questo script:
 * 1. Legge la nuova configurazione da config/site-config.js
 * 2. Trova tutti gli articoli HTML in blog/
 * 3. Aggiorna valori obsoleti con nuovi valori dalla config
 * 4. Mantiene il contenuto specifico di ogni articolo
 */

const fs = require('fs');
const path = require('path');

// Carica nuova configurazione
const configPath = path.join(__dirname, '../config/site-config.js');
const configContent = fs.readFileSync(configPath, 'utf8');
eval(configContent);

console.log('🔄 Aggiornamento articoli blog...\n');
console.log(`📝 Nome sito: ${SITE_CONFIG.SITE_NAME}`);
console.log(`🌐 URL: ${SITE_CONFIG.SITE_URL}`);
console.log(`📅 Anno: ${SITE_CONFIG.CURRENT_YEAR}\n`);

// Trova tutti gli articoli HTML
const blogDir = path.join(__dirname, '../blog');
if (!fs.existsSync(blogDir)) {
  console.error('❌ Directory blog/ non trovata');
  process.exit(1);
}

const articles = fs.readdirSync(blogDir)
  .filter(file => file.endsWith('.html'))
  .map(file => path.join(blogDir, file));

if (articles.length === 0) {
  console.log('⚠️  Nessun articolo trovato in blog/');
  process.exit(0);
}

console.log(`📚 Trovati ${articles.length} articoli da aggiornare\n`);

let updatedCount = 0;

articles.forEach(articlePath => {
  let content = fs.readFileSync(articlePath, 'utf8');
  let modified = false;
  const fileName = path.basename(articlePath);
  
  // Pattern di sostituzione
  const replacements = [
    // Title tag
    {
      pattern: /<title>([^|]+)\s*\|\s*[^<]+<\/title>/,
      replacement: `<title>$1 | ${SITE_CONFIG.SITE_NAME}</title>`,
      description: 'Title tag'
    },
    // Open Graph title
    {
      pattern: /<meta\s+property="og:title"\s+content="([^|]+)\s*\|\s*[^"]+"/,
      replacement: `<meta property="og:title" content="$1 | ${SITE_CONFIG.SITE_NAME}"`,
      description: 'OG Title'
    },
    // Schema.org author
    {
      pattern: /"author":\s*\{[^}]*"name":\s*"[^"]+"[^}]*\}/,
      replacement: `"author": {"@type": "Organization", "name": "${SITE_CONFIG.SITE_NAME}"}`,
      description: 'Schema.org author'
    },
    // Schema.org publisher
    {
      pattern: /"publisher":\s*\{[^}]*"name":\s*"[^"]+"[^}]*\}/,
      replacement: `"publisher": {"@type": "Organization", "name": "${SITE_CONFIG.SITE_NAME}"}`,
      description: 'Schema.org publisher'
    },
    // Logo/Navbar - cerca pattern comune
    {
      pattern: /<span\s+class="text-gradient">[^<]+<\/span>/,
      replacement: `<span class="text-gradient">${SITE_CONFIG.SITE_NAME}</span>`,
      description: 'Navbar logo',
      // Solo se è nel contesto navbar
      context: 'navbar'
    },
    // Footer copyright
    {
      pattern: /([^<]+)\s*©\s*\d{4}\s*-\s*([^<]+)/,
      replacement: `${SITE_CONFIG.SITE_NAME} © ${SITE_CONFIG.CURRENT_YEAR} - ${SITE_CONFIG.FOOTER_TEXT}`,
      description: 'Footer copyright',
      // Solo se è nel footer
      context: 'footer'
    }
  ];
  
  // Applica sostituzioni
  replacements.forEach(({ pattern, replacement, description, context }) => {
    // Se ha contesto, verifica che sia nel contesto giusto
    if (context) {
      if (context === 'navbar' && !content.includes('navbar')) continue;
      if (context === 'footer' && !content.includes('footer')) continue;
    }
    
    if (pattern.test(content)) {
      content = content.replace(pattern, replacement);
      modified = true;
      console.log(`  ✓ ${description} aggiornato`);
    }
  });
  
  // Aggiorna URL canonico se contiene vecchio URL
  const oldUrlPattern = /https?:\/\/[^\/]+\/webforges/g;
  if (oldUrlPattern.test(content)) {
    content = content.replace(oldUrlPattern, SITE_CONFIG.SITE_URL);
    modified = true;
    console.log(`  ✓ URL canonici aggiornati`);
  }
  
  // Salva se modificato
  if (modified) {
    fs.writeFileSync(articlePath, content, 'utf8');
    updatedCount++;
    console.log(`✅ ${fileName} aggiornato\n`);
  } else {
    console.log(`⏭️  ${fileName} già aggiornato\n`);
  }
});

console.log(`\n✨ Completato!`);
console.log(`📊 Articoli aggiornati: ${updatedCount}/${articles.length}`);

if (updatedCount < articles.length) {
  console.log(`\n💡 Suggerimento: Alcuni articoli potrebbero già essere aggiornati o usare pattern diversi.`);
  console.log(`   Controlla manualmente gli articoli non aggiornati.`);
}


