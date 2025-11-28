import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";
import { philosophyPoints } from "@/data/site";

export function AboutSection() {
  return (
    <AnimatedSection id="chi-siamo">
      <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="flex flex-col gap-8">
          <SectionHeading
            kicker="Chi siamo"
            title="Mediterraneo contemporaneo, cuore milanese"
            description="Ristorante Aurora nasce dal desiderio di unire la cucina mediterranea moderna con un servizio sartoriale. Un luogo dove ingredienti stagionali incontrano tecniche creative."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {philosophyPoints.map((point) => (
              <div
                key={point.title}
                className="card p-6 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="font-serif text-lg text-[#2b1f17]">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-[#6d5747]">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="rounded-[2rem] border border-[#ecdcd0] bg-white p-3 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1521917441209-e886f0404a7b?auto=format&fit=crop&w=900&q=80"
              alt="Sala elegante di Ristorante Aurora"
              width={640}
              height={800}
              className="h-full w-full rounded-[1.7rem] object-cover"
            />
          </div>
          <div className="card absolute -bottom-8 left-1/2 w-64 -translate-x-1/2 p-5 text-sm leading-relaxed text-[#5c4a3a]">
            “Ci piace accompagnare le persone in un viaggio sensoriale fatto di
            luce soffusa, musica jazz e profumi mediterranei.”
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

