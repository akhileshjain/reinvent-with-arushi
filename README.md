# Reinvent with Arushi — Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.
Built from the approved Strategy / Sitemap / Design System document.

## Status

This is the structural build: every page in the sitemap exists, the design
system is implemented as Tailwind tokens, and the signature "Threshold"
motion device is wired on the homepage. **All imagery is placeholder** —
labelled boxes in the brand palette — pending real photography.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Swapping in real images

Every image is rendered via `components/PlaceholderImage.tsx`. To replace one:

1. Drop the real file into `/public/images/`.
2. Replace the `<PlaceholderImage label="..." />` call with Next's `<Image
   src="/images/your-file.jpg" alt="..." fill />` (wrapped in a `relative`
   container matching the existing aspect ratio classes).

Do this page by page — nothing else needs to change.

## Fonts

`tailwind.config.ts` currently maps the display role to `Fraunces` with
serif fallbacks, and body/UI to `Inter` with system fallbacks, loaded as
plain CSS font-family stacks (no network calls at build time). Once you've
licensed the actual typefaces referenced in the design system (Canela / GT
Sectra for display), add them via `next/font/local` in `app/layout.tsx` and
update the `fontFamily` tokens in `tailwind.config.ts` accordingly.

## Forms

The `/contact` page form is client-side only right now (`app/contact/page.tsx`)
— it doesn't send anywhere yet. The simplest path on Netlify is to add
`data-netlify="true"` to the `<form>` and a hidden `form-name` input, which
lets Netlify Forms capture submissions with no backend code. Flag if you'd
rather route to a CRM instead.

## Deploying to Netlify

`netlify.toml` is already configured with the official Next.js runtime
plugin (`@netlify/plugin-nextjs`), which handles SSR/ISR routes automatically
— no static export needed.

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Netlify: **Add new site → Import an existing project**, select the repo.
3. Build command and publish directory are already set via `netlify.toml`;
   Netlify will detect the Next.js plugin automatically.
4. Add the production domain once ready, and set `metadataBase` in
   `app/layout.tsx` to match.

## What's next (per the strategy doc's open items)

- [ ] Real photography/video → swap into `PlaceholderImage` call sites
- [x] Logo usage confirmed → `components/ProofBlocks.tsx` `LogoStrip` currently
      renders client names as text; swap for real logo image files in
      `/public/logos/` when supplied, same swap pattern as above
- [ ] 2–3 corporate case studies → add to `app/corporate/page.tsx`
- [ ] Testimonials → add a testimonial block to Home and vertical pages
- [ ] Wire `/contact` form to Netlify Forms or chosen backend
- [ ] License and install real display/body typefaces
