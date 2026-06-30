import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "Resources",
  description: "Thought leadership on presence, perception, and professional distinction.",
};

const ARTICLES = [
  { title: "The Perception Gap", excerpt: "Why your outward presence may be misaligned with your true value." },
  { title: "The Halo Effect", excerpt: "How the look you present earns you the right to be heard." },
  { title: "The Transformation Divide", excerpt: "What separates surface-level polish from identity-driven presence." },
  { title: "Above and Below the Surface", excerpt: "Why wardrobe is the fastest lever — and the smallest one." },
  { title: "The Two Pillars of Presence", excerpt: "Why the look and the voice must be engineered together." },
  { title: "The Ripple Effect", excerpt: "How individual presence compounds into team and organisational ROI." },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Thinking on presence, perception, and professional distinction."
        subtitle="Drawn from a decade of corporate, individual, and styling engagements."
      />

      <section className="container-content py-20">
        <div className="grid md:grid-cols-3 gap-10">
          {ARTICLES.map((a) => (
            <article key={a.title}>
              <PlaceholderImage label={`${a.title} — cover image`} aspect="aspect-[3/2]" className="mb-5" />
              <p className="font-display text-xl mb-2">{a.title}</p>
              <p className="text-ink/60 text-sm">{a.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
