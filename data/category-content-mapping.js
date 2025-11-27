// Mapping Contenuti Specifici per Categoria
// Usato per personalizzare testo articoli in base al settore

const categoryContentMapping = {
  'ristorante': {
    actionVerb: 'prenotare',
    actionNoun: 'prenotazioni',
    actionNounPlural: 'prenotazioni',
    clientTerm: 'clienti',
    serviceTerm: 'menu online',
    searchTerm: 'ristorante',
    benefitFocus: 'prenotazioni e visibilità',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta le prenotazioni del 300% con un sito web professionale. Menu online, prenotazioni 24/7, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di clienti potenziali ogni giorno che cercano ristoranti online.',
    solutionText: 'Un sito web professionale ti permette di accettare prenotazioni 24/7, mostrare il tuo menu con foto appetitose e apparire su Google Maps quando qualcuno cerca nella tua zona.'
  },
  
  'pizzeria': {
    actionVerb: 'ordinare',
    actionNoun: 'ordini',
    actionNounPlural: 'ordini',
    clientTerm: 'clienti',
    serviceTerm: 'menu pizza online',
    searchTerm: 'pizzeria',
    benefitFocus: 'ordini online e consegne',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta gli ordini del 300% con un sito web professionale. Menu pizza online, ordini e consegne, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di ordini potenziali ogni giorno che cercano pizzerie online.',
    solutionText: 'Un sito web professionale ti permette di accettare ordini 24/7, mostrare il tuo menu pizza con foto e gestire consegne online.'
  },
  
  'hotel': {
    actionVerb: 'prenotare',
    actionNoun: 'prenotazioni',
    actionNounPlural: 'prenotazioni camere',
    clientTerm: 'ospiti',
    serviceTerm: 'prenotazioni online',
    searchTerm: 'hotel',
    benefitFocus: 'prenotazioni camere e visibilità',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta le prenotazioni del 300% con un sito web professionale. Prenotazioni online, galleria foto, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di ospiti potenziali ogni giorno che cercano hotel online.',
    solutionText: 'Un sito web professionale ti permette di accettare prenotazioni 24/7, mostrare foto delle camere e apparire su Google Maps quando qualcuno cerca hotel nella tua zona.'
  },
  
  'meccanico': {
    actionVerb: 'prenotare',
    actionNoun: 'appuntamenti',
    actionNounPlural: 'appuntamenti',
    clientTerm: 'clienti',
    serviceTerm: 'preventivi online',
    searchTerm: 'meccanico',
    benefitFocus: 'preventivi e appuntamenti',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta i clienti del 300% con un sito web professionale. Preventivi online, prenotazioni interventi, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di clienti potenziali ogni giorno che cercano meccanici online.',
    solutionText: 'Un sito web professionale ti permette di accettare richieste preventivi 24/7, mostrare i tuoi servizi e apparire su Google Maps quando qualcuno cerca un meccanico nella tua zona.'
  },
  
  'dentista': {
    actionVerb: 'prenotare',
    actionNoun: 'prenotazioni visite',
    actionNounPlural: 'prenotazioni visite',
    clientTerm: 'pazienti',
    serviceTerm: 'prenotazioni online',
    searchTerm: 'dentista',
    benefitFocus: 'prenotazioni visite e visibilità',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta i pazienti del 300% con un sito web professionale. Prenotazioni visite online, informazioni servizi, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di pazienti potenziali ogni giorno che cercano dentisti online.',
    solutionText: 'Un sito web professionale ti permette di accettare prenotazioni visite 24/7, mostrare i tuoi servizi e apparire su Google Maps quando qualcuno cerca un dentista nella tua zona.'
  },
  
  'parrucchiere': {
    actionVerb: 'prenotare',
    actionNoun: 'prenotazioni',
    actionNounPlural: 'prenotazioni trattamenti',
    clientTerm: 'clienti',
    serviceTerm: 'prenotazioni online',
    searchTerm: 'parrucchiere',
    benefitFocus: 'prenotazioni e portfolio',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta i clienti del 300% con un sito web professionale. Prenotazioni online, portfolio lavori, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di clienti potenziali ogni giorno che cercano parrucchieri online.',
    solutionText: 'Un sito web professionale ti permette di accettare prenotazioni 24/7, mostrare il tuo portfolio lavori e apparire su Google Maps quando qualcuno cerca un parrucchiere nella tua zona.'
  },
  
  'studio-legale': {
    actionVerb: 'contattare',
    actionNoun: 'consulenze',
    actionNounPlural: 'consulenze',
    clientTerm: 'clienti',
    serviceTerm: 'consulenze online',
    searchTerm: 'studio legale',
    benefitFocus: 'credibilità e consulenze',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta i clienti del 300% con un sito web professionale. Consulenze online, credibilità professionale, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di clienti potenziali ogni giorno che cercano studi legali online.',
    solutionText: 'Un sito web professionale ti permette di accettare richieste consulenze 24/7, mostrare la tua esperienza e apparire su Google Maps quando qualcuno cerca uno studio legale nella tua zona.'
  },
  
  // Default per categorie non mappate
  'default': {
    actionVerb: 'contattare',
    actionNoun: 'contatti',
    actionNounPlural: 'contatti',
    clientTerm: 'clienti',
    serviceTerm: 'servizi online',
    searchTerm: 'servizio',
    benefitFocus: 'visibilità e contatti',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta i clienti del 300% con un sito web professionale. Visibilità online, contatti diretti, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di clienti potenziali ogni giorno che cercano online.',
    solutionText: 'Un sito web professionale ti permette di essere trovato online, mostrare i tuoi servizi e apparire su Google Maps quando qualcuno cerca nella tua zona.'
  }
};

// Funzione helper per ottenere mapping categoria
function getCategoryMapping(categorySlug) {
  return categoryContentMapping[categorySlug] || categoryContentMapping['default'];
}

// Esporta
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { categoryContentMapping, getCategoryMapping };
}

