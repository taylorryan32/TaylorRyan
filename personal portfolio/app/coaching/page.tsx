import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { CoachingCard } from "@/components/CoachingCard";
import { Container } from "@/components/Container";
import { PricingCard } from "@/components/PricingCard";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Coaching & Pricing",
  description:
    "Private lessons, semi-private sessions, clinics, junior coaching, and competitive strategy. View sample packages and FAQs.",
  openGraph: {
    title: `Coaching & Pricing | ${siteConfig.name}`,
    description:
      "Pickleball coaching options for every level—from fundamentals to tournament strategy.",
  },
};

const faqs = [
  {
    q: "How long is a typical lesson?",
    a: "Most private sessions are 60–90 minutes depending on your goals and stamina. First-time clients often start with 60 minutes so we can assess your game and set priorities.",
  },
  {
    q: "What skill levels do you coach?",
    a: "All levels—from brand-new players to competitive athletes. If you’re unsure where you fit, tell me what you’re working on and I’ll recommend the best format.",
  },
  {
    q: "Do I need my own paddle and equipment?",
    a: "Bring a paddle if you have one you’re comfortable with. If you’re new, I can help you understand what to buy—and I often have demo options for beginners during lessons.",
  },
  {
    q: "Where are lessons held?",
    a: "Courts are arranged based on availability and what’s best for your schedule—indoor or outdoor when available. Exact locations are confirmed after booking.",
  },
  {
    q: "How does booking work?",
    a: "Send an inquiry with your goals and availability. I’ll reply with options and next steps. You can swap this flow with Calendly, Acuity, or a direct booking link later.",
  },
];

export default function CoachingPage() {
  return (
    <>
      <section className="bg-brand-dark text-white py-16 sm:py-20">
        <Container>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent/90">
            Coaching
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold max-w-3xl text-balance">
            Options built for real schedules—and real improvement.
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl leading-relaxed">
            Choose a format that fits: private attention, small groups, clinics, juniors, or match
            strategy. Pricing below is sample placeholder—customize it anytime.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact">Book a Lesson</ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Coaching options"
            title="What we can work on together"
            description="Each coaching format includes a clear focus, structured drills, and feedback you can apply immediately."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CoachingCard
              title="Private 1-on-1 lessons"
              badge="Fastest feedback loop"
              description="Ideal for mechanics, footwork, and shot selection. You’ll get high-rep corrections and a personalized practice plan."
              ctaLabel="Book private lesson"
              href="/contact"
            />
            <CoachingCard
              title="Semi-private lessons"
              badge="2–4 players"
              description="Perfect for partners or small groups who want shared coaching with individualized attention."
              ctaLabel="Inquire about semi-private"
              href="/contact"
            />
            <CoachingCard
              title="Group clinics"
              badge="High energy"
              description="Learn alongside others with themed sessions—dinks, resets, serving, doubles patterns, and more."
              ctaLabel="Join a clinic"
              href="/contact"
            />
            <CoachingCard
              title="Beginner fundamentals program"
              badge="Foundations"
              description="A structured progression for newer players: rules, scoring, court positioning, and basic patterns that keep you competitive early."
              ctaLabel="Start fundamentals"
              href="/contact"
            />
            <CoachingCard
              title="Advanced strategy & competitive coaching"
              badge="Serious players"
              description="Pre-point planning, shot selection, pressure management, and tournament-style scenarios to prepare you for real competition."
              ctaLabel="Level up strategy"
              href="/contact"
            />
            <CoachingCard
              title="Junior coaching"
              badge="Ages vary by group"
              description="Athletic development, fundamentals, and positive coaching that builds confidence and respect for the game."
              ctaLabel="Ask about juniors"
              href="/contact"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white border-y border-black/5">
        <Container>
          <SectionHeading
            eyebrow="Sample packages"
            title="Pricing placeholders you can customize"
            description="Rates are examples only—replace with your local pricing, travel fees, and package rules."
          />
          <div className="grid gap-8 lg:grid-cols-3">
            <PricingCard
              name="Single private lesson"
              price="$85 / session"
              detail="60 minutes · 1 player"
              bullets={[
                "Personalized feedback",
                "Video notes available on request",
                "Homework plan for the week",
              ]}
            />
            <PricingCard
              featured
              name="4-pack private lessons"
              price="$300 / package"
              detail="4 × 60 minutes · best for momentum"
              bullets={[
                "Progressive skill plan",
                "Priority scheduling windows",
                "Discounted vs single sessions",
              ]}
            />
            <PricingCard
              name="Doubles strategy session"
              price="$120 / team"
              detail="90 minutes · 2 players"
              bullets={[
                "Role clarity & communication",
                "Pattern play & pressure",
                "Controlled match scenarios",
              ]}
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-surface">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Quick answers before you book"
          />
          <dl className="mt-10 max-w-3xl space-y-6">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border border-black/6 bg-white p-6 shadow-card"
              >
                <dt className="font-display text-lg font-semibold text-brand-dark">{f.q}</dt>
                <dd className="mt-2 text-neutral-600 leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-brand-dark text-white">
        <Container>
          <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-12 sm:px-12 text-center">
            <h2 className="font-display text-3xl font-bold">Ready to train with intention?</h2>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto leading-relaxed">
              Tell me your goals and availability. I&apos;ll recommend the best coaching format and
              help you get on the calendar.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="primary">
                Book a Lesson
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
