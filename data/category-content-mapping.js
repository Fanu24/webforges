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
  
  'agenzia-immobiliare': {
    actionVerb: 'contattare',
    actionNoun: 'contatti',
    actionNounPlural: 'contatti',
    clientTerm: 'clienti',
    serviceTerm: 'annunci immobiliari',
    searchTerm: 'agenzia immobiliare',
    benefitFocus: 'annunci e contatti',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta i contatti del 300% con un sito web professionale. Annunci immobiliari online, galleria foto, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di clienti potenziali ogni giorno che cercano agenzie immobiliari online.',
    solutionText: 'Un sito web professionale ti permette di pubblicare annunci immobiliari 24/7, mostrare foto delle proprietà e apparire su Google Maps quando qualcuno cerca un\'agenzia immobiliare nella tua zona.',
    stat1: 'Sceglie l\'agenzia immobiliare in base alle foto delle proprietà',
    stat2: 'Cerca agenzie immobiliari online prima di contattare',
    stat3: 'Non contatta se non trova informazioni online',
    problemDetail: 'Un\'agenzia immobiliare senza sito web perde in media 15-20 contatti al mese',
    benefit1: 'Annunci 24 Ore su 24',
    benefit1Desc: 'Pubblica annunci anche quando l\'agenzia è chiusa. I clienti che cercano proprietà possono visualizzare gli annunci in qualsiasi momento.',
    benefit2: 'Galleria Foto Professionale',
    benefit2Desc: 'Mostra foto professionali delle proprietà. I clienti vogliono vedere le case prima di visitarle.',
    benefit3: 'Contatti Extra/Mese',
    benefit3Desc: 'Con un sito web ottimizzato, ricevi 20 contatti in più ogni mese.',
    roiText: '20 contatti × €500 commissione media × 12 mesi = €120.000 ricavi extra annui. Investimento recuperato in 1-2 mesi.'
  },
  
  'palestra': {
    actionVerb: 'iscriversi',
    actionNoun: 'iscrizioni',
    actionNounPlural: 'iscrizioni',
    clientTerm: 'iscritti',
    serviceTerm: 'abbonamenti online',
    searchTerm: 'palestra',
    benefitFocus: 'iscrizioni e abbonamenti',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta le iscrizioni del 300% con un sito web professionale. Abbonamenti online, corsi, orari, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di potenziali iscritti ogni giorno che cercano palestre online.',
    solutionText: 'Un sito web professionale ti permette di gestire iscrizioni 24/7, mostrare i tuoi corsi e orari e apparire su Google Maps quando qualcuno cerca una palestra nella tua zona.'
  },
  
  'veterinario': {
    actionVerb: 'prenotare',
    actionNoun: 'prenotazioni visite',
    actionNounPlural: 'prenotazioni visite',
    clientTerm: 'pazienti',
    serviceTerm: 'prenotazioni online',
    searchTerm: 'veterinario',
    benefitFocus: 'prenotazioni e informazioni',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta i pazienti del 300% con un sito web professionale. Prenotazioni visite online, informazioni servizi, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di pazienti potenziali ogni giorno che cercano veterinari online.',
    solutionText: 'Un sito web professionale ti permette di accettare prenotazioni visite 24/7, mostrare i tuoi servizi e apparire su Google Maps quando qualcuno cerca un veterinario nella tua zona.'
  },
  
  'fioraio': {
    actionVerb: 'ordinare',
    actionNoun: 'ordini',
    actionNounPlural: 'ordini',
    clientTerm: 'clienti',
    serviceTerm: 'ordini fiori online',
    searchTerm: 'fioraio',
    benefitFocus: 'ordini e consegne',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta gli ordini del 300% con un sito web professionale. Ordini fiori online, consegne, catalogo composizioni, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di ordini potenziali ogni giorno che cercano fiorai online.',
    solutionText: 'Un sito web professionale ti permette di accettare ordini 24/7, mostrare il tuo catalogo composizioni floreali e gestire consegne online.'
  },
  
  'farmacia': {
    actionVerb: 'contattare',
    actionNoun: 'contatti',
    actionNounPlural: 'contatti',
    clientTerm: 'clienti',
    serviceTerm: 'prodotti e servizi',
    searchTerm: 'farmacia',
    benefitFocus: 'visibilità e informazioni',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta i clienti del 300% con un sito web professionale. Informazioni prodotti, servizi, orari, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di clienti potenziali ogni giorno che cercano farmacie online.',
    solutionText: 'Un sito web professionale ti permette di mostrare i tuoi prodotti e servizi, pubblicare orari e promozioni e apparire su Google Maps quando qualcuno cerca una farmacia nella tua zona.'
  },
  
  'ottico': {
    actionVerb: 'prenotare',
    actionNoun: 'appuntamenti',
    actionNounPlural: 'appuntamenti',
    clientTerm: 'clienti',
    serviceTerm: 'catalogo occhiali online',
    searchTerm: 'ottico',
    benefitFocus: 'appuntamenti e catalogo',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta i clienti del 300% con un sito web professionale. Catalogo occhiali online, prenotazioni visite, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di clienti potenziali ogni giorno che cercano ottici online.',
    solutionText: 'Un sito web professionale ti permette di mostrare il tuo catalogo occhiali, accettare prenotazioni visite e apparire su Google Maps quando qualcuno cerca un ottico nella tua zona.'
  },
  
  'elettricista': {
    actionVerb: 'contattare',
    actionNoun: 'richieste interventi',
    actionNounPlural: 'richieste interventi',
    clientTerm: 'clienti',
    serviceTerm: 'preventivi online',
    searchTerm: 'elettricista',
    benefitFocus: 'preventivi e interventi',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta i clienti del 300% con un sito web professionale. Preventivi online, interventi urgenti, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di clienti potenziali ogni giorno che cercano elettricisti online.',
    solutionText: 'Un sito web professionale ti permette di accettare richieste preventivi 24/7, mostrare i tuoi servizi e apparire su Google Maps quando qualcuno cerca un elettricista nella tua zona.'
  },
  
  'idraulico': {
    actionVerb: 'contattare',
    actionNoun: 'richieste interventi',
    actionNounPlural: 'richieste interventi',
    clientTerm: 'clienti',
    serviceTerm: 'preventivi online',
    searchTerm: 'idraulico',
    benefitFocus: 'preventivi e interventi',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta i clienti del 300% con un sito web professionale. Preventivi online, interventi urgenti, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di clienti potenziali ogni giorno che cercano idraulici online.',
    solutionText: 'Un sito web professionale ti permette di accettare richieste preventivi 24/7, mostrare i tuoi servizi e apparire su Google Maps quando qualcuno cerca un idraulico nella tua zona.'
  },
  
  'architetto': {
    actionVerb: 'contattare',
    actionNoun: 'consulenze',
    actionNounPlural: 'consulenze',
    clientTerm: 'clienti',
    serviceTerm: 'portfolio progetti',
    searchTerm: 'architetto',
    benefitFocus: 'portfolio e credibilità',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta i clienti del 300% con un sito web professionale. Portfolio progetti, consulenze online, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di clienti potenziali ogni giorno che cercano architetti online.',
    solutionText: 'Un sito web professionale ti permette di mostrare il tuo portfolio progetti, accettare richieste consulenze e apparire su Google Maps quando qualcuno cerca un architetto nella tua zona.'
  },
  
  'commercialista': {
    actionVerb: 'contattare',
    actionNoun: 'consulenze',
    actionNounPlural: 'consulenze',
    clientTerm: 'clienti',
    serviceTerm: 'consulenze online',
    searchTerm: 'commercialista',
    benefitFocus: 'credibilità e consulenze',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta i clienti del 300% con un sito web professionale. Consulenze online, credibilità professionale, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di clienti potenziali ogni giorno che cercano commercialisti online.',
    solutionText: 'Un sito web professionale ti permette di accettare richieste consulenze 24/7, mostrare la tua esperienza e apparire su Google Maps quando qualcuno cerca un commercialista nella tua zona.'
  },
  
  'psicologo': {
    actionVerb: 'prenotare',
    actionNoun: 'prenotazioni sedute',
    actionNounPlural: 'prenotazioni sedute',
    clientTerm: 'pazienti',
    serviceTerm: 'prenotazioni online',
    searchTerm: 'psicologo',
    benefitFocus: 'prenotazioni e informazioni',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta i pazienti del 300% con un sito web professionale. Prenotazioni sedute online, informazioni servizi, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di pazienti potenziali ogni giorno che cercano psicologi online.',
    solutionText: 'Un sito web professionale ti permette di accettare prenotazioni sedute 24/7, mostrare i tuoi servizi e apparire su Google Maps quando qualcuno cerca un psicologo nella tua zona.'
  },
  
  'fisioterapista': {
    actionVerb: 'prenotare',
    actionNoun: 'prenotazioni sedute',
    actionNounPlural: 'prenotazioni sedute',
    clientTerm: 'pazienti',
    serviceTerm: 'prenotazioni online',
    searchTerm: 'fisioterapista',
    benefitFocus: 'prenotazioni e informazioni',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta i pazienti del 300% con un sito web professionale. Prenotazioni sedute online, informazioni terapie, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di pazienti potenziali ogni giorno che cercano fisioterapisti online.',
    solutionText: 'Un sito web professionale ti permette di accettare prenotazioni sedute 24/7, mostrare i tuoi servizi e apparire su Google Maps quando qualcuno cerca un fisioterapista nella tua zona.'
  },
  
  'assicurazione': {
    actionVerb: 'contattare',
    actionNoun: 'preventivi',
    actionNounPlural: 'preventivi',
    clientTerm: 'clienti',
    serviceTerm: 'preventivi assicurativi online',
    searchTerm: 'assicurazione',
    benefitFocus: 'preventivi e polizze',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta i clienti del 300% con un sito web professionale. Preventivi assicurativi online, informazioni polizze, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di clienti potenziali ogni giorno che cercano agenzie assicurative online.',
    solutionText: 'Un sito web professionale ti permette di offrire preventivi assicurativi online 24/7, mostrare le tue polizze e apparire su Google Maps quando qualcuno cerca un\'assicurazione nella tua zona.'
  },
  
  'scuola-guida': {
    actionVerb: 'iscriversi',
    actionNoun: 'iscrizioni',
    actionNounPlural: 'iscrizioni',
    clientTerm: 'allievi',
    serviceTerm: 'iscrizioni online',
    searchTerm: 'scuola guida',
    benefitFocus: 'iscrizioni e informazioni',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta le iscrizioni del 300% con un sito web professionale. Iscrizioni online, informazioni corsi, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di potenziali allievi ogni giorno che cercano scuole guida online.',
    solutionText: 'Un sito web professionale ti permette di gestire iscrizioni 24/7, mostrare i tuoi corsi e apparire su Google Maps quando qualcuno cerca una scuola guida nella tua zona.'
  },
  
  'negozio-abbigliamento': {
    actionVerb: 'acquistare',
    actionNoun: 'acquisti',
    actionNounPlural: 'acquisti',
    clientTerm: 'clienti',
    serviceTerm: 'catalogo prodotti online',
    searchTerm: 'negozio abbigliamento',
    benefitFocus: 'vendite e catalogo',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta le vendite del 300% con un sito web professionale. Catalogo prodotti online, e-commerce, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di clienti potenziali ogni giorno che cercano negozi di abbigliamento online.',
    solutionText: 'Un sito web professionale ti permette di vendere online 24/7, mostrare il tuo catalogo prodotti e apparire su Google Maps quando qualcuno cerca un negozio di abbigliamento nella tua zona.'
  },
  
  'centro-estetico': {
    actionVerb: 'prenotare',
    actionNoun: 'prenotazioni trattamenti',
    actionNounPlural: 'prenotazioni trattamenti',
    clientTerm: 'clienti',
    serviceTerm: 'prenotazioni online',
    searchTerm: 'centro estetico',
    benefitFocus: 'prenotazioni e trattamenti',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta i clienti del 300% con un sito web professionale. Prenotazioni trattamenti online, catalogo servizi, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di clienti potenziali ogni giorno che cercano centri estetici online.',
    solutionText: 'Un sito web professionale ti permette di accettare prenotazioni trattamenti 24/7, mostrare i tuoi servizi e apparire su Google Maps quando qualcuno cerca un centro estetico nella tua zona.'
  },
  
  'trattoria': {
    actionVerb: 'prenotare',
    actionNoun: 'prenotazioni',
    actionNounPlural: 'prenotazioni',
    clientTerm: 'clienti',
    serviceTerm: 'menu online',
    searchTerm: 'trattoria',
    benefitFocus: 'prenotazioni e visibilità',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta le prenotazioni del 300% con un sito web professionale. Menu online, prenotazioni 24/7, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di clienti potenziali ogni giorno che cercano trattorie online.',
    solutionText: 'Un sito web professionale ti permette di accettare prenotazioni 24/7, mostrare il tuo menu tradizionale con foto e apparire su Google Maps quando qualcuno cerca una trattoria nella tua zona.'
  },
  
  'bed-and-breakfast': {
    actionVerb: 'prenotare',
    actionNoun: 'prenotazioni camere',
    actionNounPlural: 'prenotazioni camere',
    clientTerm: 'ospiti',
    serviceTerm: 'prenotazioni online',
    searchTerm: 'bed and breakfast',
    benefitFocus: 'prenotazioni camere e visibilità',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta le prenotazioni del 300% con un sito web professionale. Prenotazioni online, galleria foto, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di ospiti potenziali ogni giorno che cercano B&B online.',
    solutionText: 'Un sito web professionale ti permette di accettare prenotazioni 24/7, mostrare foto delle camere e apparire su Google Maps quando qualcuno cerca un B&B nella tua zona.'
  },
  
  'agriturismo': {
    actionVerb: 'prenotare',
    actionNoun: 'prenotazioni',
    actionNounPlural: 'prenotazioni',
    clientTerm: 'ospiti',
    serviceTerm: 'prenotazioni online',
    searchTerm: 'agriturismo',
    benefitFocus: 'prenotazioni e visibilità',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta le prenotazioni del 300% con un sito web professionale. Prenotazioni online, informazioni attività, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di ospiti potenziali ogni giorno che cercano agriturismi online.',
    solutionText: 'Un sito web professionale ti permette di accettare prenotazioni 24/7, mostrare le tue attività e apparire su Google Maps quando qualcuno cerca un agriturismo nella tua zona.'
  },
  
  'avvocato': {
    actionVerb: 'contattare',
    actionNoun: 'consulenze',
    actionNounPlural: 'consulenze',
    clientTerm: 'clienti',
    serviceTerm: 'consulenze online',
    searchTerm: 'avvocato',
    benefitFocus: 'credibilità e consulenze',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta i clienti del 300% con un sito web professionale. Consulenze online, credibilità professionale, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di clienti potenziali ogni giorno che cercano avvocati online.',
    solutionText: 'Un sito web professionale ti permette di accettare richieste consulenze 24/7, mostrare la tua esperienza e apparire su Google Maps quando qualcuno cerca un avvocato nella tua zona.'
  },
  
  'ingegnere': {
    actionVerb: 'contattare',
    actionNoun: 'consulenze',
    actionNounPlural: 'consulenze',
    clientTerm: 'clienti',
    serviceTerm: 'portfolio progetti',
    searchTerm: 'ingegnere',
    benefitFocus: 'portfolio e credibilità',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta i clienti del 300% con un sito web professionale. Portfolio progetti, consulenze online, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di clienti potenziali ogni giorno che cercano ingegneri online.',
    solutionText: 'Un sito web professionale ti permette di mostrare il tuo portfolio progetti, accettare richieste consulenze e apparire su Google Maps quando qualcuno cerca un ingegnere nella tua zona.'
  },
  
  'consulente-fiscale': {
    actionVerb: 'contattare',
    actionNoun: 'consulenze',
    actionNounPlural: 'consulenze',
    clientTerm: 'clienti',
    serviceTerm: 'consulenze online',
    searchTerm: 'consulente fiscale',
    benefitFocus: 'credibilità e consulenze',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta i clienti del 300% con un sito web professionale. Consulenze online, credibilità professionale, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di clienti potenziali ogni giorno che cercano consulenti fiscali online.',
    solutionText: 'Un sito web professionale ti permette di accettare richieste consulenze 24/7, mostrare la tua esperienza e apparire su Google Maps quando qualcuno cerca un consulente fiscale nella tua zona.'
  },
  
  'psicoterapista': {
    actionVerb: 'prenotare',
    actionNoun: 'prenotazioni sedute',
    actionNounPlural: 'prenotazioni sedute',
    clientTerm: 'pazienti',
    serviceTerm: 'prenotazioni online',
    searchTerm: 'psicoterapista',
    benefitFocus: 'prenotazioni e informazioni',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta i pazienti del 300% con un sito web professionale. Prenotazioni sedute online, informazioni servizi, SEO locale ottimizzato.',
    problemText: 'Senza un sito web, stai perdendo migliaia di pazienti potenziali ogni giorno che cercano psicoterapisti online.',
    solutionText: 'Un sito web professionale ti permette di accettare prenotazioni sedute 24/7, mostrare i tuoi servizi e apparire su Google Maps quando qualcuno cerca un psicoterapista nella tua zona.'
  },
  
  'e-commerce': {
    actionVerb: 'acquistare',
    actionNoun: 'acquisti',
    actionNounPlural: 'acquisti',
    clientTerm: 'clienti',
    serviceTerm: 'negozio online',
    searchTerm: 'e-commerce',
    benefitFocus: 'vendite e catalogo',
    ctaText: 'Richiedi Preventivo Gratuito',
    heroSubtitle: 'Aumenta le vendite del 300% con un sito e-commerce professionale. Catalogo prodotti, gestione ordini, SEO ottimizzato.',
    problemText: 'Senza un sito e-commerce, stai perdendo migliaia di clienti potenziali ogni giorno che cercano prodotti online.',
    solutionText: 'Un sito e-commerce professionale ti permette di vendere online 24/7, gestire ordini e pagamenti e raggiungere clienti in tutta Italia.'
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

