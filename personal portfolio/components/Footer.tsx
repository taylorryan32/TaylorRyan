import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";
import { ButtonLink } from "./Button";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="font-display text-xl font-bold">{siteConfig.name}</p>
            <p className="mt-3 text-white/75 max-w-md leading-relaxed">
              {siteConfig.tagline}. Private coaching for players who want clearer
              strategy, cleaner mechanics, and more confidence—on demand.
            </p>
            <div className="mt-6">
              <ButtonLink href="/contact" variant="primary">
                Book a Lesson
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent/90">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent/90">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-white/85">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="text-white/70">{siteConfig.location}</li>
            </ul>
            <div className="mt-6 flex gap-4">
              <a
                href={siteConfig.social.instagram}
                className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href={siteConfig.social.youtube}
                className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between text-sm text-white/55">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-white/45">
            Sample site copy—replace with your credentials, pricing, and booking
            links.
          </p>
        </div>
      </Container>
    </footer>
  );
}
