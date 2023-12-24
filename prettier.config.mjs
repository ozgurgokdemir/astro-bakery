/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cva', 'cx'],
};
