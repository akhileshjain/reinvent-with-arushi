import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PlaceholderImage from "@/components/PlaceholderImage";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story, mission, and dual-pillar leadership behind Reinvent with Arushi.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We help capable people stop being underestimated."
        subtitle="Reinvent with Arushi was built on a simple observation: talent rarely loses to talent. It loses to perception."
      />

      <section className="container-content py-20 grid md:grid-cols-2 gap-12">
        <div>
          <p className="eyebrow mb-3">Mission</p>
          <p className="font-display text-2xl mb-10">
            We help capable people stop being underestimated.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-3">Vision</p>
          <p className="font-display text-2xl">
            To be the definitive name in presence, globally.
          </p>
        </div>
      </section>

      <section className="bg-charcoal text-paper py-20 md:py-28">
        <div className="container-content">
          <p className="eyebrow mb-5">Dual-Pillar Leadership</p>
          <h2 className="font-display text-3xl md:text-4xl mb-16 max-w-xl">
            Expertise meets execution.
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <PlaceholderImage label="Arushi Oswal — portrait" tone="charcoal" className="mb-6" />
              <p className="font-display text-xl mb-1">Arushi Oswal</p>
              <p className="text-gold text-sm mb-4">The Driving Force</p>
              <p className="text-paper/60 text-sm mb-3">
                <strong className="text-paper/80">Credentials:</strong> Certified
                Image Consultant (Conselle Institute of Image Management, USA);
                Certified Soft Skills Trainer (Scottish Qualifications Authority).
              </p>
              <p className="text-paper/60 text-sm">
                <strong className="text-paper/80">Focus:</strong> Executive
                presence, visual architecture, and empowering professional
                impact.
              </p>
            </div>
            <div>
              <PlaceholderImage label="Prerit Oswal — portrait" tone="charcoal" className="mb-6" />
              <p className="font-display text-xl mb-1">Prerit Oswal</p>
              <p className="text-gold text-sm mb-4">Growth Partner</p>
              <p className="text-paper/60 text-sm mb-3">
                <strong className="text-paper/80">Credentials:</strong> MBA,
                third-generation business leader, 16+ years entrepreneurial
                experience.
              </p>
              <p className="text-paper/60 text-sm">
                <strong className="text-paper/80">Focus:</strong> Strategic
                partnerships, client experience, and aligning training with
                organisational vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-content py-20 md:py-28 text-center">
        <p className="font-display text-2xl md:text-3xl max-w-xl mx-auto mb-8">
          Certifications, awards, and press mentions — to be confirmed with
          the client before launch.
        </p>
        <Button href="/contact">Start a Conversation</Button>
      </section>
    </>
  );
}
