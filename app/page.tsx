import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Taylor Ryan | Marketing Portfolio",
  description:
    "Personal portfolio for Taylor Ryan, a marketing student focused on data-driven campaigns and measurable growth.",
};

const projects = [
  {
    title: "Etsy SEO + Listing Optimization",
    description:
      "Reworked listing titles, tags, and visual hierarchy to improve discoverability and clicks.",
    metric: "35% higher listing engagement",
    image: "/images/etsy-cover.png",
  },
  {
    title: "Social Content Calendar System",
    description:
      "Built and executed weekly campaign-ready content planning for consistency across platforms.",
    metric: "150+ posts delivered annually",
    image: "/images/pso-feed-1.png",
  },
  {
    title: "Engagement Retention Program",
    description:
      "Tracked attendance and optimized reward touchpoints to improve member consistency.",
    metric: "50% lift in member retention",
    image: "/images/pso-feed-2.png",
  },
  {
    title: "Department Recruitment Campaigns",
    description:
      "Created and scheduled content supporting student recruitment and audience growth goals.",
    metric: "12+ assets published weekly",
    image: "/images/pso-profile.png",
  },
];

const experience = [
  {
    role: "Marketing Intern",
    org: "Fox Marketing Department",
    date: "May 2025 - Aug 2025",
    points: [
      "Developed recruitment-focused social content and campaign messaging.",
      "Built and executed a multi-week content calendar to improve consistency.",
      "Contributed strategy recommendations based on audience response trends.",
    ],
  },
  {
    role: "Social Media Marketing Intern",
    org: "Spencer's Plate",
    date: "Sep 2023 - Nov 2023",
    points: [
      "Produced 12+ pieces of weekly social content across channels.",
      "Created 4+ weekly graphic/video assets while maintaining brand standards.",
      "Collaborated on planning and scheduling aligned with business goals.",
    ],
  },
  {
    role: "Director of Marketing",
    org: "Professional Sales Organization",
    date: "Dec 2023 - Dec 2024",
    points: [
      "Designed 150+ annual posts promoting programs and events.",
      "Improved website layout clarity and user flow across key pages.",
    ],
  },
];

export default function HomePage() {
  return (
    <div className="bg-cream">
      <header className="sticky top-0 z-50 border-b border-blush-deep/60 bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-xl font-semibold text-charcoal">
            Taylor Ryan
          </a>
          <nav className="flex items-center gap-6 text-sm font-medium text-charcoal-soft">
            <a href="#projects" className="transition hover:text-charcoal">Projects</a>
            <a href="#pso" className="transition hover:text-charcoal">PSO Marketing</a>
            <a href="#experience" className="transition hover:text-charcoal">Experience</a>
            <a href="#skills" className="transition hover:text-charcoal">Skills</a>
            <a href="#contact" className="transition hover:text-charcoal">Contact</a>
          </nav>
        </div>
      </header>

      <section id="top" className="relative px-6 pb-20 pt-16 sm:pt-24">
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-1 bg-blush" />
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-charcoal-soft">Marketing Portfolio</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">
              Creative marketer with a data-driven mindset.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal-soft">
              Marketing student focused on data-driven campaigns, audience growth, and strategy that performs.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-cream shadow-card transition hover:-translate-y-0.5 hover:shadow-lift">
                View Case Studies
              </a>
              <a href="/assets/Taylor-Ryan-Resume.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full border border-charcoal/20 bg-white px-6 py-3 text-sm font-semibold text-charcoal transition hover:-translate-y-0.5 hover:bg-blush/40">
                Download Resume
              </a>
            </div>
          </div>
          <div className="animate-fade-up [animation-delay:120ms]">
            <div className="relative overflow-hidden rounded-3xl border border-blush-deep/50 bg-white shadow-lift">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-blush" />
              <div className="relative h-[420px]">
                <Image src="/images/taylor-portfolio-board.png" alt="Taylor Ryan portfolio style board" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="absolute bottom-4 left-4 rounded-2xl bg-cream/95 px-4 py-3 shadow-card">
                <p className="text-sm font-semibold text-charcoal">Philadelphia, PA</p>
                <p className="text-sm text-charcoal-soft">Temple University - BBA Marketing, Expected May 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative border-y border-black/5 bg-white px-6 py-20">
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-1 bg-blush" />
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-charcoal-soft">Selected Work</p>
          <h2 className="mt-3 font-display text-3xl text-charcoal sm:text-4xl">Project highlights with measurable outcomes</h2>
          <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project, idx) => (
              <article key={project.title} className="group overflow-hidden rounded-3xl border border-black/10 bg-cream shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative h-44 overflow-hidden">
                  <Image src={project.image} alt={`${project.title} preview`} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 1280px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-sage/20 opacity-0 transition group-hover:opacity-100" />
                </div>
                <div className="space-y-3 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal-soft">Project {idx + 1}</p>
                  <h3 className="font-display text-xl text-charcoal">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-charcoal-soft">{project.description}</p>
                  <p className="inline-block rounded-full bg-blush px-3 py-1 text-xs font-semibold text-charcoal">{project.metric}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pso" className="relative bg-cream px-6 py-20">
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-1 bg-blush" />
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl text-charcoal sm:text-4xl">Temple University PSO Marketing</h2>
          <p className="mt-3 max-w-3xl text-charcoal-soft">
            I ran marketing for Temple University&apos;s Professional Sales Organization, posting multiple times per week, building recurring content systems, and keeping branding consistent across announcements, recaps, and event promotions.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-black/10 bg-white p-6 shadow-card animate-fade-up">
              <h3 className="font-display text-2xl text-charcoal">Instagram Leadership</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-charcoal-soft">
                <li>Published multiple posts every week to support engagement and attendance.</li>
                <li>Created repeatable visual templates for speaker series, weekly recaps, and updates.</li>
                <li>Managed post cadence and message clarity for student-facing communication.</li>
              </ul>
              <p className="mt-4 inline-block rounded-full bg-sage/40 px-3 py-1 text-xs font-semibold text-charcoal">
                150+ posts annually while serving as Director of Marketing
              </p>
            </article>

            <article className="rounded-3xl border border-black/10 bg-white p-6 shadow-card animate-fade-up">
              <h3 className="font-display text-2xl text-charcoal">Website Redesign</h3>
              <p className="mt-4 text-sm leading-relaxed text-charcoal-soft">
                I redesigned the PSO website to improve layout clarity and navigation so students could find events and organization details faster.
              </p>
              <div className="mt-5 rounded-2xl border border-dashed border-charcoal/25 bg-cream p-4 text-sm text-charcoal-soft">
                Add your website redesign screenshots here next and I&apos;ll place them into this section as a side-by-side before/after case study.
              </div>
            </article>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <figure className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-card">
              <Image src="/images/pso-feed-1.png" alt="PSO Instagram content grid screenshot 1" width={900} height={900} className="h-full w-full object-cover" />
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-card">
              <Image src="/images/pso-feed-2.png" alt="PSO Instagram content grid screenshot 2" width={900} height={900} className="h-full w-full object-cover" />
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-card">
              <Image src="/images/pso-profile.png" alt="PSO Instagram profile screenshot" width={900} height={900} className="h-full w-full object-cover" />
            </figure>
          </div>
        </div>
      </section>

      <section className="relative border-y border-black/5 bg-white px-6 py-20">
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-1 bg-blush" />
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl text-charcoal sm:text-4xl">Results &amp; Impact</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "35%", label: "Increase in engagement from listing/content optimization" },
              { value: "150+", label: "Cross-platform posts designed and published annually" },
              { value: "12+", label: "Content assets produced weekly during internship work" },
              { value: "50%", label: "Retention increase from operations and rewards tracking" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-black/10 bg-cream p-6 shadow-card animate-fade-up">
                <p className="font-display text-4xl text-charcoal">{item.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="relative bg-cream px-6 py-20">
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-1 bg-blush" />
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl text-charcoal sm:text-4xl">Experience</h2>
          <div className="mt-10 space-y-6">
            {experience.map((item) => (
              <article key={item.role} className="rounded-3xl border border-black/10 bg-white p-6 shadow-card">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl text-charcoal">{item.role} - {item.org}</h3>
                  <p className="text-sm font-medium text-charcoal-soft">{item.date}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-charcoal-soft">
                  {item.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="relative border-y border-black/5 bg-white px-6 py-20">
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-1 bg-blush" />
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl text-charcoal sm:text-4xl">Skills</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { heading: "Marketing", items: ["Content Strategy", "Social Media Marketing", "Campaign Planning", "SEO", "Brand Messaging"] },
              { heading: "Analytics", items: ["Marketing Research", "Data Analysis", "Performance Tracking", "A/B Testing", "Reporting"] },
              { heading: "Tools", items: ["Google Analytics", "Microsoft Excel", "Canva", "Adobe Creative Suite", "Squarespace", "WordPress"] },
            ].map((group) => (
              <div key={group.heading} className="rounded-3xl border border-black/10 bg-cream p-6 shadow-card">
                <h3 className="font-display text-2xl text-charcoal">{group.heading}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-sage-deep/30 bg-sage/30 px-3 py-1.5 text-xs font-semibold text-charcoal">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-black/10 bg-cream p-6 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal-soft">Credibility</p>
            <h3 className="mt-2 font-display text-2xl text-charcoal">Certifications &amp; Proof</h3>
            <ul className="mt-4 space-y-2 text-sm text-charcoal-soft">
              <li>PPR Level 1 Certification</li>
              <li>Radnor Middle School Pickleball Instructor</li>
              <li>FBI Child Clearances</li>
            </ul>
          </div>
        </div>
      </section>

      <footer id="contact" className="relative bg-cream px-6 py-14">
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-1 bg-blush" />
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5">
          <div>
            <p className="font-display text-2xl text-charcoal">Taylor Ryan</p>
            <p className="mt-1 text-sm text-charcoal-soft">taylor.ryan0002@temple.edu | Philadelphia, PA</p>
          </div>
          <div className="flex items-center gap-4 text-sm font-semibold">
            <a href="/assets/Taylor-Ryan-Resume.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full border border-charcoal/20 px-4 py-2 text-charcoal transition hover:bg-blush/30">
              Download Resume
            </a>
            <a href="#" className="rounded-full bg-charcoal px-4 py-2 text-cream transition hover:bg-charcoal-soft">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Taylor Ryan | Marketing Portfolio",
  description:
    "Personal portfolio for Taylor Ryan, a marketing student focused on data-driven campaigns and measurable growth.",
  openGraph: {
    title: "Taylor Ryan | Marketing Portfolio",
    description:
      "Creative marketer who turns insights into growth through SEO, content strategy, and campaign analytics.",
  },
};

const projects = [
  {
    title: "Etsy SEO + Listing Optimization",
    description:
      "Reworked listing titles, tags, and visual hierarchy to improve discoverability and clicks.",
    metric: "35% higher listing engagement",
  },
  {
    title: "Social Content Calendar System",
    description:
      "Built and executed weekly campaign-ready content planning for consistency across platforms.",
    metric: "150+ posts delivered annually",
  },
  {
    title: "Engagement Retention Program",
    description:
      "Tracked attendance and optimized reward touchpoints to improve member consistency.",
    metric: "50% lift in member retention",
  },
  {
    title: "Department Recruitment Campaigns",
    description:
      "Created and scheduled content supporting student recruitment and audience growth goals.",
    metric: "12+ assets published weekly",
  },
];

export default function HomePage() {
  return (
    <div className="bg-cream">
      <header className="sticky top-0 z-50 border-b border-blush-deep/60 bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-xl font-semibold text-charcoal">
            Taylor Ryan
          </a>
          <nav className="flex items-center gap-6 text-sm font-medium text-charcoal-soft">
            <a href="#projects" className="transition hover:text-charcoal">
              Projects
            </a>
            <a href="#experience" className="transition hover:text-charcoal">
              Experience
            </a>
            <a href="#skills" className="transition hover:text-charcoal">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-charcoal">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section id="top" className="relative px-6 pb-20 pt-16 sm:pt-24">
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-1 bg-blush" />
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-charcoal-soft">
              Marketing Portfolio
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">
              Creative marketer with a data-driven mindset.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal-soft">
              Marketing student focused on data-driven campaigns, audience growth, and strategy
              that performs. I blend creative execution with analytics to drive measurable results.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-cream shadow-card transition hover:-translate-y-0.5 hover:shadow-lift"
              >
                View Case Studies
              </a>
              <a
                href="/assets/Taylor-Ryan-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-charcoal/20 bg-white px-6 py-3 text-sm font-semibold text-charcoal transition hover:-translate-y-0.5 hover:bg-blush/40"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="animate-fade-up [animation-delay:120ms]">
            <div className="relative overflow-hidden rounded-3xl border border-blush-deep/50 bg-white shadow-lift">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-blush" />
              <div className="relative h-[420px]">
                <Image
                  src="/images/taylor-portfolio-board.png"
                  alt="Taylor Ryan marketing design board"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute bottom-4 left-4 rounded-2xl bg-cream/95 px-4 py-3 shadow-card">
                <p className="text-sm font-semibold text-charcoal">Philadelphia, PA</p>
                <p className="text-sm text-charcoal-soft">
                  Temple University - BBA Marketing, Expected May 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative border-y border-black/5 bg-white px-6 py-20">
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-1 bg-blush" />
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-charcoal-soft">
            Selected Work
          </p>
          <h2 className="mt-3 font-display text-3xl text-charcoal sm:text-4xl">
            Project highlights with measurable outcomes
          </h2>
          <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project, idx) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-black/10 bg-cream shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src="/images/taylor-portfolio-board.png"
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 1280px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-sage/20 opacity-0 transition group-hover:opacity-100" />
                </div>
                <div className="space-y-3 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal-soft">
                    Project {idx + 1}
                  </p>
                  <h3 className="font-display text-xl text-charcoal">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-charcoal-soft">{project.description}</p>
                  <p className="inline-block rounded-full bg-blush px-3 py-1 text-xs font-semibold text-charcoal">
                    {project.metric}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-cream px-6 py-20">
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-1 bg-blush" />
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl text-charcoal sm:text-4xl">Results &amp; Impact</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "35%", label: "Increase in engagement from listing/content optimization" },
              { value: "150+", label: "Cross-platform posts designed and published annually" },
              { value: "12+", label: "Content assets produced weekly during internship work" },
              { value: "50%", label: "Retention increase from operations and rewards tracking" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-card animate-fade-up"
              >
                <p className="font-display text-4xl text-charcoal">{item.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="relative border-y border-black/5 bg-white px-6 py-20">
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-1 bg-blush" />
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl text-charcoal sm:text-4xl">Experience</h2>
          <div className="mt-10 space-y-6">
            {[
              {
                role: "Marketing Intern",
                org: "Fox Marketing Department",
                date: "May 2025 - Aug 2025",
                points: [
                  "Developed recruitment-focused social content and campaign messaging.",
                  "Built and executed a multi-week content calendar to improve consistency.",
                  "Contributed strategy recommendations based on audience response trends.",
                ],
              },
              {
                role: "Social Media Marketing Intern",
                org: "Spencer's Plate",
                date: "Sep 2023 - Nov 2023",
                points: [
                  "Produced 12+ pieces of weekly social content across channels.",
                  "Created 4+ weekly graphic/video assets while maintaining brand standards.",
                  "Collaborated on planning and scheduling aligned with business goals.",
                ],
              },
              {
                role: "Director of Marketing",
                org: "Professional Sales Organization",
                date: "Dec 2023 - Dec 2024",
                points: [
                  "Designed 150+ annual posts promoting programs and events.",
                  "Improved website layout clarity and user flow across key pages.",
                ],
              },
            ].map((item) => (
              <article key={item.role} className="rounded-3xl border border-black/10 bg-cream p-6 shadow-card">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl text-charcoal">
                    {item.role} - {item.org}
                  </h3>
                  <p className="text-sm font-medium text-charcoal-soft">{item.date}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-charcoal-soft">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span aria-hidden className="mt-1 h-1.5 w-1.5 rounded-full bg-charcoal" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="relative bg-cream px-6 py-20">
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-1 bg-blush" />
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl text-charcoal sm:text-4xl">Skills</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                heading: "Marketing",
                items: [
                  "Content Strategy",
                  "Social Media Marketing",
                  "Campaign Planning",
                  "SEO",
                  "Brand Messaging",
                ],
              },
              {
                heading: "Analytics",
                items: [
                  "Marketing Research",
                  "Data Analysis",
                  "Performance Tracking",
                  "A/B Testing",
                  "Reporting",
                ],
              },
              {
                heading: "Tools",
                items: [
                  "Google Analytics",
                  "Microsoft Excel",
                  "Canva",
                  "Adobe Creative Suite",
                  "Squarespace",
                  "WordPress",
                ],
              },
            ].map((group) => (
              <div key={group.heading} className="rounded-3xl border border-black/10 bg-white p-6 shadow-card">
                <h3 className="font-display text-2xl text-charcoal">{group.heading}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-sage-deep/30 bg-sage/30 px-3 py-1.5 text-xs font-semibold text-charcoal"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-black/10 bg-white p-6 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal-soft">
              Credibility
            </p>
            <h3 className="mt-2 font-display text-2xl text-charcoal">Certifications &amp; Proof</h3>
            <ul className="mt-4 space-y-2 text-sm text-charcoal-soft">
              <li>PPR Level 1 Certification</li>
              <li>Radnor Middle School Pickleball Instructor</li>
              <li>FBI Child Clearances</li>
            </ul>
          </div>
        </div>
      </section>

      <footer id="contact" className="relative border-t border-black/10 bg-white px-6 py-14">
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-1 bg-blush" />
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5">
          <div>
            <p className="font-display text-2xl text-charcoal">Taylor Ryan</p>
            <p className="mt-1 text-sm text-charcoal-soft">
              taylor.ryan0002@temple.edu | Philadelphia, PA
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm font-semibold">
            <a
              href="/assets/Taylor-Ryan-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-charcoal/20 px-4 py-2 text-charcoal transition hover:bg-blush/30"
            >
              Download Resume
            </a>
            <a
              href="#"
              className="rounded-full bg-charcoal px-4 py-2 text-cream transition hover:bg-charcoal-soft"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
import Image from "next/image";
import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { ButtonLink } from "@/components/Button";
import { CoachingCard } from "@/components/CoachingCard";
import { Container } from "@/components/Container";
import { LogoStrip } from "@/components/LogoStrip";
import { ResultsStats } from "@/components/ResultsStats";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";
import { WhyTrainCard } from "@/components/WhyTrainCard";
import { getRecentPosts } from "@/data/blog";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Private Pickleball Coaching",
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
  },
};

const whyTrain = [
  {
    title: "Personalized coaching",
    description:
      "Sessions built around your goals—whether you’re new to the game or tightening up for tournaments.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Smarter strategy",
    description:
      "Patterns, targets, and decision-making so you stop donating free points and start building pressure.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Footwork & balance",
    description:
      "Move in control, recover faster, and set a consistent contact point—especially at the kitchen line.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Shot mechanics that last",
    description:
      "Serve, return, dink, and drop mechanics coached with simple cues you can repeat on your own.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
  },
  {
    title: "Doubles communication",
    description:
      "Roles, poaching timing, and middle-ball clarity—so you look like a team, not two solo players.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Confidence in match play",
    description:
      "Pressure reps, pre-point routines, and a plan you can trust when the score gets loud.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

const skills = [
  "Serving",
  "Dinking",
  "Third-shot drops",
  "Net play",
  "Doubles strategy",
  "Court positioning",
  "Consistency",
  "Tournament prep",
];

export default function HomePage() {
  const recent = getRecentPosts(3);

  return (
    <>
      <section className="relative overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1622163642998-1ea56b3f5728?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/75" />
        <Container className="relative py-20 sm:py-28 lg:py-32">
          <div className="max-w-2xl animate-fade-up">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent/90">
              {siteConfig.name}
            </p>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] text-balance">
              {siteConfig.tagline}
            </h1>
            <p className="mt-6 text-lg text-white/85 leading-relaxed max-w-xl">
              Private coaching for beginners, intermediate players, juniors, adults, and doubles
              teams who want a clear plan, better mechanics, and calmer decision-making on the
              court.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <ButtonLink href="/contact">Book a Lesson</ButtonLink>
              <ButtonLink href="/coaching" variant="ghost">
                View Coaching Options
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative aspect-[4/5] max-h-[520px] rounded-3xl overflow-hidden shadow-lift">
              <Image
                src="https://images.unsplash.com/photo-1552674605-5d2178b85608?w=900&q=80"
                alt="Matt Ryan coaching on the pickleball court"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl pointer-events-none" />
            </div>
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-muted">
                Meet your coach
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-brand-dark text-balance">
                Coaching that meets you where you are—and pushes you where you want to go.
              </h2>
              <p className="mt-6 text-neutral-600 leading-relaxed">
                I&apos;m Matt Ryan, a pickleball coach focused on real improvement you can feel in
                match play. My sessions blend fundamentals, smart patterns, and competitive reps
                so you walk away with clarity—not just sweat.
              </p>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                Whether you&apos;re building confidence as a newer player or sharpening strategy
                for league nights and tournaments, we&apos;ll build a roadmap that fits your
                schedule and goals.
              </p>
              <div className="mt-8">
                <ButtonLink href="/about" variant="secondary">
                  About Matt
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white border-y border-black/5">
        <Container>
          <SectionHeading
            eyebrow="Why train with Matt"
            title="A coach in your corner—on strategy, technique, and confidence."
            description="You’ll get direct feedback, structured progressions, and habits that hold up when the score tightens."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyTrain.map((item) => (
              <WhyTrainCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Coaching options"
            title="Lessons and programs designed for real life—and real results."
            description="Choose the format that fits: private attention, small groups, clinics, juniors, or match-focused strategy."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CoachingCard
              title="Private 1-on-1 lessons"
              badge="Most popular"
              description="The fastest way to clean up mechanics, footwork, and decision-making with individualized feedback every minute."
              href="/coaching"
            />
            <CoachingCard
              title="Group lessons & clinics"
              badge="High energy"
              description="Learn alongside peers with structured drills, controlled games, and coaching cues you can take into open play."
              href="/coaching"
            />
            <CoachingCard
              title="Juniors & adults"
              badge="All ages"
              description="Age-appropriate progressions that build athleticism, court sense, and respect for the game—without overwhelm."
              href="/coaching"
            />
            <CoachingCard
              title="Match strategy sessions"
              badge="Competitive"
              description="Patterns, pre-point planning, and mental routines for players who want smarter shot selection under pressure."
              href="/coaching"
            />
            <CoachingCard
              title="Doubles team coaching"
              badge="Teams welcome"
              description="Communication, positioning, and role clarity so you move as one unit—not two individuals sharing a court."
              href="/coaching"
            />
            <CoachingCard
              title="Fundamentals refresh"
              badge="Foundations"
              description="Reset bad habits, tighten your contact point, and rebuild consistency from the ground up—fast."
              href="/coaching"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-brand text-white">
        <Container>
          <SectionHeading
            eyebrow="Testimonials"
            title="Players notice the difference—on the scoreboard and in how they feel."
            description="Real feedback from clients who wanted structure, encouragement, and a coach who actually listens."
          />
          <div className="grid gap-8 lg:grid-cols-3">
            <TestimonialCard
              quote="Matt fixed my third-shot drop in two sessions. More importantly, he gave me a plan I can practice without overthinking."
              name="Alex M."
              detail="Intermediate league player"
            />
            <TestimonialCard
              quote="Our doubles communication was a mess. Matt made roles simple, and we stopped crashing into each other overnight."
              name="Jordan & Sam"
              detail="Recreational doubles team"
            />
            <TestimonialCard
              quote="I started as a total beginner. Matt’s pacing kept me confident—and I’m actually excited to play now."
              name="Riley T."
              detail="New to pickleball"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Expertise"
            title="Skills we can sharpen together"
            description="Targeted coaching across the areas that move ratings—and enjoyment."
          />
          <ul className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {skills.map((s) => (
              <li
                key={s}
                className="rounded-full border border-brand/15 bg-white px-5 py-2.5 text-sm font-semibold text-brand-dark shadow-sm hover:border-accent/60 hover:bg-accent/10 transition-colors duration-200"
              >
                {s}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white border-y border-black/5">
        <Container>
          <SectionHeading
            eyebrow="Trusted presence"
            title="Built for players who take their improvement seriously."
          />
          <LogoStrip />
          <div className="mt-16">
            <SectionHeading
              eyebrow="Results you can expect"
              title="Outcomes that show up in matches—not just in drills."
            />
            <ResultsStats />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-surface">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-muted">
                From the blog
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-brand-dark">
                Ideas you can use on the court this week
              </h2>
              <p className="mt-3 text-neutral-600">
                Practical tips on fundamentals, doubles strategy, training, and coaching—written for
                players who want to improve with intention.
              </p>
            </div>
            <ButtonLink href="/blog" variant="secondary" className="self-start sm:self-auto">
              View all posts
            </ButtonLink>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {recent.map((post, i) => (
              <BlogCard key={post.slug} post={post} priority={i === 0} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-brand-dark text-white">
        <Container>
          <div className="rounded-3xl bg-gradient-to-br from-brand-light/30 to-brand-dark px-8 py-12 sm:px-12 sm:py-16 text-center border border-white/10 shadow-lift">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-balance">
              Ready for coaching that fits your goals—and your schedule?
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Tell me what you&apos;re working on. I&apos;ll follow up with options, availability,
              and the best next step—private lessons, a clinic, or a quick consult.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink href="/contact">Book a Lesson</ButtonLink>
              <ButtonLink href="/contact" variant="ghost">
                Ask a Question
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
