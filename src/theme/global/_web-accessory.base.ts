import { createGlobalStyle } from 'styled-components'
import { theme } from 'twin.macro'

const BaseWebAccessory = createGlobalStyle({
  'body': {
    '-webkit-tap-highlight-color': theme`colors.orange.500`,
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    // '-webkit-text-size-adjust': '100%',
    // 'font-feature-settings': 'normal',
    'text-rendering': 'optimizeSpeed',
    'scrollbar-width': '0.75rem',
    'scrollbar-gutter': 'stable both-edges',
    'scrollbar-color': `${ theme`colors.orange.500` } transparent`,
    // 'user-select': 'none',
    // 'user-drag': 'none',
  },

  '::marker,\
  ::selection': {
    color: theme`colors.white`,
    backgroundColor: `${ theme`colors.orange.500` } !important`,
  },
  '::-webkit-resizer,\
  ::-webkit-scrollbar-corner': {
    backgroundColor: 'transparent',
  },

  '::-webkit-scrollbar': {
    width: '0.75rem',
    backgroundColor: 'transparent',
  },
  '::-webkit-scrollbar-track': {
    // boxShadow: 'inset 0 0 0.3em rgba(0, 0, 0, 0.3)',
  },
  '::-webkit-scrollbar-thumb': {
    // outline: '1px solid slategrey',
    borderRadius: '1.5em',
    border: '0.15em solid transparent',
    backgroundColor: `${ theme`colors.orange.300` } !important`,
    'background-clip': 'content-box !important',
  },
  '::-webkit-scrollbar-thumb:hover': {
    backgroundColor: `${ theme`colors.orange.500` } !important`,
  },
  '::-webkit-scrollbar-thumb:active': {
    backgroundColor: `${ theme`colors.orange.800` } !important`,
  },
})

export { BaseWebAccessory }
