import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Children } from 'react'
import { Badge, Button } from '@nextui-org/react'
import { Link, Icon } from '@/components/blocks'
import { root_path, paths_nav } from '@/src/_path.routes'
import * as X from './_.styles'

const Header = () => (
	<header className="bg-complement-3 sticky -top-1 z-[10]">
		<X.Frame>
			<Branding />
			<NavBar />
			<CartMenu />
		</X.Frame>
	</header>
)

/*  */

const Branding = () => (
	<NextLink href={ root_path.home } data-branding>
		<Icon.Logo />
	</NextLink>
)

const CartMenu = () => (
	<NextLink href={ root_path.cart } data-cart-menu>
		<Badge content={5} size="sm" placement="top-left">
			<Button auto light icon={ <Icon.Cart /> } />
		</Badge>
	</NextLink>
)

const NavBar = () => {
	const activePath = useRouter().asPath

	return (
		<>
			<Button auto light icon={ <Icon.Menu /> } data-nav-btn />
			<X.NavMenu data-nav-menu>
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
		</>
	)
}

export { Header }
