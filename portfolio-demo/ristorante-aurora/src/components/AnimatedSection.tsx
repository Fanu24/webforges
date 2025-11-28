'use client';

import { HTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";

type AnimatedSectionProps = PropsWithChildren<
  HTMLAttributes<HTMLElement> & {
    className?: string;
  }
>;

export function AnimatedSection({
  children,
  className,
  ...rest
}: AnimatedSectionProps) {
  return (
    <section className={clsx("section-padding", className)} {...rest}>
      {children}
    </section>
  );
}

