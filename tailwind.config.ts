import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    fontFamily: {
      sans: ['Onest Variable', 'sans-serif']
    },
    extend: {
      colors: {
        brand: '#C8F000',
        'brand-dark': '#AACC00',
        black: '#09090B'
      }
    }
  },

  plugins: []
} as Config;
