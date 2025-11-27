@echo off
echo ========================================
echo Correzione Testi Articoli
echo ========================================
echo.
echo Processeremo 5 file alla volta per evitare blocchi.
echo.
echo Premi un tasto per iniziare...
pause >nul

:loop
node scripts/fix-5-files.js
if %ERRORLEVEL% EQU 0 (
    echo.
    echo Altri file da processare? (S/N)
    choice /C SN /N /M "Continua"
    if errorlevel 2 goto end
    if errorlevel 1 goto loop
)

:end
echo.
echo Completato!
pause


