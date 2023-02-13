import { createGlobalStyle } from 'styled-components'

const BaseReset = createGlobalStyle({
  'html, body': {
    height: '100%',
  },
  '#__next': {
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
