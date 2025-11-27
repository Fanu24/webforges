@echo off
chcp 65001 >nul
echo ========================================
echo Correzione Testi - Processo UN file alla volta
echo ========================================
echo.

cd /d "%~dp0\.."

for %%f in (blog\*.html) do (
    if not "%%~nf"=="ristorante-trastevere-roma" (
        echo.
        echo Processando %%~nxf...
        powershell -ExecutionPolicy Bypass -File "scripts\fix-texts.ps1" "%%~nxf"
        if errorlevel 1 (
            echo [ERRORE] %%~nxf
        ) else (
            echo [OK] %%~nxf
        )
    )
)

echo.
echo ========================================
echo Completato!
echo ========================================
pause


