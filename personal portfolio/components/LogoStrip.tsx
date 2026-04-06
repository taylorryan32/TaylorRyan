const placeholderLogos = [
  "Regional Pickleball Club",
  "Metro Athletics",
  "Court Partners League",
  "Junior Sports Alliance",
];

export function LogoStrip() {
  return (
    <div className="rounded-2xl border border-dashed border-black/12 bg-white/60 px-6 py-8 sm:px-10">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
        Featured in · Trusted by
      </p>
      <ul className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 items-center justify-items-center">
        {placeholderLogos.map((name) => (
          <li key={name}>
            <div className="flex h-14 w-full max-w-[160px] items-center justify-center rounded-xl bg-neutral-100 px-3 text-center text-xs font-semibold text-neutral-500 transition-colors hover:bg-neutral-200/80">
              {name}
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-center text-xs text-neutral-400">
        Logo placeholders — swap for real partners, clubs, or media mentions.
      </p>
    </div>
  );
}
