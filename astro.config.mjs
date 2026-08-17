import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://palaciowoodwork.com',
  output: 'static',
  build: {
    assets: '_assets',
  },
});
