import Link from "next/link";
import { type ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  href?: string;
  ctaLabel?: string;
  badge?: string;
  icon?: ReactNode;
};

export function CoachingCard({
  title,
  description,
  href = "/coaching",
  ctaLabel = "Learn more",
  badge,
  icon,
}: Props) {
  return (
    <article className="group flex flex-col rounded-2xl border border-black/6 bg-surface-card p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-semibold text-brand-dark">
          {title}
        </h3>
        {icon ? (
          <span className="shrink-0 text-brand-muted opacity-80">{icon}</span>
        ) : null}
      </div>
      {badge ? (
        <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-brand-muted">
          {badge}
        </p>
      ) : null}
      <p className="mt-4 flex-1 text-neutral-600 leading-relaxed">{description}</p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-light transition-colors"
      >
        {ctaLabel}
        <span aria-hidden>→</span>
      </Link>
    </article>
  );
}
