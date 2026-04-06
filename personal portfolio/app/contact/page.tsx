import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & Book",
  description:
    "Book private pickleball lessons or send a message. Request availability, skill level, and goals—Matt will follow up with next steps.",
  openGraph: {
    title: `Contact & Book | ${siteConfig.name}`,
    description: "Book lessons or ask a question—fast response, clear next steps.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-dark text-white py-16 sm:py-20">
        <Container>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent/90">
            Contact
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold max-w-3xl text-balance">
            Book a lesson—or ask a question.
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl leading-relaxed">
            Share your goals, skill level, and availability. I&apos;ll reply with coaching options
            and next steps. Prefer a phone call? Include the best times to reach you.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-display text-2xl font-bold text-brand-dark">
                Booking & consultation
              </h2>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                New clients typically start with a short consult so we can align on goals, schedule,
                and the best coaching format. If you&apos;re a team or a parent booking for a
                junior, mention that in your message.
              </p>
              <div className="mt-8">
                <ButtonLink href="/coaching" variant="secondary">
                  Review coaching options
                </ButtonLink>
              </div>
              <div className="mt-12 rounded-2xl border border-black/6 bg-white p-6 shadow-card">
                <h3 className="font-display text-lg font-semibold text-brand-dark">
                  Direct contact
                </h3>
                <ul className="mt-4 space-y-3 text-neutral-700">
                  <li>
                    <span className="text-neutral-500">Email:</span>{" "}
                    <a href={`mailto:${siteConfig.email}`} className="font-semibold text-brand">
                      {siteConfig.email}
                    </a>
                  </li>
                  <li>
                    <span className="text-neutral-500">Phone:</span>{" "}
                    <a
                      href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                      className="font-semibold text-brand"
                    >
                      {siteConfig.phone}
                    </a>
                  </li>
                  <li>
                    <span className="text-neutral-500">Location:</span> {siteConfig.location}
                  </li>
                </ul>
                <p className="mt-4 text-sm text-neutral-500">
                  Replace the placeholder phone/email with your booking line and preferred contact
                  hours.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="font-display text-lg font-semibold text-brand-dark">
                  Social
                </h3>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-brand hover:border-brand/30 transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-brand hover:border-brand/30 transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-brand hover:border-brand/30 transition-colors"
                  >
                    YouTube
                  </a>
                </div>
              </div>
              <div className="mt-10 rounded-2xl border border-dashed border-black/15 bg-white/5 p-6">
                <h3 className="font-display text-lg font-semibold text-brand-dark">
                  Availability (sample)
                </h3>
                <p className="mt-2 text-neutral-600 leading-relaxed">
                  Weekday mornings, weekday evenings, and select weekends—by appointment. Exact
                  hours vary by season and court access.
                </p>
                <p className="mt-3 text-sm text-neutral-500">
                  Replace this block with your real availability, time zone, and cancellation
                  policy.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
