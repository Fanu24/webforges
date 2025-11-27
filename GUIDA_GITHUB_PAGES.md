# 🚀 Guida Deploy con GitHub Pages

## Vantaggi GitHub Pages
- ✅ **Gratuito** e illimitato
- ✅ **HTTPS automatico**
- ✅ **Deploy automatico** ad ogni push
- ✅ **Nessuna configurazione complessa**
- ✅ **URL:** `tuousername.github.io/webforges`

---

## 📋 Passo 1: Attiva GitHub Pages

1. Vai sul tuo repository: https://github.com/Fanu24/webforges
2. Clicca su **"Settings"** (in alto)
3. Nel menu laterale, clicca su **"Pages"**
4. In **"Source"**:
   - Seleziona **"Deploy from a branch"**
   - Branch: **`main`**
   - Folder: **`/ (root)`**
5. Clicca **"Save"**

---

## ⏱️ Attendi il Deploy

- GitHub Pages impiega **1-5 minuti** per il primo deploy
- Dopo, il sito sarà disponibile su:
  ```
  https://fanu24.github.io/webforges/
  ```

---

## 🔗 URL del Tuo Sito

- **Homepage:** `https://fanu24.github.io/webforges/`
- **Articolo Blog:** `https://fanu24.github.io/webforges/blog/ristorante-trastevere-roma.html`
- **Admin:** `https://fanu24.github.io/webforges/admin.html`

---

## 🔄 Deploy Automatico

Ogni volta che fai push su GitHub:

```bash
git add .
git commit -m "Aggiornamento sito"
git push
```

GitHub Pages aggiornerà automaticamente il sito in 1-2 minuti!

---

## ⚙️ Personalizza l'URL (Opzionale)

Se vuoi un dominio personalizzato:

1. In Settings → Pages, aggiungi il tuo dominio
2. Configura i DNS del tuo dominio
3. Il sito sarà disponibile sul tuo dominio

---

## 🆘 Problemi Comuni

### "404 Not Found"
- Verifica che GitHub Pages sia attivato
- Controlla che i file siano nella root del repository
- Attendi 5 minuti dopo l'attivazione

### "Il sito non si aggiorna"
- GitHub Pages può impiegare 1-5 minuti
- Verifica che il push sia andato a buon fine
- Controlla Actions per eventuali errori

### "File non trovati"
- Assicurati che i percorsi siano relativi (es: `/blog/articolo.html`)
- Non usare percorsi assoluti con dominio

---

## ✅ Checklist

- [ ] GitHub Pages attivato in Settings → Pages
- [ ] Branch: `main`, Folder: `/ (root)`
- [ ] File `index.html` nella root
- [ ] File `blog/ristorante-trastevere-roma.html` presente
- [ ] Push fatto su GitHub
- [ ] Atteso 1-5 minuti per il deploy

---

## 🎯 Vantaggi vs Netlify

| GitHub Pages | Netlify |
|-------------|---------|
| ✅ Gratuito | ✅ Gratuito |
| ✅ Semplicissimo | ⚠️ Configurazione più complessa |
| ✅ Nessun plugin | ⚠️ Plugin Next.js causa problemi |
| ✅ Deploy automatico | ✅ Deploy automatico |
| ✅ HTTPS automatico | ✅ HTTPS automatico |

**Per HTML statico, GitHub Pages è perfetto!**

---

## 🔗 Link Utili

- [Il tuo repository](https://github.com/Fanu24/webforges)
- [GitHub Pages Settings](https://github.com/Fanu24/webforges/settings/pages)
- [Documentazione GitHub Pages](https://docs.github.com/en/pages)

