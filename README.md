# Gonzalo Avelar — Landing Page

Minimalist, high-contrast, accessible landing page built with **Astro** and **Tailwind CSS**.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:4321

## Configure WhatsApp

Open `src/components/WhatsApp.astro` and replace the placeholder number
`000000000000` with the real international number (digits only, no `+`).

## Structure

- `src/pages/index.astro` — main landing page
- `src/components/` — Header, Hero, About, Services, CTA, Footer, WhatsApp
- `src/layouts/Base.astro` — base HTML layout with SEO meta
- `src/assets/gonzalo.jpg` — portrait image
