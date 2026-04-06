import type { Metadata } from "next";
import { BlogFilter } from "@/components/BlogFilter";
import { Container } from "@/components/Container";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Pickleball Coaching Blog",
  description:
    "Articles on pickleball fundamentals, doubles strategy, training drills, and private coaching—written to help you improve faster.",
  openGraph: {
    title: `Blog | ${siteConfig.name}`,
    description:
      "Practical pickleball tips on fundamentals, strategy, footwork, and coaching.",
  },
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <section className="bg-brand-dark text-white py-16 sm:py-20">
        <Container>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent/90">
            Blog
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold max-w-3xl text-balance">
            Play smarter, train cleaner, and win more points.
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl leading-relaxed">
            Practical articles for players who want better fundamentals, sharper doubles strategy,
            and training ideas that translate to real matches.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-surface">
        <Container>
          <BlogFilter posts={sorted} />
        </Container>
      </section>
    </>
  );
}
