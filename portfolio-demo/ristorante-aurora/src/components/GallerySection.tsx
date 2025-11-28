import Image from "next/image";
import { galleryImages } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { AnimatedSection } from "./AnimatedSection";

export function GallerySection() {
  return (
    <AnimatedSection id="gallery" className="bg-white">
      <div className="container space-y-10">
        <SectionHeading
          kicker="Gallery"
          title="Un assaggio dell'atmosfera"
          description="Interni curati, mise en place essenziale e piatti che giocano con texture e colori."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <figure
              key={image.alt + index}
              className="group relative overflow-hidden rounded-3xl shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={600}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-[#1c130c]/80 via-transparent to-transparent p-4 text-sm text-white opacity-0 transition group-hover:opacity-100">
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

