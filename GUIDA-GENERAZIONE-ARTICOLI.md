# Guida Generazione Articoli Blog

## Prerequisiti

**Node.js** deve essere installato sul sistema.

### Verifica Installazione

Apri PowerShell o CMD e verifica:
```bash
node --version
```

Se non è installato, scarica da: https://nodejs.org/

## Generazione Articoli

### Opzione 1: Script Batch (Windows)

Doppio click su:
```
scripts/generate-all-articles.bat
```

### Opzione 2: Comando Manuale

Apri PowerShell/CMD nella cartella del progetto e esegui:

```bash
node scripts/generate-all-articles.js
```

Per saltare articoli già esistenti:
```bash
node scripts/generate-all-articles.js --skip-existing
```

## Cosa Genera

Lo script genera **TUTTE** le combinazioni:
- **33 categorie** × **34 località** = **1,122 articoli**

### Categorie
- Ristoranti, Pizzerie, Hotel, Studi Legali, Parrucchieri, Palestre, Dentisti, Veterinari, Agenzie Immobiliari, Meccanici, Fiorai, Farmacie, Ottici, Elettricisti, Idraulici, Architetti, Commercialisti, Psicologi, Fisioterapisti, Assicurazioni, Scuole Guida, Negozi di Abbigliamento, Centri Estetici, Trattorie, B&B, Agriturismi, Avvocati, Ingegneri, Consulenti Fiscali, Psicoterapisti, E-commerce

### Località
**Roma**: Centro Storico, Trastevere, Testaccio, Prati, Flaminio, Monti, Campo de' Fiori, EUR, Ostia, San Giovanni, Appio, Nomentana, Tuscolana, Parioli, Fiumicino, Tivoli, Frascati, Castel Gandolfo

**Milano**: Centro, Brera, Navigli, Porta Nuova, Duomo, Garibaldi, Isola, Corso Como, Porta Romana, Naviglio Grande, Porta Venezia, Sesto San Giovanni, Cinisello Balsamo, Rho, Seregno

## Output

Gli articoli vengono generati in:
```
blog/{categoria}-{località}-{città}.html
```

Esempi:
- `blog/ristorante-trastevere-roma.html`
- `blog/hotel-centro-milano.html`
- `blog/studio-legale-prati-roma.html`

## Tempi di Generazione

- **1,122 articoli**: ~5-10 minuti (dipende da velocità disco)
- Progress ogni 50 articoli

## Personalizzazione Automatica

Lo script **personalizza automaticamente** il contenuto per ogni categoria:

### Personalizzazioni per Categoria

- **Terminologia specifica**: 
  - Ristoranti → "prenotazioni", "menu online"
  - Meccanici → "appuntamenti", "preventivi online"
  - Dentisti → "prenotazioni visite", "consulenze"
  - Hotel → "prenotazioni camere", "tariffe"
  - Parrucchieri → "prenotazioni trattamenti", "portfolio"

- **Testi personalizzati**:
  - Hero subtitle adattato al settore
  - Problema e soluzione specifici per categoria
  - FAQ personalizzate
  - Benefici focalizzati sul settore

- **Statistiche settoriali**: Usa dati da `data/statistics.js` quando disponibili

### File di Mapping

Il file `data/category-content-mapping.js` contiene le personalizzazioni per ogni categoria. Puoi modificarlo per aggiungere nuove categorie o personalizzare meglio i testi.

### Personalizzazione Post-Generazione

Dopo la generazione, ogni articolo può essere ulteriormente personalizzato:

1. **Contenuti specifici località**: Aggiungi informazioni sulla zona
2. **Illustrazioni SVG**: Cambia animazioni SVG per categoria (vedi `data/illustrations.js`)
3. **Statistiche locali**: Aggiungi dati specifici della località

## Aggiornamento Massivo

Se cambi configurazione (nome sito, URL, ecc.), aggiorna tutti gli articoli:

```bash
node scripts/update-all-articles.js
```

## Troubleshooting

### "Node.js non trovato"
- Installa Node.js da https://nodejs.org/
- Riavvia terminale dopo installazione

### "Errore caricamento categories.js"
- Verifica che `data/categories.js` esista
- Verifica sintassi del file

### "Errore caricamento locations.js"
- Verifica che `data/locations.js` esista
- Verifica sintassi del file

### Articoli generati ma vuoti
- Verifica che `blog/ristorante-trastevere-roma.html` esista come template
- Lo script usa questo file come base

## Note Importanti

⚠️ **Backup**: Prima di generare, fai backup della cartella `blog/` se contiene articoli importanti

⚠️ **Spazio Disco**: 1,122 articoli occupano ~500-700 MB

⚠️ **Tempo**: La prima generazione completa richiede diversi minuti

## Esempio Output

```
🚀 Generazione articoli blog...

📊 Categorie: 33
📍 Località: 34
📝 Articoli totali: 1122

⏳ Progress: 50/1122 (50 generati, 0 saltati)
⏳ Progress: 100/1122 (100 generati, 0 saltati)
...

✨ Generazione completata!
✅ Articoli generati: 1122
⏭️  Articoli saltati: 0
❌ Errori: 0
📁 Directory: blog/
```

