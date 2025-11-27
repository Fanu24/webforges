import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WebForge Studio - Siti Web Moderni a Roma e Milano',
  description: 'Creiamo siti web moderni, performanti e su misura per aziende a Roma e Milano. Siti vetrina, e-commerce e landing page ad alte conversioni.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}

