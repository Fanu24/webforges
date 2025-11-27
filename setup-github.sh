#!/bin/bash

echo "========================================"
echo "Setup GitHub per WebForge Studio"
echo "========================================"
echo ""

read -p "Inserisci il tuo username GitHub: " GITHUB_USERNAME
read -p "Inserisci il nome del repository (es: webforge-studio): " REPO_NAME

echo ""
echo "Inizializzazione Git..."
git init

echo ""
echo "Aggiunta file..."
git add .

echo ""
echo "Creazione commit iniziale..."
git commit -m "Initial commit: WebForge Studio website"

echo ""
echo "Collegamento a GitHub..."
git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git

echo ""
echo "Rinomina branch in main..."
git branch -M main

echo ""
echo "========================================"
echo "Setup completato!"
echo ""
echo "Prossimi passi:"
echo "1. Crea il repository su GitHub: https://github.com/new"
echo "2. Nome repository: $REPO_NAME"
echo "3. NON inizializzare con README"
echo "4. Poi esegui: git push -u origin main"
echo "========================================"

