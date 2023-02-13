// import 'twin.macro'
import styledImport, { type CSSProp, css as cssImport } from 'styled-components'

// 1
declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport
  const css: typeof cssImport
}

// 2
declare module 'react' {
  // The css prop
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp
    tw?: string
  }
}

// 3
// declare global {
//   namespace JSX {
//     interface IntrinsicAttributes<T> extends DOMAttributes<T> {
//       as?: string | Element
//     }
//   }
// }
