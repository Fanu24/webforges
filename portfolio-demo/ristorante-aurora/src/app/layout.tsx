import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Ristorante Aurora · Cucina mediterranea contemporanea",
  description:
    "Demo completa per Ristorante Aurora, esperienza culinaria mediterranea moderna a Milano. Scopri menu stagionali, gallery, recensioni e prenotazioni online.",
  metadataBase: new URL("https://demo.ristorante-aurora.local"),
  openGraph: {
    title: "Ristorante Aurora · Demo sito ristorante",
    description:
      "Landing page moderna per ristorante mediterraneo: menu, gallery, prenotazioni e informazioni di contatto.",
    url: "https://demo.ristorante-aurora.local",
    images: [
      {
        url: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Hero del Ristorante Aurora",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
