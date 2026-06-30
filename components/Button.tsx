import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 px-7 py-3.5 text-sm tracking-wide transition-colors duration-300";

  const styles =
    variant === "primary"
      ? "bg-ink text-paper hover:bg-charcoal"
      : "text-ink border border-ink/20 hover:border-gold";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
      </span>
    </Link>
  );
}
