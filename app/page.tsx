import Link from "next/link";
import Button from "@/components/Button";
import PlaceholderImage from "@/components/PlaceholderImage";
import Threshold from "@/components/Threshold";
import { LogoStrip, StatBand } from "@/components/ProofBlocks";
import { VERTICALS } from "@/lib/constants";

export default function Home() {
  return (
    <Threshold>
      {/* HERO */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="container-content grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-5">A Presence Consultancy</p>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.08] mb-6">
              Competence is silent until someone sees it.
            </h1>
            <p className="text-ink/70 text-lg max-w-md mb-9">
              We engineer how you&apos;re perceived — the look, the voice, the
              room you command — so your ability stops getting lost in
              translation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact">Begin Your Reinvention</Button>
              <Button href="/process" variant="ghost">
                Explore the Method
              </Button>
            </div>
          </div>
          <PlaceholderImage
            label="Hero — cinematic portrait / video still"
            aspect="aspect-[4/5]"
          />
        </div>
      </section>

      <LogoStrip />

      {/* PERCEPTION GAP */}
      <section className="container-content py-20 md:py-28 border-t border-ink/10">
        <div className="max-w-2xl">
          <p className="eyebrow mb-5">The Perception Gap</p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight mb-6">
            Most people are more capable than they appear.
          </h2>
          <p className="text-ink/70 text-lg">
            The distance between the two is rarely talent — it&apos;s
            presence. We close it, deliberately, through two disciplines
            engineered to work as one.
          </p>
        </div>
      </section>

      {/* TWO PILLARS */}
      <section className="bg-charcoal text-paper py-20 md:py-28">
        <div className="container-content">
          <p className="eyebrow mb-5">The Method</p>
          <h2 className="font-display text-3xl md:text-4xl mb-16 max-w-xl">
            The Two Pillars of Presence
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-paper/10">
            <div className="bg-charcoal p-10 md:p-14">
              <p className="font-display text-2xl mb-4">The Look</p>
              <p className="text-paper/60 mb-6">
                What the room sees before you speak. Wardrobe, grooming, and
                image, engineered around your role and your essence — not
                trends.
              </p>
              <Link href="/styling" className="text-sm text-gold hover:underline">
                Explore Styling &amp; Image Consultancy →
              </Link>
            </div>
            <div className="bg-charcoal p-10 md:p-14">
              <p className="font-display text-2xl mb-4">The Voice</p>
              <p className="text-paper/60 mb-6">
                What the room remembers after you leave. Communication,
                executive presence, and behaviour, trained until it&apos;s
                instinct.
              </p>
              <Link href="/coaching" className="text-sm text-gold hover:underline">
                Explore One-on-One Coaching →
              </Link>
            </div>
          </div>
          <p className="text-paper/50 text-sm mt-8 max-w-md">
            Either alone is incomplete. Together, they&apos;re irreversible.
          </p>
        </div>
      </section>

      {/* THREE VERTICALS */}
      <section className="container-content py-20 md:py-28">
        <p className="eyebrow mb-5">One Method, Three Applications</p>
        <h2 className="font-display text-3xl md:text-4xl mb-16 max-w-xl">
          Wherever you meet us, you meet the same standard.
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {VERTICALS.map((v) => (
            <div key={v.slug} className="group">
              <PlaceholderImage
                label={`${v.label} — representative image`}
                aspect="aspect-[3/4]"
                className="mb-6"
              />
              <p className="eyebrow mb-2">{v.label}</p>
              <p className="font-display text-xl mb-3">{v.line}</p>
              <p className="text-ink/60 text-sm mb-5">{v.description}</p>
              <Link
                href={`/${v.slug}`}
                className="text-sm border-b border-ink/20 pb-0.5 group-hover:border-gold transition-colors"
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </section>

      <StatBand />

      {/* FOUNDER TEASER */}
      <section className="container-content py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <PlaceholderImage
            label="Arushi &amp; Prerit Oswal — founder portrait"
            aspect="aspect-[4/5]"
          />
          <div>
            <p className="eyebrow mb-5">Dual-Pillar Leadership</p>
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              Expertise meets execution.
            </h2>
            <p className="text-ink/70 mb-4">
              Arushi Oswal is a Certified Image Consultant (Conselle
              Institute of Image Management, USA) and Certified Soft Skills
              Trainer (Scottish Qualifications Authority), focused on
              executive presence and visual architecture.
            </p>
            <p className="text-ink/70 mb-8">
              Prerit Oswal brings an MBA and 16+ years of entrepreneurial
              leadership, focused on strategic partnerships and a premier
              client experience.
            </p>
            <Button href="/about" variant="ghost">
              Meet the Founders
            </Button>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-ink text-paper py-24 md:py-36 text-center">
        <div className="container-content">
          <p className="font-display text-3xl md:text-5xl mb-8 max-w-2xl mx-auto leading-tight">
            Your reinvention begins at the threshold. Step through.
          </p>
          <Button href="/contact">Book a Private Consultation</Button>
        </div>
      </section>
    </Threshold>
  );
}
