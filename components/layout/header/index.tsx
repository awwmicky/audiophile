import { Children } from 'react'
import * as X from './_.styles'

const paths = [
	{ label: 'home', link: '/' },
	{ label: 'headphones', link: '/category/headphones' },
	{ label: 'speakers', link: '/category/speakers' },
	{ label: 'earphones', link: '/category/earphones' },
]

const Header = () => (
	<header className="bg-[#101010] sticky top-0 z-[1]">
		<X.Frame>
			<X.Logo />
			<X.Menu />
			<NavBar />
			<X.Cart />
		</X.Frame>
	</header>
)

const NavBar = () => (
	<X.NavMenu>
		{ Children.toArray(paths.map((item) => (
			<X.NavLink href={ item.link }>{ item.label }</X.NavLink>
		))) }
	</X.NavMenu>
)

export { Header }
