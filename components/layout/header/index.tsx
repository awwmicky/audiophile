import { useRouter } from 'next/router'
import { Children } from 'react'
import { Link } from '@/components/blocks'
import { paths_nav } from '@/src'
import * as X from './_.styles'

// FIXME: change Link

const Header = () => (
	<header className="bg-[#101010] sticky -top-1 z-[1]">
		<X.Frame>
			<X.Logo />
			<X.Menu />
			<NavBar />
			<X.Cart />
		</X.Frame>
	</header>
)

const NavBar = () => {
	const activePath = useRouter().pathname

	return (
		<X.NavMenu>
			{ Children.toArray(paths_nav.map((item) => (
				<Link
					isActive={ activePath === item.link }
					isDark
					passHref
					href={ item.link }
				>{ item.label }
				</Link>
			))) }
		</X.NavMenu>
	)
}

export { Header }
