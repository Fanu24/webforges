import { ReactNode } from "react";
import clsx from "clsx";

type SectionHeadingProps = {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  actions?: ReactNode;
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  actions,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx("flex flex-col gap-3", {
        "text-center items-center": align === "center",
        "text-left": align === "left",
      })}
    >
      {kicker && (
        <span className="inline-flex w-fit rounded-full bg-[#f1e7de] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#8c6c52]">
          {kicker}
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      {description && (
        <p className="section-subtitle">{description}</p>
      )}
      {actions}
    </div>
  );
}

