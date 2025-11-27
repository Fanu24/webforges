# Esempi di Utilizzo Pipeline Blog

## Esempio 1: Cambiare Nome del Sito

### Prima
```javascript
// config/site-config.js
SITE_NAME: "WebForge Studio"
```

### Dopo
```javascript
// config/site-config.js
SITE_NAME: "Nuovo Nome Studio"
```

### Esegui
```bash
node scripts/update-all-articles.js
```

**Risultato**: Tutti gli articoli in `blog/` avranno il nuovo nome nel logo, footer, meta tags, ecc.

---

## Esempio 2: Cambiare URL/Dominio

### Prima
```javascript
SITE_URL: "https://fanu24.github.io/webforges"
```

### Dopo
```javascript
SITE_URL: "https://nuovodominio.com"
```

### Esegui
```bash
node scripts/update-all-articles.js
```

**Risultato**: Tutti gli URL canonici e Open Graph URL verranno aggiornati.

---

## Esempio 3: Generare Nuovo Articolo

### Comando
```bash
node scripts/generate-article.js --category=ristoranti --location=trastevere-roma
```

### Output
```
✅ Articolo generato con successo!
📄 File: blog/ristorante-trastevere-roma.html
🔗 URL: https://fanu24.github.io/webforges/blog/ristorante-trastevere-roma.html
📝 Titolo: Sito Web per Ristoranti a Trastevere, Roma
```

### Prossimi Passi
1. Apri il file generato
2. Copia CSS completo da articolo esistente
3. Aggiungi contenuto hero section
4. Aggiungi contenuto articolo completo

---

## Esempio 4: Aggiornare Anno Copyright

L'anno si aggiorna automaticamente perché `CURRENT_YEAR` è calcolato dinamicamente:

```javascript
CURRENT_YEAR: new Date().getFullYear()
```

Non serve fare nulla, si aggiorna automaticamente ogni anno!

---

## Esempio 5: Batch Generate (Generare Molti Articoli)

### Script Bash
```bash
#!/bin/bash

categories=("ristoranti" "hotel" "studio-legale")
locations=("trastevere-roma" "centro-storico-roma" "testaccio-roma")

for cat in "${categories[@]}"; do
  for loc in "${locations[@]}"; do
    echo "Generando: $cat - $loc"
    node scripts/generate-article.js --category=$cat --location=$loc
  done
done
```

### Script PowerShell (Windows)
```powershell
$categories = @("ristoranti", "hotel", "studio-legale")
$locations = @("trastevere-roma", "centro-storico-roma", "testaccio-roma")

foreach ($cat in $categories) {
    foreach ($loc in $locations) {
        Write-Host "Generando: $cat - $loc"
        node scripts/generate-article.js --category=$cat --location=$loc
    }
}
```

---

## Esempio 6: Verificare Configurazione

### Test Config
Crea file `test-config.js`:
```javascript
const config = require('./config/site-config.js');
console.log('Nome sito:', config.SITE_NAME);
console.log('URL:', config.SITE_URL);
console.log('Anno:', config.CURRENT_YEAR);
```

Esegui:
```bash
node test-config.js
```

---

## Troubleshooting

### Errore: "Cannot find module"
**Soluzione**: Assicurati di essere nella root del progetto quando esegui gli script.

### Articoli non si aggiornano
**Soluzione**: 
1. Verifica che `config/site-config.js` esista
2. Controlla che gli articoli abbiano gli ID corretti (`site-name-nav`, `footer-copyright`)
3. Apri console browser per vedere errori JavaScript

### Script non trova categorie/località
**Soluzione**: Verifica che `data/categories.js` e `data/locations.js` esistano e contengano i dati.


