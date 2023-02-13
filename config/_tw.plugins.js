const plugin = require('tailwindcss/plugin')

const isDev = process.env.NODE_ENV === 'development'

const testStyle = ({ addComponents }) => {
	addComponents({
		'.s1, .s2, .s2 > *, .s3, .s3 *': { boxShadow: 'inset 0 0 5px silver' },
		'.t1, .t2, .t2 > *, .t3, .t3 *': { transition: 'all 0.3s linear' },
	})
}

// const resetStyle = ({ addBase }) => {
// 	addBase({
// 		'input[type=number],\
// 		input[type=number]::-webkit-outer-spin-button,\
// 		input[type=number]::-webkit-inner-spin-button': {
// 			'-moz-appearance': 'textfield',
// 			'-webkit-appearance': 'none',
// 			margin: 0,
// 		},
// 	})
// }

const plugins = [
	isDev && plugin(testStyle),
	// plugin(resetStyle),
]

module.exports = plugins
