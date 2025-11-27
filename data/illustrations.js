// Database Illustrazioni SVG per Settori
// Illustrazioni SVG generate per ogni categoria

const sectorIllustrations = {
  // Hero Illustrations (grandi, accattivanti)
  'ristorante-hero': `
    <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="restGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.3" />
        </linearGradient>
        <linearGradient id="restGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#ec4899;stop-opacity:0.2" />
          <stop offset="100%" style="stop-color:#22d3ee;stop-opacity:0.2" />
        </linearGradient>
      </defs>
      <!-- Tavolo -->
      <rect x="50" y="180" width="300" height="20" rx="10" fill="url(#restGrad1)"/>
      <!-- Piatti -->
      <circle cx="120" cy="150" r="25" fill="url(#restGrad2)"/>
      <circle cx="200" cy="150" r="25" fill="url(#restGrad2)"/>
      <circle cx="280" cy="150" r="25" fill="url(#restGrad2)"/>
      <!-- Forchetta stilizzata -->
      <path d="M200 80 L200 140 M195 90 L205 90" stroke="#22d3ee" stroke-width="3" fill="none"/>
      <!-- Decorazioni -->
      <circle cx="80" cy="100" r="15" fill="#a855f7" opacity="0.3"/>
      <circle cx="320" cy="100" r="15" fill="#ec4899" opacity="0.3"/>
    </svg>
  `,
  
  'hotel-hero': `
    <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hotelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.3" />
        </linearGradient>
      </defs>
      <!-- Edificio -->
      <rect x="100" y="80" width="200" height="180" rx="5" fill="url(#hotelGrad)"/>
      <!-- Finestre -->
      <rect x="130" y="120" width="30" height="30" fill="#22d3ee" opacity="0.5"/>
      <rect x="180" y="120" width="30" height="30" fill="#22d3ee" opacity="0.5"/>
      <rect x="230" y="120" width="30" height="30" fill="#22d3ee" opacity="0.5"/>
      <rect x="130" y="170" width="30" height="30" fill="#a855f7" opacity="0.5"/>
      <rect x="180" y="170" width="30" height="30" fill="#a855f7" opacity="0.5"/>
      <rect x="230" y="170" width="30" height="30" fill="#a855f7" opacity="0.5"/>
      <!-- Porta -->
      <rect x="175" y="220" width="50" height="40" fill="#ec4899" opacity="0.4"/>
    </svg>
  `,
  
  'studio-legale-hero': `
    <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="legalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.3" />
        </linearGradient>
      </defs>
      <!-- Bilancia -->
      <line x1="200" y1="80" x2="200" y2="200" stroke="#22d3ee" stroke-width="4"/>
      <line x1="200" y1="140" x2="120" y2="140" stroke="#a855f7" stroke-width="3"/>
      <line x1="200" y1="140" x2="280" y2="140" stroke="#a855f7" stroke-width="3"/>
      <circle cx="120" cy="140" r="20" fill="url(#legalGrad)"/>
      <circle cx="280" cy="140" r="20" fill="url(#legalGrad)"/>
      <!-- Libri -->
      <rect x="150" y="200" width="30" height="40" rx="2" fill="#ec4899" opacity="0.4"/>
      <rect x="220" y="200" width="30" height="40" rx="2" fill="#22d3ee" opacity="0.4"/>
    </svg>
  `,
  
  // Feature Illustrations (piccole, per funzionalità)
  'menu-online': `
    <svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="160" height="110" rx="5" fill="rgba(34, 211, 238, 0.2)" stroke="#22d3ee" stroke-width="2"/>
      <line x1="40" y1="50" x2="160" y2="50" stroke="#22d3ee" stroke-width="2"/>
      <line x1="40" y1="80" x2="160" y2="80" stroke="#a855f7" stroke-width="2"/>
      <line x1="40" y1="110" x2="160" y2="110" stroke="#ec4899" stroke-width="2"/>
      <circle cx="50" cy="50" r="8" fill="#22d3ee"/>
      <circle cx="50" cy="80" r="8" fill="#a855f7"/>
      <circle cx="50" cy="110" r="8" fill="#ec4899"/>
    </svg>
  `,
  
  'prenotazioni': `
    <svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="30" width="120" height="90" rx="5" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" stroke-width="2"/>
      <line x1="60" y1="55" x2="140" y2="55" stroke="#a855f7" stroke-width="2"/>
      <line x1="60" y1="75" x2="140" y2="75" stroke="#22d3ee" stroke-width="2"/>
      <line x1="60" y1="95" x2="140" y2="95" stroke="#ec4899" stroke-width="2"/>
      <circle cx="70" cy="55" r="5" fill="#a855f7"/>
      <circle cx="70" cy="75" r="5" fill="#22d3ee"/>
      <circle cx="70" cy="95" r="5" fill="#ec4899"/>
    </svg>
  `,
  
  'seo-visual': `
    <svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 120 L50 80 L70 100 L90 60 L110 90 L130 50 L150 70 L170 40" 
            stroke="#22d3ee" stroke-width="3" fill="none" stroke-linecap="round"/>
      <circle cx="30" cy="120" r="5" fill="#22d3ee"/>
      <circle cx="50" cy="80" r="5" fill="#a855f7"/>
      <circle cx="70" cy="100" r="5" fill="#22d3ee"/>
      <circle cx="90" cy="60" r="5" fill="#ec4899"/>
      <circle cx="110" cy="90" r="5" fill="#22d3ee"/>
      <circle cx="130" cy="50" r="5" fill="#a855f7"/>
      <circle cx="150" cy="70" r="5" fill="#22d3ee"/>
      <circle cx="170" cy="40" r="5" fill="#ec4899"/>
    </svg>
  `,
  
  'mobile-responsive': `
    <svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect x="60" y="20" width="40" height="70" rx="5" fill="rgba(34, 211, 238, 0.2)" stroke="#22d3ee" stroke-width="2"/>
      <rect x="100" y="30" width="80" height="50" rx="5" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" stroke-width="2"/>
      <line x1="65" y1="40" x2="95" y2="40" stroke="#22d3ee" stroke-width="1"/>
      <line x1="65" y1="55" x2="95" y2="55" stroke="#22d3ee" stroke-width="1"/>
      <line x1="65" y1="70" x2="95" y2="70" stroke="#22d3ee" stroke-width="1"/>
    </svg>
  `
};

// Funzione per generare illustrazioni dinamiche
function generateIllustration(type, category, colors = {}) {
  const defaultColors = {
    primary: '#22d3ee',
    secondary: '#a855f7',
    accent: '#ec4899'
  };
  
  const c = { ...defaultColors, ...colors };
  
  // Pattern base per ogni tipo
  const patterns = {
    'hero': (cat) => {
      if (cat === 'ristorante') return sectorIllustrations['ristorante-hero'];
      if (cat === 'hotel') return sectorIllustrations['hotel-hero'];
      if (cat === 'studio-legale') return sectorIllustrations['studio-legale-hero'];
      // Default pattern
      return `
        <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:${c.primary};stop-opacity:0.3" />
              <stop offset="100%" style="stop-color:${c.secondary};stop-opacity:0.3" />
            </linearGradient>
          </defs>
          <rect x="50" y="50" width="300" height="200" rx="20" fill="url(#grad)"/>
          <circle cx="200" cy="150" r="60" fill="${c.accent}" opacity="0.3"/>
        </svg>
      `;
    },
    'feature': (feature) => {
      return sectorIllustrations[feature] || sectorIllustrations['menu-online'];
    }
  };
  
  return patterns[type] ? patterns[type](category) : '';
}

// Esporta
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { sectorIllustrations, generateIllustration };
}

