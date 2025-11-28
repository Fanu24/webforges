import { contactInfo, faqs } from "@/data/site";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export function ContactSection() {
  return (
    <AnimatedSection
      id="contatti"
      className="bg-[#f7efe7]"
    >
      <div className="container grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-6">
          <SectionHeading
            kicker="Info e contatti"
            title="Ti aspettiamo in Brera"
            description="Prenota online o contattaci per eventi privati. Rispondiamo sempre entro 24 ore."
          />
          <div className="card space-y-4 p-6 text-[#4e3b2c]">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-[#b79c87]">
                Indirizzo
              </p>
              <p className="text-lg">{contactInfo.address}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#b79c87]">
                  Telefono
                </p>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                  className="text-lg text-[#5c7a5a]"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#b79c87]">
                  Email
                </p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-lg text-[#5c7a5a]"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
            <div className="grid gap-2">
              {contactInfo.hours.map((slot) => (
                <div
                  key={slot.label}
                  className="flex items-center justify-between rounded-2xl bg-[#f9f1eb] px-4 py-2 text-sm"
                >
                  <span>{slot.label}</span>
                  <span>{slot.value}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              {contactInfo.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="rounded-full border border-[#d7c9bd] px-4 py-2 text-sm font-medium text-[#5c4a3a] transition hover:border-[#5c7a5a]"
                >
                  {social.label} · {social.handle}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-6" id="faq">
          <div className="overflow-hidden rounded-3xl">
            <iframe
              title="Mappa Ristorante Aurora"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.321262675963!2d9.188523676492325!3d45.47060673145067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6ad4cc7f401%3A0x1cfb1ed8db05d495!2sBrera%2C%20Milano%20MI!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
              width="100%"
              height="280"
              loading="lazy"
              className="border-none"
            ></iframe>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl border border-[#eadfd4] bg-white p-4 text-[#4e3b2c]"
              >
                <summary className="cursor-pointer text-lg font-semibold">
                  {faq.question}
                </summary>
                <p className="mt-2 text-sm text-[#7b6555]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

