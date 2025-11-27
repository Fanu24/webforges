@echo off
chcp 65001 >nul 2>&1
title Collega a GitHub - WebForge Studio
cls

echo ========================================
echo Collega progetto a GitHub
echo ========================================
echo.
echo Repository: https://github.com/Fanu24/webforges
echo.

REM Verifica Git
where git >nul 2>&1
if errorlevel 1 (
    echo [ERRORE] Git non e' installato!
    echo.
    echo Installa Git da: https://git-scm.com/download/win
    echo.
    pause
    exit /b 1
)

echo [OK] Git installato!
echo.

REM Inizializza Git se non esiste
if not exist .git (
    echo Inizializzazione Git...
    git init
    if errorlevel 1 (
        echo [ERRORE] Impossibile inizializzare Git!
        pause
        exit /b 1
    )
    echo [OK] Git inizializzato!
    echo.
)

REM Aggiungi tutti i file
echo Aggiunta file...
git add .
if errorlevel 1 (
    echo [ERRORE] Impossibile aggiungere i file!
    pause
    exit /b 1
)
echo [OK] File aggiunti!
echo.

REM Crea commit
echo Creazione commit...
git commit -m "Initial commit: WebForge Studio website" 2>nul
if errorlevel 1 (
    echo [AVVISO] Nessuna modifica o commit gia' esistente.
) else (
    echo [OK] Commit creato!
)
echo.

REM Collega al repository
echo Collegamento a GitHub...
git remote remove origin 2>nul
git remote add origin https://github.com/Fanu24/webforges.git
if errorlevel 1 (
    echo [ERRORE] Impossibile collegare a GitHub!
    pause
    exit /b 1
)
echo [OK] Collegato a GitHub!
echo.

REM Rinomina branch
echo Rinomina branch in main...
git branch -M main 2>nul
echo [OK] Branch rinominato!
echo.

REM Push
echo ========================================
echo Caricamento su GitHub...
echo ========================================
echo.
git push -u origin main
if errorlevel 1 (
    echo.
    echo [ERRORE] Push fallito!
    echo.
    echo Possibili cause:
    echo 1. Credenziali non configurate
    echo 2. Repository non vuoto (ha gia' file)
    echo 3. Problemi di connessione
    echo.
    echo Soluzioni:
    echo.
    echo Se il repository e' vuoto, prova:
    echo   git push -u origin main --force
    echo.
    echo Se serve configurare Git:
    echo   git config --global user.name "Il Tuo Nome"
    echo   git config --global user.email "tua.email@esempio.com"
    echo.
    echo Oppure usa GitHub Desktop per il push.
    echo.
) else (
    echo.
    echo ========================================
    echo [SUCCESSO] Codice caricato su GitHub!
    echo ========================================
    echo.
    echo Repository: https://github.com/Fanu24/webforges
    echo.
    echo Per attivare GitHub Pages:
    echo 1. Vai su: https://github.com/Fanu24/webforges/settings/pages
    echo 2. Source: main branch, folder: / (root)
    echo 3. Salva
    echo.
    echo Il sito sara' su:
    echo https://fanu24.github.io/webforges/
    echo.
    set /p APRI="Aprire GitHub nel browser? (s/n): "
    if /i "%APRI%"=="s" (
        start https://github.com/Fanu24/webforges
    )
)

echo.
pause

