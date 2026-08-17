// ---------------------------------------------------------------------------
// Single source of truth for company information.
// Everything the site renders comes from here - edit this file, not the pages.
// ---------------------------------------------------------------------------

export const company = {
  name: 'Palacio Woodwork',
  legalName: 'Palacio Woodwork LLC',
  tagline: 'Building dreams with craftsmanship',
  promise: "The difference isn't just the cabinets. It's in the details.",
  disciplines: 'Kitchens · Cabinetry · Remodeling',

  phone: '561-332-9669',
  phoneHref: 'tel:+15613329669',
  whatsapp: '15613329669',
  email: 'palaciowoodwork@gmail.com',

  city: 'West Palm Beach',
  state: 'FL',
  region: 'Palm Beach County',

  instagram: 'https://www.instagram.com/palaciowoodwork/',
  instagramHandle: '@palaciowoodwork',
  facebook: 'https://www.facebook.com/p/Palacio-Wood-Work-100063522505658/',
};

export const siteUrl = 'https://palacio-woodwork.pages.dev';

export const whatsappLink = (message: string) =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;

// ---------------------------------------------------------------------------

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// ---------------------------------------------------------------------------

export type Service = {
  slug: string;
  title: string;
  short: string;
  body: string;
  image: string;
  alt: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: 'kitchens',
    title: 'Luxury Kitchen Remodels',
    short: 'Custom cabinetry, clean lines and high-end finishes, built around how you actually cook.',
    body:
      'We rebuild the kitchen from the layout up — reworking the flow, fabricating cabinetry to the exact dimensions of your room, and finishing every edge so the result looks built-in rather than installed.',
    image: '/img/kitchen-marble.jpg',
    alt: 'Modern kitchen with marble countertops and custom cabinetry',
    points: [
      'Custom and semi-custom cabinetry',
      'Islands, pantries and appliance panels',
      'Countertops, backsplash and tile',
      'Layout redesign and space planning',
    ],
  },
  {
    slug: 'bathrooms',
    title: 'Spa-Style Bathrooms',
    short: 'Walk-in showers, marble and stone, and vanities made to fit the room exactly.',
    body:
      'Bathrooms are where precision shows. We handle waterproofing, tile layout, glass, lighting and custom vanities so the finished room feels calm, bright and effortless.',
    image: '/img/bath-tub.jpg',
    alt: 'Renovated bathroom with marble walk-in shower and floating wood vanity',
    points: [
      'Frameless glass and curbless showers',
      'Marble, porcelain and large-format tile',
      'Custom vanities and storage',
      'Lighting and modern fixtures',
    ],
  },
  {
    slug: 'cabinetry',
    title: 'Custom Cabinetry',
    short: 'Built to your dimensions, your finish and your storage — not a catalog size.',
    body:
      'Closets, built-ins, entertainment walls, laundry rooms, outdoor kitchens. If it stores something, we can build it to fit the space instead of forcing the space to fit a stock box.',
    image: '/work/patio-cabinets.jpg',
    alt: 'Custom outdoor patio cabinetry with built-in grill and stone countertop',
    points: [
      'Built-ins and entertainment walls',
      'Walk-in closets and wardrobes',
      'Laundry and mudroom storage',
      'Outdoor and patio cabinetry',
    ],
  },
  {
    slug: 'carpentry',
    title: 'Fine Carpentry & Millwork',
    short: 'Stairs, railings, trim and moldings — the details that make a house feel finished.',
    body:
      'This is the work the company is named for. Stair treads and risers, handrails, crown molding, casing, wainscoting and paneling, cut and fitted on site so the joints disappear.',
    image: '/work/stairs.jpg',
    alt: 'Newly installed solid pine stair treads and risers with white railing',
    points: [
      'Staircases, treads and risers',
      'Handrails, balusters and railings',
      'Crown molding, casing and baseboard',
      'Wainscoting and wall paneling',
    ],
  },
  {
    slug: 'outdoor',
    title: 'Decks, Patios & Pergolas',
    short: 'Outdoor structures built for Florida sun, salt air and afternoon storms.',
    body:
      'Decks, custom patios, pergolas and wood fencing — designed for the way the light and weather actually move across your property, and built with materials that hold up to it.',
    image: '/img/wood-table.jpg',
    alt: 'Finished exterior woodwork and timber structure',
    points: [
      'Decks and raised platforms',
      'Pergolas and shade structures',
      'Custom patios and outdoor living',
      'Wood fencing and privacy screens',
    ],
  },
  {
    slug: 'framing-renovations',
    title: 'Framing & Full Renovations',
    short: 'Structural framing through final finish, managed as one project.',
    body:
      'We take on whole-home renovations from demolition and precise framing to the last piece of trim — one team accountable for the alignment, the schedule and the finish.',
    image: '/work/framing.jpg',
    alt: 'Interior wood framing on an active residential renovation',
    points: [
      'Precise structural framing',
      'Interior walls and layout changes',
      'Full interior and exterior renovations',
      'Start-to-finish project management',
    ],
  },
];

// ---------------------------------------------------------------------------

// Order matters: the mosaic assigns tile sizes by position, in groups of six.
// 1 = hero tile (2x2) · 2,3 = short tiles · 4,5,6 = tall tiles
export const projects = [
  {
    image: '/work/spa-bath.jpg',
    alt: 'Freestanding soaking tub against a marble wall with floor-to-ceiling windows',
    title: 'Waterfront Primary Bath',
    category: 'Bathroom',
  },
  {
    image: '/work/patio-cabinets.jpg',
    alt: 'Outdoor kitchen cabinetry with a built-in stainless grill',
    title: 'Patio Outdoor Kitchen',
    category: 'Outdoor',
  },
  {
    image: '/work/stairs.jpg',
    alt: 'Solid pine stair treads and risers freshly installed',
    title: 'Solid Pine Stair Covering',
    category: 'Carpentry',
  },
  {
    image: '/work/kitchen-shaker.jpg',
    alt: 'White shaker cabinetry and quartz countertops in a bright kitchen',
    title: 'Shaker Kitchen & Island',
    category: 'Cabinetry',
  },
  {
    image: '/work/kitchen-gloss.jpg',
    alt: 'Galley kitchen with high-gloss white cabinetry and dark stone backsplash',
    title: 'High-Gloss Galley Kitchen',
    category: 'Kitchen',
  },
  {
    image: '/work/framing.jpg',
    alt: 'Precise interior wood framing during a full home renovation',
    title: 'Full Renovation Framing',
    category: 'Framing',
  },
];

// ---------------------------------------------------------------------------

export const process = [
  {
    step: '01',
    title: 'Talk it through',
    body: 'Call, text or send us photos of the space. We listen first and tell you honestly what is and is not worth doing.',
  },
  {
    step: '02',
    title: 'Measure & design',
    body: 'We measure on site, work out the layout, and agree on materials and finishes before anything is ordered.',
  },
  {
    step: '03',
    title: 'Detailed quote',
    body: 'You get the scope written out stage by stage, so you know what happens when and what each part costs.',
  },
  {
    step: '04',
    title: 'Build & finish',
    body: 'One crew, start to finish. We keep the site clean, keep you updated, and hand it back finished.',
  },
];

// ---------------------------------------------------------------------------

export const serviceAreas = [
  'West Palm Beach',
  'Palm Beach Island',
  'Jupiter',
  'Delray Beach',
  'Boca Raton',
  'Wellington',
  'Palm Beach Gardens',
  'Miami',
];

// ---------------------------------------------------------------------------

export const faqs = [
  {
    q: 'What areas do you serve?',
    a: 'Our home base is West Palm Beach, and most of our work is across Palm Beach County — Palm Beach Island, Jupiter, Delray Beach, Boca Raton and Miami. We also take on full remodels statewide in Florida and select projects nationwide.',
  },
  {
    q: 'Do you only build cabinets, or can you handle the whole remodel?',
    a: 'Both. Cabinetry and fine carpentry are our specialty, but we regularly run complete kitchen, bathroom and whole-home renovations — framing, tile, finishes and all the trades in between.',
  },
  {
    q: 'Is the cabinetry custom or stock?',
    a: 'We do both custom and semi-custom. Custom is built to your exact dimensions and finish; semi-custom gives you modern designs and premium finishes on a faster turnaround. We will tell you which one actually makes sense for your room and budget.',
  },
  {
    q: 'How do I get a quote?',
    a: `The fastest way is to call or WhatsApp ${company.phone} with a few photos of the space and a rough idea of what you want. We will come out, measure, and put together a written scope.`,
  },
  {
    q: 'How long does a kitchen or bathroom take?',
    a: 'It depends on the scope and on material lead times, which we confirm before work starts. What we commit to is a schedule in writing up front and a heads-up the moment anything on site changes it.',
  },
];

// ---------------------------------------------------------------------------
// TESTIMONIALS
// Empty by default on purpose - the section hides itself until you add real
// reviews here. Paste genuine client quotes below, e.g.
//   { quote: 'They rebuilt our kitchen...', name: 'Maria G.', location: 'Jupiter, FL' },
// ---------------------------------------------------------------------------

export const testimonials: { quote: string; name: string; location: string }[] = [];
