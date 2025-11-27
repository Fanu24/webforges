@echo off
echo ========================================
echo Generazione Articoli Blog
echo ========================================
echo.

REM Verifica Node.js
where node >nul 2>&1
if errorlevel 1 (
    echo Node.js non trovato!
    echo.
    echo Per generare tutti gli articoli, installa Node.js:
    echo 1. Vai su https://nodejs.org/
    echo 2. Scarica e installa la versione LTS
    echo 3. Riavvia il terminale
    echo 4. Esegui di nuovo questo script
    echo.
    pause
    exit /b 1
)

echo Node.js trovato
echo.

REM Esegui script Node.js
node scripts/generate-all-articles.js

if errorlevel 1 (
    echo.
    echo Errore durante la generazione
) else (
    echo.
    echo Generazione completata!
)

echo.
pause
