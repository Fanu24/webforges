// Database Località (Roma e Milano)
// Usato per generare articoli SEO locali

const locations = [
  // ROMA - Zone Centrali
  {
    name: "Centro Storico",
    slug: "centro-storico",
    city: "Roma",
    type: "zona",
    keywords: ["centro storico Roma", "zona centrale Roma", "centro città"]
  },
  {
    name: "Trastevere",
    slug: "trastevere",
    city: "Roma",
    type: "zona",
    keywords: ["Trastevere", "Trastevere Roma", "zona Trastevere"]
  },
  {
    name: "Testaccio",
    slug: "testaccio",
    city: "Roma",
    type: "zona",
    keywords: ["Testaccio", "Testaccio Roma", "zona Testaccio"]
  },
  {
    name: "Prati",
    slug: "prati",
    city: "Roma",
    type: "zona",
    keywords: ["Prati", "Prati Roma", "zona Prati"]
  },
  {
    name: "Flaminio",
    slug: "flaminio",
    city: "Roma",
    type: "zona",
    keywords: ["Flaminio", "Flaminio Roma", "zona Flaminio"]
  },
  {
    name: "Monti",
    slug: "monti",
    city: "Roma",
    type: "zona",
    keywords: ["Monti", "Monti Roma", "rione Monti"]
  },
  {
    name: "Campo de' Fiori",
    slug: "campo-de-fiori",
    city: "Roma",
    type: "zona",
    keywords: ["Campo de' Fiori", "Campo de Fiori Roma"]
  },
  
  // ROMA - Zone Periferiche
  {
    name: "EUR",
    slug: "eur",
    city: "Roma",
    type: "zona",
    keywords: ["EUR", "EUR Roma", "Esposizione Universale Roma"]
  },
  {
    name: "Ostia",
    slug: "ostia",
    city: "Roma",
    type: "zona",
    keywords: ["Ostia", "Ostia Roma", "Lido di Ostia"]
  },
  {
    name: "San Giovanni",
    slug: "san-giovanni",
    city: "Roma",
    type: "zona",
    keywords: ["San Giovanni", "San Giovanni Roma", "zona San Giovanni"]
  },
  {
    name: "Appio",
    slug: "appio",
    city: "Roma",
    type: "zona",
    keywords: ["Appio", "Appio Roma", "Appio Latino"]
  },
  {
    name: "Nomentana",
    slug: "nomentana",
    city: "Roma",
    type: "zona",
    keywords: ["Nomentana", "Via Nomentana", "zona Nomentana"]
  },
  {
    name: "Tuscolana",
    slug: "tuscolana",
    city: "Roma",
    type: "zona",
    keywords: ["Tuscolana", "Via Tuscolana", "zona Tuscolana"]
  },
  {
    name: "Parioli",
    slug: "parioli",
    city: "Roma",
    type: "zona",
    keywords: ["Parioli", "Parioli Roma", "zona Parioli"]
  },
  
  // ROMA - Comuni Limitrofi
  {
    name: "Fiumicino",
    slug: "fiumicino",
    city: "Roma",
    type: "comune",
    keywords: ["Fiumicino", "Fiumicino Roma", "comune Fiumicino"]
  },
  {
    name: "Tivoli",
    slug: "tivoli",
    city: "Roma",
    type: "comune",
    keywords: ["Tivoli", "Tivoli Roma", "comune Tivoli"]
  },
  {
    name: "Frascati",
    slug: "frascati",
    city: "Roma",
    type: "comune",
    keywords: ["Frascati", "Frascati Roma", "Castelli Romani"]
  },
  {
    name: "Castel Gandolfo",
    slug: "castel-gandolfo",
    city: "Roma",
    type: "comune",
    keywords: ["Castel Gandolfo", "Castelli Romani"]
  },
  
  // MILANO - Zone Centrali
  {
    name: "Centro",
    slug: "centro",
    city: "Milano",
    type: "zona",
    keywords: ["centro Milano", "zona centrale Milano", "centro città Milano"]
  },
  {
    name: "Brera",
    slug: "brera",
    city: "Milano",
    type: "zona",
    keywords: ["Brera", "Brera Milano", "zona Brera"]
  },
  {
    name: "Navigli",
    slug: "navigli",
    city: "Milano",
    type: "zona",
    keywords: ["Navigli", "Navigli Milano", "zona Navigli"]
  },
  {
    name: "Porta Nuova",
    slug: "porta-nuova",
    city: "Milano",
    type: "zona",
    keywords: ["Porta Nuova", "Porta Nuova Milano", "zona Porta Nuova"]
  },
  {
    name: "Duomo",
    slug: "duomo",
    city: "Milano",
    type: "zona",
    keywords: ["Duomo", "Duomo Milano", "piazza Duomo"]
  },
  {
    name: "Garibaldi",
    slug: "garibaldi",
    city: "Milano",
    type: "zona",
    keywords: ["Porta Garibaldi", "Garibaldi Milano", "zona Garibaldi"]
  },
  
  // MILANO - Zone Periferiche
  {
    name: "Isola",
    slug: "isola",
    city: "Milano",
    type: "zona",
    keywords: ["Isola", "Isola Milano", "zona Isola"]
  },
  {
    name: "Corso Como",
    slug: "corso-como",
    city: "Milano",
    type: "zona",
    keywords: ["Corso Como", "Corso Como Milano", "zona Corso Como"]
  },
  {
    name: "Porta Romana",
    slug: "porta-romana",
    city: "Milano",
    type: "zona",
    keywords: ["Porta Romana", "Porta Romana Milano"]
  },
  {
    name: "Naviglio Grande",
    slug: "naviglio-grande",
    city: "Milano",
    type: "zona",
    keywords: ["Naviglio Grande", "Naviglio Grande Milano"]
  },
  {
    name: "Porta Venezia",
    slug: "porta-venezia",
    city: "Milano",
    type: "zona",
    keywords: ["Porta Venezia", "Porta Venezia Milano"]
  },
  
  // MILANO - Comuni Limitrofi
  {
    name: "Sesto San Giovanni",
    slug: "sesto-san-giovanni",
    city: "Milano",
    type: "comune",
    keywords: ["Sesto San Giovanni", "Sesto San Giovanni Milano"]
  },
  {
    name: "Cinisello Balsamo",
    slug: "cinisello-balsamo",
    city: "Milano",
    type: "comune",
    keywords: ["Cinisello Balsamo", "Cinisello Balsamo Milano"]
  },
  {
    name: "Rho",
    slug: "rho",
    city: "Milano",
    type: "comune",
    keywords: ["Rho", "Rho Milano"]
  },
  {
    name: "Seregno",
    slug: "seregno",
    city: "Milano",
    type: "comune",
    keywords: ["Seregno", "Seregno Milano"]
  }
];

// Esporta per uso in altri file
if (typeof module !== 'undefined' && module.exports) {
  module.exports = locations;
}


