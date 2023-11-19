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
        heroicons: ['arrow-long-right-20-solid'],
        fe: ['*'],
      },
    }),
  ],
});
