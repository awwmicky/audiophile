import { Children } from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
// import { CssBaseline } from '@nextui-org/react'
import { ServerStyleSheet } from 'styled-components'

const isProd = process.env.NODE_ENV === 'production'

const meta = {
	title: isProd ? 'Audiophile' : '𝚆𝙴𝙱 𝙰𝙿𝙿 | 🐜',
	description: 'E-Commerce App that sells music products',
	keywords: 'vercel, typescript, next-js, react, next-ui, tailwindcss, twin-macro, styled-components, framer-motion, zustand, react-hook-form, contentful, stripe',
	author: 'Michael Fred Alvarez; @awwmicky',
	image: isProd ? '/' : '/_',
	alt: 'audiophile - E-Commerce App',
	link: 'https://audiophile-app.vercel.app/',
}

const ogContent = [
	{ property: 'og:type', content: 'website' },
	{ property: 'og:image:alt', content: meta.alt },
	{ property: 'og:site_name', content: meta.link.substring(8) },
	{ property: 'og:url', content: meta.link },
	{ property: 'og:image', content: `${ meta.image }thumbnail.png` },
	{ property: 'og:title', content: meta.title },
	{ property: 'og:description', content: meta.description },
]

const altOgContent = [
	{ name: 'twitter:card', content: 'summary_large_image' },
	{ name: 'twitter:image:alt', content: meta.alt },
	{ property: 'twitter:domain', content: meta.link.substring(8) },
	{ property: 'twitter:url', content: meta.link },
	{ name: 'twitter:image', content: `${ meta.image }thumbnail.png` },
	{ name: 'twitter:title', content: meta.title },
	{ name: 'twitter:description', content: meta.description },
]

class Documents extends Document {
	static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => originalRenderPage({
				enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
			})

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: Children.toArray(
          <>
            { initialProps.styles }
            { sheet.getStyleElement() }
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render () {
    return (
      <Html lang="en">
				<title>{ meta.title }</title>
        <Head>
          {/* { CssBaseline.flush() } */}

					{/* <meta charset="utf-8" /> */}
					{/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
					<meta name="description" content={ meta.description } />
					<meta name="keywords" content={ meta.keywords } />
					<meta name="author" content={ meta.author } />

					<link rel="icon" type="image/x-icon" href={ `${ meta.image }favicon.ico` } />
					<link rel="apple-touch-icon" type="image/png" href={ `${ meta.image }favicon.png` } />
					<link rel="mask-icon" type="image/svg+xml" href={ `${ meta.image }favicon.svg` } />

					{ Children.toArray(ogContent.map((item) => <meta { ...item } /> )) }
					{ Children.toArray(altOgContent.map((item) => <meta { ...item } /> )) }

					<link
						rel="preload"
						type="font/ttf"
						as="font"
						href="/assets/Manrope-Regular.ttf"
						crossOrigin="anonymous"
					/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Documents
