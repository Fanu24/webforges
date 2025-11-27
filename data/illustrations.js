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

  // Illustrazioni default per categorie senza illustrazione specifica
  'default-hero': `
    <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="defaultGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.3" />
        </linearGradient>
        <style>
          @keyframes floatCircle {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-20px) scale(1.1); }
          }
          @keyframes rotateCircle {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .float-anim { animation: floatCircle 3s ease-in-out infinite; }
          .rotate-anim { animation: rotateCircle 4s linear infinite; transform-origin: center; }
        </style>
      </defs>
      <!-- Cerchi fluttuanti -->
      <circle cx="150" cy="120" r="40" fill="url(#defaultGrad)" class="float-anim"/>
      <circle cx="250" cy="180" r="35" fill="rgba(168, 85, 247, 0.2)" class="float-anim" style="animation-delay: 1s;"/>
      <circle cx="200" cy="150" r="50" fill="none" stroke="#22d3ee" stroke-width="3" opacity="0.4" class="rotate-anim"/>
      <!-- Elementi decorativi -->
      <rect x="100" y="200" width="200" height="60" rx="10" fill="rgba(34, 211, 238, 0.1)" stroke="#22d3ee" stroke-width="2" opacity="0.5"/>
    </svg>
  `,
  
  'pizzeria-hero': `
    <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pizzaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.3" />
        </linearGradient>
        <style>
          @keyframes rotatePizza {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes floatSlice {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(5deg); }
          }
          .pizza-anim { animation: rotatePizza 8s linear infinite; transform-origin: 200px 150px; }
          .slice-anim { animation: floatSlice 2s ease-in-out infinite; }
        </style>
      </defs>
      <!-- Pizza animata -->
      <g class="pizza-anim">
        <circle cx="200" cy="150" r="80" fill="url(#pizzaGrad)"/>
        <circle cx="200" cy="150" r="70" fill="rgba(236, 72, 153, 0.1)"/>
        <!-- Fette -->
        <path d="M200 150 L200 70 A70 70 0 0 1 270 150 Z" fill="#22d3ee" opacity="0.3" class="slice-anim"/>
        <path d="M200 150 L270 150 A70 70 0 0 1 200 230 Z" fill="#a855f7" opacity="0.3" class="slice-anim" style="animation-delay: 0.5s;"/>
        <path d="M200 150 L200 230 A70 70 0 0 1 130 150 Z" fill="#ec4899" opacity="0.3" class="slice-anim" style="animation-delay: 1s;"/>
        <path d="M200 150 L130 150 A70 70 0 0 1 200 70 Z" fill="#22d3ee" opacity="0.3" class="slice-anim" style="animation-delay: 1.5s;"/>
      </g>
      <!-- Ingredienti decorativi -->
      <circle cx="180" cy="130" r="8" fill="#a855f7" opacity="0.5"/>
      <circle cx="220" cy="170" r="8" fill="#ec4899" opacity="0.5"/>
      <circle cx="200" cy="140" r="6" fill="#22d3ee" opacity="0.5"/>
    </svg>
  `,
  
  'veterinario-hero': `
    <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="vetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.3" />
        </linearGradient>
        <style>
          @keyframes pawBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          @keyframes heartBeat {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }
          .paw-anim { animation: pawBounce 2s ease-in-out infinite; }
          .heart-anim { animation: heartBeat 1.5s ease-in-out infinite; }
        </style>
      </defs>
      <!-- Zampa animata -->
      <g class="paw-anim" transform="translate(200, 150)">
        <circle cx="0" cy="0" r="30" fill="url(#vetGrad)"/>
        <circle cx="-15" cy="-15" r="12" fill="#22d3ee" opacity="0.5"/>
        <circle cx="15" cy="-15" r="12" fill="#a855f7" opacity="0.5"/>
        <circle cx="-15" cy="15" r="12" fill="#ec4899" opacity="0.5"/>
        <circle cx="15" cy="15" r="12" fill="#22d3ee" opacity="0.5"/>
      </g>
      <!-- Cuore animato -->
      <g class="heart-anim" transform="translate(150, 120)">
        <path d="M0 -10 C-10 -20, -20 -10, -20 0 C-20 10, 0 20, 0 30 C0 20, 20 10, 20 0 C20 -10, 10 -20, 0 -10 Z" fill="#ec4899" opacity="0.4"/>
      </g>
      <!-- Stetoscopio -->
      <path d="M250 100 Q280 120 250 140" stroke="#22d3ee" stroke-width="4" fill="none" stroke-linecap="round"/>
      <circle cx="250" cy="100" r="15" fill="none" stroke="#a855f7" stroke-width="3"/>
    </svg>
  `,
  
  'farmacia-hero': `
    <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pharmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.3" />
        </linearGradient>
        <style>
          @keyframes pillFloat {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(10deg); }
          }
          @keyframes crossPulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }
          .pill-anim { animation: pillFloat 3s ease-in-out infinite; }
          .cross-anim { animation: crossPulse 2s ease-in-out infinite; }
        </style>
      </defs>
      <!-- Croce farmaceutica -->
      <g class="cross-anim" transform="translate(200, 150)">
        <rect x="-40" y="-8" width="80" height="16" rx="3" fill="#22d3ee" opacity="0.6"/>
        <rect x="-8" y="-40" width="16" height="80" rx="3" fill="#22d3ee" opacity="0.6"/>
      </g>
      <!-- Pillole animate -->
      <g class="pill-anim" transform="translate(150, 180)">
        <rect x="-20" y="-8" width="40" height="16" rx="8" fill="url(#pharmGrad)"/>
        <line x1="0" y1="-8" x2="0" y2="8" stroke="#a855f7" stroke-width="2"/>
      </g>
      <g class="pill-anim" transform="translate(250, 180)" style="animation-delay: 1s;">
        <rect x="-20" y="-8" width="40" height="16" rx="8" fill="rgba(236, 72, 153, 0.3)"/>
        <line x1="0" y1="-8" x2="0" y2="8" stroke="#ec4899" stroke-width="2"/>
      </g>
    </svg>
  `,
  
  'ottico-hero': `
    <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="opticGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.3" />
        </linearGradient>
        <style>
          @keyframes glassesFloat {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(-2deg); }
          }
          @keyframes lensShine {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.8; }
          }
          .glasses-anim { animation: glassesFloat 3s ease-in-out infinite; }
          .lens-anim { animation: lensShine 2s ease-in-out infinite; }
        </style>
      </defs>
      <!-- Occhiali animati -->
      <g class="glasses-anim" transform="translate(200, 150)">
        <!-- Lente sinistra -->
        <circle cx="-40" cy="0" r="35" fill="none" stroke="#22d3ee" stroke-width="4" opacity="0.6"/>
        <circle cx="-40" cy="0" r="25" fill="url(#opticGrad)" class="lens-anim"/>
        <!-- Ponte -->
        <rect x="-15" y="-3" width="30" height="6" rx="3" fill="#a855f7" opacity="0.6"/>
        <!-- Lente destra -->
        <circle cx="40" cy="0" r="35" fill="none" stroke="#22d3ee" stroke-width="4" opacity="0.6"/>
        <circle cx="40" cy="0" r="25" fill="url(#opticGrad)" class="lens-anim" style="animation-delay: 0.5s;"/>
        <!-- Stanghette -->
        <line x1="-75" y1="0" x2="-100" y2="-20" stroke="#ec4899" stroke-width="4" stroke-linecap="round"/>
        <line x1="75" y1="0" x2="100" y2="-20" stroke="#ec4899" stroke-width="4" stroke-linecap="round"/>
      </g>
    </svg>
  `,
  
  'elettricista-hero': `
    <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="elecGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.3" />
        </linearGradient>
        <style>
          @keyframes lightning {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
          @keyframes plugRotate {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(5deg); }
          }
          .lightning-anim { animation: lightning 1s ease-in-out infinite; }
          .plug-anim { animation: plugRotate 2s ease-in-out infinite; }
        </style>
      </defs>
      <!-- Fulmine animato -->
      <g class="lightning-anim" transform="translate(200, 120)">
        <path d="M0 0 L-20 40 L10 40 L-10 80 L30 40 L10 40 Z" fill="#22d3ee" opacity="0.8"/>
      </g>
      <!-- Presa animata -->
      <g class="plug-anim" transform="translate(200, 200)">
        <rect x="-30" y="-20" width="60" height="40" rx="5" fill="url(#elecGrad)"/>
        <circle cx="-15" cy="0" r="8" fill="#a855f7" opacity="0.6"/>
        <circle cx="15" cy="0" r="8" fill="#ec4899" opacity="0.6"/>
        <line x1="0" y1="-20" x2="0" y2="-40" stroke="#22d3ee" stroke-width="4" stroke-linecap="round"/>
      </g>
    </svg>
  `,
  
  'idraulico-hero': `
    <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="plumbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.3" />
        </linearGradient>
        <style>
          @keyframes waterDrop {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(50px); opacity: 0; }
          }
          @keyframes pipeFlow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.8; }
          }
          .drop-anim { animation: waterDrop 2s ease-in-out infinite; }
          .pipe-anim { animation: pipeFlow 1.5s ease-in-out infinite; }
        </style>
      </defs>
      <!-- Tubo -->
      <rect x="150" y="100" width="100" height="20" rx="5" fill="url(#plumbGrad)" class="pipe-anim"/>
      <rect x="150" y="180" width="20" height="60" rx="5" fill="url(#plumbGrad)" class="pipe-anim"/>
      <!-- Gocce animate -->
      <circle cx="160" cy="120" r="8" fill="#22d3ee" opacity="0.6" class="drop-anim"/>
      <circle cx="180" cy="130" r="6" fill="#a855f7" opacity="0.6" class="drop-anim" style="animation-delay: 0.5s;"/>
      <circle cx="200" cy="125" r="7" fill="#ec4899" opacity="0.6" class="drop-anim" style="animation-delay: 1s;"/>
      <!-- Chiave -->
      <rect x="280" y="150" width="40" height="8" rx="2" fill="#22d3ee" opacity="0.6"/>
      <rect x="310" y="140" width="8" height="28" rx="2" fill="#a855f7" opacity="0.6"/>
    </svg>
  `,
  
  'fioraio-hero': `
    <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="flowerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.3" />
        </linearGradient>
        <style>
          @keyframes flowerBloom {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.1) rotate(5deg); }
          }
          @keyframes petalFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .flower-anim { animation: flowerBloom 3s ease-in-out infinite; }
          .petal-anim { animation: petalFloat 2s ease-in-out infinite; }
        </style>
      </defs>
      <!-- Fiore animato -->
      <g class="flower-anim" transform="translate(200, 150)">
        <!-- Petali -->
        <circle cx="0" cy="-30" r="20" fill="#ec4899" opacity="0.5" class="petal-anim"/>
        <circle cx="30" cy="0" r="20" fill="#a855f7" opacity="0.5" class="petal-anim" style="animation-delay: 0.2s;"/>
        <circle cx="0" cy="30" r="20" fill="#22d3ee" opacity="0.5" class="petal-anim" style="animation-delay: 0.4s;"/>
        <circle cx="-30" cy="0" r="20" fill="#ec4899" opacity="0.5" class="petal-anim" style="animation-delay: 0.6s;"/>
        <!-- Centro -->
        <circle cx="0" cy="0" r="15" fill="url(#flowerGrad)"/>
      </g>
      <!-- Vaso -->
      <path d="M150 200 L150 250 L250 250 L250 200 Q250 180 200 180 Q150 180 150 200 Z" fill="rgba(34, 211, 238, 0.2)" stroke="#22d3ee" stroke-width="2"/>
    </svg>
  `,
  
  'agenzia-immobiliare-hero': `
    <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="realGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.3" />
        </linearGradient>
        <style>
          @keyframes houseFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes windowGlow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.8; }
          }
          .house-anim { animation: houseFloat 3s ease-in-out infinite; }
          .window-anim { animation: windowGlow 2s ease-in-out infinite; }
        </style>
      </defs>
      <!-- Casa animata -->
      <g class="house-anim" transform="translate(200, 180)">
        <!-- Tetto -->
        <path d="M-50 -40 L0 -80 L50 -40 Z" fill="url(#realGrad)"/>
        <!-- Corpo -->
        <rect x="-50" y="-40" width="100" height="80" rx="5" fill="rgba(34, 211, 238, 0.2)" stroke="#22d3ee" stroke-width="2"/>
        <!-- Finestre -->
        <rect x="-30" y="-20" width="20" height="20" fill="#a855f7" opacity="0.5" class="window-anim"/>
        <rect x="10" y="-20" width="20" height="20" fill="#ec4899" opacity="0.5" class="window-anim" style="animation-delay: 1s;"/>
        <!-- Porta -->
        <rect x="-15" y="20" width="30" height="20" fill="#22d3ee" opacity="0.6"/>
      </g>
    </svg>
  `,
  
  'architetto-hero': `
    <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="archGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.3" />
        </linearGradient>
        <style>
          @keyframes rulerMove {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(5deg); }
          }
          @keyframes blueprintFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          .ruler-anim { animation: rulerMove 2s ease-in-out infinite; }
          .blueprint-anim { animation: blueprintFloat 3s ease-in-out infinite; }
        </style>
      </defs>
      <!-- Righello animato -->
      <g class="ruler-anim" transform="translate(200, 150)">
        <rect x="-60" y="-5" width="120" height="10" rx="2" fill="url(#archGrad)"/>
        <line x1="-50" y1="0" x2="-50" y2="-10" stroke="#22d3ee" stroke-width="2"/>
        <line x1="0" y1="0" x2="0" y2="-10" stroke="#a855f7" stroke-width="2"/>
        <line x1="50" y1="0" x2="50" y2="-10" stroke="#ec4899" stroke-width="2"/>
      </g>
      <!-- Progetto -->
      <rect x="120" y="180" width="160" height="80" rx="3" fill="rgba(34, 211, 238, 0.1)" stroke="#22d3ee" stroke-width="2" class="blueprint-anim"/>
      <line x1="140" y1="200" x2="260" y2="200" stroke="#a855f7" stroke-width="2" opacity="0.5"/>
      <line x1="140" y1="230" x2="260" y2="230" stroke="#ec4899" stroke-width="2" opacity="0.5"/>
    </svg>
  `,
  
  'commercialista-hero': `
    <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="accountGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.3" />
        </linearGradient>
        <style>
          @keyframes chartGrow {
            0% { transform: scaleY(0); }
            100% { transform: scaleY(1); }
          }
          @keyframes calculatorFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .chart-anim { animation: chartGrow 2s ease-out infinite; transform-origin: bottom; }
          .calc-anim { animation: calculatorFloat 2s ease-in-out infinite; }
        </style>
      </defs>
      <!-- Grafico animato -->
      <g transform="translate(150, 200)">
        <rect x="0" y="0" width="30" height="60" fill="#22d3ee" opacity="0.6" class="chart-anim"/>
        <rect x="40" y="0" width="30" height="80" fill="#a855f7" opacity="0.6" class="chart-anim" style="animation-delay: 0.2s;"/>
        <rect x="80" y="0" width="30" height="100" fill="#ec4899" opacity="0.6" class="chart-anim" style="animation-delay: 0.4s;"/>
      </g>
      <!-- Calcolatrice animata -->
      <g class="calc-anim" transform="translate(250, 150)">
        <rect x="-30" y="-25" width="60" height="50" rx="5" fill="url(#accountGrad)"/>
        <rect x="-25" y="-15" width="15" height="10" rx="2" fill="#22d3ee" opacity="0.5"/>
        <rect x="-5" y="-15" width="15" height="10" rx="2" fill="#a855f7" opacity="0.5"/>
        <rect x="15" y="-15" width="15" height="10" rx="2" fill="#ec4899" opacity="0.5"/>
      </g>
    </svg>
  `,
  
  'psicologo-hero': `
    <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="psychGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.3" />
        </linearGradient>
        <style>
          @keyframes brainPulse {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.1); opacity: 0.9; }
          }
          @keyframes thoughtFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .brain-anim { animation: brainPulse 2s ease-in-out infinite; }
          .thought-anim { animation: thoughtFloat 2s ease-in-out infinite; }
        </style>
      </defs>
      <!-- Cervello animato -->
      <g class="brain-anim" transform="translate(200, 150)">
        <path d="M-30 -20 Q-40 -30 -30 -40 Q-20 -50 0 -40 Q20 -50 30 -40 Q40 -30 30 -20 Q40 -10 30 0 Q20 10 0 0 Q-20 10 -30 0 Q-40 -10 -30 -20 Z" fill="url(#psychGrad)"/>
        <path d="M-20 -15 Q-25 -20 -20 -25" stroke="#22d3ee" stroke-width="2" fill="none"/>
        <path d="M20 -15 Q25 -20 20 -25" stroke="#a855f7" stroke-width="2" fill="none"/>
      </g>
      <!-- Pensieri -->
      <circle cx="120" cy="100" r="15" fill="#ec4899" opacity="0.4" class="thought-anim"/>
      <circle cx="280" cy="100" r="12" fill="#22d3ee" opacity="0.4" class="thought-anim" style="animation-delay: 0.5s;"/>
    </svg>
  `,
  
  'fisioterapista-hero': `
    <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="physioGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.3" />
        </linearGradient>
        <style>
          @keyframes muscleFlex {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.15); }
          }
          @keyframes waveMove {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(10px); }
          }
          .muscle-anim { animation: muscleFlex 2s ease-in-out infinite; }
          .wave-anim { animation: waveMove 1.5s ease-in-out infinite; }
        </style>
      </defs>
      <!-- Onda terapia -->
      <g class="wave-anim" transform="translate(200, 150)">
        <path d="M-60 0 Q-30 -30 0 0 T60 0" stroke="#22d3ee" stroke-width="4" fill="none"/>
        <path d="M-60 20 Q-30 -10 0 20 T60 20" stroke="#a855f7" stroke-width="4" fill="none" opacity="0.6"/>
      </g>
      <!-- Mano/massaggio -->
      <circle cx="150" cy="180" r="25" fill="url(#physioGrad)" class="muscle-anim"/>
      <circle cx="250" cy="180" r="25" fill="rgba(236, 72, 153, 0.2)" class="muscle-anim" style="animation-delay: 0.5s;"/>
    </svg>
  `,
  
  'assicurazione-hero': `
    <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="insurGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.3" />
        </linearGradient>
        <style>
          @keyframes shieldPulse {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.1); opacity: 0.9; }
          }
          @keyframes checkMark {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }
          .shield-anim { animation: shieldPulse 2s ease-in-out infinite; }
          .check-anim { animation: checkMark 1.5s ease-in-out infinite; }
        </style>
      </defs>
      <!-- Scudo animato -->
      <g class="shield-anim" transform="translate(200, 150)">
        <path d="M0 -50 L-40 0 L-40 40 Q-40 60 0 80 Q40 60 40 40 L40 0 Z" fill="url(#insurGrad)"/>
        <path d="M-15 -20 L-5 -10 L15 10" stroke="#22d3ee" stroke-width="4" fill="none" stroke-linecap="round" class="check-anim"/>
      </g>
    </svg>
  `,
  
  'scuola-guida-hero': `
    <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="driveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.3" />
        </linearGradient>
        <style>
          @keyframes carMove {
            0% { transform: translateX(-50px); }
            100% { transform: translateX(50px); }
          }
          @keyframes wheelRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .car-anim { animation: carMove 3s ease-in-out infinite; }
          .wheel-anim { animation: wheelRotate 1s linear infinite; transform-origin: center; }
        </style>
      </defs>
      <!-- Auto animata -->
      <g class="car-anim" transform="translate(200, 180)">
        <rect x="-40" y="-20" width="80" height="30" rx="5" fill="url(#driveGrad)"/>
        <rect x="-20" y="-35" width="40" height="20" rx="3" fill="rgba(34, 211, 238, 0.3)"/>
        <!-- Ruote -->
        <circle cx="-25" cy="10" r="12" fill="#22d3ee" opacity="0.6" class="wheel-anim"/>
        <circle cx="25" cy="10" r="12" fill="#a855f7" opacity="0.6" class="wheel-anim"/>
      </g>
      <!-- Volante -->
      <circle cx="150" cy="120" r="30" fill="none" stroke="#ec4899" stroke-width="4" opacity="0.6"/>
      <line x1="150" y1="90" x2="150" y2="150" stroke="#ec4899" stroke-width="3"/>
      <line x1="120" y1="120" x2="180" y2="120" stroke="#ec4899" stroke-width="3"/>
    </svg>
  `,
  
  'negozio-abbigliamento-hero': `
    <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fashionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.3" />
        </linearGradient>
        <style>
          @keyframes hangerSwing {
            0%, 100% { transform: rotate(-5deg); }
            50% { transform: rotate(5deg); }
          }
          @keyframes clothesFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .hanger-anim { animation: hangerSwing 2s ease-in-out infinite; transform-origin: top center; }
          .clothes-anim { animation: clothesFloat 2.5s ease-in-out infinite; }
        </style>
      </defs>
      <!-- Gruccia animata -->
      <g class="hanger-anim" transform="translate(200, 120)">
        <path d="M-30 0 Q-30 -20 0 -20 Q30 -20 30 0" stroke="#22d3ee" stroke-width="4" fill="none"/>
        <line x1="0" y1="0" x2="0" y2="40" stroke="#a855f7" stroke-width="3"/>
      </g>
      <!-- Vestito -->
      <rect x="150" y="160" width="100" height="80" rx="5" fill="url(#fashionGrad)" class="clothes-anim"/>
      <circle cx="200" cy="180" r="15" fill="rgba(236, 72, 153, 0.3)"/>
    </svg>
  `,
  
  'centro-estetico-hero': `
    <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="beautyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.3" />
        </linearGradient>
        <style>
          @keyframes sparkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.3); }
          }
          @keyframes mirrorShine {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.8; }
          }
          .sparkle-anim { animation: sparkle 1.5s ease-in-out infinite; }
          .mirror-anim { animation: mirrorShine 2s ease-in-out infinite; }
        </style>
      </defs>
      <!-- Specchio animato -->
      <circle cx="200" cy="150" r="60" fill="none" stroke="#22d3ee" stroke-width="4" class="mirror-anim"/>
      <circle cx="200" cy="150" r="50" fill="url(#beautyGrad)"/>
      <!-- Brillantini -->
      <circle cx="150" cy="100" r="8" fill="#ec4899" opacity="0.6" class="sparkle-anim"/>
      <circle cx="250" cy="120" r="6" fill="#a855f7" opacity="0.6" class="sparkle-anim" style="animation-delay: 0.5s;"/>
      <circle cx="180" cy="200" r="7" fill="#22d3ee" opacity="0.6" class="sparkle-anim" style="animation-delay: 1s;"/>
    </svg>
  `,
  
  'trattoria-hero': sectorIllustrations['ristorante-hero'], // Usa stessa di ristorante
  'bed-and-breakfast-hero': sectorIllustrations['hotel-hero'], // Usa stessa di hotel
  'agriturismo-hero': sectorIllustrations['hotel-hero'], // Usa stessa di hotel
  'avvocato-hero': sectorIllustrations['studio-legale-hero'], // Usa stessa di studio legale
  'ingegnere-hero': sectorIllustrations['architetto-hero'], // Usa stessa di architetto
  'consulente-fiscale-hero': sectorIllustrations['commercialista-hero'], // Usa stessa di commercialista
  'psicoterapista-hero': sectorIllustrations['psicologo-hero'], // Usa stessa di psicologo
  'e-commerce-hero': `
    <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.3" />
        </linearGradient>
        <style>
          @keyframes cartMove {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(10px); }
          }
          @keyframes productFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .cart-anim { animation: cartMove 2s ease-in-out infinite; }
          .product-anim { animation: productFloat 2.5s ease-in-out infinite; }
        </style>
      </defs>
      <!-- Carrello animato -->
      <g class="cart-anim" transform="translate(200, 200)">
        <rect x="-30" y="-20" width="60" height="30" rx="3" fill="url(#shopGrad)"/>
        <circle cx="-20" cy="10" r="8" fill="#22d3ee" opacity="0.6"/>
        <circle cx="20" cy="10" r="8" fill="#a855f7" opacity="0.6"/>
      </g>
      <!-- Prodotti -->
      <rect x="150" y="120" width="40" height="40" rx="5" fill="rgba(34, 211, 238, 0.3)" class="product-anim"/>
      <rect x="210" y="100" width="40" height="40" rx="5" fill="rgba(168, 85, 247, 0.3)" class="product-anim" style="animation-delay: 0.5s;"/>
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

