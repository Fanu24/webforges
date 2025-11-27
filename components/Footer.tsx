'use client'

import { motion } from 'framer-motion'
import { Sparkles, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800 bg-[#050714]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Claim */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-cyan-400" />
              <span className="text-lg font-bold text-gradient">WebForge Studio</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Creiamo siti web moderni e performanti per aziende a Roma e Milano che vogliono distinguersi online.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-100 font-semibold mb-4">Link rapidi</h3>
            <ul className="space-y-2">
              {['Privacy', 'Cookie', 'Termini'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-slate-100 font-semibold mb-4">Contatti</h3>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:info@webforgestudio.it"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-center text-slate-500 text-sm">
            P.IVA 00000000000 – WebForge Studio © {new Date().getFullYear()} Tutti i diritti riservati
          </p>
        </div>
      </div>
    </footer>
  )
}

