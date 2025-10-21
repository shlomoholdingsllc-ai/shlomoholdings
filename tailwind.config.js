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
					400: '#60A5FA',
					500: '#3B82F6',
					600: '#2563EB',
					700: '#1D4ED8',
					900: '#1E3A8A',
				},
				neutral: {
					50: '#F9FAFB',
					100: '#F3F4F6',
					200: '#E5E7EB',
					400: '#9CA3AF',
					600: '#4B5563',
					700: '#374151',
					800: '#1F2937',
					900: '#111827',
				},
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
				'gradient-hero': 'linear-gradient(135deg, rgba(30, 58, 138, 0.7) 0%, rgba(59, 130, 246, 0.7) 50%, rgba(96, 165, 250, 0.7) 100%)',
				'gradient-subtle': 'linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 100%)',
			},
			boxShadow: {
				sm: '0 1px 3px rgba(0, 0, 0, 0.06)',
				md: '0 4px 12px rgba(0, 0, 0, 0.08)',
				lg: '0 12px 24px rgba(0, 0, 0, 0.12)',
				xl: '0 20px 40px rgba(59, 130, 246, 0.15)',
				'2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
			},
			borderRadius: {
				sm: '6px',
				md: '12px',
				lg: '16px',
				xl: '24px',
				'2xl': '32px',
				full: '9999px',
			},
			backdropBlur: {
				glass: '16px',
				'glass-strong': '24px',
			},
			transitionDuration: {
				'200': '200ms',
				'300': '300ms',
				'400': '400ms',
				'600': '600ms',
			},
			scale: {
				'95': '0.95',
				'98': '0.98',
				'102': '1.02',
				'105': '1.05',
				'110': '1.10',
				'115': '1.15',
			},
			fontWeight: {
				light: '300',
				extrabold: '800',
			},
			letterSpacing: {
				tighter: '-0.02em',
			},
			lineHeight: {
				snug: '1.3',
			},
			keyframes: {
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'bounce-slow': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				shake: {
					'0%, 100%': { transform: 'translateX(0)' },
					'25%': { transform: 'translateX(10px)' },
					'75%': { transform: 'translateX(-10px)' },
				},
			},
			animation: {
				'fade-in-up': 'fade-in-up 0.4s ease-out',
				'bounce-slow': 'bounce-slow 2s infinite',
				shake: 'shake 0.3s ease-in-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}