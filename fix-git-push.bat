@echo off
chcp 65001 >nul 2>&1
title Fix Git Push - WebForge Studio
cls

echo ========================================
echo Fix Git Push
echo ========================================
echo.

REM Verifica configurazione Git
echo Verifica configurazione Git...
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
) else (
    echo [OK] Git gia' configurato:
    git config --global user.name
    git config --global user.email
    echo.
)

REM Verifica se ci sono file da committare
echo Verifica file...
git status --short >nul 2>&1
if errorlevel 1 (
    echo [ERRORE] Problema con Git!
    pause
    exit /b 1
)

echo.
echo Aggiunta file...
git add .
echo [OK] File aggiunti!
echo.

echo.
echo Creazione commit...
git commit -m "Initial commit: WebForge Studio website"
if errorlevel 1 (
    echo [ERRORE] Impossibile creare commit!
    echo.
    echo Verifica lo stato:
    git status
    echo.
    pause
    exit /b 1
)
echo [OK] Commit creato!
echo.

REM Verifica branch
echo Verifica branch...
git branch
echo.

REM Collega al repository
echo Collegamento a GitHub...
git remote remove origin 2>nul
git remote add origin https://github.com/Fanu24/webforges.git
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
    echo Provo con --force (sovrascrive file su GitHub)...
    echo.
    git push -u origin main --force
    if errorlevel 1 (
        echo.
        echo [ERRORE] Anche il force push e' fallito!
        echo.
        echo Possibili cause:
        echo 1. Credenziali non valide
        echo 2. Problemi di connessione
        echo 3. Repository non accessibile
        echo.
        echo Soluzioni:
        echo 1. Usa GitHub Desktop
        echo 2. Configura un Personal Access Token
        echo 3. Verifica di avere i permessi sul repository
        echo.
    ) else (
        echo.
        echo ========================================
        echo [SUCCESSO] Codice caricato su GitHub!
        echo ========================================
    )
) else (
    echo.
    echo ========================================
    echo [SUCCESSO] Codice caricato su GitHub!
    echo ========================================
)

echo.
echo Repository: https://github.com/Fanu24/webforges
echo.
echo Per attivare GitHub Pages:
echo 1. Vai su: https://github.com/Fanu24/webforges/settings/pages
echo 2. Source: main branch, folder: / (root)
echo 3. Salva
echo.
echo Il sito sara' su: https://fanu24.github.io/webforges/
echo.
pause

