import { ButtonLink } from "./Button";

type Props = {
  name: string;
  price: string;
  detail: string;
  bullets: string[];
  featured?: boolean;
};

export function PricingCard({ name, price, detail, bullets, featured }: Props) {
  return (
    <article
      className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift ${
        featured
          ? "border-accent/50 bg-brand-dark text-white shadow-lift ring-2 ring-accent/40"
          : "border-black/6 bg-white"
      }`}
    >
      {featured ? (
        <p className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-xs font-bold text-brand-dark">
          Best value
        </p>
      ) : null}
      <h3
        className={`font-display text-xl font-bold ${featured ? "text-white" : "text-brand-dark"}`}
      >
        {name}
      </h3>
      <p className={`mt-2 text-sm ${featured ? "text-white/75" : "text-neutral-600"}`}>
        {detail}
      </p>
      <p className="mt-6 font-display text-3xl font-bold tracking-tight">{price}</p>
      <ul className="mt-6 flex-1 space-y-3 text-sm leading-relaxed">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className={featured ? "text-accent" : "text-brand"} aria-hidden>
              ✓
            </span>
            <span className={featured ? "text-white/90" : "text-neutral-700"}>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <ButtonLink
          href="/contact"
          variant={featured ? "primary" : "secondary"}
          className="w-full justify-center"
        >
          Request this option
        </ButtonLink>
      </div>
    </article>
  );
}
