'use client'

import { motion } from 'framer-motion'
import { MapPin, Building2, Briefcase, MessageSquare } from 'lucide-react'

const cities = [
  {
    name: 'Roma',
    title: 'Siti web a Roma',
    description: 'Siamo specializzati nel creare siti web per aziende romane. Conosciamo il mercato locale, lo stile dei tuoi clienti e i settori che prosperano nella capitale.',
    features: [
      'Ristoranti e locali storici',
      'Servizi turistici e hotel',
      'Professionisti e studi legali',
      'Retail e commercio locale',
    ],
    icon: Building2,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'Milano',
    title: 'Siti web a Milano',
    description: 'Per aziende milanesi che vogliono distinguersi. Siti web moderni per aziende tech, moda, servizi finanziari e startup innovative.',
    features: [
      'Aziende tech e startup',
      'Brand di moda e design',
      'Servizi finanziari',
      'Corporate e B2B',
    ],
    icon: Briefcase,
    gradient: 'from-purple-500 to-pink-600',
  },
]

export default function CitySection() {
  return (
    <section id="roma-milano" className="relative py-16 md:py-24 lg:py-28 bg-[#070A1F]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-slate-100">Presenza locale a</span>{' '}
            <span className="text-gradient">Roma & Milano</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Conosciamo i mercati locali e creiamo siti web che risuonano con i tuoi clienti
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {cities.map((city, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:neon-glow-cyan transition-all duration-300"
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${city.gradient} opacity-10 rounded-full blur-3xl -z-10`} />

              {/* City Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${city.gradient} flex items-center justify-center mb-6`}>
                <city.icon className="w-8 h-8 text-white" />
              </div>

              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <h3 className="text-2xl font-bold text-slate-100">{city.title}</h3>
              </div>

              <p className="text-slate-400 mb-6 leading-relaxed">{city.description}</p>

              <ul className="space-y-3 mb-8">
                {city.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full px-6 py-3 bg-gradient-to-r ${city.gradient} rounded-full font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300`}
              >
                <MessageSquare className="w-5 h-5" />
                Parla con un esperto a {city.name}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

