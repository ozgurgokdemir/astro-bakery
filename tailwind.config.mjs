import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        logo: ['Pacifico', ...fontFamily.serif],
        primary: ['var(--font-primary)', ...fontFamily.serif],
        secondary: ['var(--font-secondary)', ...fontFamily.sans],
      },
      colors: {
        neutral: 'hsl(var(--color-neutral) / <alpha-value>)',
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
        surface: 'hsl(var(--color-surface) / <alpha-value>)',
        'surface-container':
          'hsl(var(--color-surface-container) / <alpha-value>)',
        outline: 'hsl(var(--color-outline) / <alpha-value>)',
        divider: 'hsl(var(--color-divider) / <alpha-value>)',
      },
      lineHeight: {
        relaxed: '1.75',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          lg: '2rem',
        },
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      boxShadow: {
        soft: '0px 0px 16px 0px rgba(0, 0, 0, 0.10)',
        hard: '0px 0px 16px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
