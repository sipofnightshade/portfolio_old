import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors:{
				brand:'#FF3E00',
				'brand-dark':'#B22B00',
				'brand-light':'#FF784D',
				black:'#0D0C0C'
			}
		}
	},

	plugins: []
} as Config;
