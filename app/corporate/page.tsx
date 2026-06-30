import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProcessStepper from "@/components/ProcessStepper";
import { LogoStrip, StatBand } from "@/components/ProofBlocks";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Corporate Solutions",
  description:
    "Executive presence, leadership development, and communication training for organisations — delivered to the Indian Army, Delhi Police, KPMG, EY, and more.",
};

const OFFERINGS = [
  "Executive Presence",
  "Leadership Development",
  "Communication & Soft Skills",
  "Image Consulting",
  "Behavioural Training",
];

const STAGES = [
  { title: "Redefine", description: "Mapping current capabilities against professional goals." },
  { title: "Refine", description: "Personalised coaching, image consultancy, and soft-skills training." },
  { title: "Reinvent", description: "Transforming professionals into impactful, confident leaders." },
];

export default function CorporatePage() {
  return (
    <>
      <PageHero
        eyebrow="Corporate Solutions"
        title="Train less. Transform more."
        subtitle="For HR heads, L&D teams, CEOs, founders, and institutions who measure success in outcomes, not attendance."
      />

      <LogoStrip />

      <section className="container-content py-20 border-t border-ink/10">
        <p className="eyebrow mb-5">What We Deliver</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-px bg-ink/10">
          {OFFERINGS.map((item) => (
            <div key={item} className="bg-paper p-6 text-sm font-display text-lg">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal text-paper py-20 md:py-28">
        <div className="container-content">
          <p className="eyebrow mb-5">The Signature Pathway</p>
          <h2 className="font-display text-3xl md:text-4xl mb-16 max-w-xl">
            A structured method, not a one-off workshop.
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {STAGES.map((stage, i) => (
              <div key={stage.title}>
                <p className="text-gold font-display text-2xl mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="font-display text-xl mb-2">{stage.title}</p>
                <p className="text-paper/60 text-sm">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatBand />

      <section className="container-content py-20 md:py-28">
        <p className="eyebrow mb-5">Case Studies</p>
        <p className="font-display text-2xl max-w-xl mb-6">
          Real engagements, with measurable outcomes — to be added once
          supplied by the client.
        </p>
        <p className="text-ink/60 max-w-xl">
          Recommended format: the problem the organisation faced, the
          intervention delivered, and the outcome in their words or numbers.
        </p>
      </section>

      <section className="bg-ink text-paper py-20 md:py-28 text-center">
        <div className="container-content">
          <p className="font-display text-3xl md:text-4xl mb-8 max-w-xl mx-auto">
            Equip your people to communicate, influence, and lead with
            undeniable confidence.
          </p>
          <Button href="/contact">Book a Corporate Consultation</Button>
        </div>
      </section>
    </>
  );
}
