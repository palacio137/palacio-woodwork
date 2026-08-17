export type Lang = 'en' | 'es';

export const LANGS: Lang[] = ['en', 'es'];
export const DEFAULT_LANG: Lang = 'en';

export type RouteKey = 'home' | 'services' | 'projects' | 'about' | 'contact';

/** Canonical path for every page in every language. */
export const ROUTES: Record<RouteKey, Record<Lang, string>> = {
  home: { en: '/', es: '/es/' },
  services: { en: '/services/', es: '/es/servicios/' },
  projects: { en: '/projects/', es: '/es/proyectos/' },
  about: { en: '/about/', es: '/es/nosotros/' },
  contact: { en: '/contact/', es: '/es/contacto/' },
};

const normalize = (p: string) => (p.endsWith('/') ? p : `${p}/`);

/** Which language is this URL in? */
export function getLang(pathname: string): Lang {
  const p = normalize(pathname);
  return p === '/es/' || p.startsWith('/es/') ? 'es' : 'en';
}

/** Path for a page in a given language. */
export function path(key: RouteKey, lang: Lang): string {
  return ROUTES[key][lang];
}

/** Which page is this URL, if any? */
export function getRouteKey(pathname: string): RouteKey | null {
  const p = normalize(pathname);
  for (const key of Object.keys(ROUTES) as RouteKey[]) {
    if (ROUTES[key].en === p || ROUTES[key].es === p) return key;
  }
  return null;
}

/** The same page in the other language — used by the language switcher. */
export function counterpart(pathname: string, lang: Lang): string {
  const key = getRouteKey(pathname);
  return key ? ROUTES[key][lang] : ROUTES.home[lang];
}
