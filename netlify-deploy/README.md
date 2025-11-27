# 🚀 Deploy su Netlify - WebForge Studio

Questa cartella contiene **tutto ciò che serve** per pubblicare il sito su Netlify.

## 📁 File inclusi

- ✅ `index.html` - La landing page completa (tutto in un unico file)
- ✅ `_redirects` - Configurazione redirect per Netlify

## 🎯 Come pubblicare su Netlify

### Metodo 1: Drag & Drop (PIÙ SEMPLICE) ⭐

1. Vai su [app.netlify.com](https://app.netlify.com)
2. Accedi o crea un account gratuito
3. Nella dashboard, vai alla sezione **"Sites"**
4. **Trascina e rilascia** questa intera cartella (`netlify-deploy`) nella zona di upload
5. **Fatto!** Il sito sarà online in pochi secondi 🎉

### Metodo 2: Via Git (Avanzato)

1. Crea un repository su GitHub/GitLab con questa cartella
2. In Netlify: "New site from Git"
3. Seleziona il tuo repository
4. Netlify rileverà automaticamente i file statici
5. Clicca "Deploy site"

### Metodo 3: Netlify CLI

```bash
npm install -g netlify-cli
cd netlify-deploy
netlify login
netlify deploy --prod
```

## ✨ Dopo il deploy

Netlify ti darà un URL tipo: `https://random-name-123.netlify.app`

Puoi:
- ✅ Personalizzare il nome del sito nelle impostazioni
- ✅ Configurare un dominio personalizzato
- ✅ Aggiungere SSL gratuito (automatico)

## 💡 Note

- Il file `_redirects` assicura che tutte le route funzionino correttamente
- Il sito è completamente statico e non richiede server o database
- Performance eccellente e caricamento istantaneo
- Gratuito per sempre su Netlify!

---

**Pronto per il deploy!** 🚀

