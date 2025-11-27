# Pipeline Blog - Sistema di Configurazione Centralizzata

## 📋 Panoramica

Questo sistema permette di gestire centinaia di articoli blog con una configurazione centralizzata. Modificando un solo file (`config/site-config.js`), tutti gli articoli si aggiornano automaticamente.

## 🎯 Vantaggi

- ✅ **Un solo punto di modifica**: Cambia nome sito, URL, contatti in un file
- ✅ **Consistenza**: Tutti gli articoli usano le stesse informazioni brand
- ✅ **Scalabilità**: Funziona con 10 o 1000 articoli
- ✅ **Manutenibilità**: Facile aggiornare informazioni brand

## 📁 Struttura File

```
├── config/
│   └── site-config.js          # ⭐ CONFIGURAZIONE CENTRALE
├── templates/
│   └── article-template.html   # Template per nuovi articoli
├── scripts/
│   ├── generate-article.js      # Genera nuovo articolo
│   └── update-all-articles.js  # Aggiorna tutti gli articoli
└── blog/
    └── *.html                  # Articoli generati
```

## 🚀 Quick Start

### 1. Modificare Configurazione

Apri `config/site-config.js` e modifica i valori:

```javascript
const SITE_CONFIG = {
  SITE_NAME: "Il Tuo Nuovo Nome",  // ← Cambia qui
  SITE_URL: "https://tuodominio.com",  // ← Cambia qui
  // ... altri valori
};
```

### 2. Aggiornare Tutti gli Articoli

Esegui lo script di aggiornamento:

```bash
node scripts/update-all-articles.js
```

Tutti gli articoli in `blog/` verranno aggiornati automaticamente!

## 📝 Generare Nuovo Articolo

### Prerequisiti

1. Assicurati che `data/categories.js` contenga la categoria
2. Assicurati che `data/locations.js` contenga la località

### Comando

```bash
node scripts/generate-article.js --category=ristoranti --location=trastevere-roma
```

### Esempio

```bash
# Genera articolo per ristorante a Trastevere
node scripts/generate-article.js --category=ristoranti --location=trastevere-roma

# Genera articolo per hotel a Centro Storico
node scripts/generate-article.js --category=hotel --location=centro-storico-roma
```

### Output

Lo script genera:
- File HTML in `blog/{categoria}-{località}.html`
- SEO meta tags completi
- Link canonici
- Schema.org markup

**Nota**: Dopo la generazione, devi ancora aggiungere manualmente:
- Contenuto hero section
- Contenuto articolo completo
- CSS styles (copia da articolo esistente)

## 🔄 Workflow Completo

### Scenario 1: Cambio Nome Sito

1. **Modifica configurazione**:
   ```javascript
   // config/site-config.js
   SITE_NAME: "Nuovo Nome Studio"
   ```

2. **Aggiorna tutti gli articoli**:
   ```bash
   node scripts/update-all-articles.js
   ```

3. **Verifica**: Controlla alcuni articoli per confermare l'aggiornamento

### Scenario 2: Cambio URL/Dominio

1. **Modifica configurazione**:
   ```javascript
   // config/site-config.js
   SITE_URL: "https://nuovodominio.com"
   ```

2. **Aggiorna tutti gli articoli**:
   ```bash
   node scripts/update-all-articles.js
   ```

3. **Verifica**: Controlla URL canonici negli articoli

### Scenario 3: Generare 100 Articoli

1. **Prepara lista** categoria × località
2. **Esegui script in loop**:
   ```bash
   # Esempio con bash
   for cat in ristoranti hotel studio-legale; do
     for loc in trastevere centro-storico testaccio; do
       node scripts/generate-article.js --category=$cat --location=$loc
     done
   done
   ```

3. **Aggiungi contenuti**: Per ogni articolo, aggiungi contenuto hero e body

## 📋 Configurazione Disponibile

Tutti i valori in `config/site-config.js`:

| Variabile | Descrizione | Esempio |
|-----------|-------------|---------|
| `SITE_NAME` | Nome completo brand | "WebForge Studio" |
| `SITE_NAME_SHORT` | Nome breve | "WebForge" |
| `SITE_URL` | URL base completo | "https://fanu24.github.io/webforges" |
| `SITE_URL_BASE` | URL base senza trailing | "https://fanu24.github.io/webforges" |
| `CONTACT_EMAIL` | Email contatti | "info@webforgestudio.it" |
| `CURRENT_YEAR` | Anno corrente (auto) | 2024 |
| `FOOTER_TEXT` | Testo footer | "Siti Web per..." |
| `CTA_TEXT` | Testo CTA | "Richiedi Preventivo Gratuito" |
| `NAV_HOME` | Testo link Home | "Home" |
| `NAV_SERVICES` | Testo link Servizi | "Servizi" |
| `NAV_CONTACTS` | Testo link Contatti | "Contatti" |

## 🔧 Personalizzazione

### Aggiungere Nuove Variabili

1. Aggiungi in `config/site-config.js`:
   ```javascript
   NUOVA_VARIABILE: "Valore"
   ```

2. Usa nel template con `{{NUOVA_VARIABILE}}`

3. Aggiungi sostituzione in `scripts/generate-article.js`

### Modificare Template

Modifica `templates/article-template.html` per cambiare struttura articoli.

**Placeholder disponibili**:
- `{{SITE_NAME}}` - Nome brand
- `{{ARTICLE_TITLE}}` - Titolo articolo
- `{{CANONICAL_URL}}` - URL canonico
- E altri... (vedi template)

## ⚠️ Note Importanti

1. **Backup**: Prima di eseguire `update-all-articles.js`, fai backup degli articoli
2. **Test**: Testa su pochi articoli prima di aggiornare tutti
3. **Contenuto**: Gli script aggiornano solo metadati, non il contenuto degli articoli
4. **CSS**: Gli articoli generati non includono CSS completo, copia da articolo esistente

## 🐛 Troubleshooting

### Script non trova file

Verifica che i percorsi siano corretti:
- `config/site-config.js` esiste?
- `data/categories.js` esiste?
- `data/locations.js` esiste?

### Articoli non si aggiornano

1. Controlla che i pattern di ricerca corrispondano al formato degli articoli
2. Verifica manualmente un articolo per vedere il formato esatto
3. Modifica i pattern in `update-all-articles.js` se necessario

### Node.js non installato

Installa Node.js da https://nodejs.org/

## 📚 File di Riferimento

- **Configurazione**: `config/site-config.js`
- **Template**: `templates/article-template.html`
- **Generatore**: `scripts/generate-article.js`
- **Aggiornatore**: `scripts/update-all-articles.js`

## 💡 Best Practices

1. **Version Control**: Committa `config/site-config.js` nel repository
2. **Documentazione**: Documenta valori personalizzati aggiunti
3. **Test**: Testa sempre su pochi articoli prima di aggiornare tutti
4. **Backup**: Mantieni backup degli articoli prima di aggiornamenti massivi

## 🔮 Sviluppi Futuri

Possibili miglioramenti:
- [ ] Template engine più avanzato (Handlebars, EJS)
- [ ] Generazione automatica contenuto articolo
- [ ] Integrazione con build system (Webpack, Vite)
- [ ] Preview articoli prima di salvare
- [ ] Validazione SEO automatica

---

**Creato per**: Sistema blog scalabile con configurazione centralizzata  
**Ultimo aggiornamento**: 2024

