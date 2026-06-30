import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://reinventwitharushi.com"),
  title: {
    default: "Reinvent with Arushi — A Presence Consultancy",
    template: "%s — Reinvent with Arushi",
  },
  description:
    "Reinvent with Arushi engineers how you're perceived — the look, the voice, the room you command — through corporate training, one-on-one coaching, and bespoke styling.",
  openGraph: {
    title: "Reinvent with Arushi — A Presence Consultancy",
    description:
      "Competence is silent until someone sees it. We close the gap between ability and presence.",
    url: "https://reinventwitharushi.com",
    siteName: "Reinvent with Arushi",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Reinvent with Arushi",
              email: "reinventwitharushi@gmail.com",
              sameAs: [
                "https://instagram.com/arushioswal",
                "https://linkedin.com/in/arushioswal",
              ],
            }),
          }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
