"use client";

import { motion } from "framer-motion";
import { STATS, TRUSTED_BY } from "@/lib/constants";

export function LogoStrip() {
  return (
    <div className="container-content py-16">
      <p className="eyebrow text-center mb-8">Trusted By</p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-ink/40">
        {TRUSTED_BY.map((name) => (
          <span key={name} className="font-display text-base md:text-lg">
            {name}
          </span>
        ))}
      </div>
      <p className="text-center text-xs text-ink/30 mt-6">
        Logos displayed with permission.
      </p>
    </div>
  );
}

export function StatBand() {
  return (
    <div className="bg-charcoal text-paper">
      <div className="container-content py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <p className="font-display text-3xl md:text-4xl text-gold mb-1">
              {stat.value}
            </p>
            <p className="text-sm text-paper/60">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
