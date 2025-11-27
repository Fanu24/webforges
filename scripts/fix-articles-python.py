#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script Python per correggere testi articoli blog
Processa file in batch piccoli per evitare blocchi
"""

import os
import re
import json
from pathlib import Path

# Configurazione
BLOG_DIR = Path(__file__).parent.parent / "blog"
BATCH_SIZE = 10  # Processa 10 file alla volta
MAPPING_FILE = Path(__file__).parent.parent / "data" / "category-content-mapping.js"

# Carica mapping (semplificato - estrae solo i dati necessari)
def load_mapping():
    """Carica mapping categorie dal file JS"""
    mapping = {}
    
    # Leggi il file
    with open(MAPPING_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Estrai mapping per ogni categoria usando regex
    pattern = r"'(\w+(?:-\w+)*)':\s*\{([^}]+)\}"
    matches = re.finditer(pattern, content, re.DOTALL)
    
    for match in matches:
        cat_slug = match.group(1)
        cat_data = match.group(2)
        
        # Estrai campi specifici
        mapping[cat_slug] = {
            'actionNounPlural': extract_field(cat_data, 'actionNounPlural', 'contatti'),
            'serviceTerm': extract_field(cat_data, 'serviceTerm', 'servizi online'),
            'heroSubtitle': extract_field(cat_data, 'heroSubtitle', 'Aumenta i clienti del 300% con un sito web professionale.'),
            'stat1': extract_field(cat_data, 'stat1', 'Cerca servizi online prima di contattare'),
        }
    
    return mapping

def extract_field(data, field_name, default):
    """Estrae un campo dal mapping"""
    pattern = rf"{field_name}:\s*['\"]([^'\"]+)['\"]"
    match = re.search(pattern, data)
    return match.group(1) if match else default

def get_category_from_filename(filename):
    """Estrae categoria dal nome file"""
    match = re.match(r'^([^-]+)-', filename)
    return match.group(1) if match else None

def fix_article_content(content, category_slug, mapping):
    """Corregge il contenuto di un articolo"""
    if category_slug not in mapping:
        return content
    
    cat_map = mapping[category_slug]
    original = content
    
    # 1. Rimuovi testo generico sui turisti (solo per categorie non turistiche)
    non_tourist_categories = ['assicurazione', 'meccanico', 'elettricista', 'idraulico', 
                              'commercialista', 'psicologo', 'fisioterapista', 'farmacia',
                              'ottico', 'architetto', 'avvocato', 'ingegnere', 'consulente-fiscale',
                              'dentista', 'veterinario', 'parrucchiere', 'palestra', 'scuola-guida',
                              'negozio-abbigliamento', 'centro-estetico', 'psicoterapista']
    
    if category_slug in non_tourist_categories:
        # Rimuovi riferimenti a turisti
        content = re.sub(r'2\+\s*Milioni\s+di\s+Turisti\s+all\'Anno', 
                        'Clienti Potenziali nella Zona', content, flags=re.IGNORECASE)
        content = re.sub(r'Con\s+oltre\s+2\s+milioni\s+di\s+turisti\s+all\'anno',
                        'Con migliaia di clienti potenziali nella zona', content, flags=re.IGNORECASE)
        content = re.sub(r'centro\s+è\s+uno\s+dei\s+quartieri\s+più\s+iconici\s+e\s+frequentati\s+di\s+Milano',
                        'Centro è una zona strategica di Milano', content, flags=re.IGNORECASE)
        content = re.sub(r'catturare\s+turisti\s+e\s+romani',
                        'catturare clienti potenziali', content, flags=re.IGNORECASE)
        content = re.sub(r'attira\s+milioni\s+di\s+visitatori',
                        'attira migliaia di clienti potenziali', content, flags=re.IGNORECASE)
        content = re.sub(r'milioni\s+di\s+visitatori\s+ogni\s+anno',
                        'migliaia di clienti potenziali nella zona', content, flags=re.IGNORECASE)
    
    # 2. Rimuovi "Comunica Eventi e Offerte" per categorie non ristoranti/hotel
    if category_slug not in ['ristorante', 'pizzeria', 'hotel', 'trattoria', 'agriturismo', 'bed-and-breakfast']:
        content = re.sub(r'<h3[^>]*>Comunica Eventi e Offerte</h3>', 
                        f'<h3 class="card-title">Informazioni e Servizi</h3>', content)
        content = re.sub(r'Promuovi\s+serate\s+speciali[^<]*',
                        f'Pubblica informazioni sui tuoi servizi, promozioni e novità. Aumenta la visibilità e attira nuovi clienti.',
                        content, flags=re.IGNORECASE)
        content = re.sub(r'servizi\s+online\s+del\s+giorno',
                        cat_map['serviceTerm'], content, flags=re.IGNORECASE)
    
    # 3. Correggi "prenotazioni" con termine appropriato
    if category_slug not in ['ristorante', 'pizzeria', 'hotel', 'trattoria', 'agriturismo', 'bed-and-breakfast']:
        content = re.sub(r'\bprenotazioni\b', cat_map['actionNounPlural'], content)
        content = re.sub(r'\bprenotazioni\s+al\s+mese\b', f"{cat_map['actionNounPlural']} al mese", content)
        content = re.sub(r'\bprenotazioni/mese\b', f"{cat_map['actionNounPlural']}/mese", content)
    
    # 4. Correggi "foto del menu" per categorie non ristoranti
    if category_slug not in ['ristorante', 'pizzeria', 'trattoria']:
        content = re.sub(r'foto\s+del\s+menu', cat_map['serviceTerm'], content, flags=re.IGNORECASE)
        content = re.sub(r'Sceglie\s+il\s+servizio\s+in\s+base\s+alle\s+servizi\s+online',
                        cat_map['stat1'], content, flags=re.IGNORECASE)
    
    # 5. Correggi "il agenzie" -> "le agenzie"
    content = re.sub(r'\bil\s+agenzie\s+immobiliari\b', 'le agenzie immobiliari', content, flags=re.IGNORECASE)
    content = re.sub(r'\bun\s+agenzie\s+immobiliari\b', "un'agenzia immobiliare", content, flags=re.IGNORECASE)
    
    # 6. Correggi "undefined"
    content = re.sub(r'\bundefined\b', cat_map['actionNounPlural'], content)
    
    # 7. Correggi "Perfetto per il tuo assicurazioni" -> "Perfetto per la tua agenzia assicurativa"
    if category_slug == 'assicurazione':
        content = re.sub(r'Perfetto\s+per\s+il\s+tuo\s+assicurazioni',
                        'Perfetto per la tua agenzia assicurativa', content, flags=re.IGNORECASE)
        content = re.sub(r'Perfetto\s+per\s+le\s+tue\s+Agenzia',
                        'Perfetto per la tua agenzia assicurativa', content, flags=re.IGNORECASE)
        content = re.sub(r'\bassicurazioni\s+Online\b', 'Agenzia Assicurativa Online', content)
        content = re.sub(r'le\s+tue\s+assicurazioni\s+appare',
                        'la tua agenzia assicurativa appare', content, flags=re.IGNORECASE)
        content = re.sub(r'agenzia\s+assicurativa\s+Assicurativa',
                        'agenzia assicurativa', content, flags=re.IGNORECASE)
    
    return content

def process_files():
    """Processa tutti i file HTML nel blog"""
    print("Caricamento mapping...")
    mapping = load_mapping()
    
    # Ottieni tutti i file HTML
    html_files = list(BLOG_DIR.glob("*.html"))
    html_files = [f for f in html_files if f.name != "ristorante-trastevere-roma.html"]
    
    print(f"Trovati {len(html_files)} file da processare")
    print(f"Processamento in batch di {BATCH_SIZE} file...\n")
    
    fixed = 0
    errors = 0
    
    for i in range(0, len(html_files), BATCH_SIZE):
        batch = html_files[i:i+BATCH_SIZE]
        batch_num = (i // BATCH_SIZE) + 1
        total_batches = (len(html_files) + BATCH_SIZE - 1) // BATCH_SIZE
        
        print(f"Batch {batch_num}/{total_batches} ({len(batch)} file)...")
        
        for file_path in batch:
            try:
                # Leggi file
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Estrai categoria
                category_slug = get_category_from_filename(file_path.name)
                if not category_slug:
                    continue
                
                # Correggi contenuto
                new_content = fix_article_content(content, category_slug, mapping)
                
                # Salva solo se modificato
                if new_content != content:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    fixed += 1
                    print(f"  ✓ {file_path.name}")
                
            except Exception as e:
                errors += 1
                if errors <= 5:
                    print(f"  ✗ Errore in {file_path.name}: {e}")
        
        print()  # Linea vuota tra batch
    
    print(f"\nCompletato!")
    print(f"File corretti: {fixed}")
    print(f"Errori: {errors}")

if __name__ == "__main__":
    try:
        process_files()
    except KeyboardInterrupt:
        print("\n\nInterrotto dall'utente")
    except Exception as e:
        print(f"\nErrore: {e}")
        import traceback
        traceback.print_exc()

