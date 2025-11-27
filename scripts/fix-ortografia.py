#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script Python per correggere errori ortografici negli articoli
"""

import os
import re
from pathlib import Path

# Configurazione
BLOG_DIR = Path(__file__).parent.parent / "blog"
BATCH_SIZE = 10

def fix_ortografia(content):
    """Corregge errori ortografici comuni"""
    original = content
    
    # 1. "le contatti" → "i contatti" (contatti è maschile)
    content = re.sub(r'\ble\s+contatti\b', 'i contatti', content, flags=re.IGNORECASE)
    
    # 2. "il tuo scuole guida" → "la tua scuola guida"
    content = re.sub(r'\bil\s+tuo\s+scuole\s+guida\b', 'la tua scuola guida', content, flags=re.IGNORECASE)
    
    # 3. "il tuo palestre" → "la tua palestra"
    content = re.sub(r'\bil\s+tuo\s+palestre\b', 'la tua palestra', content, flags=re.IGNORECASE)
    
    # 4. "il tuo dentisti" → "il tuo studio dentistico" o "la tua attività"
    content = re.sub(r'\bil\s+tuo\s+dentisti\b', 'il tuo studio dentistico', content, flags=re.IGNORECASE)
    
    # 5. "il tuo parrucchieri" → "il tuo salone" o "la tua attività"
    content = re.sub(r'\bil\s+tuo\s+parrucchieri\b', 'il tuo salone', content, flags=re.IGNORECASE)
    
    # 6. "il tuo ristoranti" → "il tuo ristorante"
    content = re.sub(r'\bil\s+tuo\s+ristoranti\b', 'il tuo ristorante', content, flags=re.IGNORECASE)
    
    # 7. "il tuo pizzerie" → "la tua pizzeria"
    content = re.sub(r'\bil\s+tuo\s+pizzerie\b', 'la tua pizzeria', content, flags=re.IGNORECASE)
    
    # 8. "il tuo hotel" → "il tuo hotel" (giusto, ma verifica se c'è "hotels")
    content = re.sub(r'\bil\s+tuo\s+hotels\b', 'il tuo hotel', content, flags=re.IGNORECASE)
    
    # 9. "il tuo meccanici" → "la tua officina" o "il tuo meccanico"
    content = re.sub(r'\bil\s+tuo\s+meccanici\b', 'la tua officina', content, flags=re.IGNORECASE)
    
    # 10. "il tuo veterinari" → "la tua clinica veterinaria"
    content = re.sub(r'\bil\s+tuo\s+veterinari\b', 'la tua clinica veterinaria', content, flags=re.IGNORECASE)
    
    # 11. "il tuo agenzie immobiliari" → "la tua agenzia immobiliare"
    content = re.sub(r'\bil\s+tuo\s+agenzie\s+immobiliari\b', 'la tua agenzia immobiliare', content, flags=re.IGNORECASE)
    
    # 12. "il tuo fiorai" → "la tua fioristeria"
    content = re.sub(r'\bil\s+tuo\s+fiorai\b', 'la tua fioristeria', content, flags=re.IGNORECASE)
    
    # 13. "il tuo farmacie" → "la tua farmacia"
    content = re.sub(r'\bil\s+tuo\s+farmacie\b', 'la tua farmacia', content, flags=re.IGNORECASE)
    
    # 14. "il tuo ottici" → "il tuo negozio ottico"
    content = re.sub(r'\bil\s+tuo\s+ottici\b', 'il tuo negozio ottico', content, flags=re.IGNORECASE)
    
    # 15. "il tuo elettricisti" → "la tua attività"
    content = re.sub(r'\bil\s+tuo\s+elettricisti\b', 'la tua attività', content, flags=re.IGNORECASE)
    
    # 16. "il tuo idraulici" → "la tua attività"
    content = re.sub(r'\bil\s+tuo\s+idraulici\b', 'la tua attività', content, flags=re.IGNORECASE)
    
    # 17. "il tuo architetti" → "il tuo studio"
    content = re.sub(r'\bil\s+tuo\s+architetti\b', 'il tuo studio', content, flags=re.IGNORECASE)
    
    # 18. "il tuo commercialisti" → "il tuo studio"
    content = re.sub(r'\bil\s+tuo\s+commercialisti\b', 'il tuo studio', content, flags=re.IGNORECASE)
    
    # 19. "il tuo psicologi" → "il tuo studio"
    content = re.sub(r'\bil\s+tuo\s+psicologi\b', 'il tuo studio', content, flags=re.IGNORECASE)
    
    # 20. "il tuo fisioterapisti" → "il tuo studio"
    content = re.sub(r'\bil\s+tuo\s+fisioterapisti\b', 'il tuo studio', content, flags=re.IGNORECASE)
    
    # 21. "il tuo assicurazioni" → "la tua agenzia assicurativa"
    content = re.sub(r'\bil\s+tuo\s+assicurazioni\b', 'la tua agenzia assicurativa', content, flags=re.IGNORECASE)
    
    # 22. "il tuo negozi di abbigliamento" → "il tuo negozio di abbigliamento"
    content = re.sub(r'\bil\s+tuo\s+negozi\s+di\s+abbigliamento\b', 'il tuo negozio di abbigliamento', content, flags=re.IGNORECASE)
    
    # 23. "il tuo centri estetici" → "il tuo centro estetico"
    content = re.sub(r'\bil\s+tuo\s+centri\s+estetici\b', 'il tuo centro estetico', content, flags=re.IGNORECASE)
    
    # 24. "il tuo trattorie" → "la tua trattoria"
    content = re.sub(r'\bil\s+tuo\s+trattorie\b', 'la tua trattoria', content, flags=re.IGNORECASE)
    
    # 25. "il tuo studi legali" → "il tuo studio legale"
    content = re.sub(r'\bil\s+tuo\s+studi\s+legali\b', 'il tuo studio legale', content, flags=re.IGNORECASE)
    
    # 26. "il tuo avvocati" → "il tuo studio legale"
    content = re.sub(r'\bil\s+tuo\s+avvocati\b', 'il tuo studio legale', content, flags=re.IGNORECASE)
    
    # 27. "il tuo ingegneri" → "il tuo studio"
    content = re.sub(r'\bil\s+tuo\s+ingegneri\b', 'il tuo studio', content, flags=re.IGNORECASE)
    
    # 28. "il tuo consulenti fiscali" → "il tuo studio"
    content = re.sub(r'\bil\s+tuo\s+consulenti\s+fiscali\b', 'il tuo studio', content, flags=re.IGNORECASE)
    
    # 29. "il tuo psicoterapisti" → "il tuo studio"
    content = re.sub(r'\bil\s+tuo\s+psicoterapisti\b', 'il tuo studio', content, flags=re.IGNORECASE)
    
    return content

def process_files():
    """Processa tutti i file HTML nel blog"""
    html_files = list(BLOG_DIR.glob("*.html"))
    
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
                
                # Correggi ortografia
                new_content = fix_ortografia(content)
                
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

