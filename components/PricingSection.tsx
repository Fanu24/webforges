'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Start',
    price: '1.500',
    description: 'Perfetto per piccole attività che vogliono iniziare',
    features: [
      'Fino a 5 pagine',
      'Design responsive',
      'Form contatti',
      'SEO base',
      'Manutenzione 3 mesi',
    ],
    highlight: false,
  },
  {
    name: 'Business',
    price: '3.500',
    description: 'La soluzione ideale per aziende in crescita',
    features: [
      'Fino a 10 pagine',
      'Design personalizzato',
      'Blog integrato',
      'SEO avanzato',
      'CMS personalizzato',
      'Integrazioni social',
      'Manutenzione 6 mesi',
      'Analytics avanzati',
    ],
    highlight: true,
  },
  {
    name: 'Pro',
    price: '6.000',
    description: 'Per aziende che richiedono massima personalizzazione',
    features: [
      'Pagine illimitate',
      'Design esclusivo',
      'E-commerce base',
      'SEO professionale',
      'CMS avanzato',
      'Integrazioni API',
      'Manutenzione 12 mesi',
      'Supporto prioritario',
    ],
    highlight: false,
  },
]

export default function PricingSection() {
  return (
    <section id="prezzi" className="relative py-16 md:py-24 lg:py-28 bg-[#050714]">
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
            <span className="text-gradient">prezzi</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Pacchetti trasparenti pensati per ogni esigenza. Tutti i prezzi sono indicativi e personalizzabili.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.highlight
                  ? 'glass border-2 border-cyan-500/50 scale-105 md:scale-110 z-10 neon-glow-cyan'
                  : 'glass'
              }`}
            >
              {plan.highlight && (
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-semibold"
                >
                  Più popolare
                </motion.div>
              )}

              <h3 className="text-2xl font-bold text-slate-100 mb-2">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-4xl font-bold text-slate-100">€ {plan.price}</span>
                <span className="text-slate-400 ml-2">a partire da</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white neon-glow-cyan'
                    : 'border-2 border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400'
                }`}
              >
                Richiedi preventivo
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-500 text-sm mt-12"
        >
          * I prezzi sono indicativi. Contattaci per un preventivo personalizzato in base alle tue esigenze.
        </motion.p>
      </div>
    </section>
  )
}

