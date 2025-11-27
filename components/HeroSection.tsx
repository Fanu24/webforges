'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check, Sparkles, Zap, TrendingUp } from 'lucide-react'
import { useEffect, useState } from 'react'

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX / 50, y: e.clientY / 50 })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0B1029] to-slate-950" />
        
        {/* Floating Blobs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, mousePosition.x, 0],
            y: [0, mousePosition.y, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -mousePosition.x, 0],
            y: [0, -mousePosition.y, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-slate-300">Siti web moderni a Roma e Milano</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-slate-100">Siti web moderni per</span>
              <br />
              <span className="text-gradient">aziende a Roma e Milano</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl"
            >
              Trasforma la tua presenza online con siti web performanti, moderni e orientati alle conversioni. Più clienti, più contatti, immagine professionale.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 32px rgba(34, 211, 238, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white flex items-center justify-center gap-2 neon-glow-cyan transition-all duration-300"
              >
                Prenota una consulenza gratuita
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-slate-700 hover:border-cyan-400 rounded-full font-semibold text-slate-300 hover:text-cyan-400 transition-all duration-300"
              >
                Guarda il portfolio
              </motion.button>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { icon: Zap, text: 'Sviluppo veloce' },
                { icon: TrendingUp, text: 'SEO integrato' },
                { icon: Check, text: 'Mobile-first' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-2 text-slate-400"
                >
                  <item.icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative"
            >
              {/* Laptop Mockup */}
              <div className="relative mx-auto max-w-lg">
                <div className="glass rounded-2xl p-4 shadow-2xl">
                  <div className="bg-slate-900 rounded-lg overflow-hidden aspect-video relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className="w-32 h-32 border-4 border-cyan-400/30 rounded-full"
                      />
                    </div>
                  </div>
                </div>
                {/* Mobile Mockup */}
                <motion.div
                  initial={{ x: -50, y: 50 }}
                  animate={{ x: 0, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-10 -right-10 glass rounded-xl p-2 shadow-xl"
                >
                  <div className="w-32 h-56 bg-slate-900 rounded-lg overflow-hidden">
                    <div className="h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

