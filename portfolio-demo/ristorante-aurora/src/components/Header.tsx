'use client';

import { useEffect, useState } from "react";
import clsx from "clsx";
import { navigationLinks } from "@/data/site";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled ? "backdrop-blur-xl bg-white/85 shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between py-4">
        <a
          href="#home"
          className="font-serif text-2xl font-semibold tracking-wide text-[#3a2a20]"
        >
          Ristorante Aurora
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-[#5c4a3a] lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#5c7a5a]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a href="#menu" className="button-outline">
            Guarda il menu
          </a>
          <a href="#prenotazioni" className="button-primary">
            Prenota un tavolo
          </a>
        </div>
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="rounded-full border border-[#d7c9bd] p-2 lg:hidden"
          aria-label="Apri menù di navigazione"
        >
          <span className="sr-only">Apri menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-6 w-6 text-[#3a2a20]"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="bg-white px-6 pb-6 pt-2 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-4 text-lg font-medium text-[#5c4a3a]">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl border border-transparent px-4 py-2 transition hover:border-[#eadfd4]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <a href="#menu" className="button-outline w-full">
              Guarda il menu
            </a>
            <a href="#prenotazioni" className="button-primary w-full">
              Prenota
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

