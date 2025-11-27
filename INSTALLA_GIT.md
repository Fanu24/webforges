# 📥 Come Installare Git su Windows

## 🚀 Metodo 1: Download Diretto (Consigliato)

### Passo 1: Scarica Git
1. Vai su: [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Il download inizierà automaticamente
3. Oppure clicca su "Click here to download" se non parte

### Passo 2: Installa Git
1. Apri il file scaricato (es: `Git-2.43.0-64-bit.exe`)
2. Clicca "Next" su tutte le schermate
3. **IMPORTANTE:** Lascia tutte le opzioni predefinite (sono già ottimali)
4. Clicca "Install"
5. Attendi il completamento
6. Clicca "Finish"

### Passo 3: Verifica Installazione
1. Apri un **NUOVO** terminale (chiudi e riapri se già aperto)
2. Digita:
   ```bash
   git --version
   ```
3. Dovresti vedere qualcosa come: `git version 2.43.0`

✅ **Git è installato!**

---

## 🎯 Metodo 2: Con Chocolatey (Se lo hai già)

Se hai Chocolatey installato:
```bash
choco install git
```

---

## 🎯 Metodo 3: Con Winget (Windows 11)

Se hai Windows 11 con winget:
```bash
winget install --id Git.Git -e --source winget
```

---

## ⚙️ Configurazione Iniziale (Dopo Installazione)

Dopo aver installato Git, configura nome e email:

```bash
git config --global user.name "Il Tuo Nome"
git config --global user.email "tua.email@esempio.com"
```

**Esempio:**
```bash
git config --global user.name "Mario Rossi"
git config --global user.email "mario.rossi@gmail.com"
```

---

## ✅ Verifica che Funzioni

Apri un nuovo terminale e prova:

```bash
git --version
git config --global user.name
git config --global user.email
```

Se vedi le informazioni, tutto è configurato correttamente!

---

## 🔄 Dopo l'Installazione

1. **Chiudi e riapri il terminale** (importante!)
2. Esegui di nuovo `setup-github.bat`
3. Oppure segui i comandi manuali nella guida

---

## 🆘 Problemi Comuni

### "git non è riconosciuto" dopo installazione
- **Soluzione:** Chiudi e riapri il terminale
- Git si aggiunge al PATH, ma serve riavviare il terminale

### Non trovo Git nel menu Start
- Git si installa ma non crea un'icona nel menu
- Usalo dal terminale (PowerShell o CMD)

### Voglio un'interfaccia grafica
- **GitHub Desktop:** [desktop.github.com](https://desktop.github.com)
- **GitKraken:** [gitkraken.com](https://gitkraken.com)
- **Sourcetree:** [sourcetreeapp.com](https://sourcetreeapp.com)

---

## 📝 Alternative: GitHub Desktop (Interfaccia Grafica)

Se preferisci un'interfaccia grafica invece della riga di comando:

1. Scarica **GitHub Desktop**: [desktop.github.com](https://desktop.github.com)
2. Installa e accedi con il tuo account GitHub
3. Clicca "File" → "Add Local Repository"
4. Seleziona la cartella del progetto
5. Clicca "Publish repository" per caricare su GitHub

**Vantaggi:**
- ✅ Interfaccia grafica semplice
- ✅ Include Git automaticamente
- ✅ Facile da usare per principianti
- ✅ Visualizza le modifiche prima di committare

---

## 🎯 Prossimi Passi

Dopo aver installato Git:

1. ✅ Verifica: `git --version`
2. ✅ Configura: nome e email
3. ✅ Esegui: `setup-github.bat` di nuovo
4. ✅ Oppure segui la guida manuale

---

## 🔗 Link Utili

- [Download Git](https://git-scm.com/download/win)
- [GitHub Desktop](https://desktop.github.com)
- [Documentazione Git](https://git-scm.com/doc)

