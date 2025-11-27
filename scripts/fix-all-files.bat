@echo off
echo Correzione testi articoli...
echo.

cd /d "%~dp0\.."

for %%f in (blog\*.html) do (
    if not "%%~nf"=="ristorante-trastevere-roma" (
        echo Processando %%~nxf...
        node scripts\fix-one-file.js %%~nxf
        if errorlevel 1 (
            echo Errore in %%~nxf
        )
    )
)

echo.
echo Completato!
pause


