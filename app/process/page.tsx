import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProcessStepper from "@/components/ProcessStepper";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "The Method",
  description:
    "How Reinvent with Arushi engineers presence — the shared process behind every engagement.",
};

const STEPS = [
  { title: "Discovery", description: "Unpacking your goals and the precise friction points in your current presence." },
  { title: "The Blueprint", description: "Engineering a custom plan across both wardrobe and behavioural skill set." },
  { title: "Implementation", description: "Active reinvention — personal shopping, fittings, and intensive coaching." },
  { title: "Sustained Support", description: "Fine-tuning newly acquired skills in real-world environments." },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="The Method"
        title="One process, applied across every engagement."
        subtitle="Whether the entry point is corporate training, individual coaching, or bespoke styling, the underlying engineering is the same."
      />

      <section className="container-content py-20">
        <ProcessStepper steps={STEPS} />
      </section>

      <section className="container-content py-20 md:py-28 grid md:grid-cols-2 gap-12">
        <div>
          <p className="eyebrow mb-3">Pillar I</p>
          <p className="font-display text-2xl mb-3">The Look</p>
          <p className="text-ink/60">
            Mastering the visual cues you send before you ever speak a word —
            wardrobe, grooming, and styling, engineered around your role.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-3">Pillar II</p>
          <p className="font-display text-2xl mb-3">The Voice</p>
          <p className="text-ink/60">
            Mastering the interpersonal skills that sustain and elevate your
            initial impression — body language, tonality, etiquette.
          </p>
        </div>
      </section>

      <section className="bg-ink text-paper py-20 md:py-28 text-center">
        <div className="container-content">
          <p className="font-display text-3xl md:text-4xl mb-8 max-w-xl mx-auto">
            Holistic transformation requires total alignment of both.
          </p>
          <Button href="/contact">Begin Your Reinvention</Button>
        </div>
      </section>
    </>
  );
}
