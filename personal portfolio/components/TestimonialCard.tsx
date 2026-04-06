type Props = {
  quote: string;
  name: string;
  detail: string;
};

export function TestimonialCard({ quote, name, detail }: Props) {
  return (
    <figure className="rounded-2xl border border-black/6 bg-white p-6 sm:p-8 shadow-card">
      <blockquote>
        <p className="text-lg text-neutral-700 leading-relaxed">&ldquo;{quote}&rdquo;</p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-4">
        <div
          className="h-12 w-12 rounded-full bg-gradient-to-br from-brand/20 to-accent/40 ring-2 ring-white shadow"
          aria-hidden
        />
        <div>
          <p className="font-semibold text-brand-dark">{name}</p>
          <p className="text-sm text-neutral-500">{detail}</p>
        </div>
      </figcaption>
    </figure>
  );
}
