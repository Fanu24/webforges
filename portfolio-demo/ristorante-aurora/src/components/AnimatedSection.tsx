'use client';

import { motion } from "framer-motion";
import { HTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";

type AnimatedSectionProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}> &
  HTMLAttributes<HTMLElement>;

export function AnimatedSection({
  children,
  className,
  delay = 0,
...rest
}: AnimatedSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className={clsx("section-padding", className)}
      {...rest}
    >
      {children}
    </motion.section>
  );
}

