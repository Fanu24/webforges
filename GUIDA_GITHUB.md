# 🚀 Guida Deploy con GitHub - WebForge Studio

## 📋 Panoramica

Con GitHub puoi:
1. **GitHub Pages** - Hosting gratuito direttamente da GitHub
2. **Netlify + GitHub** - Deploy automatico ogni volta che fai push

---

## 🎯 Opzione 1: GitHub Pages (Hosting Gratuito)

### Passo 1: Crea un Repository GitHub

1. Vai su [github.com](https://github.com) e accedi (o crea un account)
2. Clicca su **"+"** in alto a destra → **"New repository"**
3. Compila:
   - **Repository name:** `webforge-studio` (o il nome che preferisci)
   - **Description:** "Sito web WebForge Studio"
   - **Visibility:** Pubblico (per GitHub Pages gratuito) o Privato
   - ✅ **NON** spuntare "Add a README file" (lo creeremo dopo)
4. Clicca **"Create repository"**

### Passo 2: Inizializza Git nel Tuo Progetto

Apri il terminale nella cartella del progetto e esegui:

```bash
# Inizializza Git (se non l'hai già fatto)
git init

# Aggiungi tutti i file
git add .

# Crea il primo commit
git commit -m "Initial commit: WebForge Studio website"

# Collega al repository GitHub (sostituisci TUO-USERNAME)
git remote add origin https://github.com/TUO-USERNAME/webforge-studio.git

# Rinomina il branch in main (se necessario)
git branch -M main

# Carica il codice su GitHub
git push -u origin main
```

**Nota:** Se ti chiede username/password, usa un **Personal Access Token** invece della password:
- Vai su GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
- Genera un nuovo token con permessi `repo`
- Usa il token come password

### Passo 3: Attiva GitHub Pages

1. Vai sul tuo repository su GitHub
2. Clicca su **"Settings"** (in alto)
3. Scorri fino a **"Pages"** (menu laterale sinistro)
4. In **"Source"**:
   - Seleziona **"Deploy from a branch"**
   - Branch: **`main`**
   - Folder: **`/ (root)`**
5. Clicca **"Save"**

### Passo 4: Il Tuo Sito è Online!

Dopo qualche minuto, il sito sarà disponibile su:
```
https://TUO-USERNAME.github.io/webforge-studio/
```

**Esempio:** Se il tuo username è `mario-rossi` e il repo è `webforge-studio`:
```
https://mario-rossi.github.io/webforge-studio/
```

---

## ⚡ Opzione 2: Netlify + GitHub (Deploy Automatico)

Questa opzione è **MIGLIORE** perché:
- ✅ Deploy più veloce
- ✅ URL personalizzabile (es: `webforge-studio.netlify.app`)
- ✅ Deploy automatico ad ogni push
- ✅ Preview delle modifiche prima di pubblicare

### Passo 1: Crea Repository GitHub (come sopra)

Segui i **Passi 1-2** della sezione GitHub Pages per creare e pushare il repository.

### Passo 2: Collega a Netlify

1. Vai su [netlify.com](https://netlify.com) e accedi
2. Clicca su **"Add new site"** → **"Import an existing project"**
3. Seleziona **"GitHub"** e autorizza Netlify
4. Scegli il repository `webforge-studio`
5. Netlify rileverà automaticamente che è HTML statico
6. **Build settings:**
   - Build command: *(lascia vuoto - non serve)*
   - Publish directory: **`.`** (punto = root)
7. Clicca **"Deploy site"**

### Passo 3: Personalizza l'URL

1. Vai su **"Site settings"** → **"Change site name"**
2. Scegli un nome (es: `webforge-studio`)
3. Il tuo sito sarà su: `webforge-studio.netlify.app`

### Passo 4: Deploy Automatico

Ora, ogni volta che fai:
```bash
git add .
git commit -m "Aggiornamento sito"
git push
```

Netlify **deployerà automaticamente** le modifiche in pochi secondi! 🎉

---

## 🔄 Workflow Quotidiano

### Per aggiornare il sito:

```bash
# 1. Fai le modifiche al file index.html

# 2. Aggiungi le modifiche
git add index.html

# 3. Crea un commit
git commit -m "Aggiunte animazioni interattive"

# 4. Carica su GitHub
git push

# 5. Netlify/GitHub Pages aggiornerà automaticamente!
```

---

## 📝 Comandi Git Essenziali

```bash
# Vedere lo stato dei file
git status

# Aggiungere tutti i file modificati
git add .

# Aggiungere un file specifico
git add index.html

# Creare un commit
git commit -m "Descrizione delle modifiche"

# Caricare su GitHub
git push

# Vedere la cronologia dei commit
git log

# Tornare a una versione precedente (se necessario)
git checkout HEAD~1
```

---

## 🎨 Personalizzare l'URL GitHub Pages

### Opzione A: Usare un dominio personalizzato

1. In GitHub Pages settings, aggiungi il tuo dominio
2. Configura i DNS del tuo dominio

### Opzione B: Cambiare il nome del repository

Il nome del repository diventa parte dell'URL:
- Repository: `webforge-studio` → URL: `username.github.io/webforge-studio`
- Repository: `mio-sito` → URL: `username.github.io/mio-sito`

---

## 🚨 Risoluzione Problemi

### "Repository not found"
- Verifica di aver fatto `git remote add origin` correttamente
- Controlla che il repository esista su GitHub

### "Permission denied"
- Usa un Personal Access Token invece della password
- Verifica di avere i permessi sul repository

### Il sito non si aggiorna
- GitHub Pages può impiegare 1-5 minuti
- Netlify è più veloce (10-30 secondi)
- Prova a fare un hard refresh (Ctrl+F5)

### File non si vedono
- Assicurati che `index.html` sia nella root del repository
- Verifica che il file sia stato committato (`git status`)

---

## ✅ Checklist Finale

- [ ] Repository GitHub creato
- [ ] Codice pushato su GitHub
- [ ] GitHub Pages attivato (o Netlify collegato)
- [ ] Sito accessibile online
- [ ] Testato su mobile
- [ ] Tutte le animazioni funzionano

---

## 🔗 Link Utili

- [GitHub](https://github.com)
- [GitHub Pages](https://pages.github.com)
- [Netlify](https://netlify.com)
- [Git Documentation](https://git-scm.com/doc)

---

## 💡 Consiglio

**Usa Netlify + GitHub** per:
- Deploy più veloce
- URL personalizzabile
- Preview delle modifiche
- Analytics integrate (opzionale)

**Usa solo GitHub Pages** se:
- Vuoi tutto su GitHub
- L'URL `username.github.io/repo` ti va bene
- Non ti serve deploy istantaneo

---

## 🎯 Prossimi Passi

1. Crea il repository GitHub
2. Pusha il codice
3. Attiva GitHub Pages o collega Netlify
4. Condividi il link del tuo sito! 🚀

