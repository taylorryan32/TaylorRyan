import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32 bg-surface">
      <Container>
        <div className="max-w-xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-muted">
            404
          </p>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-brand-dark">
            Page not found
          </h1>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            That page doesn&apos;t exist or may have moved. Head back home or book a lesson.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/">Go home</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact
            </ButtonLink>
          </div>
          <p className="mt-8 text-sm text-neutral-500">
            <Link href="/blog" className="text-brand font-semibold hover:underline">
              Browse the blog
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
