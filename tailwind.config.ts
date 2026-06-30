import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#15140F",
        paper: "#FAF7F0",
        charcoal: "#2A2924",
        gold: {
          DEFAULT: "#C9A24B",
          soft: "#E4D4A8",
        },
        paperwhite: "#FFFFFF",
      },
      fontFamily: {
        // Display: high-contrast transitional serif. Swap in licensed Canela /
        // GT Sectra / Fraunces files via next/font/local once available —
        // these are deliberate, legible fallbacks in the meantime.
        display: [
          "Fraunces",
          "Georgia",
          "ui-serif",
          "serif",
        ],
        // Body / UI: humanist grotesk.
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
      },
      letterSpacing: {
        eyebrow: "0.08em",
      },
      maxWidth: {
        content: "1280px",
      },
      transitionTimingFunction: {
        threshold: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
