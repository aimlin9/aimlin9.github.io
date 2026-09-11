// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// If this site instead lives in a project repo (not aimlin9.github.io),
// also set base: '/<repo-name>'.
export default defineConfig({
  site: 'https://aimlin9.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});