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
		fontFamily: {
			default: defaultTheme.fontFamily,
			heading: [ 'Manrope', defaultTheme.fontFamily.sans ],
			body: [ 'Manrope', defaultTheme.fontFamily.sans ],
		},
		fontSize: {
			'mobile': '14px',
			'normal': '16px',
			h1: '1.5rem',
			h2: '1.175rem',
			h3: '1rem',
			h4: '1rem',
			h5: '1rem',
			h6: '1rem',
			p : '0.8rem',
			li: '1rem',
			a : '1rem',
		},
	},
}

module.exports = theme
