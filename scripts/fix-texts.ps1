# Script PowerShell per correggere testi - Processa UN file alla volta
# Uso: .\scripts\fix-texts.ps1 nome-file.html

param(
    [Parameter(Mandatory=$true)]
    [string]$FileName
)

$ErrorActionPreference = "Stop"

$blogDir = Join-Path $PSScriptRoot "..\blog"
$filePath = Join-Path $blogDir $FileName

if (-not (Test-Path $filePath)) {
    Write-Host "File non trovato: $FileName" -ForegroundColor Red
    exit 1
}

# Estrai categoria e località dal nome file
if ($FileName -notmatch "^([^-]+)-([^-]+)-([^-]+)\.html$") {
    Write-Host "Nome file non valido" -ForegroundColor Red
    exit 1
}

$categorySlug = $matches[1]
$locationSlug = $matches[2]
$city = $matches[3]

Write-Host "Correggendo: $FileName" -ForegroundColor Cyan
Write-Host "Categoria: $categorySlug" -ForegroundColor Cyan
Write-Host "Località: $locationSlug, $city`n" -ForegroundColor Cyan

# Leggi file
$content = Get-Content $filePath -Raw -Encoding UTF8
$originalContent = $content

# Determina se è categoria turistica
$isTouristic = @('ristorante', 'pizzeria', 'hotel', 'bed-and-breakfast', 'agriturismo', 'trattoria') -contains $categorySlug

# Capitalizza località
$locationNameCapitalized = ($locationSlug -split '-') | ForEach-Object { 
    $_.Substring(0,1).ToUpper() + $_.Substring(1).ToLower() 
} | Join-String -Separator ' '

$cityCapitalized = $city.Substring(0,1).ToUpper() + $city.Substring(1).ToLower()

# Sostituzioni base
$content = $content -replace 'undefined', 'clienti'

# Rimuovi testi su turisti per categorie non-turistiche
if (-not $isTouristic) {
    $content = $content -replace '2\+ Milioni di Turisti all''Anno', 'Migliaia di Clienti Online'
    $content = $content -replace 'turisti all''anno', 'clienti online'
    $content = $content -replace 'Con oltre 2 milioni di turisti', 'Con migliaia di ricerche online'
    $content = $content -replace 'catturare turisti', 'catturare clienti'
    $content = $content -replace 'per catturare turisti', 'per catturare clienti'
    $content = $content -replace 'conto medio per Persona', 'valore medio per cliente'
    $content = $content -replace 'Con un conto medio di €50 a persona', 'Con un valore medio di €500 per cliente'
    $content = $content -replace 'foto del menu', 'servizi'
    
    # Rimuovi sezione "Comunica Eventi" per non-turistiche
    $content = $content -replace 'Comunica Eventi e Offerte[\s\S]{0,800}?massimizza i ricavi\.', ''
    $content = $content -replace 'Promuovi serate speciali[\s\S]{0,800}?massimizza i ricavi\.', ''
}

# Correggi "prenotazioni" per categorie che non prenotano
if ($categorySlug -notin @('ristorante', 'pizzeria', 'hotel', 'bed-and-breakfast', 'agriturismo', 'trattoria', 'dentista', 'medico', 'veterinario', 'parrucchiere', 'estetista', 'palestra', 'centro-benessere')) {
    $content = $content -replace 'prenotazioni', 'contatti'
    $content = $content -replace 'prenotazioni al mese', 'contatti al mese'
    $content = $content -replace 'prenotazioni/mese', 'contatti/mese'
}

# Salva se modificato
if ($content -ne $originalContent) {
    Set-Content -Path $filePath -Value $content -Encoding UTF8 -NoNewline
    Write-Host "✅ File corretto!" -ForegroundColor Green
} else {
    Write-Host "ℹ️  Nessuna modifica necessaria" -ForegroundColor Yellow
}

exit 0


