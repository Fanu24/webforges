// Database Categorie Business
// Usato per generare articoli SEO locali

const categories = [
  {
    name: "Ristoranti",
    slug: "ristorante",
    plural: "ristoranti",
    keywords: ["ristorante", "cucina", "menu online", "prenotazioni", "gastronomia"],
    icon: "🍽️",
    description: "Siti web per ristoranti con menu online, prenotazioni e SEO ottimizzato",
    template: "ristorante"
  },
  {
    name: "Pizzerie",
    slug: "pizzeria",
    plural: "pizzerie",
    keywords: ["pizzeria", "pizza", "forno a legna", "pizza da asporto"],
    icon: "🍕",
    description: "Siti web per pizzerie con menu pizza, ordini online e delivery",
    template: "pizzeria"
  },
  {
    name: "Hotel",
    slug: "hotel",
    plural: "hotel",
    keywords: ["hotel", "struttura ricettiva", "prenotazioni hotel", "bed and breakfast"],
    icon: "🏨",
    description: "Siti web per hotel con prenotazioni online e galleria foto",
    template: "hotel"
  },
  {
    name: "Studi Legali",
    slug: "studio-legale",
    plural: "studi legali",
    keywords: ["studio legale", "avvocato", "consulenza legale", "diritto"],
    icon: "⚖️",
    description: "Siti web professionali per studi legali e avvocati",
    template: "studio-legale"
  },
  {
    name: "Parrucchieri",
    slug: "parrucchiere",
    plural: "parrucchieri",
    keywords: ["parrucchiere", "salone", "taglio capelli", "acconciature"],
    icon: "✂️",
    description: "Siti web per parrucchieri con prenotazioni online e portfolio",
    template: "parrucchiere"
  },
  {
    name: "Palestre",
    slug: "palestra",
    plural: "palestre",
    keywords: ["palestra", "fitness", "allenamento", "abbonamenti"],
    icon: "💪",
    description: "Siti web per palestre con abbonamenti online e corsi",
    template: "palestra"
  },
  {
    name: "Dentisti",
    slug: "dentista",
    plural: "dentisti",
    keywords: ["dentista", "studio dentistico", "igiene dentale", "impianti"],
    icon: "🦷",
    description: "Siti web per studi dentistici con prenotazioni online",
    template: "dentista"
  },
  {
    name: "Veterinari",
    slug: "veterinario",
    plural: "veterinari",
    keywords: ["veterinario", "clinica veterinaria", "cure animali", "pet"],
    icon: "🐾",
    description: "Siti web per cliniche veterinarie con prenotazioni",
    template: "veterinario"
  },
  {
    name: "Agenzie Immobiliari",
    slug: "agenzia-immobiliare",
    plural: "agenzie immobiliari",
    keywords: ["agenzia immobiliare", "vendita case", "affitti", "immobiliare"],
    icon: "🏠",
    description: "Siti web per agenzie immobiliari con annunci immobiliari",
    template: "agenzia-immobiliare"
  },
  {
    name: "Meccanici",
    slug: "meccanico",
    plural: "meccanici",
    keywords: ["meccanico", "officina", "riparazione auto", "gommista"],
    icon: "🔧",
    description: "Siti web per officine meccaniche e gommisti",
    template: "meccanico"
  },
  {
    name: "Fiorai",
    slug: "fioraio",
    plural: "fiorai",
    keywords: ["fioraio", "fioristeria", "fiori", "composizioni floreali"],
    icon: "🌸",
    description: "Siti web per fiorai con ordini online e consegne",
    template: "fioraio"
  },
  {
    name: "Farmacie",
    slug: "farmacia",
    plural: "farmacie",
    keywords: ["farmacia", "medicinali", "parafarmacia", "prodotti salute"],
    icon: "💊",
    description: "Siti web per farmacie con prodotti e servizi",
    template: "farmacia"
  },
  {
    name: "Ottici",
    slug: "ottico",
    plural: "ottici",
    keywords: ["ottico", "occhiali", "lenti", "visite oculistiche"],
    icon: "👓",
    description: "Siti web per ottici con catalogo occhiali online",
    template: "ottico"
  },
  {
    name: "Elettricisti",
    slug: "elettricista",
    plural: "elettricisti",
    keywords: ["elettricista", "impianti elettrici", "manutenzione", "riparazioni"],
    icon: "⚡",
    description: "Siti web per elettricisti con preventivi online",
    template: "elettricista"
  },
  {
    name: "Idraulici",
    slug: "idraulico",
    plural: "idraulici",
    keywords: ["idraulico", "impianti idraulici", "riparazioni", "emergenze"],
    icon: "🚿",
    description: "Siti web per idraulici con interventi urgenti",
    template: "idraulico"
  },
  {
    name: "Architetti",
    slug: "architetto",
    plural: "architetti",
    keywords: ["architetto", "progettazione", "ristrutturazioni", "design"],
    icon: "📐",
    description: "Siti web per architetti con portfolio progetti",
    template: "architetto"
  },
  {
    name: "Commercialisti",
    slug: "commercialista",
    plural: "commercialisti",
    keywords: ["commercialista", "consulenza fiscale", "contabilità", "fisco"],
    icon: "📊",
    description: "Siti web professionali per commercialisti",
    template: "commercialista"
  },
  {
    name: "Psicologi",
    slug: "psicologo",
    plural: "psicologi",
    keywords: ["psicologo", "psicoterapia", "consulenza", "supporto psicologico"],
    icon: "🧠",
    description: "Siti web per psicologi con prenotazioni online",
    template: "psicologo"
  },
  {
    name: "Fisioterapisti",
    slug: "fisioterapista",
    plural: "fisioterapisti",
    keywords: ["fisioterapista", "riabilitazione", "massoterapia", "terapie"],
    icon: "🏥",
    description: "Siti web per fisioterapisti con prenotazioni",
    template: "fisioterapista"
  },
  {
    name: "Assicurazioni",
    slug: "assicurazione",
    plural: "assicurazioni",
    keywords: ["assicurazione", "polizze", "preventivi assicurativi", "coperture"],
    icon: "🛡️",
    description: "Siti web per agenzie assicurative con preventivi",
    template: "assicurazione"
  },
  {
    name: "Scuole Guida",
    slug: "scuola-guida",
    plural: "scuole guida",
    keywords: ["scuola guida", "patente", "lezioni guida", "esame patente"],
    icon: "🚗",
    description: "Siti web per scuole guida con iscrizioni online",
    template: "scuola-guida"
  },
  {
    name: "Negozi di Abbigliamento",
    slug: "negozio-abbigliamento",
    plural: "negozi di abbigliamento",
    keywords: ["negozio abbigliamento", "moda", "vestiti", "outlet"],
    icon: "👔",
    description: "Siti web per negozi di abbigliamento con e-commerce",
    template: "negozio-abbigliamento"
  },
  {
    name: "Centri Estetici",
    slug: "centro-estetico",
    plural: "centri estetici",
    keywords: ["centro estetico", "trattamenti", "bellezza", "spa"],
    icon: "✨",
    description: "Siti web per centri estetici con prenotazioni",
    template: "centro-estetico"
  },
  {
    name: "Trattorie",
    slug: "trattoria",
    plural: "trattorie",
    keywords: ["trattoria", "cucina romana", "tradizione", "ristorante tradizionale"],
    icon: "🍝",
    description: "Siti web per trattorie con menu tradizionali",
    template: "trattoria"
  },
  {
    name: "B&B",
    slug: "bed-and-breakfast",
    plural: "bed and breakfast",
    keywords: ["bed and breakfast", "b&b", "alloggio", "colazione"],
    icon: "🛏️",
    description: "Siti web per B&B con prenotazioni online",
    template: "bed-and-breakfast"
  },
  {
    name: "Agriturismi",
    slug: "agriturismo",
    plural: "agriturismi",
    keywords: ["agriturismo", "campagna", "ristorante agriturismo", "vacanze"],
    icon: "🌾",
    description: "Siti web per agriturismi con prenotazioni",
    template: "agriturismo"
  },
  {
    name: "Avvocati",
    slug: "avvocato",
    plural: "avvocati",
    keywords: ["avvocato", "consulenza legale", "studio legale", "diritto"],
    icon: "⚖️",
    description: "Siti web professionali per avvocati",
    template: "avvocato"
  },
  {
    name: "Ingegneri",
    slug: "ingegnere",
    plural: "ingegneri",
    keywords: ["ingegnere", "progettazione", "consulenza tecnica", "perizie"],
    icon: "🔩",
    description: "Siti web per ingegneri con portfolio progetti",
    template: "ingegnere"
  },
  {
    name: "Consulenti Fiscali",
    slug: "consulente-fiscale",
    plural: "consulenti fiscali",
    keywords: ["consulente fiscale", "fisco", "tasse", "consulenza tributaria"],
    icon: "📋",
    description: "Siti web per consulenti fiscali",
    template: "consulente-fiscale"
  },
  {
    name: "Psicoterapisti",
    slug: "psicoterapista",
    plural: "psicoterapisti",
    keywords: ["psicoterapista", "terapia", "supporto psicologico", "consulenza"],
    icon: "🧘",
    description: "Siti web per psicoterapisti con prenotazioni",
    template: "psicoterapista"
  },
  {
    name: "E-commerce",
    slug: "e-commerce",
    plural: "e-commerce",
    keywords: ["e-commerce", "negozio online", "vendita online", "shop online"],
    icon: "🛒",
    description: "Siti e-commerce completi con gestione prodotti",
    template: "e-commerce"
  }
];

// Esporta per uso in altri file
if (typeof module !== 'undefined' && module.exports) {
  module.exports = categories;
}


