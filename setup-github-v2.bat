@echo off
chcp 65001 >nul
title Setup GitHub - WebForge Studio
color 0A

:START
cls
echo ========================================
echo    Setup GitHub per WebForge Studio
echo ========================================
echo.

REM Verifica se Git e' installato
where git >nul 2>&1
if errorlevel 1 (
    echo [X] Git NON e' installato!
    echo.
    echo ========================================
    echo OPZIONI:
    echo ========================================
    echo.
    echo 1. Installa Git (consigliato per terminale)
    echo 2. Usa GitHub Desktop (piu' semplice)
    echo 3. Esci
    echo.
    set /p SCELTA="Scegli (1/2/3): "
    
    if "%SCELTA%"=="1" (
        echo.
        echo Apertura pagina download Git...
        start https://git-scm.com/download/win
        echo.
        echo Dopo aver installato Git:
        echo 1. CHIUDI questo terminale
        echo 2. RIAPRI questo script
        echo.
        pause
        goto START
    )
    
    if "%SCELTA%"=="2" (
        echo.
        echo Apertura pagina download GitHub Desktop...
        start https://desktop.github.com
        echo.
        echo Dopo aver installato GitHub Desktop:
        echo 1. Apri GitHub Desktop
        echo 2. File ^> Add Local Repository
        echo 3. Seleziona questa cartella
        echo 4. Publish repository
        echo.
        echo Vedi anche: GUIDA_GITHUB_DESKTOP.md
        echo.
        pause
        goto START
    )
    
    if "%SCELTA%"=="3" (
        exit /b 0
    )
    
    goto START
)

echo [OK] Git e' installato!
git --version
echo.

REM Verifica configurazione Git
git config --global user.name >nul 2>&1
if errorlevel 1 (
    echo [AVVISO] Git non e' configurato!
    echo.
    set /p GIT_NAME="Inserisci il tuo nome: "
    set /p GIT_EMAIL="Inserisci la tua email: "
    git config --global user.name "%GIT_NAME%"
    git config --global user.email "%GIT_EMAIL%"
    echo.
    echo [OK] Git configurato!
    echo.
    pause
)

echo.
set /p GITHUB_USERNAME="Inserisci il tuo username GitHub: "
if "%GITHUB_USERNAME%"=="" (
    echo [ERRORE] Username non valido!
    pause
    goto START
)

set /p REPO_NAME="Inserisci il nome del repository (es: webforge-studio): "
if "%REPO_NAME%"=="" (
    echo [ERRORE] Nome repository non valido!
    pause
    goto START
)

echo.
echo ========================================
echo INIZIO SETUP
echo ========================================
echo.

echo [1/5] Inizializzazione Git...
if exist .git (
    echo [AVVISO] Git gia' inizializzato. Continuo...
) else (
    git init
    if errorlevel 1 (
        echo [ERRORE] Impossibile inizializzare Git!
        pause
        goto START
    )
)

echo.
echo [2/5] Aggiunta file...
git add .
if errorlevel 1 (
    echo [ERRORE] Impossibile aggiungere i file!
    pause
    goto START
)

echo.
echo [3/5] Creazione commit...
git commit -m "Initial commit: WebForge Studio website" 2>nul
if errorlevel 1 (
    echo [AVVISO] Nessuna modifica da committare o commit gia' esistente.
) else (
    echo [OK] Commit creato!
)

echo.
echo [4/5] Collegamento a GitHub...
git remote remove origin 2>nul
git remote add origin https://github.com/%GITHUB_USERNAME%/%REPO_NAME%.git
if errorlevel 1 (
    echo [ERRORE] Impossibile collegare a GitHub!
    pause
    goto START
)
echo [OK] Collegato a GitHub!

echo.
echo [5/5] Rinomina branch...
git branch -M main 2>nul
echo [OK] Branch rinominato in main!

echo.
echo ========================================
echo SETUP COMPLETATO!
echo ========================================
echo.
echo IMPORTANTE: Crea prima il repository su GitHub!
echo.
echo 1. Vai su: https://github.com/new
echo 2. Nome repository: %REPO_NAME%
echo 3. NON spuntare "Add a README file"
echo 4. Clicca "Create repository"
echo.
set /p CONTINUA="Hai creato il repository? (s/n): "
if /i not "%CONTINUA%"=="s" (
    echo.
    echo Apertura GitHub in browser...
    start https://github.com/new
    echo.
    echo Crea il repository, poi premi un tasto per continuare...
    pause >nul
)

echo.
echo Caricamento su GitHub...
echo.
git push -u origin main
if errorlevel 1 (
    echo.
    echo ========================================
    echo [ERRORE] Push fallito!
    echo ========================================
    echo.
    echo Possibili cause:
    echo - Il repository non esiste su GitHub
    echo - Credenziali non configurate
    echo - Problemi di connessione
    echo.
    echo Soluzioni:
    echo 1. Verifica di aver creato il repository
    echo 2. Usa GitHub Desktop per il push
    echo 3. Configura le credenziali Git
    echo.
) else (
    echo.
    echo ========================================
    echo [SUCCESSO] Codice caricato su GitHub!
    echo ========================================
    echo.
    echo Repository: https://github.com/%GITHUB_USERNAME%/%REPO_NAME%
    echo.
    echo Per attivare GitHub Pages:
    echo 1. Vai su Settings ^> Pages
    echo 2. Source: main branch, folder: / (root)
    echo 3. Salva
    echo.
    echo Il sito sara' su:
    echo https://%GITHUB_USERNAME%.github.io/%REPO_NAME%/
    echo.
    set /p APRI="Aprire GitHub nel browser? (s/n): "
    if /i "%APRI%"=="s" (
        start https://github.com/%GITHUB_USERNAME%/%REPO_NAME%
    )
)

echo.
echo ========================================
echo Fine setup
echo ========================================
echo.
pause

