# Script PowerShell per correggere errori ortografici
# Esegui questo script da PowerShell esterno (non da Cursor)
# Comando: powershell -ExecutionPolicy Bypass -File scripts/fix-ortografia.ps1

$ErrorActionPreference = "Stop"
$blogDir = Join-Path $PSScriptRoot "..\blog"
$files = Get-ChildItem $blogDir -Filter "*.html"

Write-Host "Correzione errori ortografici..." -ForegroundColor Cyan
Write-Host "File trovati: $($files.Count)" -ForegroundColor Green
Write-Host ""

$fixed = 0
$count = 0

foreach ($file in $files) {
    $count++
    if ($count % 10 -eq 0) {
        Write-Host "Progress: $count/$($files.Count)" -ForegroundColor Yellow
    }
    
    try {
        $content = Get-Content $file.FullName -Raw -Encoding UTF8
        $original = $content
        
        # Correzioni ortografiche
        $content = $content -replace '\ble contatti\b', 'i contatti'
        $content = $content -replace '\bil tuo scuole guida\b', 'la tua scuola guida'
        $content = $content -replace '\bil tuo palestre\b', 'la tua palestra'
        $content = $content -replace '\bil tuo dentisti\b', 'il tuo studio dentistico'
        $content = $content -replace '\bil tuo parrucchieri\b', 'il tuo salone'
        $content = $content -replace '\bil tuo ristoranti\b', 'il tuo ristorante'
        $content = $content -replace '\bil tuo pizzerie\b', 'la tua pizzeria'
        $content = $content -replace '\bil tuo meccanici\b', 'la tua officina'
        $content = $content -replace '\bil tuo veterinari\b', 'la tua clinica veterinaria'
        $content = $content -replace '\bil tuo agenzie immobiliari\b', 'la tua agenzia immobiliare'
        $content = $content -replace '\bil tuo fiorai\b', 'la tua fioristeria'
        $content = $content -replace '\bil tuo farmacie\b', 'la tua farmacia'
        $content = $content -replace '\bil tuo ottici\b', 'il tuo negozio ottico'
        $content = $content -replace '\bil tuo elettricisti\b', 'la tua attività'
        $content = $content -replace '\bil tuo idraulici\b', 'la tua attività'
        $content = $content -replace '\bil tuo architetti\b', 'il tuo studio'
        $content = $content -replace '\bil tuo commercialisti\b', 'il tuo studio'
        $content = $content -replace '\bil tuo psicologi\b', 'il tuo studio'
        $content = $content -replace '\bil tuo fisioterapisti\b', 'il tuo studio'
        $content = $content -replace '\bil tuo assicurazioni\b', 'la tua agenzia assicurativa'
        $content = $content -replace '\bil tuo negozi di abbigliamento\b', 'il tuo negozio di abbigliamento'
        $content = $content -replace '\bil tuo centri estetici\b', 'il tuo centro estetico'
        $content = $content -replace '\bil tuo trattorie\b', 'la tua trattoria'
        $content = $content -replace '\bil tuo studi legali\b', 'il tuo studio legale'
        $content = $content -replace '\bil tuo avvocati\b', 'il tuo studio legale'
        $content = $content -replace '\bil tuo ingegneri\b', 'il tuo studio'
        $content = $content -replace '\bil tuo consulenti fiscali\b', 'il tuo studio'
        $content = $content -replace '\bil tuo psicoterapisti\b', 'il tuo studio'
        
        if ($content -ne $original) {
            [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
            $fixed++
            Write-Host "  ✓ $($file.Name)" -ForegroundColor Green
        }
    }
    catch {
        Write-Host "  ✗ Errore in $($file.Name): $_" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Completato!" -ForegroundColor Green
Write-Host "File corretti: $fixed" -ForegroundColor Green

