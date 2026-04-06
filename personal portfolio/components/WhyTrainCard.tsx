import { type ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  icon: ReactNode;
};

export function WhyTrainCard({ title, description, icon }: Props) {
  return (
    <article className="group rounded-2xl border border-black/6 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:border-brand/15">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/8 text-brand transition-colors group-hover:bg-accent/30 group-hover:text-brand-dark">
        {icon}
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-brand-dark">
        {title}
      </h3>
      <p className="mt-2 text-neutral-600 leading-relaxed">{description}</p>
    </article>
  );
}
