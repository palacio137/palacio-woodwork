import type { APIRoute } from 'astro';
import { siteUrl } from '../data/site';
import { ROUTES, LANGS, type RouteKey } from '../i18n/routes';

const PRIORITY: Record<RouteKey, string> = {
  home: '1.0',
  services: '0.9',
  contact: '0.9',
  projects: '0.8',
  about: '0.7',
};

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const keys = Object.keys(ROUTES) as RouteKey[];

  const entries = keys.flatMap((key) =>
    LANGS.map((lang) => {
      const alternates = LANGS.map(
        (alt) =>
          `    <xhtml:link rel="alternate" hreflang="${alt}" href="${new URL(ROUTES[key][alt], siteUrl).href}" />`
      ).join('\n');

      return `  <url>
    <loc>${new URL(ROUTES[key][lang], siteUrl).href}</loc>
${alternates}
    <lastmod>${lastmod}</lastmod>
    <priority>${PRIORITY[key]}</priority>
  </url>`;
    })
  );

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
