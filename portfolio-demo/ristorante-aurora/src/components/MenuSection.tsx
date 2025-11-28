'use client';

import { useMemo, useState } from "react";
import clsx from "clsx";
import { menuCategories } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

const categories = [
  { name: "Tutti", slug: "tutti" },
  ...menuCategories.map((category) => ({
    name: category.name,
    slug: category.slug,
  })),
];

import { AnimatedSection } from "./AnimatedSection";

export function MenuSection() {
  const [selected, setSelected] = useState("tutti");

  const items = useMemo(() => {
    if (selected === "tutti") {
      return menuCategories.flatMap((category) =>
        category.items.map((item) => ({
          ...item,
          category: category.name,
        }))
      );
    }
    const category = menuCategories.find((cat) => cat.slug === selected);
    return (
      category?.items.map((item) => ({
        ...item,
        category: category.name,
      })) ?? []
    );
  }, [selected]);

  return (
    <AnimatedSection id="menu" className="bg-[#fdf8f4]">
      <div className="container space-y-10">
        <SectionHeading
          kicker="Menu"
          title="Esperienze stagionali"
          description="Piatti che cambiano con le stagioni, pensati per valorizzare materie prime artigianali e creare percorsi degustazione personalizzati."
        />
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelected(cat.slug)}
              className={clsx(
                "rounded-full border px-4 py-2 text-sm font-medium transition",
                selected === cat.slug
                  ? "border-[#5c7a5a] bg-[#5c7a5a] text-white"
                  : "border-[#e1d5ca] text-[#5c4a3a] hover:border-[#5c7a5a]"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {items.map((item) => (
            <div
              key={`${item.name}-${item.category}`}
              className="card flex flex-col gap-3 border-[#f0e4da] p-5 transition hover:-translate-y-1 hover:border-[#d7c5b6]"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#b29b8a]">
                    {item.category}
                  </p>
                  <h3 className="font-serif text-xl text-[#2b1f17]">
                    {item.name}
                  </h3>
                </div>
                <p className="text-lg font-semibold text-[#5c7a5a]">
                  {item.price}
                </p>
              </div>
              <p className="text-sm text-[#6d5747]">{item.description}</p>
              {item.recommended && (
                <span className="w-fit rounded-full bg-[#e7f1e7] px-3 py-1 text-xs font-semibold text-[#4d6a4d]">
                  Consigliato dallo chef
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

