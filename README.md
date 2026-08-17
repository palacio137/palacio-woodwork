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

## Bilingual (EN / ES)

The site ships in English and Spanish.

| | English | Spanish |
| --- | --- | --- |
| Home | `/` | `/es/` |
| Services | `/services/` | `/es/servicios/` |
| Our Work | `/projects/` | `/es/proyectos/` |
| About | `/about/` | `/es/nosotros/` |
| Contact | `/contact/` | `/es/contacto/` |

- **Auto-detection**: a first-time visitor whose browser language is Spanish is sent to
  `/es/` before the page paints.
- **Manual override wins**: picking EN/ES in the header or the mobile menu stores the
  choice in `localStorage` under `pw-lang`, and auto-detection never overrides it again.
- The route table lives in [`src/i18n/routes.ts`](src/i18n/routes.ts); the switcher always
  links to the *same page* in the other language.
- `hreflang` alternates and a bilingual `sitemap.xml` are generated automatically.

## Editing content

- **All translatable copy** — headlines, services, FAQs, process steps, button labels —
  lives in [`src/i18n/content.ts`](src/i18n/content.ts), with an `en` and an `es` block
  side by side. Edit both when you change one.
- **Company facts** — phone, email, socials, city — live in
  [`src/data/site.ts`](src/data/site.ts) and are shared by both languages.

Components read the current language from the URL, so pages stay thin.

### Testimonials

`testimonials` in `src/data/site.ts` is intentionally **empty for both languages**. The
testimonials section hides itself until real reviews are added — no invented quotes. To
turn it on:

```ts
export const testimonials = {
  en: [{ quote: 'They rebuilt our kitchen…', name: 'Maria G.', location: 'Jupiter, FL' }],
  es: [{ quote: 'Reconstruyeron nuestra cocina…', name: 'Maria G.', location: 'Jupiter, FL' }],
};
```

## Mobile: app-style shell

Below 1000px the site uses an app layout instead of a hamburger drawer:

- A fixed bottom **tab bar** — Home · Services · Quote (accent) · Call · Menu —
  in `src/components/MobileTabBar.astro`.
- **Menu** opens a full-screen sheet with the pages, a visual grid of the six services,
  the language picker and contact details.
- A floating **WhatsApp** button (`src/components/WhatsAppFloat.astro`) sits above the tab
  bar on mobile and bottom-right on desktop.

`body` carries a bottom padding so the tab bar never covers the footer.

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
