import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Children } from 'react'
import { Link } from '@/components/blocks'
import { paths_nav } from '@/src'
import * as X from './_.styles'

const Header = () => (
	<header className="bg-complement-3 sticky -top-1 z-[10]">
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
				<NextLink passHref legacyBehavior href={ item.link }>
					<Link
						mode="light"
						active={ String(activePath === item.link) as 'true' | 'false' }
					>{ item.label }
					</Link>
				</NextLink>
			))) }
		</X.NavMenu>
	)
}

export { Header }
