# Script PowerShell VELOCE per correggere testi
# Processa file in batch piccoli per evitare blocchi

Write-Host "Correzione testi articoli..." -ForegroundColor Cyan
Write-Host ""

$blogDir = Join-Path $PSScriptRoot "..\blog"
$files = Get-ChildItem $blogDir -Filter "*.html" | Where-Object { $_.Name -ne "ristorante-trastevere-roma.html" }

Write-Host "File da correggere: $($files.Count)" -ForegroundColor Green
Write-Host ""

$fixed = 0
$errors = 0
$batchSize = 50
$currentBatch = 0

# Carica mapping (semplificato)
$mappingPath = Join-Path $PSScriptRoot "..\data\category-content-mapping.js"
$mappingContent = Get-Content $mappingPath -Raw -Encoding UTF8

# Estrai mapping per agenzia-immobiliare
$agenziaMapping = @{
    actionNoun = "contatti"
    actionNounPlural = "contatti"
    serviceTerm = "annunci immobiliari"
    heroSubtitle = "Aumenta i contatti del 300% con un sito web professionale. Annunci immobiliari online, galleria foto, SEO locale ottimizzato."
    stat1 = "Sceglie l'agenzia immobiliare in base alle foto delle proprietà"
}

foreach ($file in $files) {
    $currentBatch++
    
    if ($currentBatch % $batchSize -eq 0) {
        Write-Host "Progress: $currentBatch/$($files.Count)" -ForegroundColor Yellow
    }
    
    try {
        $content = Get-Content $file.FullName -Raw -Encoding UTF8
        $originalContent = $content
        
        # Estrai categoria dal nome file
        if ($file.Name -match "^([^-]+)-") {
            $categorySlug = $matches[1]
            
            # Determina mapping in base alla categoria
            $mapping = $null
            if ($categorySlug -eq "agenzia-immobiliare") {
                $mapping = $agenziaMapping
            } elseif ($categorySlug -eq "ristorante") {
                $mapping = @{ actionNounPlural = "prenotazioni"; serviceTerm = "menu online" }
            } elseif ($categorySlug -eq "meccanico") {
                $mapping = @{ actionNounPlural = "appuntamenti"; serviceTerm = "preventivi online" }
            } else {
                $mapping = @{ actionNounPlural = "contatti"; serviceTerm = "servizi online" }
            }
            
            # 1. Correggi breadcrumb minuscolo
            $content = $content -replace "agenzie immobiliari •", "Agenzie Immobiliari •"
            $content = $content -replace "ristoranti •", "Ristoranti •"
            $content = $content -replace "meccanici •", "Meccanici •"
            
            # 2. Correggi "Aumenta i clienti" -> "Aumenta i contatti" per agenzie
            if ($categorySlug -eq "agenzia-immobiliare" -and $mapping.heroSubtitle) {
                $heroSubtitle = $mapping.heroSubtitle
                # Estrai località dal nome file
                if ($file.Name -match "-([^-]+)-([^-]+)\.html$") {
                    $locSlug = $matches[1]
                    $city = $matches[2]
                    $locName = ($locSlug -split "-" | ForEach-Object { $_.Substring(0,1).ToUpper() + $_.Substring(1) }) -join " "
                    $cityCap = $city.Substring(0,1).ToUpper() + $city.Substring(1)
                    $heroSubtitle = $heroSubtitle -replace "\.$", " a $locName, $cityCap."
                }
                $content = $content -replace '<p class="hero-subtitle">[\s\S]*?</p>', "<p class=`"hero-subtitle`">`n            $heroSubtitle</p>"
            }
            
            # 3. Sostituisci "prenotazioni" con termine appropriato (solo per non-ristoranti)
            if ($categorySlug -ne "ristorante" -and $categorySlug -ne "hotel" -and $categorySlug -ne "pizzeria") {
                $content = $content -replace "\bprenotazioni\b", $mapping.actionNounPlural
                $content = $content -replace "\bprenotazioni al mese\b", "$($mapping.actionNounPlural) al mese"
                $content = $content -replace "\bprenotazioni/mese\b", "$($mapping.actionNounPlural)/mese"
            }
            
            # 4. Sostituisci "foto del menu" (solo per non-ristoranti)
            if ($categorySlug -ne "ristorante" -and $categorySlug -ne "pizzeria") {
                $content = $content -replace "foto del menu", $mapping.serviceTerm
                $content = $content -replace "Sceglie il servizio in base alle servizi online", $mapping.stat1
            }
            
            # 5. Correggi "il agenzie" -> "le agenzie"
            $content = $content -replace "\bil agenzie immobiliari\b", "le agenzie immobiliari"
            $content = $content -replace "\bun agenzie immobiliari\b", "un'agenzia immobiliare"
            $content = $content -replace "\bdel agenzie immobiliari\b", "delle agenzie immobiliari"
            $content = $content -replace "\bil tuo agenzie immobiliari\b", "le tue agenzie immobiliari"
            
            # 6. Correggi "undefined"
            $content = $content -replace "\bundefined\b", $mapping.actionNounPlural
            
            # 7. Correggi duplicati
            $content = $content -replace "agenzie immobiliari immobiliari", "agenzie immobiliari"
            
            # Salva solo se modificato
            if ($content -ne $originalContent) {
                [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
                $fixed++
            }
        }
    } catch {
        $errors++
        if ($errors -le 5) {
            Write-Host "Errore in $($file.Name): $($_.Exception.Message)" -ForegroundColor Red
        }
    }
}

Write-Host ""
Write-Host "Correzione completata!" -ForegroundColor Green
Write-Host "Articoli corretti: $fixed" -ForegroundColor Green
Write-Host "Errori: $errors" -ForegroundColor $(if ($errors -gt 0) { "Red" } else { "Green" })


