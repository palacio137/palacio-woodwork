# Palacio Woodwork — website

Marketing site for **Palacio Woodwork LLC** (West Palm Beach, FL).
Astro static site, deployed on Cloudflare Pages at
[palacio-woodwork.pages.dev](https://palacio-woodwork.pages.dev/).

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Editing content

**Almost everything lives in [`src/data/site.ts`](src/data/site.ts)** — phone, email,
services, project captions, FAQs, service areas and process steps. Edit that file
rather than the pages, and every page updates.

### Testimonials

`testimonials` in `src/data/site.ts` is intentionally **empty**. The testimonials
section hides itself until real reviews are added — no invented quotes. To turn it on:

```ts
export const testimonials = [
  { quote: 'They rebuilt our kitchen…', name: 'Maria G.', location: 'Jupiter, FL' },
];
```

### The quote form

The site is fully static, so the contact form has no server. On submit it opens
**WhatsApp** with the details pre-filled (`wa.me/15613329669`), with an
"Email instead" button that builds a `mailto:` to `palaciowoodwork@gmail.com`.
Nothing is stored on the site.

To switch to a real inbox form later, swap the handler in
`src/components/ContactForm.astro` for a Formspree/Cloudflare Pages Function endpoint.

## Images

| Folder | What it is |
| --- | --- |
| `public/work/` | **Real project photos** pulled from the company Instagram, cropped to remove watermarks and overlay text. |
| `public/img/` | Stock photography (Unsplash licence, free for commercial use) used for the hero, service cards and section backgrounds. |
| `public/logo.jpg` | Original logo lockup. |
| `public/img/mark.png`, `mark-light.png` | Logo "P" mark cut out with a transparent background, for the header and the dark footer. |

**Replace the `public/img/` stock shots with your own photography when you have it** —
same filenames, no code changes needed. High-resolution originals of the Instagram
photos would also be a real upgrade; the ones here are limited to what Instagram serves
publicly (640px, upscaled).

## Brand

Palette is taken from the logo and defined once in `src/styles/global.css`:

- Forest green `#1B3A2F` (deep `#0E1F19`)
- White oak / tan `#C08D5B`
- Warm off-white `#F7F5F1`

Display type is **Fraunces**, UI type is **Inter**, both from Google Fonts.

## Deployment

Cloudflare Pages project `palacio-woodwork`, connected to this repo.
Pushing to `main` triggers a build and deploy.

- Build command: `npm run build`
- Output directory: `dist`
