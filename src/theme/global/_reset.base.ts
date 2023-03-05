import { createGlobalStyle } from 'styled-components'
import { theme } from 'twin.macro'

const BaseReset = createGlobalStyle({
  'html, body, #__next': {
    height: '100%',
  },
	'body': {
		font: `${ 400 } ${ 0.9375 }rem/${ 25 }px ${ theme`fontFamily.default` }`,
	},
  '#__next>div': {
    minHeight: '100%',
    display: 'flex',
    flexFlow: 'column',
  },
  'main': {
    flex: '1 1 auto',
		display: 'flex',
    flexFlow: 'column',
		gap: '7rem',
  },
	'h1, h2, h3, h4, h5, h6': {
		margin: '0',
	},
	'ul, ol, li': {
		margin: '0',
	},
  /*  */
  'input[type=number],\
  input[type=number]::-webkit-outer-spin-button,\
  input[type=number]::-webkit-inner-spin-button': {
    '-moz-appearance': 'textfield',
    '-webkit-appearance': 'none',
    margin: 0,
  },
	'#nextui-modal': {
		'&>.nextui-backdrop': {
			overflow: 'hidden',
			width: `${ 100 }%`,
			height: `${ 100 }%`,
			inset: 'unset',
			top: `${ 0 }%`,
			left: 0,
			'&>.nextui-backdrop-layer': {
				inset: 'unset',
				top: `${ 80 }px`,
				left: 0,
			},
			'&>.nextui-backdrop-content': {
				cursor: 'initial',
				marginBlock: 'auto',
				position: 'fixed',
				inset: '80px 0 auto 0',
			},
		},
	}
})

export { BaseReset }
