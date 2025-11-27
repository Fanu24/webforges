@echo off
chcp 65001 >nul 2>&1
title Setup GitHub - WebForge Studio
cls

echo ========================================
echo Setup GitHub per WebForge Studio
echo ========================================
echo.

REM Verifica se Git e' installato
where git >nul 2>&1
if errorlevel 1 (
    echo [ERRORE] Git non e' installato!
    echo.
    echo Per installare Git:
    echo 1. Vai su: https://git-scm.com/download/win
    echo 2. Scarica e installa Git
    echo 3. CHIUDI e RIAPRI questo terminale
    echo 4. Esegui di nuovo questo script
    echo.
    echo Oppure usa GitHub Desktop (piu' semplice):
    echo https://desktop.github.com
    echo.
    pause
    exit /b 1
)

echo [OK] Git e' installato!
git --version
echo.

set /p GITHUB_USERNAME="Inserisci il tuo username GitHub: "
if "%GITHUB_USERNAME%"=="" (
    echo [ERRORE] Username non valido!
    pause
    exit /b 1
)

set /p REPO_NAME="Inserisci il nome del repository (es: webforge-studio): "
if "%REPO_NAME%"=="" (
    echo [ERRORE] Nome repository non valido!
    pause
    exit /b 1
)

echo.
echo Inizializzazione Git...
if exist .git (
    echo [AVVISO] Git gia' inizializzato. Continuo...
) else (
    git init
    if errorlevel 1 (
        echo [ERRORE] Impossibile inizializzare Git!
        pause
        exit /b 1
    )
)

echo.
echo Aggiunta file...
git add .
if errorlevel 1 (
    echo [ERRORE] Impossibile aggiungere i file!
    pause
    exit /b 1
)

echo.
echo Creazione commit iniziale...
git commit -m "Initial commit: WebForge Studio website" 2>nul
if errorlevel 1 (
    echo [AVVISO] Nessuna modifica da committare o commit gia' esistente.
) else (
    echo [OK] Commit creato!
)

echo.
echo Collegamento a GitHub...
git remote remove origin 2>nul
git remote add origin https://github.com/%GITHUB_USERNAME%/%REPO_NAME%.git
if errorlevel 1 (
    echo [ERRORE] Impossibile collegare a GitHub!
    pause
    exit /b 1
)

echo.
echo Rinomina branch in main...
git branch -M main 2>nul

echo.
echo ========================================
echo Setup completato!
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
    echo [ERRORE] Push fallito!
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
    echo 1. Vai su Settings -^> Pages
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
