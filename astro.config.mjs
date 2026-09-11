// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// TODO: update `site` once the GitHub username is confirmed.
// - username.github.io repo  -> site: 'https://<username>.github.io'
// - any other repo name      -> also set base: '/<repo-name>'
export default defineConfig({
  site: 'https://REPLACE_ME.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});