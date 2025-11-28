'use client';

import { FormEvent, useState } from "react";
import { SectionHeading } from "./SectionHeading";

export function BookingSection() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("success");
    event.currentTarget.reset();
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="prenotazioni" className="section-padding bg-white">
      <div className="container grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <SectionHeading
            kicker="Prenotazioni"
            title="Un tavolo per la tua prossima occasione speciale"
            description="Compila il modulo o chiamaci per un'assistenza dedicata. Confermiamo le richieste entro 12 ore."
          />
          <div className="rounded-3xl bg-[#f3e7dc] p-6 text-[#4f3a2c]">
            <p className="text-sm uppercase tracking-[0.4em] text-[#a88c73]">
              Servizio concierge
            </p>
            <p className="mt-2 text-2xl font-semibold">
              +39 02 1234 5670
            </p>
            <p className="mt-2 text-sm text-[#725843]">
              Per eventi privati e menù degustazione su misura.
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="card space-y-4 p-6"
          aria-label="Modulo di prenotazione tavolo"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-[#5c4a3a]">
              Nome
              <input
                name="name"
                required
                className="rounded-2xl border border-[#e1d5ca] px-4 py-3 focus:border-[#5c7a5a] focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-[#5c4a3a]">
              Email
              <input
                type="email"
                name="email"
                required
                className="rounded-2xl border border-[#e1d5ca] px-4 py-3 focus:border-[#5c7a5a] focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-[#5c4a3a]">
              Telefono
              <input
                type="tel"
                name="phone"
                required
                className="rounded-2xl border border-[#e1d5ca] px-4 py-3 focus:border-[#5c7a5a] focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-[#5c4a3a]">
              Persone
              <input
                type="number"
                min={1}
                max={8}
                name="guests"
                defaultValue={2}
                className="rounded-2xl border border-[#e1d5ca] px-4 py-3 focus:border-[#5c7a5a] focus:outline-none"
              />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-[#5c4a3a]">
              Data
              <input
                type="date"
                name="date"
                required
                className="rounded-2xl border border-[#e1d5ca] px-4 py-3 focus:border-[#5c7a5a] focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-[#5c4a3a]">
              Orario
              <select
                name="time"
                className="rounded-2xl border border-[#e1d5ca] px-4 py-3 focus:border-[#5c7a5a] focus:outline-none"
              >
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
              </select>
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm text-[#5c4a3a]">
            Note
            <textarea
              name="notes"
              rows={4}
              className="rounded-2xl border border-[#e1d5ca] px-4 py-3 focus:border-[#5c7a5a] focus:outline-none"
              placeholder="Allergie o richieste speciali"
            />
          </label>
          <button type="submit" className="button-primary w-full">
            Invia richiesta
          </button>
          {status === "success" && (
            <div className="rounded-2xl bg-[#e7f1e7] p-4 text-sm text-[#345234]">
              Grazie! Ti invieremo una conferma via email entro poche ore.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

