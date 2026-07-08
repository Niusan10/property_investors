// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // ⚠️ IMPORTANTE: cambia esta URL por tu dominio final cuando lo tengas
  // (ej. "https://propertyinvestors.es"). Se usa para el sitemap y el SEO.
  site: 'https://property-investors.vercel.app',
  integrations: [sitemap()]
});