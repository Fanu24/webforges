export const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Chi siamo", href: "#chi-siamo" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Recensioni", href: "#recensioni" },
  { label: "Prenotazioni", href: "#prenotazioni" },
  { label: "Contatti", href: "#contatti" },
];

export const philosophyPoints = [
  {
    title: "Ingredienti giornalieri",
    description:
      "Selezioniamo piccoli produttori del Mediterraneo per portare in tavola solo ingredienti freschi e stagionali.",
  },
  {
    title: "Cucina creativa",
    description:
      "Tecniche moderne e rispetto della tradizione per piatti equilibrati, sorprendenti e mai banali.",
  },
  {
    title: "Atmosfera intima",
    description:
      "Illuminazione soffusa, arredi naturali e servizio attento per serate speciali e ricorrenze.",
  },
];

export const menuCategories = [
  {
    name: "Antipasti",
    slug: "antipasti",
    items: [
      {
        name: "Crudo di mare Aurora",
        description:
          "Selezione di tartare e carpacci con agrumi canditi, olio al basilico e sale affumicato.",
        price: "€18",
        recommended: true,
      },
      {
        name: "Parmigiana leggera",
        description: "Melanzane arrosto, scamorza affumicata, coulis di datterini.",
        price: "€14",
      },
      {
        name: "Focaccia al rosmarino",
        description: "Servita con burrata pugliese, pesto di pistacchio e lime.",
        price: "€12",
      },
    ],
  },
  {
    name: "Primi",
    slug: "primi",
    items: [
      {
        name: "Tagliolino al limone e gamberi rossi",
        description: "Burro nocciola, zest di limone di Amalfi, crumble di pane aromatico.",
        price: "€22",
        recommended: true,
      },
      {
        name: "Risotto al carciofo e pecorino",
        description: "Mantecato al pecorino romano DOP con chips croccanti di carciofo.",
        price: "€20",
      },
      {
        name: "Raviolo di ossobuco",
        description: "Fondo bruno, gremolata di erbe e polvere di olive nere.",
        price: "€23",
      },
    ],
  },
  {
    name: "Secondi",
    slug: "secondi",
    items: [
      {
        name: "Branzino al forno",
        description: "Cotto in foglia di fico, servito con crema di cavolfiore e olio al finocchietto.",
        price: "€26",
      },
      {
        name: "Filetto di manzo affumicato",
        description: "Glassa al Marsala, sedano rapa arrosto e cipolle caramellate.",
        price: "€28",
        recommended: true,
      },
      {
        name: "Guancia di vitello",
        description: "Cottura lenta 12 ore, purea di topinambur, jus al rosmarino.",
        price: "€25",
      },
    ],
  },
  {
    name: "Dessert",
    slug: "dessert",
    items: [
      {
        name: "Sfera al cioccolato e agrumi",
        description: "Ganache al fondente 70%, crema al bergamotto e crumble di nocciole.",
        price: "€12",
      },
      {
        name: "Tiramisù Aurora",
        description: "Aria al caffè, mascarpone montato e biscotto al cacao.",
        price: "€10",
        recommended: true,
      },
      {
        name: "Millefoglie alla vaniglia",
        description: "Crema diplomatica, frutti rossi e miele agli agrumi.",
        price: "€11",
      },
    ],
  },
  {
    name: "Cantina",
    slug: "cantina",
    items: [
      {
        name: "Vermentino della casa",
        description: "Note floreali e minerali, perfetto con i nostri crudi di mare.",
        price: "€8 calice",
      },
      {
        name: "Chianti Riserva 2018",
        description: "Corpo avvolgente con tannino elegante, consigliato sui secondi di carne.",
        price: "€32 bottiglia",
        recommended: true,
      },
      {
        name: "Cocktail botanici",
        description: "Signature drink con gin mediterraneo, agrumi e spezie aromatiche.",
        price: "€14",
      },
    ],
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    alt: "Tavolo apparecchiato elegantemente",
  },
  {
    src: "https://images.unsplash.com/photo-1447078806655-40579c2520d6?auto=format&fit=crop&w=900&q=80",
    alt: "Chef che impiatta un piatto gourmet",
  },
  {
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80",
    alt: "Dettaglio di piatti colorati",
  },
  {
    src: "https://images.unsplash.com/photo-1521917441209-e886f0404a7b?auto=format&fit=crop&w=900&q=80",
    alt: "Sala interna del ristorante",
  },
  {
    src: "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=900&q=80",
    alt: "Dessert creativo con frutta",
  },
  {
    src: "https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=900&q=80",
    alt: "Calici di vino con luce soffusa",
  },
];

export const testimonials = [
  {
    name: "Elisa e Marco",
    role: "Cena anniversario",
    quote:
      "Un’esperienza memorabile: ogni piatto racconta una storia e il personale ti fa sentire a casa.",
  },
  {
    name: "Luca R.",
    role: "Food blogger",
    quote:
      "Menu contemporaneo e curato, ottima selezione di vini naturali e un servizio impeccabile.",
  },
  {
    name: "Giulia e Sara",
    role: "Amiche",
    quote:
      "Atmosfera intima e rilassata, perfetta per una serata tra amiche con piatti creativi e leggeri.",
  },
  {
    name: "Davide P.",
    role: "Cliente abituale",
    quote:
      "Il nuovo menù stagionale è sorprendente, consigliatissimo il tagliolino al limone e gamberi rossi.",
  },
];

export const faqs = [
  {
    question: "Avete opzioni vegetariane e senza glutine?",
    answer:
      "Sì, ogni categoria del menù propone alternative vegetariane e possiamo adattare molti piatti su richiesta.",
  },
  {
    question: "È possibile organizzare eventi privati?",
    answer:
      "Accomodiamo gruppi fino a 35 persone con menù degustazione personalizzati e abbinamento vini.",
  },
  {
    question: "Quanto tempo prima devo prenotare?",
    answer:
      "Per il weekend consigliamo almeno una settimana di anticipo. Durante la settimana spesso basta chiamare il giorno prima.",
  },
];

export const contactInfo = {
  address: "Via delle Magnolie 18, 20121 Milano",
  phone: "+39 02 1234 5670",
  email: "prenotazioni@ristoranteaurora.it",
  hours: [
    { label: "Lun - Ven", value: "19:00 - 23:30" },
    { label: "Sabato", value: "12:30 - 15:00 / 19:00 - 00:00" },
    { label: "Domenica", value: "Chiuso" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com", handle: "@ristoranteaurora" },
    { label: "Facebook", href: "https://facebook.com", handle: "/ristoranteaurora" },
    { label: "TikTok", href: "https://tiktok.com", handle: "@aurorarestaurant" },
  ],
};

