# 🚀 Guida al Deploy - WebForge Studio

## ⚡ Opzione 1: Netlify (CONSIGLIATA - Più Veloce)

### Metodo Drag & Drop (30 secondi)

1. **Vai su [netlify.com](https://netlify.com)**
   - Crea un account gratuito (puoi usare GitHub/Google)

2. **Trascina e rilascia**
   - Nella dashboard Netlify, trova l'area "Sites"
   - Trascina la cartella del progetto o solo il file `index.html`
   - Netlify creerà automaticamente un URL (es: `random-name-123.netlify.app`)

3. **Personalizza l'URL**
   - Vai su "Site settings" → "Change site name"
   - Scegli un nome personalizzato (es: `webforge-studio`)

4. **Deploy automatico con Git (opzionale)**
   - Collega un repository GitHub
   - Ogni push aggiorna automaticamente il sito

**✅ Vantaggi:**
- Deploy in 30 secondi
- HTTPS automatico
- URL personalizzabile
- Deploy automatico con Git
- Gratuito per siti statici

---

## 🌐 Opzione 2: Vercel (Alternativa Ottima)

1. **Vai su [vercel.com](https://vercel.com)**
   - Accedi con GitHub/Google

2. **Importa il progetto**
   - Clicca "Add New Project"
   - Trascina la cartella o collega GitHub
   - Vercel rileverà automaticamente il file HTML

3. **Deploy**
   - Clicca "Deploy"
   - Il sito sarà online in pochi secondi

**✅ Vantaggi:**
- Molto veloce
- Performance eccellente
- Deploy automatico con Git

---

## 📦 Opzione 3: GitHub Pages (Gratuito)

1. **Crea un repository GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/TUO-USERNAME/webforge-studio.git
   git push -u origin main
   ```

2. **Attiva GitHub Pages**
   - Vai su Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `main` / `root`
   - Salva

3. **Il sito sarà disponibile su:**
   `https://TUO-USERNAME.github.io/webforge-studio/`

**✅ Vantaggi:**
- Completamente gratuito
- Integrato con Git
- URL: `username.github.io/repo-name`

---

## 🧪 Opzione 4: Test Locale (Prima di Deployare)

### Con Python (più semplice)
```bash
# Python 3
python -m http.server 8000

# Poi apri: http://localhost:8000
```

### Con Node.js (http-server)
```bash
npm install -g http-server
http-server -p 8000
```

### Con PHP
```bash
php -S localhost:8000
```

---

## 🔄 Workflow Consigliato

### Per vedere modifiche in live rapidamente:

1. **Sviluppo Locale**
   ```bash
   # Apri index.html nel browser o usa un server locale
   python -m http.server 8000
   ```

2. **Deploy su Netlify**
   - Trascina la cartella su Netlify
   - Ottieni URL live immediato

3. **Deploy Automatico (Setup una volta)**
   - Collega GitHub a Netlify
   - Ogni modifica → push → deploy automatico

---

## 📝 Checklist Pre-Deploy

- [ ] Testare `index.html` localmente
- [ ] Verificare che tutte le animazioni funzionino
- [ ] Controllare su mobile (responsive)
- [ ] Testare tutti i link e form
- [ ] Verificare performance (Google PageSpeed)

---

## 🎯 Raccomandazione Finale

**Per il tuo caso (HTML statico con animazioni):**

1. **Netlify** è la scelta migliore:
   - Deploy in 30 secondi
   - Zero configurazione
   - Performance ottime
   - HTTPS automatico
   - Gratuito

2. **Setup una volta:**
   - Collega GitHub
   - Deploy automatico ad ogni push
   - Modifiche live in pochi secondi

---

## 🚨 Note Importanti

- **File necessario:** Solo `index.html` (tutto è inline)
- **Nessun build necessario:** È HTML statico puro
- **Animazioni:** Funzionano tutte lato client (JavaScript)
- **Performance:** Ottime perché tutto è in un file

---

## 🔗 Link Utili

- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)
- [GitHub Pages](https://pages.github.com)

