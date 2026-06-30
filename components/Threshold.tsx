"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * The Threshold — the site's one signature device (see Design System §5).
 * A vertical gold light-shaft, fixed to the left edge, that widens as the
 * visitor scrolls down the page: narrow at the hero, fully open by the
 * final CTA. Echoes the brand mark's figure-stepping-through-a-doorway motif
 * without repeating it literally on every page.
 *
 * Wrap a page's main content in <Threshold> to enable it.
 */
export default function Threshold({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const width = useTransform(scrollYProgress, [0, 1], ["2px", "10px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.05, 1], [0, 1, 1]);

  return (
    <div ref={ref} className="relative">
      <motion.div
        aria-hidden
        style={{ width, opacity }}
        className="pointer-events-none fixed left-0 top-0 z-40 hidden h-screen bg-gradient-to-b from-gold/0 via-gold/70 to-gold/0 md:block"
      />
      {children}
    </div>
  );
}
