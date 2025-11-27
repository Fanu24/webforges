'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, FileText, Palette, Code, Rocket, HeadphonesIcon, Zap } from 'lucide-react'

const advantages = [
  { icon: Zap, text: 'Tempi di sviluppo rapidi' },
  { icon: CheckCircle2, text: 'SEO-ready fin da subito' },
  { icon: CheckCircle2, text: 'Design mobile-first' },
  { icon: CheckCircle2, text: 'Supporto continuativo' },
  { icon: CheckCircle2, text: 'Performance ottimizzate' },
]

const processSteps = [
  { icon: FileText, label: 'Briefing', description: 'Analisi esigenze' },
  { icon: Palette, label: 'Design', description: 'Progettazione UI/UX' },
  { icon: Code, label: 'Sviluppo', description: 'Codice pulito' },
  { icon: Rocket, label: 'Lancio', description: 'Deploy e test' },
  { icon: HeadphonesIcon, label: 'Supporto', description: 'Manutenzione' },
]

export default function WhyUsSection() {
  return (
    <section id="perche-noi" className="relative py-16 md:py-24 lg:py-28 bg-[#050714]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center justify-items-center md:justify-items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center md:text-left">
              <span className="text-slate-100">Perché scegliere</span>{' '}
              <span className="text-gradient">WebForge Studio</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 text-center md:text-left">
              Siamo specializzati nella creazione di siti web moderni e performanti per aziende che vogliono distinguersi online.
            </p>

            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 glass rounded-xl p-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    {advantage.icon === Zap ? (
                      <Zap className="w-5 h-5 text-white" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <span className="text-slate-300">{advantage.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Process */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h3 className="text-2xl font-semibold text-slate-100 mb-8">Il nostro processo</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 opacity-30" />

              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex items-start gap-6"
                  >
                    {/* Icon Circle */}
                    <div className="relative z-10 w-16 h-16 glass rounded-full flex items-center justify-center flex-shrink-0 group-hover:neon-glow-cyan transition-all">
                      <step.icon className="w-7 h-7 text-cyan-400" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-3">
                      <h4 className="text-lg font-semibold text-slate-100 mb-1">{step.label}</h4>
                      <p className="text-slate-400 text-sm">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

