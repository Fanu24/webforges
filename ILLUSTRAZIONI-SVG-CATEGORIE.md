# Illustrazioni SVG per Categoria

## ✅ Categorie con Illustrazioni Specifiche

Ogni categoria ha la sua illustrazione SVG animata personalizzata:

### Ristoranti & Food
- **Ristoranti** (`ristorante-hero`): Piatti fluttuanti, forchetta animata
- **Pizzerie** (`pizzeria-hero`): Pizza rotante con fette animate
- **Trattorie** (`trattoria-hero`): Usa illustrazione ristorante

### Turismo & Ospitalità
- **Hotel** (`hotel-hero`): Edificio con finestre che si illuminano
- **B&B** (`bed-and-breakfast-hero`): Usa illustrazione hotel
- **Agriturismi** (`agriturismo-hero`): Usa illustrazione hotel

### Professioni Legali & Business
- **Studi Legali** (`studio-legale-hero`): Bilancia che oscilla, libri fluttuanti
- **Avvocati** (`avvocato-hero`): Usa illustrazione studio legale
- **Commercialisti** (`commercialista-hero`): Grafici animati, calcolatrice
- **Consulenti Fiscali** (`consulente-fiscale-hero`): Usa illustrazione commercialista

### Salute & Benessere
- **Dentisti** (`dentista-hero`): Trapano rotante, specchietto animato
- **Veterinari** (`veterinario-hero`): Zampa animata, cuore pulsante
- **Parrucchieri** (`parrucchiere-hero`): Forbici che tagliano, capelli ondeggianti
- **Palestre** (`palestra-hero`): Pesi che si sollevano, manubrio rotante
- **Fisioterapisti** (`fisioterapista-hero`): Onde terapia, massaggio
- **Psicologi** (`psicologo-hero`): Cervello pulsante, pensieri fluttuanti
- **Psicoterapisti** (`psicoterapista-hero`): Usa illustrazione psicologo

### Servizi Tecnici
- **Meccanici** (`meccanico-hero`): Chiave rotante, ingranaggi, chiave inglese
- **Elettricisti** (`elettricista-hero`): Fulmine animato, presa elettrica
- **Idraulici** (`idraulico-hero`): Gocce d'acqua, tubi, chiave idraulica

### Retail & Servizi
- **Farmacie** (`farmacia-hero`): Croce farmaceutica pulsante, pillole fluttuanti
- **Ottici** (`ottico-hero`): Occhiali fluttuanti, lenti brillanti
- **Fiorai** (`fioraio-hero`): Fiore che sboccia, petali animati
- **Agenzie Immobiliari** (`agenzia-immobiliare-hero`): Casa fluttuante, finestre illuminate
- **Negozi Abbigliamento** (`negozio-abbigliamento-hero`): Gruccia oscillante, vestiti
- **Centri Estetici** (`centro-estetico-hero`): Specchio brillante, brillantini
- **E-commerce** (`e-commerce-hero`): Carrello animato, prodotti fluttuanti

### Altri Servizi
- **Scuole Guida** (`scuola-guida-hero`): Auto in movimento, volante
- **Assicurazioni** (`assicurazione-hero`): Scudo pulsante, check mark
- **Architetti** (`architetto-hero`): Righello animato, progetti
- **Ingegneri** (`ingegnere-hero`): Usa illustrazione architetto

### Default
- **Default** (`default-hero`): Cerchi fluttuanti, elementi decorativi (per categorie senza illustrazione specifica)

## 🎨 Caratteristiche Illustrazioni

Tutte le illustrazioni includono:
- ✅ **Animazioni CSS**: Movimenti fluidi e accattivanti
- ✅ **Colori Brand**: Cyan (#22d3ee), Purple (#a855f7), Pink (#ec4899)
- ✅ **Gradienti**: Effetti visivi moderni
- ✅ **Performance**: SVG leggeri e scalabili
- ✅ **Responsive**: Si adattano a tutti i dispositivi

## 🔄 Come Funziona

Lo script `generate-all-articles.js`:
1. Carica illustrazioni da `data/illustrations.js`
2. Trova l'SVG nell'articolo template
3. Sostituisce con illustrazione corretta per categoria
4. Rende unici gli ID dei gradienti per evitare conflitti

## 📝 Aggiungere Nuova Illustrazione

Per aggiungere illustrazione per nuova categoria:

1. Aggiungi in `data/illustrations.js`:
```javascript
'nuova-categoria-hero': `
  <svg>...</svg>
`
```

2. Lo script la userà automaticamente quando genera articoli per quella categoria.

## 🎯 Mapping Categorie → Illustrazioni

| Categoria | Slug | Illustrazione |
|-----------|------|---------------|
| Ristoranti | ristorante | ristorante-hero |
| Pizzerie | pizzeria | pizzeria-hero |
| Hotel | hotel | hotel-hero |
| Meccanici | meccanico | meccanico-hero |
| Dentisti | dentista | dentista-hero |
| ... | ... | ... |

(Vedi `data/illustrations.js` per lista completa)

---

**Nota**: Le categorie senza illustrazione specifica usano `default-hero` o l'illustrazione più simile.

