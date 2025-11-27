# Script PowerShell per generare TUTTI gli articoli blog
# Genera tutte le combinazioni categoria × località

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Generazione Articoli Blog" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Carica configurazione
$configPath = Join-Path $PSScriptRoot "..\config\site-config.js"
$configContent = Get-Content $configPath -Raw -Encoding UTF8

# Estrai valori da config
$siteName = if ($configContent -match 'SITE_NAME:\s*"([^"]+)"') { $matches[1] } else { "WebForge Studio" }
$siteUrl = if ($configContent -match 'SITE_URL:\s*"([^"]+)"') { $matches[1] } else { "https://fanu24.github.io/webforges" }
$currentYear = Get-Date -Format "yyyy"

# Carica categorie
$categoriesPath = Join-Path $PSScriptRoot "..\data\categories.js"
$categoriesContent = Get-Content $categoriesPath -Raw -Encoding UTF8

# Parse categorie (estrai slug, name, plural)
$categories = @()
$catLines = $categoriesContent -split "`n"
$currentCat = $null
foreach ($line in $catLines) {
    if ($line -match 'slug:\s*"([^"]+)"') {
        if ($currentCat) { $categories += $currentCat }
        $currentCat = @{ slug = $matches[1]; name = ""; plural = "" }
    }
    if ($currentCat -and $line -match 'name:\s*"([^"]+)"') {
        $currentCat.name = $matches[1]
        if (-not $currentCat.plural) { $currentCat.plural = $matches[1] }
    }
    if ($currentCat -and $line -match 'plural:\s*"([^"]+)"') {
        $currentCat.plural = $matches[1]
    }
}
if ($currentCat) { $categories += $currentCat }

# Carica località
$locationsPath = Join-Path $PSScriptRoot "..\data\locations.js"
$locationsContent = Get-Content $locationsPath -Raw -Encoding UTF8

# Parse località
$locations = @()
$locLines = $locationsContent -split "`n"
$currentLoc = $null
foreach ($line in $locLines) {
    if ($line -match 'slug:\s*"([^"]+)"') {
        if ($currentLoc) { $locations += $currentLoc }
        $currentLoc = @{ slug = $matches[1]; name = ""; city = "" }
    }
    if ($currentLoc -and $line -match 'name:\s*"([^"]+)"') {
        $currentLoc.name = $matches[1]
    }
    if ($currentLoc -and $line -match 'city:\s*"([^"]+)"') {
        $currentLoc.city = $matches[1]
    }
}
if ($currentLoc) { $locations += $currentLoc }

Write-Host "📊 Categorie: $($categories.Count)" -ForegroundColor Green
Write-Host "📍 Località: $($locations.Count)" -ForegroundColor Green
Write-Host "📝 Articoli totali: $($categories.Count * $locations.Count)" -ForegroundColor Green
Write-Host ""

# Carica template
$templatePath = Join-Path $PSScriptRoot "..\blog\ristorante-trastevere-roma.html"
if (-not (Test-Path $templatePath)) {
    Write-Host "❌ Template articolo non trovato: $templatePath" -ForegroundColor Red
    exit 1
}

$templateBase = Get-Content $templatePath -Raw -Encoding UTF8

# Directory output
$outputDir = Join-Path $PSScriptRoot "..\blog"
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
}

$generated = 0
$skipped = 0
$errors = 0
$totalArticles = $categories.Count * $locations.Count
$currentIndex = 0

# Genera tutti gli articoli
foreach ($category in $categories) {
    foreach ($location in $locations) {
        $currentIndex++
        $articleSlug = "$($category.slug)-$($location.slug)-$($location.city.ToLower())"
        $outputPath = Join-Path $outputDir "$articleSlug.html"
        
        # Skip se esiste già
        if (Test-Path $outputPath) {
            $skipped++
            continue
        }
        
        try {
            $article = $templateBase
            
            # Genera contenuto articolo
            $articleTitle = "Sito Web per $($category.name) a $($location.name), $($location.city)"
            $articleDescription = "Crea il sito web per il tuo $($category.name.ToLower()) a $($location.name), $($location.city). Aumenta clienti, visibilità online, SEO locale. Preventivo gratuito."
            $articleKeywords = "sito web $($category.name.ToLower()), $($category.name.ToLower()) $($location.name), $($category.name.ToLower()) $($location.city)"
            $canonicalUrl = "$siteUrl/blog/$articleSlug.html"
            
            # Sostituzioni usando Replace (più semplice e sicuro)
            $article = $article.Replace("Sito Web per Ristorante a Trastevere, Roma", $articleTitle)
            $article = $article.Replace("Sito Web per Ristorante a Trastevere", "Sito Web per $($category.name) a $($location.name)")
            $article = $article.Replace("Ristoranti • Trastevere, Roma", "$($category.name) • $($location.name), $($location.city)")
            $article = $article.Replace("Trastevere, Roma", "$($location.name), $($location.city)")
            $article = $article.Replace("Trastevere", $location.name)
            $article = $article.Replace("trastevere", $location.slug)
            $article = $article.Replace("Ristorante", $category.name)
            $article = $article.Replace("ristorante", $category.name.ToLower())
            $article = $article.Replace("ristoranti", $category.plural)
            $article = $article.Replace("Ristoranti", $category.plural)
            
            if ($location.city -ne "Roma") {
                $article = $article.Replace(", Roma", ", $($location.city)")
                $article = $article.Replace("Roma", $location.city)
                $article = $article.Replace("roma", $location.city.ToLower())
            }
            
            # Sostituzioni meta tags usando [regex]::Replace con single quotes
            $titlePattern = '(?s)<title>.*?</title>'
            $titleReplacement = '<title>' + $articleTitle + ' | ' + $siteName + '</title>'
            $article = [regex]::Replace($article, $titlePattern, $titleReplacement)
            
            $descPattern = '(?s)<meta name="description" content="[^"]*">'
            $descReplacement = '<meta name="description" content="' + $articleDescription + '">'
            $article = [regex]::Replace($article, $descPattern, $descReplacement)
            
            $keywordsPattern = '(?s)<meta name="keywords" content="[^"]*">'
            $keywordsReplacement = '<meta name="keywords" content="' + $articleKeywords + '">'
            $article = [regex]::Replace($article, $keywordsPattern, $keywordsReplacement)
            
            $ogTitlePattern = '(?s)<meta property="og:title" content="[^"]*">'
            $ogTitleReplacement = '<meta property="og:title" content="' + $articleTitle + ' | ' + $siteName + '">'
            $article = [regex]::Replace($article, $ogTitlePattern, $ogTitleReplacement)
            
            $ogDescPattern = '(?s)<meta property="og:description" content="[^"]*">'
            $ogDescReplacement = '<meta property="og:description" content="' + $articleDescription + '">'
            $article = [regex]::Replace($article, $ogDescPattern, $ogDescReplacement)
            
            $ogUrlPattern = '(?s)<meta property="og:url" content="[^"]*">'
            $ogUrlReplacement = '<meta property="og:url" content="' + $canonicalUrl + '">'
            $article = [regex]::Replace($article, $ogUrlPattern, $ogUrlReplacement)
            
            $canonicalPattern = '(?s)<link rel="canonical" href="[^"]*">'
            $canonicalReplacement = '<link rel="canonical" href="' + $canonicalUrl + '">'
            $article = [regex]::Replace($article, $canonicalPattern, $canonicalReplacement)
            
            # Salva articolo
            [System.IO.File]::WriteAllText($outputPath, $article, [System.Text.Encoding]::UTF8)
            $generated++
            
            # Progress ogni 50 articoli
            if ($currentIndex % 50 -eq 0) {
                $progressMsg = "⏳ Progress: " + $currentIndex + "/" + $totalArticles + " (" + $generated + " generati, " + $skipped + " saltati)"
                Write-Host $progressMsg -ForegroundColor Yellow
            }
            
        } catch {
            Write-Host "❌ Errore generando $articleSlug : $($_.Exception.Message)" -ForegroundColor Red
            $errors++
        }
    }
}

Write-Host ""
Write-Host "✨ Generazione completata!" -ForegroundColor Green
Write-Host "✅ Articoli generati: $generated" -ForegroundColor Green
Write-Host "⏭️  Articoli saltati: $skipped" -ForegroundColor Yellow
Write-Host "❌ Errori: $errors" -ForegroundColor $(if ($errors -gt 0) { "Red" } else { "Green" })
Write-Host "📁 Directory: $outputDir" -ForegroundColor Cyan

if ($generated -gt 0) {
    Write-Host ""
    Write-Host "💡 Nota: Per personalizzazione completa SVG e contenuti avanzati," -ForegroundColor Cyan
    Write-Host "   installa Node.js e usa: node scripts/generate-all-articles.js" -ForegroundColor Cyan
}
