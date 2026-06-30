type PlaceholderImageProps = {
  label: string;
  aspect?: string; // tailwind aspect-* class
  className?: string;
  tone?: "ivory" | "charcoal";
};

/**
 * Stand-in for real photography/video, which the client will supply later.
 * Renders a labelled placeholder in the brand palette so layout, spacing,
 * and crop ratios can be reviewed before real assets land — at which point
 * this becomes <Image src="..." />.
 */
export default function PlaceholderImage({
  label,
  aspect = "aspect-[4/5]",
  className = "",
  tone = "ivory",
}: PlaceholderImageProps) {
  const toneClasses =
    tone === "charcoal"
      ? "bg-charcoal text-paper/60 border-paper/10"
      : "bg-[#EFE9D8] text-ink/40 border-ink/10";

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex items-center justify-center overflow-hidden border ${aspect} ${toneClasses} ${className}`}
    >
      <span className="px-4 text-center text-xs uppercase tracking-eyebrow">
        {label}
      </span>
    </div>
  );
}
