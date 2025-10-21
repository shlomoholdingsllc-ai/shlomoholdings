/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				primary: {
					50: '#EFF6FF',
					100: '#DBEAFE',
					500: '#3B82F6',
					700: '#1D4ED8',
					900: '#1E3A8A',
				},
				neutral: {
					50: '#F9FAFB',
					100: '#F3F4F6',
					200: '#E5E7EB',
					600: '#4B5563',
					800: '#1F2937',
					900: '#111827',
				},
			},
			boxShadow: {
				sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
				card: '0 4px 12px rgba(0, 0, 0, 0.08)',
				cardHover: '0 12px 24px rgba(59, 130, 246, 0.12)',
				modal: '0 20px 40px rgba(0, 0, 0, 0.15)',
			},
			borderRadius: {
				sm: '4px',
				md: '8px',
				lg: '12px',
				xl: '16px',
				full: '9999px',
			},
			transitionDuration: {
				'200': '200ms',
				'250': '250ms',
				'300': '300ms',
			},
			transitionTimingFunction: {
				'default': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
			},
			scale: {
				'98': '0.98',
				'99': '0.99',
				'101': '1.01',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}