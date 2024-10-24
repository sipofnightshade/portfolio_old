import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      },
      center: true
    },
    screens: {
      nn: '380px',
      xs: '460px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    fontFamily: {
      sans: ['Onest Variable', 'sans-serif']
    },
    extend: {
      colors: {
        surface: '#F1F3F3',
        overlay: '#D7DBDA',
        primary: '#15171E',
        muted: '#929599',
        frame: '#49504F',
        outline: '#A1AAA9',
        brand: '#C7E600',
        accent: '#14B8B5',
        // dark theme
        'surface-d': '#121615',
        'overlay-d': '#262B2C',
        'primary-d': '#D5DDDA',
        'muted-d': '#7B8182',
        'frame-d': '#535F5D',
        'outline-d': '#2E3836',
        'brand-d': '#ACC700',
        'accent-d': '#119C9A'
      }
    }
  },

  plugins: []
} as Config;
