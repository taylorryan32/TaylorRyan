"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/data/site";
import { ButtonLink } from "./Button";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-card backdrop-blur-md border-b border-black/5"
          : "bg-white/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="group flex flex-col leading-tight focus-visible:rounded-md"
        >
          <span className="font-display text-lg font-bold text-brand tracking-tight group-hover:text-brand-light transition-colors">
            {siteConfig.name}
          </span>
          <span className="text-[11px] uppercase tracking-widest text-neutral-500 hidden sm:block">
            {siteConfig.tagline}
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "text-brand bg-brand/5"
                      : "text-neutral-600 hover:text-brand hover:bg-brand/5"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <ButtonLink href="/contact" variant="primary" className="!py-2.5 !px-5 !text-sm">
            Book a Lesson
          </ButtonLink>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-brand"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden border-t border-black/5 bg-white transition-all duration-300 ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-xl px-4 py-3 text-base font-medium text-neutral-700 hover:bg-brand/5 hover:text-brand"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <ButtonLink href="/contact" variant="primary" className="w-full">
              Book a Lesson
            </ButtonLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
