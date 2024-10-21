import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
  theme: {
    fontFamily: {
      sans: ['Onest Variable', 'sans-serif']
    },
    extend: {
      colors: {
        surface: '#E4E7E7',
        overlay: '#D7DBDA',
        primary: '#15171E',
        muted: '#929599',
        frame: '#49504F',
        outline: '#788483',
        brand: '#C7E600',
        accent: '#14B8B5',
        // dark theme
        'surface-d': '#121615',
        'overlay-d': '#262B2C',
        'primary-d': '#D5DDDA',
        'muted-d': '#7B8182',
        'frame-d': '#535F5D',
        'outline-d': '#5C706D',
        'brand-d': '#ACC700',
        'accent-d': '#119C9A'
      }
    }
  },

  plugins: []
} as Config;
