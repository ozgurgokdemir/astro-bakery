import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    icon({
      include: {
        heroicons: ['*'],
        fe: ['*'],
      },
    }),
  ],
});
