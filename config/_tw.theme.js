const defaultTheme = require('tailwindcss/defaultTheme')

const theme = {
	...defaultTheme,

  container: {
		padding: {
			DEFAULT: '1.25em',
			'2xl': '1.25em',
		},
	},

  extend: {
		colors: {
			dominant: {
				1: 'hsl(0, 0%, 100%)',
				2: 'hsl(0, 0%, 98%)',
				3: 'hsl(0, 0%, 95%)',
				4: '	hsl(0, 0%, 81%)',
			},
			complement: {
				1: 'hsl(0, 0%, 0%)',
				2: 'hsl( 0, 0%, 6%)',
				3: '	hsl(0, 0%, 10%)',
				4: 'hsl(0, 0%, 30%)',
			},
			accent: {
				1: 'hsl(22, 65%, 57%)',
				2: 'hsl(21, 94%, 75%)',
			},
		},
		fontFamily: {
			default: [ 'Manrope', defaultTheme.fontFamily.sans ],
		},
		// fontSize: {
		// 	'mobile': '14px',
		// 	'normal': '16px',
		// 	h1: '1.5rem',
		// 	h2: '1.175rem',
		// 	h3: '1rem',
		// 	h4: '1rem',
		// 	h5: '1rem',
		// 	h6: '1rem',
		// 	p : '0.8rem',
		// 	li: '1rem',
		// 	a : '1rem',
		// },
	},
}

module.exports = theme
