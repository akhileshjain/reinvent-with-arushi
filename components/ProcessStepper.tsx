type Step = { title: string; description: string };

export default function ProcessStepper({ steps }: { steps: Step[] }) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-px bg-ink/10">
      {steps.map((step, i) => (
        <div key={step.title} className="bg-paper p-8">
          <p className="font-display text-gold text-2xl mb-4">
            {String(i + 1).padStart(2, "0")}
          </p>
          <p className="font-display text-lg mb-2">{step.title}</p>
          <p className="text-sm text-ink/60">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
