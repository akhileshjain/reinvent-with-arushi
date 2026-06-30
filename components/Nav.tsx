"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-paper/95 backdrop-blur border-b border-ink/5" : "bg-transparent"
      }`}
    >
      <nav className="container-content flex items-center justify-between py-5">
        <Link href="/" className="font-display text-lg tracking-wide">
          Reinvent <span className="text-gold">with Arushi</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative py-1 text-ink/80 transition-colors hover:text-ink after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-block border border-ink/20 px-5 py-2.5 text-sm transition-colors hover:border-gold"
        >
          Book a Consultation
        </Link>

        <button
          className="md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-px w-6 bg-ink mb-1.5" />
          <span className="block h-px w-6 bg-ink" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-paper border-t border-ink/10 px-6 py-6">
          <ul className="flex flex-col gap-4 text-base">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-block mt-2 border border-ink/20 px-5 py-2.5"
              >
                Book a Consultation
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
