'use client';

import { motion } from "framer-motion";
import { testimonials } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function ReviewsSection() {
  return (
    <section id="recensioni" className="section-padding bg-[#f7efe7]">
      <div className="container space-y-10">
        <SectionHeading
          kicker="Recensioni"
          title="Amato da chi ama la vera cucina mediterranea"
          description="Ogni esperienza è pensata per essere intima e memorabile."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((review, index) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card flex flex-col gap-4 p-6"
            >
              <div className="flex items-center gap-2 text-[#f1b24b]">
                {"★★★★★"}
              </div>
              <p className="text-lg text-[#2b1f17]">“{review.quote}”</p>
              <div>
                <p className="font-semibold text-[#2b1f17]">{review.name}</p>
                <p className="text-sm text-[#8c7765]">{review.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

