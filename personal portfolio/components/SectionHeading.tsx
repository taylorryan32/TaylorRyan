import { type ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  children,
}: Props) {
  const isCenter = align === "center";
  const alignClass = isCenter ? "text-center mx-auto" : "text-left";
  const descClass = isCenter ? "max-w-2xl mx-auto" : "max-w-2xl";
  return (
    <div className={`mb-10 sm:mb-14 max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-muted mb-3">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-brand-dark tracking-tight text-balance">
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-lg text-neutral-600 leading-relaxed ${descClass}`}>
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
