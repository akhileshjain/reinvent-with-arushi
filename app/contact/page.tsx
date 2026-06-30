"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { SITE } from "@/lib/constants";

const REASONS = [
  { value: "corporate", label: "Corporate Training" },
  { value: "coaching", label: "One-on-One Coaching" },
  { value: "styling", label: "Styling & Image Consultancy" },
];

export default function ContactPage() {
  const [reason, setReason] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to the client's preferred form handler (e.g. Netlify Forms,
    // a serverless function, or a CRM webhook) once decided.
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Your reinvention begins at the threshold."
        subtitle="Tell us what brought you here, and we'll route you to the right consultation."
      />

      <section className="container-content py-20 grid md:grid-cols-2 gap-16">
        <div>
          {submitted ? (
            <p className="font-display text-2xl">
              Thank you. We&apos;ll be in touch within one business day.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <fieldset>
                <legend className="eyebrow mb-4">
                  Which best describes your reason for reaching out?
                </legend>
                <div className="flex flex-col gap-3">
                  {REASONS.map((r) => (
                    <label
                      key={r.value}
                      className={`flex items-center gap-3 border px-4 py-3 cursor-pointer transition-colors ${
                        reason === r.value ? "border-gold" : "border-ink/15"
                      }`}
                    >
                      <input
                        type="radio"
                        name="reason"
                        value={r.value}
                        checked={reason === r.value}
                        onChange={() => setReason(r.value)}
                        required
                        className="accent-[#C9A24B]"
                      />
                      {r.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-sm text-ink/60 block mb-2">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full border border-ink/15 px-4 py-3 bg-paper focus:border-gold outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-ink/60 block mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-ink/15 px-4 py-3 bg-paper focus:border-gold outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-sm text-ink/60 block mb-2">
                  A little about what you&apos;re looking for
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full border border-ink/15 px-4 py-3 bg-paper focus:border-gold outline-none"
                />
              </div>

              <button
                type="submit"
                className="bg-ink text-paper px-7 py-3.5 text-sm tracking-wide hover:bg-charcoal transition-colors"
              >
                Request a Consultation
              </button>
            </form>
          )}
        </div>

        <div>
          <p className="eyebrow mb-4">Direct</p>
          <ul className="space-y-2 text-ink/70 mb-10">
            <li>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            {SITE.phones.map((p) => (
              <li key={p}>
                <a href={`tel:${p.replace(/\s/g, "")}`}>{p}</a>
              </li>
            ))}
          </ul>
          <p className="eyebrow mb-4">Elsewhere</p>
          <ul className="space-y-2 text-ink/70">
            <li>
              <a href={SITE.instagram.url}>Instagram {SITE.instagram.handle}</a>
            </li>
            <li>
              <a href={SITE.linkedin.url}>LinkedIn {SITE.linkedin.handle}</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
