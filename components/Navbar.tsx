'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'

const navLinks = [
  { href: '#servizi', label: 'Servizi' },
  { href: '#perche-noi', label: 'Perché noi' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#roma-milano', label: 'Roma & Milano' },
  { href: '#prezzi', label: 'Prezzi' },
  { href: '#contatti', label: 'Contatti' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-xl bg-slate-950/60 border-b border-cyan-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <Sparkles className="w-8 h-8 text-cyan-400 neon-glow-cyan" />
            </div>
            <span className="text-xl font-bold text-gradient">WebForge Studio</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-cyan-400 transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white neon-glow-cyan hover:shadow-[0_0_32px_rgba(34,211,238,0.6)] transition-all duration-300"
            >
              Richiedi preventivo
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-cyan-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl"
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-slate-300 hover:text-cyan-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white">
              Richiedi preventivo
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

