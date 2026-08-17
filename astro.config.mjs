import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://palacio-woodwork.pages.dev',
  output: 'static',
  build: {
    assets: '_assets',
  },
});
