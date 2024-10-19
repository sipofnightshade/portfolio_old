import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    fontFamily: {
      sans: ['Onest Variable', 'sans-serif']
    },
    extend: {
      colors: {
        brand: '#BCF000',
        'brand-dark': '#A0CC00',
        black: '#1A1A1A'
      }
    }
  },

  plugins: []
} as Config;
