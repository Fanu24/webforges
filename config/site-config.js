// Configurazione Centralizzata del Sito
// Modifica questo file per aggiornare nome, URL e altre informazioni brand
// Tutti gli articoli del blog useranno questi valori

const SITE_CONFIG = {
  // Informazioni Brand
  SITE_NAME: "WebForge Studio",
  SITE_NAME_SHORT: "WebForge",
  SITE_DESCRIPTION: "Creiamo siti web moderni, performanti e su misura per aziende a Roma e Milano",
  
  // URL e Domini
  SITE_URL: "https://fanu24.github.io/webforges",
  SITE_URL_BASE: "https://fanu24.github.io/webforges", // Senza trailing slash
  
  // Contatti
  CONTACT_EMAIL: "info@webforgestudio.it",
  CONTACT_PHONE: "", // Opzionale
  
  // Social Media (opzionali)
  SOCIAL_LINKS: {
    linkedin: "",
    facebook: "",
    instagram: "",
    twitter: ""
  },
  
  // Informazioni Legali
  COMPANY_NAME: "WebForge Studio",
  VAT_NUMBER: "00000000000", // P.IVA
  
  // Anno corrente (auto-generato)
  CURRENT_YEAR: new Date().getFullYear(),
  
  // Testi Standard
  FOOTER_TEXT: "Siti Web per Ristoranti a Roma e Milano",
  CTA_TEXT: "Richiedi Preventivo Gratuito",
  NAV_HOME: "Home",
  NAV_SERVICES: "Servizi",
  NAV_CONTACTS: "Contatti",
  
  // SEO Default
  DEFAULT_KEYWORDS: "siti web, creazione siti web, siti web Roma, siti web Milano",
  DEFAULT_AUTHOR: "WebForge Studio"
};

// Esporta per uso in Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}

// Esporta per uso in browser
if (typeof window !== 'undefined') {
  window.SITE_CONFIG = SITE_CONFIG;
}

