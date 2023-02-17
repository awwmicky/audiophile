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
  },
  /*  */
  'input[type=number],\
  input[type=number]::-webkit-outer-spin-button,\
  input[type=number]::-webkit-inner-spin-button': {
    '-moz-appearance': 'textfield',
    '-webkit-appearance': 'none',
    margin: 0,
  },
})

export { BaseReset }
