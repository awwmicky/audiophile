import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { AppStoreProvider } from '@/src/store'
import { AppThemeProvider } from '@/src/theme'
import 'tailwindcss/tailwind.css'

export default function App ({ Component, pageProps }: AppProps) {
  return (
		<>
			<Toaster />
			<AppStoreProvider>
				<AppThemeProvider>
					<Component { ...pageProps } />
				</AppThemeProvider>
			</AppStoreProvider>
		</>
	)
}
