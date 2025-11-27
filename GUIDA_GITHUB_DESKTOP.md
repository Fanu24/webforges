# 🖥️ Guida con GitHub Desktop (Senza Terminale)

Se non vuoi installare Git o preferisci un'interfaccia grafica, usa **GitHub Desktop**!

---

## 📥 Passo 1: Installa GitHub Desktop

1. Vai su: [desktop.github.com](https://desktop.github.com)
2. Clicca **"Download for Windows"**
3. Apri il file scaricato e installa
4. Apri GitHub Desktop e accedi con il tuo account GitHub

**Nota:** GitHub Desktop include Git automaticamente, non devi installarlo separatamente!

---

## 🚀 Passo 2: Crea il Repository su GitHub

1. Vai su [github.com](https://github.com) e accedi
2. Clicca **"+"** in alto a destra → **"New repository"**
3. Compila:
   - **Repository name:** `webforge-studio`
   - **Description:** "Sito web WebForge Studio"
   - **Visibility:** Pubblico o Privato
   - ❌ **NON** spuntare "Add a README file"
4. Clicca **"Create repository"**

---

## 📂 Passo 3: Aggiungi il Progetto a GitHub Desktop

### Opzione A: Clona il Repository (Se vuoi partire da GitHub)

1. In GitHub Desktop, clicca **"File"** → **"Clone repository"**
2. Seleziona il repository `webforge-studio`
3. Scegli dove salvarlo (es: `C:\Users\TuoNome\Documents\GitHub\webforge-studio`)
4. Clicca **"Clone"**
5. **Copia** tutti i file del tuo progetto (incluso `index.html`) nella cartella clonata
6. In GitHub Desktop vedrai tutti i file modificati
7. Scrivi un messaggio: "Initial commit: WebForge Studio website"
8. Clicca **"Commit to main"**
9. Clicca **"Push origin"** (in alto)

### Opzione B: Aggiungi Repository Locale (Se hai già i file)

1. In GitHub Desktop, clicca **"File"** → **"Add Local Repository"**
2. Clicca **"Choose"** e seleziona la cartella del tuo progetto
3. Se Git non è inizializzato, clicca **"create a repository"**
4. GitHub Desktop rileverà tutti i file
5. Scrivi un messaggio: "Initial commit: WebForge Studio website"
6. Clicca **"Commit to main"**
7. Clicca **"Publish repository"** (in alto)
8. Scegli il nome e la visibilità
9. Clicca **"Publish repository"**

---

## 🌐 Passo 4: Attiva GitHub Pages

1. Vai sul repository su GitHub.com
2. Clicca **"Settings"** (in alto)
3. Menu laterale: **"Pages"**
4. In **"Source"**:
   - Seleziona **"Deploy from a branch"**
   - Branch: **`main`**
   - Folder: **`/ (root)`**
5. Clicca **"Save"**

---

## ✅ Il Tuo Sito è Online!

Dopo 1-2 minuti, il sito sarà disponibile su:
```
https://TUO-USERNAME.github.io/webforge-studio/
```

---

## 🔄 Come Aggiornare il Sito

Ogni volta che modifichi `index.html`:

1. Apri GitHub Desktop
2. Vedrai le modifiche nella lista
3. Scrivi un messaggio (es: "Aggiunte animazioni interattive")
4. Clicca **"Commit to main"**
5. Clicca **"Push origin"** (in alto)
6. GitHub Pages si aggiornerà automaticamente!

---

## 🎯 Vantaggi di GitHub Desktop

- ✅ Interfaccia grafica semplice
- ✅ Include Git (non serve installarlo)
- ✅ Visualizza le modifiche prima di committare
- ✅ Facile da usare per principianti
- ✅ Mostra la cronologia dei commit
- ✅ Gestione branch visuale

---

## 🔗 Link Utili

- [GitHub Desktop Download](https://desktop.github.com)
- [GitHub](https://github.com)
- [GitHub Pages](https://pages.github.com)

---

## 🆘 Problemi?

### "Repository not found"
- Assicurati di aver creato il repository su GitHub.com prima
- Verifica di essere loggato in GitHub Desktop

### "Nothing to commit"
- Verifica di aver modificato i file
- Controlla che i file siano nella cartella corretta

### Il sito non si aggiorna
- GitHub Pages può impiegare 1-5 minuti
- Verifica che GitHub Pages sia attivato in Settings → Pages

