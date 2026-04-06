const stats = [
  {
    label: "Cleaner shot selection",
    value: "Smarter patterns",
    detail: "Fewer forced errors from predictable, high-percentage targets.",
  },
  {
    label: "Doubles communication",
    value: "Crisp teamwork",
    detail: "Roles, switches, and middle balls that feel intentional—not chaotic.",
  },
  {
    label: "Match confidence",
    value: "Calm execution",
    detail: "A repeatable plan you can trust when games get tight.",
  },
  {
    label: "Consistency under pressure",
    value: "Repeatable strokes",
    detail: "Mechanics and footwork that hold up in tournament-style rallies.",
  },
];

export function ResultsStats() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-2xl border border-black/6 bg-white p-6 text-center shadow-card transition-transform duration-300 hover:-translate-y-0.5"
        >
          <p className="font-display text-sm font-semibold text-brand-muted uppercase tracking-wide">
            {s.label}
          </p>
          <p className="mt-3 font-display text-2xl font-bold text-brand-dark">
            {s.value}
          </p>
          <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{s.detail}</p>
        </div>
      ))}
    </div>
  );
}
