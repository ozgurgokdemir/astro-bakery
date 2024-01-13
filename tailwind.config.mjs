import { fontFamily } from 'tailwindcss/defaultTheme';

const FONT_SIZE = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
};

const LINE_HEIGHT = {
  heading: 1.25,
  body: 1.6,
};

const BRAND_COLOR = '6deg 90% 16%';

const BG_COLOR = '46deg 24% 93%';

const FILL_COLOR = '186deg 90% 16%';

const SHADOW = '0 0 1rem 0';

const NOISE_URL_DENSE =
  "data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E";

const NOISE_URL_LOOSE =
  "data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E";

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      primary: ['Merriweather', ...fontFamily.serif],
      secondary: ['Roboto', ...fontFamily.sans],
      brand: ['Pacifico', ...fontFamily.serif],
    },
    fontWeight: {
      regular: 400,
      bold: 700,
    },
    fontSize: {
      ...FONT_SIZE,
      'body-xs': [FONT_SIZE['xs'], LINE_HEIGHT['body']],
      'body-sm': [FONT_SIZE['sm'], LINE_HEIGHT['body']],
      'body-md': [FONT_SIZE['md'], LINE_HEIGHT['body']],
      'body-lg': [FONT_SIZE['lg'], LINE_HEIGHT['body']],
      'body-xl': [FONT_SIZE['xl'], LINE_HEIGHT['body']],
      'heading-xl': [FONT_SIZE['xl'], LINE_HEIGHT['heading']],
      'heading-2xl': [FONT_SIZE['2xl'], LINE_HEIGHT['heading']],
      'heading-3xl': [FONT_SIZE['3xl'], LINE_HEIGHT['heading']],
      'heading-4xl': [FONT_SIZE['4xl'], LINE_HEIGHT['heading']],
      'heading-5xl': [FONT_SIZE['5xl'], LINE_HEIGHT['heading']],
      'heading-6xl': [FONT_SIZE['6xl'], LINE_HEIGHT['heading']],
    },
    lineHeight: LINE_HEIGHT,
    colors: {
      bg: `hsl(${BG_COLOR} / <alpha-value>)`,
    },
    backgroundColor: {
      DEFAULT: `hsl(${BG_COLOR} / <alpha-value>)`,
      surface: 'hsl(46deg 24% 89% / <alpha-value>)',
      fill: `hsl(${FILL_COLOR} / <alpha-value>)`,
      'fill-hover': 'hsl(187deg 54% 25% / <alpha-value>)',
      'fill-brand': `hsl(${BRAND_COLOR} / <alpha-value>)`,
      'fill-brand-hover': 'hsl(6deg 54% 25% / <alpha-value>)',
    },
    textColor: {
      DEFAULT: 'hsl(60deg 2% 9% / <alpha-value>)',
      secondary: 'hsl(60deg 2% 37% / <alpha-value>)',
      brand: `hsl(${BRAND_COLOR} / <alpha-value>)`,
      fill: `hsl(${FILL_COLOR} / <alpha-value>)`,
      'on-bg-fill': 'hsl(0deg 33% 99% / <alpha-value>)',
      'on-bg-fill-brand': 'hsl(0deg 33% 99% / <alpha-value>)',
    },
    borderColor: {
      primary: 'hsl(46deg 24% 81% / <alpha-value>)',
      secondary: 'hsl(46deg 24% 85% / <alpha-value>)',
      brand: `hsl(${BRAND_COLOR} / <alpha-value>)`,
      bg: `hsl(${BG_COLOR} / <alpha-value>)`,
    },
    boxShadow: {
      'of-bg-surface': `${SHADOW} hsl(45deg 12% 80% / 0.75)`,
      'of-bg-fill': `${SHADOW} hsl(${FILL_COLOR} / 0.1)`,
      'of-bg-fill-brand': `${SHADOW} hsl(${BRAND_COLOR} / 0.1)`,
      none: '0 0 #0000',
    },
    dropShadow: {
      DEFAULT: '0 0 1rem hsl(45deg 12% 80% / 0.75)',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '2rem',
      },
    },
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3 / 4',
      },
      backgroundImage: {
        'noise-dense': `url("${NOISE_URL_DENSE}")`,
        'noise-loose': `url("${NOISE_URL_LOOSE}")`,
      },
    },
  },
  plugins: [],
};
