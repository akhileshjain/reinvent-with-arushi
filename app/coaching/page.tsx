import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PlaceholderImage from "@/components/PlaceholderImage";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "One-on-One Coaching",
  description:
    "Personalised executive presence coaching for professionals, students, and career changers.",
};

const PERSONAS = [
  {
    title: "The Professional",
    where: "Hitting a glass ceiling despite high competence.",
    what: "Build executive presence, an authoritative voice, and power styling.",
    next: "Breaking through to leadership and commanding boardrooms.",
  },
  {
    title: "The Student",
    where: "Transitioning to the workforce with a campus-casual mindset.",
    what: "Curate interview basics, calibrate body language, instil active listening.",
    next: "Securing elite opportunities with immediate corporate readiness.",
  },
  {
    title: "The Homemaker",
    where: "Seeking identity reclamation or re-entering the professional world.",
    what: "Rediscover personal style, build social fluency, dismantle imposter syndrome.",
    next: "Moving through modern environments with unshakeable assurance.",
  },
];

const PROGRAMS = [
  "Executive Presence Coaching",
  "Personal Branding",
  "Communication & Confidence",
  "Grooming",
  "Interview Preparation",
  "Public Speaking",
];

export default function CoachingPage() {
  return (
    <>
      <PageHero
        eyebrow="One-on-One Coaching"
        title="You don't need more advice. You need a mirror that tells the truth."
        subtitle="For professionals, entrepreneurs, students, and career switchers ready to close the gap between ability and presence."
      />

      <section className="container-content py-20">
        <p className="eyebrow mb-5">Is This For You?</p>
        <div className="grid md:grid-cols-3 gap-px bg-ink/10">
          {PERSONAS.map((p) => (
            <div key={p.title} className="bg-paper p-8">
              <p className="font-display text-xl mb-4">{p.title}</p>
              <p className="text-sm text-ink/60 mb-3">
                <strong className="text-ink/80">Where you are:</strong> {p.where}
              </p>
              <p className="text-sm text-ink/60 mb-3">
                <strong className="text-ink/80">What we do:</strong> {p.what}
              </p>
              <p className="text-sm text-ink/60">
                <strong className="text-ink/80">Where you&apos;ll be:</strong> {p.next}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal text-paper py-20 md:py-28">
        <div className="container-content grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-5">Programs</p>
            <ul className="space-y-3">
              {PROGRAMS.map((p) => (
                <li key={p} className="font-display text-xl border-b border-paper/10 pb-3">
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <PlaceholderImage label="Coaching session — representative image" tone="charcoal" />
        </div>
      </section>

      <section className="container-content py-20 md:py-28">
        <p className="eyebrow mb-5">Your Journey</p>
        <h2 className="font-display text-3xl md:text-4xl mb-12 max-w-xl">
          Deep Consultation → The Blueprint → Tactical Implementation →
          Sustained Support
        </h2>
        <p className="text-ink/60 max-w-xl">
          Every engagement starts by unpacking your goals and the precise
          friction points in your current image, then builds a custom plan
          for both wardrobe and behavioural skill set — fine-tuned in
          real-world environments until it sticks.
        </p>
      </section>

      <section className="bg-ink text-paper py-20 md:py-28 text-center">
        <div className="container-content">
          <p className="font-display text-3xl md:text-4xl mb-8 max-w-xl mx-auto">
            Operate daily from a baseline of absolute self-belief.
          </p>
          <Button href="/contact">Book a Discovery Call</Button>
        </div>
      </section>
    </>
  );
}
