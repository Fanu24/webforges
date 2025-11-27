// Database Illustrazioni SVG per Settori
// Illustrazioni SVG generate per ogni categoria

const sectorIllustrations = {
  // Hero Illustrations (grandi, accattivanti) con animazioni
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
        <style>
          @keyframes floatPlate {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(5deg); }
          }
          @keyframes floatFork {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(-3deg); }
          }
          @keyframes pulseGlow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.1); }
          }
          .plate-anim { animation: floatPlate 3s ease-in-out infinite; transform-origin: center; }
          .plate-anim-delay1 { animation-delay: 0.5s; }
          .plate-anim-delay2 { animation-delay: 1s; }
          .fork-anim { animation: floatFork 2.5s ease-in-out infinite; transform-origin: center; }
          .glow-anim { animation: pulseGlow 2s ease-in-out infinite; }
        </style>
      </defs>
      <!-- Tavolo -->
      <rect x="50" y="180" width="300" height="20" rx="10" fill="url(#restGrad1)"/>
      <!-- Piatti animati -->
      <g class="plate-anim">
        <circle cx="120" cy="150" r="25" fill="url(#restGrad2)"/>
        <circle cx="120" cy="150" r="20" fill="rgba(34, 211, 238, 0.1)"/>
      </g>
      <g class="plate-anim plate-anim-delay1">
        <circle cx="200" cy="150" r="25" fill="url(#restGrad2)"/>
        <circle cx="200" cy="150" r="20" fill="rgba(168, 85, 247, 0.1)"/>
      </g>
      <g class="plate-anim plate-anim-delay2">
        <circle cx="280" cy="150" r="25" fill="url(#restGrad2)"/>
        <circle cx="280" cy="150" r="20" fill="rgba(236, 72, 153, 0.1)"/>
      </g>
      <!-- Forchetta animata -->
      <g class="fork-anim">
        <path d="M200 80 L200 140" stroke="#22d3ee" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M195 90 L205 90" stroke="#22d3ee" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M195 100 L205 100" stroke="#22d3ee" stroke-width="2" fill="none" stroke-linecap="round"/>
      </g>
      <!-- Decorazioni pulsanti -->
      <circle cx="80" cy="100" r="15" fill="#a855f7" opacity="0.3" class="glow-anim"/>
      <circle cx="320" cy="100" r="15" fill="#ec4899" opacity="0.3" class="glow-anim" style="animation-delay: 1s;"/>
    </svg>
  `,
  
  'meccanico-hero': `
    <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mechGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.3" />
        </linearGradient>
        <style>
          @keyframes rotateKey {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes rotateGear {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          @keyframes pulseWrench {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-8px) rotate(15deg); }
          }
          .key-anim { animation: rotateKey 4s linear infinite; transform-origin: 200px 150px; }
          .gear-anim { animation: rotateGear 3s linear infinite; transform-origin: center; }
          .wrench-anim { animation: pulseWrench 2s ease-in-out infinite; transform-origin: center; }
        </style>
      </defs>
      <!-- Chiave animata -->
      <g class="key-anim">
        <rect x="190" y="100" width="20" height="60" rx="5" fill="#22d3ee" opacity="0.6"/>
        <circle cx="200" cy="80" r="15" fill="none" stroke="#22d3ee" stroke-width="3"/>
        <rect x="195" y="160" width="10" height="30" rx="2" fill="#a855f7" opacity="0.6"/>
      </g>
      <!-- Ingranaggi -->
      <g class="gear-anim" transform="translate(120, 180)">
        <circle cx="0" cy="0" r="25" fill="url(#mechGrad)"/>
        <circle cx="0" cy="0" r="15" fill="rgba(34, 211, 238, 0.2)"/>
        <rect x="-3" y="-30" width="6" height="10" fill="#22d3ee" opacity="0.5"/>
        <rect x="-3" y="20" width="6" height="10" fill="#22d3ee" opacity="0.5"/>
        <rect x="-30" y="-3" width="10" height="6" fill="#22d3ee" opacity="0.5"/>
        <rect x="20" y="-3" width="10" height="6" fill="#22d3ee" opacity="0.5"/>
      </g>
      <g class="gear-anim" transform="translate(280, 180)" style="animation-duration: 2s;">
        <circle cx="0" cy="0" r="20" fill="url(#mechGrad)"/>
        <circle cx="0" cy="0" r="12" fill="rgba(168, 85, 247, 0.2)"/>
      </g>
      <!-- Chiave inglese -->
      <g class="wrench-anim" transform="translate(200, 120)">
        <rect x="-5" y="-30" width="10" height="40" rx="3" fill="#ec4899" opacity="0.5"/>
        <rect x="-15" y="-5" width="30" height="10" rx="3" fill="#ec4899" opacity="0.5"/>
      </g>
    </svg>
  `,
  
  'hotel-hero': `
    <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hotelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.3" />
        </linearGradient>
        <style>
          @keyframes windowGlow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.8; }
          }
          @keyframes windowGlowDelay {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }
          .window-anim { animation: windowGlow 2s ease-in-out infinite; }
          .window-anim-delay { animation: windowGlowDelay 2s ease-in-out infinite; animation-delay: 1s; }
        </style>
      </defs>
      <!-- Edificio -->
      <rect x="100" y="80" width="200" height="180" rx="5" fill="url(#hotelGrad)"/>
      <!-- Finestre animate -->
      <rect x="130" y="120" width="30" height="30" fill="#22d3ee" class="window-anim"/>
      <rect x="180" y="120" width="30" height="30" fill="#22d3ee" class="window-anim-delay"/>
      <rect x="230" y="120" width="30" height="30" fill="#22d3ee" class="window-anim"/>
      <rect x="130" y="170" width="30" height="30" fill="#a855f7" class="window-anim-delay"/>
      <rect x="180" y="170" width="30" height="30" fill="#a855f7" class="window-anim"/>
      <rect x="230" y="170" width="30" height="30" fill="#a855f7" class="window-anim-delay"/>
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
        <style>
          @keyframes balanceSwing {
            0%, 100% { transform: rotate(-5deg); }
            50% { transform: rotate(5deg); }
          }
          @keyframes bookFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          .balance-anim { animation: balanceSwing 3s ease-in-out infinite; transform-origin: 200px 140px; }
          .book-anim { animation: bookFloat 2s ease-in-out infinite; }
          .book-anim-delay { animation: bookFloat 2s ease-in-out infinite; animation-delay: 1s; }
        </style>
      </defs>
      <!-- Bilancia animata -->
      <line x1="200" y1="80" x2="200" y2="200" stroke="#22d3ee" stroke-width="4"/>
      <g class="balance-anim">
        <line x1="200" y1="140" x2="120" y2="140" stroke="#a855f7" stroke-width="3"/>
        <line x1="200" y1="140" x2="280" y2="140" stroke="#a855f7" stroke-width="3"/>
        <circle cx="120" cy="140" r="20" fill="url(#legalGrad)"/>
        <circle cx="280" cy="140" r="20" fill="url(#legalGrad)"/>
      </g>
      <!-- Libri animati -->
      <rect x="150" y="200" width="30" height="40" rx="2" fill="#ec4899" opacity="0.4" class="book-anim"/>
      <rect x="220" y="200" width="30" height="40" rx="2" fill="#22d3ee" opacity="0.4" class="book-anim-delay"/>
    </svg>
  `,
  
  'parrucchiere-hero': `
    <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.3" />
        </linearGradient>
        <style>
          @keyframes scissorsCut {
            0%, 100% { transform: rotate(0deg) translateX(0); }
            50% { transform: rotate(10deg) translateX(5px); }
          }
          @keyframes hairWave {
            0%, 100% { d: path("M150 120 Q200 100 250 120"); }
            50% { d: path("M150 120 Q200 110 250 120"); }
          }
          .scissors-anim { animation: scissorsCut 1.5s ease-in-out infinite; transform-origin: center; }
          .hair-anim { animation: hairWave 2s ease-in-out infinite; }
        </style>
      </defs>
      <!-- Specchio -->
      <rect x="120" y="80" width="160" height="180" rx="10" fill="url(#hairGrad)" opacity="0.2" stroke="#22d3ee" stroke-width="2"/>
      <!-- Forbici animate -->
      <g class="scissors-anim" transform="translate(200, 150)">
        <path d="M-20 -10 L-5 10 M5 10 L20 -10" stroke="#22d3ee" stroke-width="3" fill="none" stroke-linecap="round"/>
        <circle cx="0" cy="0" r="8" fill="#a855f7" opacity="0.5"/>
      </g>
      <!-- Capelli animati -->
      <path class="hair-anim" stroke="#ec4899" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M150 120 Q200 100 250 120" stroke="#ec4899" stroke-width="3" fill="none" stroke-linecap="round"/>
      <!-- Pettine -->
      <rect x="180" y="200" width="40" height="8" rx="2" fill="#22d3ee" opacity="0.6"/>
      <line x1="185" y1="200" x2="185" y2="208" stroke="#22d3ee" stroke-width="2"/>
      <line x1="195" y1="200" x2="195" y2="208" stroke="#22d3ee" stroke-width="2"/>
      <line x1="205" y1="200" x2="205" y2="208" stroke="#22d3ee" stroke-width="2"/>
      <line x1="215" y1="200" x2="215" y2="208" stroke="#22d3ee" stroke-width="2"/>
    </svg>
  `,
  
  'palestra-hero': `
    <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gymGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.3" />
        </linearGradient>
        <style>
          @keyframes weightLift {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes rotateDumbbell {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .weight-anim { animation: weightLift 2s ease-in-out infinite; }
          .dumbbell-anim { animation: rotateDumbbell 3s linear infinite; transform-origin: center; }
        </style>
      </defs>
      <!-- Pesi animati -->
      <g class="weight-anim" transform="translate(150, 120)">
        <rect x="-15" y="-10" width="30" height="20" rx="3" fill="#22d3ee" opacity="0.6"/>
        <line x1="0" y1="-10" x2="0" y2="-30" stroke="#a855f7" stroke-width="4" stroke-linecap="round"/>
      </g>
      <g class="weight-anim" transform="translate(250, 120)" style="animation-delay: 1s;">
        <rect x="-15" y="-10" width="30" height="20" rx="3" fill="#ec4899" opacity="0.6"/>
        <line x1="0" y1="-10" x2="0" y2="-30" stroke="#22d3ee" stroke-width="4" stroke-linecap="round"/>
      </g>
      <!-- Manubrio rotante -->
      <g class="dumbbell-anim" transform="translate(200, 200)">
        <rect x="-40" y="-8" width="20" height="16" rx="3" fill="url(#gymGrad)"/>
        <rect x="20" y="-8" width="20" height="16" rx="3" fill="url(#gymGrad)"/>
        <line x1="-20" y1="0" x2="20" y2="0" stroke="#22d3ee" stroke-width="6" stroke-linecap="round"/>
      </g>
    </svg>
  `,
  
  'dentista-hero': `
    <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.3" />
        </linearGradient>
        <style>
          @keyframes drillRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes mirrorMove {
            0%, 100% { transform: translateX(0) rotate(0deg); }
            50% { transform: translateX(5px) rotate(5deg); }
          }
          .drill-anim { animation: drillRotate 0.5s linear infinite; transform-origin: 200px 150px; }
          .mirror-anim { animation: mirrorMove 2s ease-in-out infinite; }
        </style>
      </defs>
      <!-- Trapano animato -->
      <g class="drill-anim">
        <rect x="190" y="140" width="20" height="40" rx="5" fill="#22d3ee" opacity="0.6"/>
        <circle cx="200" cy="150" r="8" fill="#a855f7" opacity="0.4"/>
        <line x1="200" y1="150" x2="200" y2="120" stroke="#ec4899" stroke-width="3" stroke-linecap="round"/>
      </g>
      <!-- Specchietto animato -->
      <g class="mirror-anim" transform="translate(150, 180)">
        <circle cx="0" cy="0" r="15" fill="none" stroke="#22d3ee" stroke-width="2"/>
        <line x1="0" y1="-15" x2="0" y2="15" stroke="#22d3ee" stroke-width="1"/>
        <line x1="-15" y1="0" x2="15" y2="0" stroke="#22d3ee" stroke-width="1"/>
      </g>
      <!-- Dente stilizzato -->
      <path d="M200 100 L210 120 L200 140 L190 120 Z" fill="url(#dentGrad)" opacity="0.5"/>
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

