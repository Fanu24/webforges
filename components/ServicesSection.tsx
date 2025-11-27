'use client'

import { motion } from 'framer-motion'
import { ShoppingBag, Layout, Zap, RefreshCw, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Layout,
    title: 'Siti vetrina',
    description: 'Presenza online professionale che rappresenta al meglio la tua azienda',
    benefits: ['Design moderno e responsive', 'Ottimizzazione SEO', 'Velocità di caricamento'],
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    description: 'Piattaforme di vendita online complete e sicure per il tuo business',
    benefits: ['Gestione prodotti avanzata', 'Pagamenti sicuri integrati', 'Dashboard amministrativa'],
  },
  {
    icon: Zap,
    title: 'Landing page ad alte conversioni',
    description: 'Pagine ottimizzate per trasformare visitatori in clienti',
    benefits: ['Design conversion-oriented', 'A/B testing integrato', 'Analytics avanzati'],
  },
  {
    icon: RefreshCw,
    title: 'Restyling siti esistenti',
    description: 'Rinnova il tuo sito attuale con tecnologie moderne e design aggiornato',
    benefits: ['Miglioramento performance', 'UI/UX contemporanea', 'Migrazione dati sicura'],
  },
]

export default function ServicesSection() {
  return (
    <section id="servizi" className="relative py-16 md:py-24 lg:py-28 bg-[#070A1F]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-slate-100">I nostri</span>{' '}
            <span className="text-gradient">servizi</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Soluzioni complete per portare la tua azienda nel futuro digitale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass rounded-2xl p-6 md:p-8 hover:neon-glow-cyan transition-all duration-300 group cursor-pointer"
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <service.icon className="w-7 h-7 text-white" />
              </motion.div>

              <h3 className="text-xl font-semibold text-slate-100 mb-3">{service.title}</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <ArrowRight className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ x: 5 }}
                className="text-cyan-400 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Scopri di più
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

