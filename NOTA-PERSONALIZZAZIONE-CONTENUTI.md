# Personalizzazione Contenuti Articoli

## ✅ Cosa è Personalizzato Automaticamente

Lo script `generate-all-articles.js` personalizza automaticamente:

### 1. Meta Tags SEO
- ✅ Titolo articolo: "Sito Web per [Categoria] a [Località], [Città]"
- ✅ Meta description personalizzata
- ✅ Keywords specifiche categoria + località
- ✅ URL canonici corretti

### 2. Contenuti Hero Section
- ✅ Badge categoria: "[Categoria] • [Località], [Città]"
- ✅ Titolo hero: "Sito Web per [Categoria] a [Località]"
- ✅ Sottotitolo personalizzato per categoria (vedi `category-content-mapping.js`)

### 3. Terminologia Specifica Settore
- ✅ **Ristoranti**: "prenotazioni", "menu online", "clienti"
- ✅ **Meccanici**: "appuntamenti", "preventivi online", "clienti"
- ✅ **Dentisti**: "prenotazioni visite", "pazienti", "consulenze"
- ✅ **Hotel**: "prenotazioni camere", "ospiti", "tariffe"
- ✅ **Parrucchieri**: "prenotazioni trattamenti", "clienti", "portfolio"
- ✅ **Studi Legali**: "consulenze", "clienti", "credibilità"

### 4. Sezioni Articolo
- ✅ "Il Problema" - testo personalizzato per categoria
- ✅ "La Soluzione" - benefici specifici settore
- ✅ "Perché [Località]" - località sostituita
- ✅ FAQ - domande personalizzate per categoria

### 5. Link e CTA
- ✅ Link contatti con parametri categoria e località
- ✅ Testo CTA personalizzato

## ⚠️ Cosa NON è Personalizzato (Richiede Intervento Manuale)

### 1. Statistiche Specifiche
- ❌ Statistiche nella sezione "Il Problema" sono generiche
- **Soluzione**: Aggiungi statistiche in `data/statistics.js` per ogni categoria

### 2. ROI e Calcoli Economici
- ❌ ROI e calcoli sono basati su ristoranti
- **Soluzione**: Aggiungi ROI specifici in `data/statistics.js`

### 3. Funzionalità Dettagliate
- ❌ Le card funzionalità sono generiche
- **Soluzione**: Personalizza manualmente o aggiungi template per categoria

### 4. Illustrazioni SVG
- ❌ Tutti gli articoli usano illustrazione ristorante
- **Soluzione**: Modifica SVG hero per categoria (vedi `data/illustrations.js`)

### 5. Contenuti Località-Specifici
- ❌ Testi su "Trastevere" sono sostituiti ma potrebbero non essere adatti
- **Soluzione**: Rivedi manualmente sezioni "Perché [Località]" per ogni località

## 📝 Come Migliorare la Personalizzazione

### Aggiungere Nuova Categoria al Mapping

Modifica `data/category-content-mapping.js`:

```javascript
'nuova-categoria': {
  actionVerb: 'contattare',
  actionNoun: 'contatti',
  actionNounPlural: 'contatti',
  clientTerm: 'clienti',
  serviceTerm: 'servizi online',
  searchTerm: 'nuova categoria',
  benefitFocus: 'visibilità e contatti',
  heroSubtitle: 'Testo personalizzato...',
  problemText: 'Testo problema...',
  solutionText: 'Testo soluzione...'
}
```

### Aggiungere Statistiche Categoria

Modifica `data/statistics.js`:

```javascript
'nuova-categoria': {
  problem: {
    title: 'Titolo problema',
    stats: [
      { value: '85%', label: 'Statistica 1', source: 'Fonte' }
    ],
    cost: {
      description: 'Costo inazione...',
      annual: 'Ricavi persi...'
    }
  },
  roi: {
    investment: '€X - €Y',
    monthlyGain: { ... },
    roi: 'X% ROI'
  }
}
```

### Personalizzare Illustrazioni

Modifica `data/illustrations.js` per aggiungere illustrazioni specifiche categoria, poi aggiorna lo script per usarle.

## 🔍 Verifica Personalizzazione

Dopo la generazione, verifica alcuni articoli:

1. **Articolo Ristorante**: Dovrebbe parlare di "prenotazioni", "menu online"
2. **Articolo Meccanico**: Dovrebbe parlare di "appuntamenti", "preventivi"
3. **Articolo Dentista**: Dovrebbe parlare di "prenotazioni visite", "pazienti"

Se trovi testi generici o non appropriati, aggiungi la categoria a `category-content-mapping.js`.

## 📊 Copertura Attuale

### Categorie con Mapping Completo
- ✅ Ristoranti
- ✅ Pizzerie
- ✅ Hotel
- ✅ Meccanici
- ✅ Dentisti
- ✅ Parrucchieri
- ✅ Studi Legali

### Categorie con Mapping Default
- ⚠️ Altre categorie usano mapping generico
- **Azione**: Aggiungi mapping specifico in `category-content-mapping.js`

---

**Nota**: La personalizzazione è migliorabile. Aggiungi più categorie al mapping per risultati migliori!

