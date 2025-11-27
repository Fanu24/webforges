// Script per generare statistiche reali del blog
const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'blog');
const outputFile = path.join(__dirname, '..', 'data', 'blog-stats.json');

// Leggi tutti i file HTML
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.html'));

// Estrai categoria e località dal nome file
const articles = files.map(filename => {
  const match = filename.match(/^([^-]+)-(.+)-(.+)\.html$/);
  if (match) {
    const categorySlug = match[1];
    const locationSlug = match[2];
    const city = match[3];
    
    return {
      filename,
      categorySlug,
      locationSlug,
      city,
      url: `blog/${filename}`
    };
  }
  return null;
}).filter(Boolean);

// Raggruppa per categoria
const byCategory = {};
articles.forEach(article => {
  if (!byCategory[article.categorySlug]) {
    byCategory[article.categorySlug] = [];
  }
  byCategory[article.categorySlug].push(article);
});

// Raggruppa per città
const byCity = {};
articles.forEach(article => {
  if (!byCity[article.city]) {
    byCity[article.city] = [];
  }
  byCity[article.city].push(article);
});

// Statistiche
const stats = {
  totalArticles: articles.length,
  totalCategories: Object.keys(byCategory).length,
  totalCities: Object.keys(byCity).length,
  articlesByCategory: Object.keys(byCategory).map(cat => ({
    category: cat,
    count: byCategory[cat].length,
    articles: byCategory[cat]
  })),
  articlesByCity: Object.keys(byCity).map(city => ({
    city,
    count: byCity[city].length
  })),
  allArticles: articles,
  generatedAt: new Date().toISOString()
};

// Salva
fs.writeFileSync(outputFile, JSON.stringify(stats, null, 2), 'utf8');
console.log(`✅ Statistiche generate: ${stats.totalArticles} articoli, ${stats.totalCategories} categorie`);
console.log(`📁 File salvato: ${outputFile}`);

