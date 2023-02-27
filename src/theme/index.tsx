import type { FCC } from 'react'
import { NextUIProvider, useSSR } from '@nextui-org/react'
// import { GlobalStyles } from 'twin.macro'
import * as Global from './global'

const AppThemeProvider: FCC = ({ children }) => {
	const { isBrowser } = useSSR()
	if (!isBrowser) return null

	return (
		<>
			<NextUIProvider>
				{/* <GlobalStyles /> */}
				<Global.BaseReset />
				<Global.BaseFonts />
				{/* <Global.BaseTypography /> */}
				<Global.BaseWebAccessory />
				{ children }
			</NextUIProvider>
		</>
	)
}

export { AppThemeProvider }
