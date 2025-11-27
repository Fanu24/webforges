#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script Python SICURO per correggere errori ortografici
Processa UN file alla volta e salva immediatamente
"""

import os
import re
from pathlib import Path

# Configurazione
BLOG_DIR = Path(__file__).parent.parent / "blog"
CHECKPOINT_FILE = Path(__file__).parent / ".fix-ortografia-checkpoint.txt"

def fix_ortografia(content):
    """Corregge errori ortografici comuni"""
    original = content
    
    # 1. "le contatti" → "i contatti" (contatti è maschile)
    content = re.sub(r'\ble\s+contatti\b', 'i contatti', content, flags=re.IGNORECASE)
    
    # 2. "il tuo scuole guida" → "la tua scuola guida"
    content = re.sub(r'\bil\s+tuo\s+scuole\s+guida\b', 'la tua scuola guida', content, flags=re.IGNORECASE)
    
    # 3. "il tuo palestre" → "la tua palestra"
    content = re.sub(r'\bil\s+tuo\s+palestre\b', 'la tua palestra', content, flags=re.IGNORECASE)
    
    # 4. "il tuo dentisti" → "il tuo studio dentistico"
    content = re.sub(r'\bil\s+tuo\s+dentisti\b', 'il tuo studio dentistico', content, flags=re.IGNORECASE)
    
    # 5. "il tuo parrucchieri" → "il tuo salone"
    content = re.sub(r'\bil\s+tuo\s+parrucchieri\b', 'il tuo salone', content, flags=re.IGNORECASE)
    
    # 6. "il tuo ristoranti" → "il tuo ristorante"
    content = re.sub(r'\bil\s+tuo\s+ristoranti\b', 'il tuo ristorante', content, flags=re.IGNORECASE)
    
    # 7. "il tuo pizzerie" → "la tua pizzeria"
    content = re.sub(r'\bil\s+tuo\s+pizzerie\b', 'la tua pizzeria', content, flags=re.IGNORECASE)
    
    # 8. "il tuo meccanici" → "la tua officina"
    content = re.sub(r'\bil\s+tuo\s+meccanici\b', 'la tua officina', content, flags=re.IGNORECASE)
    
    # 9. "il tuo veterinari" → "la tua clinica veterinaria"
    content = re.sub(r'\bil\s+tuo\s+veterinari\b', 'la tua clinica veterinaria', content, flags=re.IGNORECASE)
    
    # 10. "il tuo agenzie immobiliari" → "la tua agenzia immobiliare"
    content = re.sub(r'\bil\s+tuo\s+agenzie\s+immobiliari\b', 'la tua agenzia immobiliare', content, flags=re.IGNORECASE)
    
    # 11. "il tuo fiorai" → "la tua fioristeria"
    content = re.sub(r'\bil\s+tuo\s+fiorai\b', 'la tua fioristeria', content, flags=re.IGNORECASE)
    
    # 12. "il tuo farmacie" → "la tua farmacia"
    content = re.sub(r'\bil\s+tuo\s+farmacie\b', 'la tua farmacia', content, flags=re.IGNORECASE)
    
    # 13. "il tuo ottici" → "il tuo negozio ottico"
    content = re.sub(r'\bil\s+tuo\s+ottici\b', 'il tuo negozio ottico', content, flags=re.IGNORECASE)
    
    # 14. "il tuo elettricisti" → "la tua attività"
    content = re.sub(r'\bil\s+tuo\s+elettricisti\b', 'la tua attività', content, flags=re.IGNORECASE)
    
    # 15. "il tuo idraulici" → "la tua attività"
    content = re.sub(r'\bil\s+tuo\s+idraulici\b', 'la tua attività', content, flags=re.IGNORECASE)
    
    # 16. "il tuo architetti" → "il tuo studio"
    content = re.sub(r'\bil\s+tuo\s+architetti\b', 'il tuo studio', content, flags=re.IGNORECASE)
    
    # 17. "il tuo commercialisti" → "il tuo studio"
    content = re.sub(r'\bil\s+tuo\s+commercialisti\b', 'il tuo studio', content, flags=re.IGNORECASE)
    
    # 18. "il tuo psicologi" → "il tuo studio"
    content = re.sub(r'\bil\s+tuo\s+psicologi\b', 'il tuo studio', content, flags=re.IGNORECASE)
    
    # 19. "il tuo fisioterapisti" → "il tuo studio"
    content = re.sub(r'\bil\s+tuo\s+fisioterapisti\b', 'il tuo studio', content, flags=re.IGNORECASE)
    
    # 20. "il tuo assicurazioni" → "la tua agenzia assicurativa"
    content = re.sub(r'\bil\s+tuo\s+assicurazioni\b', 'la tua agenzia assicurativa', content, flags=re.IGNORECASE)
    
    # 21. "il tuo negozi di abbigliamento" → "il tuo negozio di abbigliamento"
    content = re.sub(r'\bil\s+tuo\s+negozi\s+di\s+abbigliamento\b', 'il tuo negozio di abbigliamento', content, flags=re.IGNORECASE)
    
    # 22. "il tuo centri estetici" → "il tuo centro estetico"
    content = re.sub(r'\bil\s+tuo\s+centri\s+estetici\b', 'il tuo centro estetico', content, flags=re.IGNORECASE)
    
    # 23. "il tuo trattorie" → "la tua trattoria"
    content = re.sub(r'\bil\s+tuo\s+trattorie\b', 'la tua trattoria', content, flags=re.IGNORECASE)
    
    # 24. "il tuo studi legali" → "il tuo studio legale"
    content = re.sub(r'\bil\s+tuo\s+studi\s+legali\b', 'il tuo studio legale', content, flags=re.IGNORECASE)
    
    # 25. "il tuo avvocati" → "il tuo studio legale"
    content = re.sub(r'\bil\s+tuo\s+avvocati\b', 'il tuo studio legale', content, flags=re.IGNORECASE)
    
    # 26. "il tuo ingegneri" → "il tuo studio"
    content = re.sub(r'\bil\s+tuo\s+ingegneri\b', 'il tuo studio', content, flags=re.IGNORECASE)
    
    # 27. "il tuo consulenti fiscali" → "il tuo studio"
    content = re.sub(r'\bil\s+tuo\s+consulenti\s+fiscali\b', 'il tuo studio', content, flags=re.IGNORECASE)
    
    # 28. "il tuo psicoterapisti" → "il tuo studio"
    content = re.sub(r'\bil\s+tuo\s+psicoterapisti\b', 'il tuo studio', content, flags=re.IGNORECASE)
    
    return content

def load_checkpoint():
    """Carica checkpoint se esiste"""
    if CHECKPOINT_FILE.exists():
        try:
            with open(CHECKPOINT_FILE, 'r', encoding='utf-8') as f:
                return set(f.read().strip().split('\n'))
        except:
            return set()
    return set()

def save_checkpoint(processed_files):
    """Salva checkpoint"""
    try:
        with open(CHECKPOINT_FILE, 'w', encoding='utf-8') as f:
            f.write('\n'.join(sorted(processed_files)))
    except:
        pass

def process_files():
    """Processa tutti i file HTML nel blog - UN FILE ALLA VOLTA"""
    html_files = sorted([f for f in BLOG_DIR.glob("*.html")])
    processed = load_checkpoint()
    
    print(f"Trovati {len(html_files)} file totali")
    print(f"Già processati: {len(processed)}")
    print(f"Da processare: {len(html_files) - len(processed)}\n")
    
    fixed = 0
    errors = 0
    count = 0
    
    for file_path in html_files:
        # Salta se già processato
        if file_path.name in processed:
            continue
        
        count += 1
        
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
                print(f"[{count}] ✓ {file_path.name} - CORRETTO")
            else:
                print(f"[{count}] - {file_path.name} - OK")
            
            # Salva checkpoint ogni 5 file
            processed.add(file_path.name)
            if count % 5 == 0:
                save_checkpoint(processed)
                print(f"  → Checkpoint salvato ({count} file processati)\n")
            
        except Exception as e:
            errors += 1
            print(f"[{count}] ✗ ERRORE in {file_path.name}: {e}")
            if errors >= 10:
                print("\nTroppi errori! Interruzione.")
                break
    
    # Salva checkpoint finale
    save_checkpoint(processed)
    
    print(f"\n{'='*50}")
    print(f"Completato!")
    print(f"File processati: {count}")
    print(f"File corretti: {fixed}")
    print(f"Errori: {errors}")
    print(f"{'='*50}")

if __name__ == "__main__":
    try:
        process_files()
    except KeyboardInterrupt:
        print("\n\nInterrotto dall'utente - Checkpoint salvato")
        save_checkpoint(processed if 'processed' in locals() else set())
    except Exception as e:
        print(f"\nErrore: {e}")
        import traceback
        traceback.print_exc()

