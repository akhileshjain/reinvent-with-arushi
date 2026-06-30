import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-paper">
      <div className="container-content py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="font-display text-xl mb-3">
              Reinvent <span className="text-gold">with Arushi</span>
            </p>
            <p className="text-paper/60 text-sm max-w-xs">
              Your reinvention begins at the threshold. Step through.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Explore</p>
            <ul className="space-y-2.5 text-sm text-paper/70">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-paper transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Get in Touch</p>
            <ul className="space-y-2.5 text-sm text-paper/70">
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-paper transition-colors">
                  {SITE.email}
                </a>
              </li>
              {SITE.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-paper transition-colors">
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a href={SITE.instagram.url} className="hover:text-paper transition-colors">
                  Instagram {SITE.instagram.handle}
                </a>
              </li>
              <li>
                <a href={SITE.linkedin.url} className="hover:text-paper transition-colors">
                  LinkedIn {SITE.linkedin.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="threshold-divider opacity-20 my-10" />

        <div className="flex flex-col md:flex-row justify-between gap-4 text-xs text-paper/40">
          <p>&copy; {new Date().getFullYear()} Reinvent with Arushi. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="hover:text-paper/70">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-paper/70">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
