@echo off
echo ========================================
echo CORREZIONE ERRORI ORTOGRAFICI
echo ========================================
echo.
echo Questo script correggera tutti gli errori ortografici
echo negli articoli del blog.
echo.
echo IMPORTANTE: Esegui questo file facendo doppio clic
echo oppure da PowerShell esterno (non da Cursor)
echo.
pause

powershell -ExecutionPolicy Bypass -File "scripts\fix-ortografia.ps1"

echo.
echo Completato! Premi un tasto per uscire.
pause

