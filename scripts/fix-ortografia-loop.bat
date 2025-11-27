@echo off
echo Correzione ortografia - Processa 3 file alla volta
echo.
:loop
python scripts/fix-ortografia-single.py
if %errorlevel% neq 0 (
    echo.
    echo Errore! Premi un tasto per riprovare o Ctrl+C per uscire
    pause
    goto loop
)
echo.
echo Premi un tasto per processare altri 3 file, o Ctrl+C per uscire
pause
goto loop

