import type { APIRoute } from 'astro';
import { siteUrl } from '../data/site';

const routes = [
  { path: '/', priority: '1.0' },
  { path: '/services', priority: '0.9' },
  { path: '/projects', priority: '0.8' },
  { path: '/about', priority: '0.7' },
  { path: '/contact', priority: '0.9' },
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${new URL(route.path, siteUrl).href}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
