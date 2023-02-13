import { createGlobalStyle } from 'styled-components'

const BaseFonts = createGlobalStyle`
  @font-face {
    font-family: 'Manrope';
    font-display: swap;
    src: url('/assets/Manrope-Regular.ttf')  format('truetype');
  }
`

export { BaseFonts }
