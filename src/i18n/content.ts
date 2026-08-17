import type { Lang } from './routes';

// ---------------------------------------------------------------------------
// All translatable copy lives here. Images, slugs and ordering are shared.
// ---------------------------------------------------------------------------

export type Service = {
  slug: string;
  image: string;
  title: string;
  alt: string;
  short: string;
  body: string;
  points: string[];
};

export type Project = {
  image: string;
  title: string;
  alt: string;
  category: string;
};

export type Content = {
  meta: Record<string, { title: string; description: string }>;
  nav: { label: string; key: 'services' | 'projects' | 'about' | 'contact' }[];
  common: {
    home: string;
    quote: string;
    call: string;
    whatsapp: string;
    menu: string;
    skip: string;
    learnMore: string;
    langLabel: string;
    /** Short labels for the mobile tab bar — they have ~60px to fit in. */
    tabQuote: string;
    tabWork: string;
  };
  hero: {
    eyebrow: string;
    lines: [string, string, string];
    lede: string;
    ctaPrimary: string;
    ctaSecondary: string;
    chips: string[];
    whatsappLabel: string;
    whatsappMessage: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    headingDetailed: string;
    lede: string;
    items: Service[];
  };
  craft: {
    eyebrow: string;
    headingLead: string;
    headingEm: string;
    lede: string;
    stampLabel: string;
    pillars: { title: string; body: string }[];
  };
  work: {
    eyebrow: string;
    heading: string;
    headingAll: string;
    lede: string;
    cta: string;
    items: Project[];
  };
  process: {
    eyebrow: string;
    heading: string;
    lede: string;
    steps: { step: string; title: string; body: string }[];
  };
  areas: {
    eyebrow: string;
    heading: string;
    note: string;
    footerLabel: string;
    footerNote: string;
    list: string[];
  };
  faq: {
    eyebrow: string;
    heading: string;
    lede: string;
    items: { q: string; a: string }[];
  };
  testimonials: { eyebrow: string; heading: string };
  band: {
    title: string;
    body: string;
    servicesTitle: string;
    servicesBody: string;
    projectsTitle: string;
    projectsBody: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    lede: string;
    labels: {
      phone: string;
      email: string;
      based: string;
      instagram: string;
      name: string;
      phoneField: string;
      city: string;
      service: string;
      details: string;
      detailsPlaceholder: string;
      other: string;
    };
    submit: string;
    emailInstead: string;
    note: string;
    messageIntro: string;
    emailSubject: string;
  };
  pageHero: Record<
    'services' | 'projects' | 'about' | 'contact',
    { eyebrow: string; title: string; body: string }
  >;
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    factLabels: [string, string, string, string];
    facts: [string, string, string, string];
  };
  social: {
    eyebrow: string;
    heading: string;
    body: string;
    instagram: string;
    facebook: string;
  };
  footer: {
    services: string;
    company: string;
    getInTouch: string;
    quote: string;
    rights: string;
    disciplines: string;
    tagline: string;
  };
  notFound: {
    eyebrow: string;
    heading: string;
    body: string;
    back: string;
  };
};

// ---------------------------------------------------------------------------

const IMAGES = {
  kitchens: '/img/kitchen-marble.jpg',
  bathrooms: '/img/bath-tub.jpg',
  cabinetry: '/img/custom-cabinetry.jpg',
  carpentry: '/work/stairs.jpg',
  outdoor: '/img/deck-pergola.jpg',
  framing: '/work/framing.jpg',
};

// ---------------------------------------------------------------------------
// ENGLISH
// ---------------------------------------------------------------------------

const en: Content = {
  meta: {
    home: {
      title: 'Palacio Woodwork | Custom Cabinetry & Remodeling in West Palm Beach, FL',
      description:
        'Luxury kitchen and bathroom remodels, custom cabinetry and fine carpentry in West Palm Beach and across Palm Beach County. Building dreams with craftsmanship.',
    },
    services: {
      title: 'Services | Kitchens, Cabinetry & Carpentry — Palacio Woodwork',
      description:
        'Luxury kitchen remodels, spa-style bathrooms, custom cabinetry, fine carpentry, decks and full home renovations across Palm Beach County, Florida.',
    },
    projects: {
      title: 'Our Work | Palacio Woodwork — West Palm Beach',
      description:
        'Kitchens, bathrooms, staircases, outdoor cabinetry and full renovations built by Palacio Woodwork across Palm Beach County, Florida.',
    },
    about: {
      title: 'About | Palacio Woodwork LLC — West Palm Beach, FL',
      description:
        'Palacio Woodwork is a West Palm Beach remodeling and fine carpentry company building kitchens, cabinetry and full renovations across South Florida.',
    },
    contact: {
      title: 'Contact | Request a Quote — Palacio Woodwork, West Palm Beach',
      description:
        'Request a quote for custom cabinetry, a kitchen or bathroom remodel, or fine carpentry in West Palm Beach and Palm Beach County. Call or WhatsApp 561-332-9669.',
    },
    notFound: {
      title: 'Page not found | Palacio Woodwork',
      description: "That page doesn't exist. Head back home or get in touch with Palacio Woodwork.",
    },
  },

  nav: [
    { label: 'Services', key: 'services' },
    { label: 'Our Work', key: 'projects' },
    { label: 'About', key: 'about' },
    { label: 'Contact', key: 'contact' },
  ],

  common: {
    home: 'Home',
    quote: 'Request a quote',
    call: 'Call',
    whatsapp: 'WhatsApp',
    menu: 'Menu',
    skip: 'Skip to content',
    learnMore: 'Learn more',
    langLabel: 'Language',
    tabQuote: 'Quote',
    tabWork: 'Work',
  },

  hero: {
    eyebrow: 'West Palm Beach, Florida',
    lines: ['Kitchens, cabinetry', 'and carpentry', 'built to last.'],
    lede: 'Palacio Woodwork designs, builds and installs the parts of your home that get touched every day — cabinets, stairs, trim and full remodels — with the precision of furniture rather than construction.',
    ctaPrimary: 'Request a quote',
    ctaSecondary: 'See our work',
    chips: [
      'Custom & semi-custom cabinetry',
      'Kitchens, baths & full remodels',
      'Palm Beach County · Statewide · Nationwide',
    ],
    whatsappLabel: 'WhatsApp us',
    whatsappMessage: "Hi Palacio Woodwork, I'd like a quote for my project.",
  },

  services: {
    eyebrow: 'Services',
    heading: 'What we build',
    headingDetailed: 'Every service, in detail',
    lede: 'One team for the cabinetry, the carpentry and everything around it — so the finish lines up with the framing and nobody points at anybody else.',
    items: [
      {
        slug: 'kitchens',
        image: IMAGES.kitchens,
        title: 'Luxury Kitchen Remodels',
        alt: 'Modern kitchen with marble countertops and custom cabinetry',
        short: 'Custom cabinetry, clean lines and high-end finishes, built around how you actually cook.',
        body: 'We rebuild the kitchen from the layout up — reworking the flow, fabricating cabinetry to the exact dimensions of your room, and finishing every edge so the result looks built-in rather than installed.',
        points: [
          'Custom and semi-custom cabinetry',
          'Islands, pantries and appliance panels',
          'Countertops, backsplash and tile',
          'Layout redesign and space planning',
        ],
      },
      {
        slug: 'bathrooms',
        image: IMAGES.bathrooms,
        title: 'Spa-Style Bathrooms',
        alt: 'Renovated bathroom with marble walk-in shower and floating wood vanity',
        short: 'Walk-in showers, marble and stone, and vanities made to fit the room exactly.',
        body: 'Bathrooms are where precision shows. We handle waterproofing, tile layout, glass, lighting and custom vanities so the finished room feels calm, bright and effortless.',
        points: [
          'Frameless glass and curbless showers',
          'Marble, porcelain and large-format tile',
          'Custom vanities and storage',
          'Lighting and modern fixtures',
        ],
      },
      {
        slug: 'cabinetry',
        image: IMAGES.cabinetry,
        title: 'Custom Cabinetry',
        alt: 'Floor-to-ceiling handleless walnut cabinetry with an integrated oven',
        short: 'Built to your dimensions, your finish and your storage — not a catalog size.',
        body: 'Closets, built-ins, entertainment walls, laundry rooms, outdoor kitchens. If it stores something, we can build it to fit the space instead of forcing the space to fit a stock box.',
        points: [
          'Built-ins and entertainment walls',
          'Walk-in closets and wardrobes',
          'Laundry and mudroom storage',
          'Outdoor and patio cabinetry',
        ],
      },
      {
        slug: 'carpentry',
        image: IMAGES.carpentry,
        title: 'Fine Carpentry & Millwork',
        alt: 'Newly installed solid pine stair treads and risers with white railing',
        short: 'Stairs, railings, trim and moldings — the details that make a house feel finished.',
        body: 'This is the work the company is named for. Stair treads and risers, handrails, crown molding, casing, wainscoting and paneling, cut and fitted on site so the joints disappear.',
        points: [
          'Staircases, treads and risers',
          'Handrails, balusters and railings',
          'Crown molding, casing and baseboard',
          'Wainscoting and wall paneling',
        ],
      },
      {
        slug: 'outdoor',
        image: IMAGES.outdoor,
        title: 'Decks, Patios & Pergolas',
        alt: 'Timber deck with a pergola, cable railing and a forest view',
        short: 'Outdoor structures built for Florida sun, salt air and afternoon storms.',
        body: 'Decks, custom patios, pergolas and wood fencing — designed for the way the light and weather actually move across your property, and built with materials that hold up to it.',
        points: [
          'Decks and raised platforms',
          'Pergolas and shade structures',
          'Custom patios and outdoor living',
          'Wood fencing and privacy screens',
        ],
      },
      {
        slug: 'framing-renovations',
        image: IMAGES.framing,
        title: 'Framing & Full Renovations',
        alt: 'Interior wood framing on an active residential renovation',
        short: 'Structural framing through final finish, managed as one project.',
        body: 'We take on whole-home renovations from demolition and precise framing to the last piece of trim — one team accountable for the alignment, the schedule and the finish.',
        points: [
          'Precise structural framing',
          'Interior walls and layout changes',
          'Full interior and exterior renovations',
          'Start-to-finish project management',
        ],
      },
    ],
  },

  craft: {
    eyebrow: 'Why Palacio',
    headingLead: "The difference isn't just the cabinets.",
    headingEm: "It's in the details.",
    lede: 'Anyone can hang a box on a wall. What separates a remodel that looks finished from one that looks installed is the reveal on a door, the way a stair tread meets the skirt, whether the crown returns cleanly into the corner. That is the part we care about most.',
    stampLabel: 'Est.',
    pillars: [
      {
        title: 'Measured, not guessed',
        body: 'Every cabinet, tread and casing is cut to the room it lives in. Old houses are never square — the fix is measuring, not caulk.',
      },
      {
        title: 'One crew, start to finish',
        body: 'The people who frame it are the people who finish it. Nothing gets lost in the handoff between trades.',
      },
      {
        title: 'A clean site every evening',
        body: 'You still live there. We protect the floors, contain the dust and leave the space walkable at the end of each day.',
      },
      {
        title: 'The scope in writing',
        body: 'Stage by stage, with what it costs and what it depends on — so the number at the end is the number you agreed to.',
      },
    ],
  },

  work: {
    eyebrow: 'Our work',
    heading: 'Recent work',
    headingAll: 'Selected projects',
    lede: 'Photographed on site, mid-build and finished. More goes up on Instagram every week than we can fit here.',
    cta: 'View the full gallery',
    items: [
      {
        image: '/work/spa-bath.jpg',
        title: 'Waterfront Primary Bath',
        alt: 'Freestanding soaking tub against a marble wall with floor-to-ceiling windows',
        category: 'Bathroom',
      },
      {
        image: '/work/patio-cabinets.jpg',
        title: 'Patio Outdoor Kitchen',
        alt: 'Outdoor kitchen cabinetry with a built-in stainless grill',
        category: 'Outdoor',
      },
      {
        image: '/work/stairs.jpg',
        title: 'Solid Pine Stair Covering',
        alt: 'Solid pine stair treads and risers freshly installed',
        category: 'Carpentry',
      },
      {
        image: '/work/kitchen-shaker.jpg',
        title: 'Shaker Kitchen & Island',
        alt: 'White shaker cabinetry and quartz countertops in a bright kitchen',
        category: 'Cabinetry',
      },
      {
        image: '/work/kitchen-gloss.jpg',
        title: 'High-Gloss Galley Kitchen',
        alt: 'Galley kitchen with high-gloss white cabinetry and dark stone backsplash',
        category: 'Kitchen',
      },
      {
        image: '/work/framing.jpg',
        title: 'Full Renovation Framing',
        alt: 'Precise interior wood framing during a full home renovation',
        category: 'Framing',
      },
    ],
  },

  process: {
    eyebrow: 'How it works',
    heading: 'Four steps, no surprises',
    lede: 'Most of the stress in a remodel comes from not knowing what happens next. This is the whole sequence.',
    steps: [
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
    ],
  },

  areas: {
    eyebrow: 'Where we work',
    heading: 'Based in West Palm Beach. At home across Palm Beach County.',
    note: 'Most of our projects sit within an easy drive of the shop, which is how we keep crews on site consistently. For full remodels we also travel statewide across Florida, and we take on select projects nationwide.',
    footerLabel: 'Serving',
    footerNote: 'and statewide across Florida',
    list: [
      'West Palm Beach',
      'Palm Beach Island',
      'Jupiter',
      'Delray Beach',
      'Boca Raton',
      'Wellington',
      'Palm Beach Gardens',
      'Miami',
    ],
  },

  faq: {
    eyebrow: 'Questions',
    heading: 'Before you call',
    lede: 'The things homeowners ask us most. If yours isn’t here, just pick up the phone — we would rather answer it than have you guess.',
    items: [
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
        a: 'The fastest way is to call or WhatsApp 561-332-9669 with a few photos of the space and a rough idea of what you want. We will come out, measure, and put together a written scope.',
      },
      {
        q: 'How long does a kitchen or bathroom take?',
        a: 'It depends on the scope and on material lead times, which we confirm before work starts. What we commit to is a schedule in writing up front and a heads-up the moment anything on site changes it.',
      },
    ],
  },

  testimonials: { eyebrow: 'Clients', heading: 'In their words' },

  band: {
    title: 'Ready to start?',
    body: 'Send photos of the space and we will tell you honestly what it takes.',
    servicesTitle: 'Not sure which one you need?',
    servicesBody:
      'Describe the room and we will tell you what it actually takes — including when the answer is less than you expected.',
    projectsTitle: 'Want something like this?',
    projectsBody: 'Send us a photo of your space and a note about what you have in mind.',
  },

  contact: {
    eyebrow: 'Contact',
    heading: 'Tell us about the space',
    lede: 'Send a few photos and rough measurements and we can usually give you a sense of scope and cost before we even come out.',
    labels: {
      phone: 'Phone & WhatsApp',
      email: 'Email',
      based: 'Based in',
      instagram: 'Instagram',
      name: 'Name',
      phoneField: 'Phone',
      city: 'City',
      service: 'What do you need?',
      details: 'Project details',
      detailsPlaceholder: 'Room size, current condition, finishes you like, rough timeline…',
      other: 'Something else',
    },
    submit: 'Send via WhatsApp',
    emailInstead: 'Email instead',
    note: 'Opens your WhatsApp (or email) with the details filled in — nothing is stored on this site.',
    messageIntro: 'Hi Palacio Woodwork, I would like a quote.',
    emailSubject: 'Quote request — Palacio Woodwork',
  },

  pageHero: {
    services: {
      eyebrow: 'Services',
      title: 'From a single stair run to the whole house',
      body: 'Cabinetry and fine carpentry are the specialty. Framing, tile, finishes and project management are how we make sure the specialty lands right.',
    },
    projects: {
      eyebrow: 'Our work',
      title: 'Built, installed and photographed on site',
      body: 'A selection of recent kitchens, baths, stairs and cabinetry. Nothing staged — these are jobs as they were handed back to the owners.',
    },
    about: {
      eyebrow: 'About',
      title: 'Building dreams with craftsmanship',
      body: 'A West Palm Beach woodworking and remodeling company, built around the belief that the details are the job.',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk about your project",
      body: 'Call, WhatsApp or send the form below. We answer our own phone.',
    },
  },

  about: {
    eyebrow: 'Who we are',
    heading: 'A woodworking shop that took on the whole house',
    paragraphs: [
      'Palacio Woodwork LLC started where the name says — in the wood. Cabinets, stairs, railings, moldings and built-ins, made to fit rooms that were never quite square to begin with.',
      'Homeowners kept asking the same question: could we handle the rest of it too? The tile, the framing, the plumbing rough-in, the whole kitchen instead of just the cabinets. So we built the crew to do it, and kept the carpenter’s standard as the measure for everything else.',
      'Today we run luxury kitchen and bathroom remodels, full interior and exterior renovations, outdoor structures and precise structural framing — across Palm Beach County, statewide in Florida, and on select projects nationwide.',
    ],
    factLabels: ['Based in', 'Specialty', 'Also does', 'Reach'],
    facts: [
      'West Palm Beach, FL',
      'Custom cabinetry & fine carpentry',
      'Full kitchen, bath & home renovations',
      'Palm Beach County · Florida · Nationwide',
    ],
  },

  social: {
    eyebrow: 'Follow along',
    heading: 'New work goes up on Instagram first',
    body: 'Progress shots, before-and-afters and the details that never make it into a finished-room photo. @palaciowoodwork is the fastest way to see what we are building this week — and the fastest way to reach us.',
    instagram: 'Follow on Instagram',
    facebook: 'Facebook',
  },

  footer: {
    services: 'Services',
    company: 'Company',
    getInTouch: 'Get in touch',
    quote: 'Request a quote',
    rights: 'All rights reserved.',
    disciplines: 'Kitchens · Cabinetry · Remodeling',
    tagline: 'Building dreams with craftsmanship',
  },

  notFound: {
    eyebrow: 'Error 404',
    heading: "This one didn't make the cut.",
    body: "The page you were looking for isn't here. Try the work gallery, or just call us — that usually works faster anyway.",
    back: 'Back home',
  },
};

// ---------------------------------------------------------------------------
// SPANISH
// ---------------------------------------------------------------------------

const es: Content = {
  meta: {
    home: {
      title: 'Palacio Woodwork | Gabinetes a Medida y Remodelación en West Palm Beach, FL',
      description:
        'Remodelación de cocinas y baños de lujo, gabinetes a medida y carpintería fina en West Palm Beach y todo Palm Beach County. Construimos sueños con artesanía.',
    },
    services: {
      title: 'Servicios | Cocinas, Gabinetes y Carpintería — Palacio Woodwork',
      description:
        'Remodelación de cocinas de lujo, baños tipo spa, gabinetes a medida, carpintería fina, terrazas y renovaciones completas en Palm Beach County, Florida.',
    },
    projects: {
      title: 'Nuestro Trabajo | Palacio Woodwork — West Palm Beach',
      description:
        'Cocinas, baños, escaleras, gabinetes exteriores y renovaciones completas construidas por Palacio Woodwork en Palm Beach County, Florida.',
    },
    about: {
      title: 'Nosotros | Palacio Woodwork LLC — West Palm Beach, FL',
      description:
        'Palacio Woodwork es una empresa de remodelación y carpintería fina en West Palm Beach que construye cocinas, gabinetes y renovaciones completas en el sur de Florida.',
    },
    contact: {
      title: 'Contacto | Solicita una Cotización — Palacio Woodwork, West Palm Beach',
      description:
        'Solicita una cotización para gabinetes a medida, remodelación de cocina o baño, o carpintería fina en West Palm Beach y Palm Beach County. Llama o escribe por WhatsApp al 561-332-9669.',
    },
    notFound: {
      title: 'Página no encontrada | Palacio Woodwork',
      description: 'Esa página no existe. Vuelve al inicio o contáctanos.',
    },
  },

  nav: [
    { label: 'Servicios', key: 'services' },
    { label: 'Proyectos', key: 'projects' },
    { label: 'Nosotros', key: 'about' },
    { label: 'Contacto', key: 'contact' },
  ],

  common: {
    home: 'Inicio',
    quote: 'Pide tu cotización',
    call: 'Llamar',
    whatsapp: 'WhatsApp',
    menu: 'Menú',
    skip: 'Ir al contenido',
    learnMore: 'Ver más',
    langLabel: 'Idioma',
    tabQuote: 'Cotizar',
    tabWork: 'Obras',
  },

  hero: {
    eyebrow: 'West Palm Beach, Florida',
    lines: ['Cocinas, gabinetes', 'y carpintería', 'hechos para durar.'],
    lede: 'Palacio Woodwork diseña, fabrica e instala las partes de tu casa que tocas todos los días — gabinetes, escaleras, molduras y remodelaciones completas — con la precisión de un mueble fino, no de una obra.',
    ctaPrimary: 'Pide tu cotización',
    ctaSecondary: 'Ver nuestro trabajo',
    chips: [
      'Gabinetes a medida y semi a medida',
      'Cocinas, baños y remodelaciones completas',
      'Palm Beach County · Todo Florida · Todo EE. UU.',
    ],
    whatsappLabel: 'Escríbenos',
    whatsappMessage: 'Hola Palacio Woodwork, quisiera una cotización para mi proyecto.',
  },

  services: {
    eyebrow: 'Servicios',
    heading: 'Lo que construimos',
    headingDetailed: 'Cada servicio, en detalle',
    lede: 'Un solo equipo para los gabinetes, la carpintería y todo lo que va alrededor — así el acabado calza con la estructura y nadie se echa la culpa.',
    items: [
      {
        slug: 'kitchens',
        image: IMAGES.kitchens,
        title: 'Cocinas de Lujo',
        alt: 'Cocina moderna con encimeras de mármol y gabinetes a medida',
        short: 'Gabinetes a medida, líneas limpias y acabados de alta gama, pensados para cómo cocinas de verdad.',
        body: 'Reconstruimos la cocina desde la distribución: replanteamos el flujo, fabricamos los gabinetes a las dimensiones exactas de tu espacio y rematamos cada canto para que se vea integrada, no simplemente instalada.',
        points: [
          'Gabinetes a medida y semi a medida',
          'Islas, despensas y paneles para electrodomésticos',
          'Encimeras, backsplash y azulejo',
          'Rediseño de distribución y planificación del espacio',
        ],
      },
      {
        slug: 'bathrooms',
        image: IMAGES.bathrooms,
        title: 'Baños Estilo Spa',
        alt: 'Baño renovado con ducha de mármol y vanity flotante de madera',
        short: 'Duchas amplias, mármol y piedra, y vanities hechos a la medida exacta del cuarto.',
        body: 'El baño es donde se nota la precisión. Nos encargamos de la impermeabilización, el despiece del azulejo, el vidrio, la iluminación y los vanities a medida para que el resultado se sienta amplio, luminoso y sin esfuerzo.',
        points: [
          'Duchas sin marco y a ras de piso',
          'Mármol, porcelanato y formato grande',
          'Vanities y almacenamiento a medida',
          'Iluminación y grifería moderna',
        ],
      },
      {
        slug: 'cabinetry',
        image: IMAGES.cabinetry,
        title: 'Gabinetes a Medida',
        alt: 'Gabinetes de nogal de piso a techo sin tiradores con horno integrado',
        short: 'A tus dimensiones, tu acabado y tu forma de guardar — no a una medida de catálogo.',
        body: 'Clósets, empotrados, muebles de entretenimiento, lavanderías, cocinas exteriores. Si guarda algo, lo construimos para que encaje en el espacio, en vez de forzar el espacio a una caja estándar.',
        points: [
          'Empotrados y muebles de entretenimiento',
          'Clósets y vestidores',
          'Almacenamiento para lavandería y entrada',
          'Gabinetes de exterior y patio',
        ],
      },
      {
        slug: 'carpentry',
        image: IMAGES.carpentry,
        title: 'Carpintería Fina y Molduras',
        alt: 'Escalones y contrahuellas de pino macizo recién instalados con barandal blanco',
        short: 'Escaleras, barandales y molduras — los detalles que hacen que una casa se sienta terminada.',
        body: 'Es el trabajo que le da el nombre a la empresa. Escalones y contrahuellas, pasamanos, molduras de corona, marcos, zócalos y paneles, cortados y ajustados en obra para que las uniones desaparezcan.',
        points: [
          'Escaleras, escalones y contrahuellas',
          'Pasamanos, balaustres y barandales',
          'Molduras de corona, marcos y zócalos',
          'Wainscoting y paneles de pared',
        ],
      },
      {
        slug: 'outdoor',
        image: IMAGES.outdoor,
        title: 'Terrazas, Patios y Pérgolas',
        alt: 'Terraza de madera con pérgola, barandal de cable y vista al bosque',
        short: 'Estructuras exteriores hechas para el sol de Florida, la brisa salina y las tormentas de la tarde.',
        body: 'Decks, patios a medida, pérgolas y cercas de madera — diseñados según cómo se mueven la luz y el clima en tu propiedad, y construidos con materiales que lo aguantan.',
        points: [
          'Decks y plataformas elevadas',
          'Pérgolas y estructuras de sombra',
          'Patios a medida y áreas sociales',
          'Cercas de madera y paneles de privacidad',
        ],
      },
      {
        slug: 'framing-renovations',
        image: IMAGES.framing,
        title: 'Estructura y Renovaciones Completas',
        alt: 'Estructura de madera interior en una renovación residencial en curso',
        short: 'Del enmarcado estructural al acabado final, gestionado como un solo proyecto.',
        body: 'Tomamos renovaciones de casa completa, desde la demolición y el enmarcado de precisión hasta la última moldura — un solo equipo responsable de la alineación, el cronograma y el acabado.',
        points: [
          'Enmarcado estructural de precisión',
          'Muros interiores y cambios de distribución',
          'Renovaciones completas interiores y exteriores',
          'Gestión del proyecto de principio a fin',
        ],
      },
    ],
  },

  craft: {
    eyebrow: 'Por qué Palacio',
    headingLead: 'La diferencia no está solo en los gabinetes.',
    headingEm: 'Está en los detalles.',
    lede: 'Colgar una caja en la pared lo hace cualquiera. Lo que separa una remodelación que se ve terminada de una que se ve solo instalada es la holgura de una puerta, cómo el escalón se encuentra con el zanquín, si la moldura de corona cierra limpia en la esquina. Esa es la parte que más nos importa.',
    stampLabel: 'Desde',
    pillars: [
      {
        title: 'Medido, no calculado a ojo',
        body: 'Cada gabinete, escalón y marco se corta para el cuarto donde va. Ninguna casa está a escuadra — la solución es medir, no rellenar con silicón.',
      },
      {
        title: 'Un solo equipo, de principio a fin',
        body: 'Los que levantan la estructura son los que dan el acabado. Nada se pierde en el traspaso entre oficios.',
      },
      {
        title: 'Obra limpia cada tarde',
        body: 'Tú sigues viviendo ahí. Protegemos los pisos, contenemos el polvo y dejamos el espacio transitable al final de cada día.',
      },
      {
        title: 'El alcance por escrito',
        body: 'Etapa por etapa, con lo que cuesta y de qué depende — para que el número del final sea el que acordaste.',
      },
    ],
  },

  work: {
    eyebrow: 'Nuestro trabajo',
    heading: 'Trabajo reciente',
    headingAll: 'Proyectos seleccionados',
    lede: 'Fotografiado en obra, a medio construir y terminado. Cada semana sube más a Instagram de lo que cabe aquí.',
    cta: 'Ver la galería completa',
    items: [
      {
        image: '/work/spa-bath.jpg',
        title: 'Baño Principal frente al Agua',
        alt: 'Bañera exenta contra una pared de mármol con ventanales de piso a techo',
        category: 'Baño',
      },
      {
        image: '/work/patio-cabinets.jpg',
        title: 'Cocina Exterior en Patio',
        alt: 'Gabinetes de cocina exterior con parrilla de acero inoxidable empotrada',
        category: 'Exterior',
      },
      {
        image: '/work/stairs.jpg',
        title: 'Escalera en Pino Macizo',
        alt: 'Escalones y contrahuellas de pino macizo recién instalados',
        category: 'Carpintería',
      },
      {
        image: '/work/kitchen-shaker.jpg',
        title: 'Cocina Shaker con Isla',
        alt: 'Gabinetes shaker blancos y encimeras de cuarzo en una cocina luminosa',
        category: 'Gabinetes',
      },
      {
        image: '/work/kitchen-gloss.jpg',
        title: 'Cocina Lineal en Alto Brillo',
        alt: 'Cocina lineal con gabinetes blancos de alto brillo y backsplash de piedra oscura',
        category: 'Cocina',
      },
      {
        image: '/work/framing.jpg',
        title: 'Estructura de Renovación Completa',
        alt: 'Enmarcado interior de madera de precisión durante una renovación completa',
        category: 'Estructura',
      },
    ],
  },

  process: {
    eyebrow: 'Cómo trabajamos',
    heading: 'Cuatro pasos, sin sorpresas',
    lede: 'Casi todo el estrés de una remodelación viene de no saber qué sigue. Esta es la secuencia completa.',
    steps: [
      {
        step: '01',
        title: 'Lo conversamos',
        body: 'Llámanos, escríbenos o mándanos fotos del espacio. Primero escuchamos y te decimos con honestidad qué vale la pena hacer y qué no.',
      },
      {
        step: '02',
        title: 'Medimos y diseñamos',
        body: 'Medimos en sitio, resolvemos la distribución y acordamos materiales y acabados antes de pedir nada.',
      },
      {
        step: '03',
        title: 'Cotización detallada',
        body: 'Recibes el alcance escrito etapa por etapa, para que sepas qué pasa cuándo y cuánto cuesta cada parte.',
      },
      {
        step: '04',
        title: 'Construimos y terminamos',
        body: 'Un solo equipo, de principio a fin. Mantenemos la obra limpia, te mantenemos al día y te la entregamos terminada.',
      },
    ],
  },

  areas: {
    eyebrow: 'Dónde trabajamos',
    heading: 'Con base en West Palm Beach. En casa en todo Palm Beach County.',
    note: 'La mayoría de nuestros proyectos quedan a poca distancia del taller, y así mantenemos al equipo en obra de forma constante. Para remodelaciones completas también viajamos por todo Florida, y tomamos proyectos seleccionados en todo Estados Unidos.',
    footerLabel: 'Cobertura',
    footerNote: 'y todo el estado de Florida',
    list: [
      'West Palm Beach',
      'Palm Beach Island',
      'Jupiter',
      'Delray Beach',
      'Boca Raton',
      'Wellington',
      'Palm Beach Gardens',
      'Miami',
    ],
  },

  faq: {
    eyebrow: 'Preguntas',
    heading: 'Antes de llamarnos',
    lede: 'Lo que más nos preguntan. Si la tuya no está aquí, levanta el teléfono — preferimos contestarte a que te quedes adivinando.',
    items: [
      {
        q: '¿Qué zonas cubren?',
        a: 'Nuestra base es West Palm Beach y la mayor parte del trabajo está en Palm Beach County — Palm Beach Island, Jupiter, Delray Beach, Boca Raton y Miami. También hacemos remodelaciones completas en todo Florida y proyectos seleccionados a nivel nacional.',
      },
      {
        q: '¿Solo hacen gabinetes o también la remodelación completa?',
        a: 'Las dos cosas. Los gabinetes y la carpintería fina son nuestra especialidad, pero hacemos regularmente renovaciones completas de cocina, baño y casa entera — estructura, azulejo, acabados y todos los oficios intermedios.',
      },
      {
        q: '¿Los gabinetes son a medida o de línea?',
        a: 'Hacemos ambos. A medida se fabrican con tus dimensiones y acabado exactos; semi a medida te da diseños modernos y acabados premium en menos tiempo. Te diremos cuál tiene sentido de verdad para tu espacio y tu presupuesto.',
      },
      {
        q: '¿Cómo pido una cotización?',
        a: 'Lo más rápido es llamar o escribir por WhatsApp al 561-332-9669 con unas fotos del espacio y una idea general de lo que quieres. Vamos, medimos y armamos el alcance por escrito.',
      },
      {
        q: '¿Cuánto tarda una cocina o un baño?',
        a: 'Depende del alcance y de los tiempos de entrega de los materiales, que confirmamos antes de empezar. Lo que sí garantizamos es un cronograma por escrito desde el inicio y un aviso apenas algo en obra lo cambie.',
      },
    ],
  },

  testimonials: { eyebrow: 'Clientes', heading: 'En sus palabras' },

  band: {
    title: '¿Listo para empezar?',
    body: 'Mándanos fotos del espacio y te decimos con honestidad qué implica.',
    servicesTitle: '¿No sabes cuál necesitas?',
    servicesBody:
      'Descríbenos el espacio y te decimos qué requiere de verdad — incluso cuando la respuesta es menos de lo que esperabas.',
    projectsTitle: '¿Quieres algo así?',
    projectsBody: 'Mándanos una foto de tu espacio y cuéntanos qué tienes en mente.',
  },

  contact: {
    eyebrow: 'Contacto',
    heading: 'Cuéntanos del espacio',
    lede: 'Mándanos unas fotos y medidas aproximadas y por lo general podemos darte una idea del alcance y el costo antes incluso de ir.',
    labels: {
      phone: 'Teléfono y WhatsApp',
      email: 'Correo',
      based: 'Con base en',
      instagram: 'Instagram',
      name: 'Nombre',
      phoneField: 'Teléfono',
      city: 'Ciudad',
      service: '¿Qué necesitas?',
      details: 'Detalles del proyecto',
      detailsPlaceholder: 'Tamaño del espacio, estado actual, acabados que te gustan, fechas aproximadas…',
      other: 'Otra cosa',
    },
    submit: 'Enviar por WhatsApp',
    emailInstead: 'Mejor por correo',
    note: 'Abre tu WhatsApp (o tu correo) con los datos ya escritos — este sitio no guarda nada.',
    messageIntro: 'Hola Palacio Woodwork, quisiera una cotización.',
    emailSubject: 'Solicitud de cotización — Palacio Woodwork',
  },

  pageHero: {
    services: {
      eyebrow: 'Servicios',
      title: 'Desde una escalera hasta la casa completa',
      body: 'Los gabinetes y la carpintería fina son la especialidad. La estructura, el azulejo, los acabados y la gestión del proyecto son cómo nos aseguramos de que esa especialidad quede bien.',
    },
    projects: {
      eyebrow: 'Nuestro trabajo',
      title: 'Construido, instalado y fotografiado en obra',
      body: 'Una selección de cocinas, baños, escaleras y gabinetes recientes. Nada montado — así se entregaron a sus dueños.',
    },
    about: {
      eyebrow: 'Nosotros',
      title: 'Construyendo sueños con artesanía',
      body: 'Una empresa de carpintería y remodelación en West Palm Beach, construida sobre la idea de que los detalles son el trabajo.',
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Hablemos de tu proyecto',
      body: 'Llama, escribe por WhatsApp o usa el formulario. Contestamos nosotros mismos.',
    },
  },

  about: {
    eyebrow: 'Quiénes somos',
    heading: 'Un taller de carpintería que terminó tomando la casa entera',
    paragraphs: [
      'Palacio Woodwork LLC empezó donde dice el nombre — en la madera. Gabinetes, escaleras, barandales, molduras y empotrados, hechos para encajar en cuartos que nunca estuvieron del todo a escuadra.',
      'Los clientes seguían preguntando lo mismo: ¿pueden encargarse también del resto? El azulejo, la estructura, la instalación hidráulica, la cocina completa en vez de solo los gabinetes. Así que armamos el equipo para hacerlo, y mantuvimos el estándar del carpintero como medida para todo lo demás.',
      'Hoy hacemos remodelaciones de cocinas y baños de lujo, renovaciones completas interiores y exteriores, estructuras exteriores y enmarcado estructural de precisión — en Palm Beach County, en todo Florida y en proyectos seleccionados a nivel nacional.',
    ],
    factLabels: ['Con base en', 'Especialidad', 'También hacemos', 'Alcance'],
    facts: [
      'West Palm Beach, FL',
      'Gabinetes a medida y carpintería fina',
      'Renovación completa de cocinas, baños y casas',
      'Palm Beach County · Florida · Todo EE. UU.',
    ],
  },

  social: {
    eyebrow: 'Síguenos',
    heading: 'El trabajo nuevo sale primero en Instagram',
    body: 'Fotos de avance, antes y después, y los detalles que nunca salen en una foto del cuarto terminado. @palaciowoodwork es la forma más rápida de ver qué estamos construyendo esta semana — y la más rápida de contactarnos.',
    instagram: 'Síguenos en Instagram',
    facebook: 'Facebook',
  },

  footer: {
    services: 'Servicios',
    company: 'Empresa',
    getInTouch: 'Contacto',
    quote: 'Pide tu cotización',
    rights: 'Todos los derechos reservados.',
    disciplines: 'Cocinas · Gabinetes · Remodelación',
    tagline: 'Construyendo sueños con artesanía',
  },

  notFound: {
    eyebrow: 'Error 404',
    heading: 'Esta no pasó el corte.',
    body: 'La página que buscabas no está aquí. Prueba con la galería de trabajos, o simplemente llámanos — suele ser más rápido.',
    back: 'Volver al inicio',
  },
};

// ---------------------------------------------------------------------------

export const CONTENT: Record<Lang, Content> = { en, es };

export const useContent = (lang: Lang): Content => CONTENT[lang];
