'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ShoppingBag, Briefcase, Palette } from 'lucide-react'

const projects = [
  {
    title: 'E-commerce Fashion',
    type: 'E-commerce',
    description: 'Piattaforma completa per brand di moda con oltre 1000 prodotti',
    image: '/api/placeholder/600/400',
    icon: ShoppingBag,
  },
  {
    title: 'Studio Legale',
    type: 'Sito vetrina',
    description: 'Sito professionale con area clienti e gestione pratiche',
    image: '/api/placeholder/600/400',
    icon: Briefcase,
  },
  {
    title: 'Agenzia Marketing',
    type: 'Landing page',
    description: 'Landing page ad alta conversione per generazione lead',
    image: '/api/placeholder/600/400',
    icon: Palette,
  },
  {
    title: 'Ristorante Premium',
    type: 'Sito vetrina',
    description: 'Sito elegante con prenotazioni online e menu interattivo',
    image: '/api/placeholder/600/400',
    icon: Palette,
  },
  {
    title: 'Tech Startup',
    type: 'Sito vetrina',
    description: 'Sito moderno per startup tecnologica con animazioni avanzate',
    image: '/api/placeholder/600/400',
    icon: Briefcase,
  },
  {
    title: 'Negozio Online',
    type: 'E-commerce',
    description: 'E-commerce B2C con sistema di recensioni e raccomandazioni',
    image: '/api/placeholder/600/400',
    icon: ShoppingBag,
  },
]

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-16 md:py-24 lg:py-28 bg-[#0B1029]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-slate-100">Il nostro</span>{' '}
            <span className="text-gradient">portfolio</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Progetti realizzati per aziende a Roma e Milano che hanno scelto l'eccellenza
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative rounded-2xl overflow-hidden glass cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="w-16 h-16 text-slate-700" />
                </div>
                
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent p-6 flex flex-col justify-end"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30">
                      <span className="text-xs text-cyan-400 font-medium">{project.type}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">{project.title}</h3>
                  <p className="text-sm text-slate-400">{project.description}</p>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-4 inline-flex items-center gap-2 text-cyan-400 font-medium text-sm"
                  >
                    Vedi progetto
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

