import Image from "next/image";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Matt Ryan",
  description:
    "Learn about Matt Ryan’s pickleball coaching philosophy, experience, and who he works with—from beginners to competitive players.",
  openGraph: {
    title: `About Matt Ryan | ${siteConfig.name}`,
    description:
      "Coaching philosophy, experience, and the players Matt works with every week.",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-dark text-white py-16 sm:py-20">
        <Container>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent/90">
            About
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold max-w-3xl text-balance">
            Coaching that’s technical, practical, and genuinely supportive.
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl leading-relaxed">
            I&apos;m Matt Ryan—pickleball coach, competitor, and someone who believes the best
            sessions leave you clearer, calmer, and more excited to play.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lift max-w-md mx-auto lg:mx-0 w-full">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
                alt="Professional headshot placeholder for Matt Ryan"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 400px"
                priority
              />
              <p className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/55 px-5 py-3 text-center text-sm text-white/90 backdrop-blur-sm">
                Replace with your professional headshot (recommended: 3:4 crop, well-lit).
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-brand-dark">Matt Ryan</h2>
              <p className="mt-2 text-brand-muted font-semibold">Founder, {siteConfig.name}</p>
              <div className="mt-8 space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  I didn&apos;t fall in love with pickleball because it was easy—I fell in love
                  because it rewards smart decisions, crisp teamwork, and relentless improvement.
                  That&apos;s the environment I try to create in every lesson: focused, high-energy,
                  and never judgmental.
                </p>
                <p>
                  My coaching blends competitive experience with teaching that makes sense in real
                  games. We&apos;ll work mechanics when mechanics are the problem, but we won&apos;t
                  ignore strategy, communication, or mental toughness—those are the things that
                  separate “good” from “great.”
                </p>
                <p>
                  Whether you&apos;re a junior trying to build confidence, an adult picking up a
                  new sport, or a team preparing for tournament weekends, you&apos;ll get clear
                  feedback, a plan you can practice, and a coach who actually listens.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white border-y border-black/5">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Philosophy"
            title="Great coaching isn’t louder—it’s clearer."
            description="I coach with a simple standard: every rep should move you toward a version of your game you can trust on match day."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 max-w-4xl">
            {[
              {
                title: "Fundamentals first, always",
                body: "Flashy plays won’t save a shaky base. We build repeatable strokes, contact points, and movement patterns you can rely on.",
              },
              {
                title: "Strategy you can execute",
                body: "You’ll understand what to do and why—so you’re not guessing when the score gets tight.",
              },
              {
                title: "Confidence through preparation",
                body: "Confidence isn’t a slogan. It’s what happens when you’ve practiced the right things under realistic pressure.",
              },
              {
                title: "Respect for your time",
                body: "Lessons are structured, efficient, and tailored—so you leave with homework and a next step.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-black/6 bg-surface p-6 shadow-card"
              >
                <h3 className="font-display text-lg font-semibold text-brand-dark">{item.title}</h3>
                <p className="mt-2 text-neutral-600 leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lift">
              <Image
                src="https://images.unsplash.com/photo-1595435934249-20675b2b5f0a?w=1200&q=80"
                alt="On-court coaching placeholder image"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <p className="absolute bottom-3 left-3 right-3 rounded-lg bg-black/50 px-3 py-2 text-xs text-white text-center">
                Placeholder: replace with on-court photos or clinic imagery.
              </p>
            </div>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Experience"
                title="Credentials you can verify—and results you can feel."
                description="Swap this section with your real certifications, tournament results, coaching background, and affiliations."
              />
              <ul className="mt-4 space-y-2 text-neutral-700">
                <li>• Multi-year competitive player with experience across league and tournament play</li>
                <li>• Coach to beginners through advanced competitors, including juniors and doubles teams</li>
                <li>• Background in structured skill development, drills, and match-play scenarios</li>
                <li>• Ongoing education in player development, coaching methodology, and safety</li>
              </ul>
              <p className="mt-6 text-sm text-neutral-500">
                Add your certifications (e.g., PPR, IPTPA), notable finishes, club affiliations, and
                any media features—this is your credibility block.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-brand text-white">
        <Container>
          <SectionHeading
            eyebrow="Who I coach"
            title="If you want to improve, you belong here."
            description="You don’t need a certain rating to start—you need curiosity and a willingness to work."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4">
            {[
              "Beginners building confidence and clean habits",
              "Intermediate players improving consistency and shot selection",
              "Competitive athletes refining strategy and tournament routines",
              "Adults balancing fun with measurable improvement",
              "Juniors developing athleticism and court sense",
              "Doubles teams learning communication and teamwork",
            ].map((line) => (
              <div
                key={line}
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 backdrop-blur-sm"
              >
                <p className="font-medium text-white">{line}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <ButtonLink href="/contact" variant="primary">
              Book a Lesson
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
