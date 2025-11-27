# Deploy su Netlify - WebForge Studio

## 🚀 Opzione 1: HTML statico (PIÙ SEMPLICE)

### File necessari:
- `index.html` ✅ (già presente)

### Procedura:
1. Vai su [netlify.com](https://netlify.com) e accedi
2. Trascina e rilascia la cartella con `index.html` nella dashboard Netlify
3. **Fatto!** Il sito sarà online in pochi secondi

**File minimi richiesti:**
```
Siti Web/
  └── index.html
```

---

## 🔧 Opzione 2: Next.js (Deploy completo)

### File necessari (TUTTI i file del progetto):

```
Siti Web/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── CitySection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── PortfolioSection.tsx
│   ├── PricingSection.tsx
│   ├── ServicesSection.tsx
│   └── WhyUsSection.tsx
├── lib/
│   └── utils.ts
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

### Procedura Next.js:

1. **Via Git (consigliato):**
   - Crea un repository GitHub/GitLab
   - Pusha tutti i file del progetto
   - In Netlify: "New site from Git"
   - Seleziona il repository
   - Netlify rileverà automaticamente Next.js
   - Build command: `npm run build` (automatico)
   - Publish directory: `.next` (automatico)

2. **Via Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod
   ```

---

## 📝 Configurazione Netlify (opzionale)

Il file `netlify.toml` è già stato creato per ottimizzare il deploy Next.js.

---

## ⚡ Consigliata: Opzione 1 (HTML statico)

Per un sito one-page come questo, l'HTML statico è la soluzione migliore:
- ✅ Deploy istantaneo
- ✅ Zero configurazione
- ✅ Performance eccellente
- ✅ Costi minimi
- ✅ Facile da mantenere

Basta caricare solo `index.html` e funziona subito!

