// Database Statistiche per Settori
// Dati e statistiche per ogni categoria business

const sectorStatistics = {
  'ristorante': {
    problem: {
      title: 'Il Problema: Senza Sito Web Perdi Clienti',
      stats: [
        { value: '85%', label: 'Cerca ristoranti online prima di prenotare', source: 'Google, 2023' },
        { value: '73%', label: 'Non prenota se non trova informazioni online', source: 'TripAdvisor, 2023' },
        { value: '60%', label: 'Sceglie il ristorante in base alle foto del menu', source: 'OpenTable, 2023' }
      ],
      cost: {
        title: 'Costo dell\'Inazione',
        description: 'Un ristorante a Trastevere senza sito web perde in media 15-20 prenotazioni al mese. Con un conto medio di €50 a persona, significa €7.500-€10.000 di ricavi persi mensilmente.',
        annual: '€90.000-€120.000 all\'anno di ricavi persi'
      }
    },
    solution: {
      benefits: [
        'Menu online sempre aggiornato con foto professionali',
        'Prenotazioni 24/7 anche quando il ristorante è chiuso',
        'Apparire su Google Maps quando qualcuno cerca "ristorante Trastevere"',
        'Mostrare recensioni e creare fiducia',
        'Promuovere eventi e serate speciali'
      ]
    },
    roi: {
      investment: '€2.500 - €4.000',
      monthlyGain: {
        prenotazioni: '+20 prenotazioni extra/mese',
        contoMedio: '€50 per persona',
        ricaviMensili: '€1.000 ricavi extra/mese',
        ricaviAnnuali: '€12.000 ricavi extra/anno'
      },
      calculation: '20 prenotazioni × €50 × 12 mesi = €12.000/anno',
      roi: '300% ROI nel primo anno',
      payback: 'Investimento recuperato in 3-4 mesi'
    },
    features: [
      {
        name: 'Menu Digitale Interattivo',
        description: 'Menu online con foto professionali dei piatti, descrizioni appetitose, prezzi chiari e informazioni su allergeni. I clienti possono vedere cosa offri prima di prenotare.',
        benefit: 'Aumenta le prenotazioni del 40%',
        icon: 'menu-online'
      },
      {
        name: 'Sistema Prenotazioni Online',
        description: 'Accetta prenotazioni 24 ore su 24, anche quando il ristorante è chiuso. I turisti che visitano Trastevere possono prenotare in qualsiasi momento, anche di notte.',
        benefit: 'Ricevi prenotazioni anche fuori orario',
        icon: 'prenotazioni'
      },
      {
        name: 'SEO Locale Ottimizzato',
        description: 'Il tuo ristorante appare su Google Maps quando qualcuno cerca "ristorante Trastevere" o "dove mangiare a Trastevere". Essenziale per catturare turisti e romani.',
        benefit: 'Appari tra i primi 3 risultati locali',
        icon: 'seo'
      },
      {
        name: 'Design Mobile-First',
        description: 'La maggior parte delle ricerche avviene da smartphone. Il tuo sito deve essere perfetto su mobile, specialmente quando i clienti camminano per Trastevere cercando un posto.',
        benefit: '85% delle ricerche avviene da mobile',
        icon: 'mobile'
      }
    ]
  },
  
  'hotel': {
    problem: {
      title: 'Il Problema: Ospiti Cercano Online',
      stats: [
        { value: '87%', label: 'Prenota hotel online', source: 'Booking.com, 2023' },
        { value: '92%', label: 'Legge recensioni prima di prenotare', source: 'TripAdvisor, 2023' },
        { value: '78%', label: 'Vuole vedere foto della camera', source: 'Expedia, 2023' }
      ],
      cost: {
        title: 'Costo dell\'Inazione',
        description: 'Un hotel senza sito web professionale perde in media 10-15 prenotazioni al mese. Con una tariffa media di €80 a notte, significa €8.000-€12.000 di ricavi persi mensilmente.',
        annual: '€96.000-€144.000 all\'anno di ricavi persi'
      }
    },
    roi: {
      investment: '€3.500 - €6.000',
      monthlyGain: {
        prenotazioni: '+15 prenotazioni extra/mese',
        tariffaMedia: '€80 a notte',
        ricaviMensili: '€1.200 ricavi extra/mese',
        ricaviAnnuali: '€14.400 ricavi extra/anno'
      },
      roi: '240% ROI nel primo anno'
    }
  },
  
  'studio-legale': {
    problem: {
      title: 'Il Problema: Clienti Cercano Online',
      stats: [
        { value: '68%', label: 'Cerca avvocato online', source: 'Google, 2023' },
        { value: '82%', label: 'Verifica credibilità online prima di contattare', source: 'LegalTech, 2023' }
      ],
      cost: {
        title: 'Costo dell\'Inazione',
        description: 'Uno studio legale senza sito web professionale perde in media 5-8 clienti potenziali al mese. Con un valore medio cliente di €2.000, significa €10.000-€16.000 di ricavi persi mensilmente.',
        annual: '€120.000-€192.000 all\'anno di ricavi persi'
      }
    },
    roi: {
      investment: '€4.000 - €7.000',
      monthlyGain: {
        clienti: '+5 clienti extra/mese',
        valoreMedio: '€2.000 per cliente',
        ricaviMensili: '€10.000 ricavi extra/mese',
        ricaviAnnuali: '€120.000 ricavi extra/anno'
      },
      roi: '1.700% ROI nel primo anno'
    }
  }
};

// Statistiche generali
const generalStats = {
  onlineSearch: '85% delle persone cerca online prima di contattare',
  mobileUsage: '68% delle ricerche avviene da smartphone',
  localSearch: '76% cerca "negozio vicino a me"',
  reviews: '88% legge recensioni online prima di decidere',
  websiteTrust: '75% giudica credibilità azienda dal sito web'
};

// Esporta
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { sectorStatistics, generalStats };
}

