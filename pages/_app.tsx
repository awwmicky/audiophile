import type { AppProps } from 'next/app'
import { AppThemeProvider } from '@/src/theme'
import 'tailwindcss/tailwind.css'

export default function App ({ Component, pageProps }: AppProps) {
  return (
		<>
			<AppThemeProvider>
				<Component { ...pageProps } />
			</AppThemeProvider>
		</>
	)
}
