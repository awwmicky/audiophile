import type { FCC } from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { GlobalStyles } from 'twin.macro'
import * as Global from './global'

const AppThemeProvider: FCC = ({ children }) => (
  <>
		<NextUIProvider>
			<GlobalStyles />
			<Global.BaseReset />
			<Global.BaseFonts />
			{/* <Global.BaseTypography /> */}
			<Global.BaseWebAccessory />
			{ children }
		</NextUIProvider>
  </>
)

export { AppThemeProvider }
