"use client";

import { useState } from "react";
import { Button } from "./Button";

const skillLevels = [
  "New to pickleball",
  "Beginner",
  "Intermediate",
  "Advanced / tournament",
  "Doubles team",
  "Junior player",
] as const;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-accent/40 bg-accent/10 p-8 sm:p-10 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white text-2xl">
          ✓
        </div>
        <h3 className="mt-6 font-display text-2xl font-bold text-brand-dark">
          Thanks—your message is in.
        </h3>
        <p className="mt-3 text-neutral-600 leading-relaxed max-w-md mx-auto">
          This is a demo confirmation. Connect your form to email or a booking tool to notify
          Matt automatically. For now, you can customize the success copy and next steps here.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 text-sm font-semibold text-brand underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-black/6 bg-white p-6 sm:p-8 shadow-card"
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="block text-sm font-semibold text-brand-dark">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-2 w-full rounded-xl border border-black/10 bg-surface px-4 py-3 text-base text-neutral-800 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            placeholder="Jordan Smith"
          />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="email" className="block text-sm font-semibold text-brand-dark">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-2 w-full rounded-xl border border-black/10 bg-surface px-4 py-3 text-base text-neutral-800 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            placeholder="you@email.com"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="phone" className="block text-sm font-semibold text-brand-dark">
            Phone <span className="text-neutral-400 font-normal">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-2 w-full rounded-xl border border-black/10 bg-surface px-4 py-3 text-base text-neutral-800 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            placeholder="(555) 000-0000"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="skill" className="block text-sm font-semibold text-brand-dark">
            Skill level
          </label>
          <select
            id="skill"
            name="skill"
            required
            defaultValue=""
            className="mt-2 w-full rounded-xl border border-black/10 bg-surface px-4 py-3 text-base text-neutral-800 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          >
            <option value="" disabled>
              Select one
            </option>
            {skillLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-semibold text-brand-dark">
            What are you looking for?
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-2 w-full rounded-xl border border-black/10 bg-surface px-4 py-3 text-base text-neutral-800 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 resize-y min-h-[120px]"
            placeholder="Goals, preferred times, lesson type (private, group, junior), and any questions."
          />
        </div>
      </div>
      <div className="mt-8">
        <Button type="submit" variant="primary" className="w-full sm:w-auto min-w-[200px]">
          Send inquiry
        </Button>
        <p className="mt-4 text-xs text-neutral-500">
          By submitting, you agree to be contacted about lessons. Replace this note with your
          privacy policy link when ready.
        </p>
      </div>
    </form>
  );
}
