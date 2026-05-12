# Able Care Global

International signpost site for Able Care. A single page that lets visitors choose their regional site (UK / US) and links to cross-region product resources (User Guide, Quick Start Guide).

## Adding a new region

Edit `src/app/page.tsx` and append an entry to the `REGIONS` array:

```ts
{
  code: "AU",
  name: "Australia",
  flag: "/images/flags/au.svg",
  url: "https://able-care.com.au",
  description: "Falls prevention for…",
}
```

Add the corresponding square SVG flag to `public/images/flags/`.

## Local development

```bash
npm install
npm run dev
```

## Deployment

Auto-deploys via Vercel on push to `main`. No env vars needed.

## What this site is NOT

- It's not a CMS-driven content site (no Tina). Edits go through the codebase via PR.
- It's not a product marketing site — that's [Able Care UK](https://able-care-uk.vercel.app) and [Able Care US](https://www.able-care.co).
- It's not a redirect — visitors must pick.
