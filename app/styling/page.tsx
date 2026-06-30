import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PlaceholderImage from "@/components/PlaceholderImage";
import ProcessStepper from "@/components/ProcessStepper";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Styling & Image Consultancy",
  description:
    "Bespoke wardrobe architecture for weddings, executive milestones, and public appearances.",
};

const ARCHITECTURE = [
  { title: "The Wedding Atelier", desc: "For brides, grooms, and the entire family." },
  { title: "The Executive Suite", desc: "For global leaders, speakers, and public figures." },
  { title: "The Red Carpet", desc: "For award nights, galas, and high-society appearances." },
];

const STEPS = [
  { title: "Discovery", description: "Understanding your essence, body architecture, and the precise event vision." },
  { title: "Curation", description: "Sourcing, mood-boarding, personal shopping, and initial look construction." },
  { title: "The Fitting", description: "Precision tailoring, grooming guidance, and bespoke accessory integration." },
  { title: "The Moment", description: "On-day styling support ensuring flawless execution and lasting confidence." },
];

export default function StylingPage() {
  return (
    <>
      <PageHero
        eyebrow="Styling & Image Consultancy"
        title="Clothes are the medium. The room's reaction is the message."
        subtitle="For brides, grooms, executives, public figures, and the planners and agencies who represent them."
      />

      <section className="container-content py-20">
        <p className="eyebrow mb-5">The Bespoke Architecture</p>
        <div className="grid md:grid-cols-3 gap-10">
          {ARCHITECTURE.map((a) => (
            <div key={a.title}>
              <PlaceholderImage label={`${a.title} — gallery image`} className="mb-5" />
              <p className="font-display text-xl mb-2">{a.title}</p>
              <p className="text-ink/60 text-sm">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal text-paper py-20 md:py-28">
        <div className="container-content">
          <p className="eyebrow mb-5">Our Signature Process</p>
          <h2 className="font-display text-3xl md:text-4xl mb-16 max-w-xl">
            From concept to the final look.
          </h2>
        </div>
        <div className="container-content">
          <ProcessStepper steps={STEPS} />
        </div>
      </section>

      <section className="container-content py-20 md:py-28">
        <p className="eyebrow mb-5">For Agencies & Planners</p>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="font-display text-xl mb-3">Wedding & Event Planners</p>
            <p className="text-ink/60">
              We lift the burden of family wardrobe stress and protect your
              meticulously designed decor from visually clashing guest
              outfits.
            </p>
          </div>
          <div>
            <p className="font-display text-xl mb-3">PR & Talent Agencies</p>
            <p className="text-ink/60">
              We align your client&apos;s physical aesthetic with their
              strategic media narrative, ensuring absolute visual
              consistency.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper py-20 md:py-28 text-center">
        <div className="container-content">
          <p className="font-display text-3xl md:text-4xl mb-8 max-w-xl mx-auto">
            Standing out requires more than a label. It requires sophisticated
            curation.
          </p>
          <Button href="/contact">Book a Styling Consultation</Button>
        </div>
      </section>
    </>
  );
}
