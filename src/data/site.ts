// ---------------------------------------------------------------------------
// Language-independent company facts. All translatable copy lives in
// src/i18n/content.ts.
// ---------------------------------------------------------------------------

export const company = {
  name: 'Palacio Woodwork',
  legalName: 'Palacio Woodwork LLC',

  phone: '561-332-9669',
  phoneHref: 'tel:+15613329669',
  whatsapp: '15613329669',
  email: 'info@palaciowoodwork.com',

  city: 'West Palm Beach',
  state: 'FL',

  instagram: 'https://www.instagram.com/palaciowoodwork/',
  instagramHandle: '@palaciowoodwork',
  facebook: 'https://www.facebook.com/p/Palacio-Wood-Work-100063522505658/',
};

export const siteUrl = 'https://palaciowoodwork.com';

export const whatsappLink = (message: string) =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;

// ---------------------------------------------------------------------------
// TESTIMONIALS
// Empty on purpose - the section hides itself until real client reviews are
// added, so no invented quotes ship. Add entries per language, e.g.
//   en: [{ quote: 'They rebuilt our kitchen…', name: 'Maria G.', location: 'Jupiter, FL' }]
// ---------------------------------------------------------------------------

export type Testimonial = { quote: string; name: string; location: string };

export const testimonials: Record<'en' | 'es', Testimonial[]> = {
  en: [],
  es: [],
};
