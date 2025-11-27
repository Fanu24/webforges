# Come Installare Node.js per Generare gli Articoli

## ⚡ Installazione Rapida

1. **Vai su**: https://nodejs.org/
2. **Scarica** la versione **LTS** (Long Term Support) - consigliata
3. **Installa** il file scaricato (segui la procedura guidata)
4. **Riavvia** il terminale/PowerShell
5. **Verifica** l'installazione:
   ```bash
   node --version
   npm --version
   ```

## 🚀 Dopo l'Installazione

Esegui questo comando per generare tutti gli articoli:

```bash
node scripts/generate-all-articles.js
```

Oppure usa il file batch:

```bash
scripts\generate-all-articles.bat
```

## 📊 Quanti Articoli Verranno Generati?

- **33 categorie** × **25 località** = **~825 articoli**

Ogni articolo sarà personalizzato con:
- ✅ Titolo SEO ottimizzato
- ✅ Meta description unica
- ✅ Keywords specifiche
- ✅ Illustrazione SVG per categoria
- ✅ Contenuti personalizzati per settore
- ✅ Link canonici corretti

## ⏱️ Tempo Stimato

La generazione di tutti gli articoli richiede circa **2-5 minuti** a seconda del computer.

## 🔄 Aggiornare Articoli Esistenti

Se vuoi aggiornare tutti gli articoli esistenti (es. dopo aver cambiato il nome del sito):

```bash
node scripts/update-all-articles.js
```

## ❓ Problemi?

Se riscontri problemi:
1. Assicurati di aver riavviato il terminale dopo l'installazione
2. Verifica che Node.js sia nel PATH: `where node`
3. Controlla la versione: `node --version` (dovrebbe essere v18 o superiore)

