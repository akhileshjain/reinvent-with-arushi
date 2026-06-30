type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="pt-40 pb-20 md:pt-48 md:pb-24 border-b border-ink/10">
      <div className="container-content max-w-2xl">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h1 className="font-display text-4xl md:text-5xl leading-tight mb-6">
          {title}
        </h1>
        <p className="text-ink/70 text-lg">{subtitle}</p>
      </div>
    </section>
  );
}
