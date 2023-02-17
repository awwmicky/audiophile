import { createGlobalStyle } from 'styled-components'

const BaseFonts = createGlobalStyle`
  @font-face {
    font-family: 'Manrope';
    font-display: swap;
    src: url('/assets/fonts/Manrope-VariableFont_wght.ttf')  format('truetype');
    /* src: url('/assets/fonts/Manrope-Regular.ttf')  format('truetype'); */
  }
`

export { BaseFonts }
