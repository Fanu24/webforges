'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Clock, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    budget: '',
    message: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Il nome è obbligatorio'
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email è obbligatoria'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Inserisci un\'email valida'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Il telefono è obbligatorio'
    if (!formData.city) newErrors.city = 'Seleziona una città'
    if (!formData.budget) newErrors.budget = 'Seleziona un budget'
    if (!formData.message.trim()) newErrors.message = 'Il messaggio è obbligatorio'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      // Handle form submission
      console.log('Form submitted:', formData)
      alert('Messaggio inviato con successo! Ti contatteremo presto.')
    }
  }

  return (
    <section id="contatti" className="relative py-16 md:py-24 lg:py-28 bg-[#0B1029]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-slate-100">Contattaci</span>{' '}
            <span className="text-gradient">per iniziare</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Compila il form e ti risponderemo entro 24 ore per discutere del tuo progetto
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/50 border ${
                    errors.name ? 'border-red-500' : 'border-slate-700'
                  } text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`}
                  placeholder="Il tuo nome"
                />
                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/50 border ${
                    errors.email ? 'border-red-500' : 'border-slate-700'
                  } text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`}
                  placeholder="tua.email@esempio.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                  Telefono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/50 border ${
                    errors.phone ? 'border-red-500' : 'border-slate-700'
                  } text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`}
                  placeholder="+39 123 456 7890"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-slate-300 mb-2">
                    Città *
                  </label>
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/50 border ${
                      errors.city ? 'border-red-500' : 'border-slate-700'
                    } text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`}
                  >
                    <option value="">Seleziona</option>
                    <option value="roma">Roma</option>
                    <option value="milano">Milano</option>
                    <option value="altro">Altro</option>
                  </select>
                  {errors.city && <p className="mt-1 text-sm text-red-400">{errors.city}</p>}
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-slate-300 mb-2">
                    Budget indicativo *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/50 border ${
                      errors.budget ? 'border-red-500' : 'border-slate-700'
                    } text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`}
                  >
                    <option value="">Seleziona</option>
                    <option value="1-3k">€ 1.000 - 3.000</option>
                    <option value="3-6k">€ 3.000 - 6.000</option>
                    <option value="6k+">€ 6.000+</option>
                  </select>
                  {errors.budget && <p className="mt-1 text-sm text-red-400">{errors.budget}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Messaggio *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/50 border ${
                    errors.message ? 'border-red-500' : 'border-slate-700'
                  } text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none`}
                  placeholder="Raccontaci del tuo progetto..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white flex items-center justify-center gap-2 neon-glow-cyan transition-all duration-300"
              >
                Invia messaggio
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Info Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-slate-100 mb-6">Informazioni di contatto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-slate-300 font-medium mb-1">Email</h4>
                    <a href="mailto:info@webforgestudio.it" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      info@webforgestudio.it
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-slate-300 font-medium mb-1">Telefono</h4>
                    <a href="tel:+390612345678" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      +39 06 1234 5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-slate-300 font-medium mb-1">Orari</h4>
                    <p className="text-slate-400 text-sm">
                      Lun - Ven: 9:00 - 18:00<br />
                      Sabato: 10:00 - 14:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-slate-300 font-medium mb-1">Sedi</h4>
                    <p className="text-slate-400 text-sm">
                      Roma • Milano<br />
                      Servizio in tutta Italia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mini Map Stylized */}
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-slate-100 mb-4">Dove operiamo</h3>
              <div className="relative h-48 rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center mb-2 mx-auto">
                        <MapPin className="w-8 h-8 text-cyan-400" />
                      </div>
                      <span className="text-sm text-slate-300">Roma</span>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-purple-500/20 border-2 border-purple-400 flex items-center justify-center mb-2 mx-auto">
                        <MapPin className="w-8 h-8 text-purple-400" />
                      </div>
                      <span className="text-sm text-slate-300">Milano</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

