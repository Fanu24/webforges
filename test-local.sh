#!/bin/bash
echo "Avvio server locale per testare il sito..."
echo ""
echo "Il sito sarà disponibile su: http://localhost:8000"
echo ""
echo "Premi CTRL+C per fermare il server"
echo ""
python3 -m http.server 8000

