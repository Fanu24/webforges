'use client';

import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="section-padding relative overflow-hidden bg-[#f7efe7]"
    >
      <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1 text-sm font-semibold text-[#84624a] shadow-sm">
            ✨ Nuovo menù stagionale · Estate 2025
          </span>
          <div>
            <h1 className="font-serif text-4xl leading-tight text-[#2b1f17] sm:text-5xl lg:text-6xl">
              Ristorante Aurora
            </h1>
            <p className="mt-4 text-lg text-[#6d5747]">
              Cucina mediterranea contemporanea in un ambiente intimo, pensato
              per coppie e piccole ricorrenze nel cuore di Milano.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#prenotazioni" className="button-primary">
              Prenota un tavolo
            </a>
            <a href="#menu" className="button-outline">
              Guarda il menù
            </a>
          </div>
          <div className="grid gap-6 rounded-2xl border border-white/40 bg-white/70 p-6 shadow-lg sm:grid-cols-2">
            <div>
              <p className="text-4xl font-semibold text-[#2b1f17]">24</p>
              <p className="text-sm text-[#8c7765]">Coperti disponibili</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-[#2b1f17]">1998</p>
              <p className="text-sm text-[#8c7765]">Dal</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#ecdcd0] bg-white shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=1200&q=80"
              alt="Piatto mediterraneo del Ristorante Aurora"
              width={800}
              height={1000}
              className="h-full w-full object-cover"
            />
            <div className="absolute left-6 top-6 rounded-full bg-white/85 px-4 py-2 text-sm font-semibold text-[#5c7a5a] shadow">
              Miglior cucina mediterranea · 2024
            </div>
          </div>
          <div className="absolute -bottom-10 -right-6 hidden w-40 rounded-3xl bg-white/90 p-4 text-sm shadow-xl sm:block">
            <p className="font-semibold text-[#2b1f17]">Chef Matilde Serra</p>
            <p className="text-[#8c7765]">
              Menu degustazione vegetale e pairing vini naturali.
            </p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-[#d8c5b8] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[#c8d5c0] blur-3xl" />
      </div>
    </section>
  );
}

