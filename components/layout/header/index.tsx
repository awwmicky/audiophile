import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Children } from 'react'
import { Badge, Button, Modal, useModal } from '@nextui-org/react'
import { theme } from 'twin.macro'
import { Link, Icon } from '@/components/blocks'
import { Category } from '@/components/containers'
import { useStoreState } from '@/src/store'
import { useEventListener } from '@/src/hooks'
import { root_path, paths_nav } from '@/src/_.routes'
import { debounce } from '@/src/_.utils'
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

const CartMenu = () => {
	const navigate = useRouter().push
	const totalCartQty = useStoreState((state) => state.totalCartQty)

	return (
		<Badge content={ totalCartQty } isInvisible={ !totalCartQty } size="sm" placement="top-left" data-cart-menu>
			<Button auto light icon={ <Icon.Cart /> } onPress={ () => navigate(root_path.cart) } />
		</Badge>
	)
}

const NavBar = () => {
	const activePath = useRouter().asPath

	return (
		<>
			<NavMobile />
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

const NavMobile = () => {
	const { visible, setVisible, bindings } = useModal()
	const toggleModal = () => setVisible((prev) => !prev)

	useEventListener('resize', debounce(() => {
		const DESKTOP_SIZE = parseInt(theme`screens.lg`, 10)
		if (visible && (window.innerWidth <= DESKTOP_SIZE)) return null
		if (visible && (window.innerWidth >= DESKTOP_SIZE)) setVisible(false)
	}))

	return (
		<>
			<Button
				auto light
				icon={ !visible ? <Icon.Menu /> : <Icon.CloseMenu /> }
				onPress={ toggleModal }
				data-nav-btn
			/>
			<Modal
				closeButton
				width="100%"
				className="p-6"
        { ...bindings }
      ><Category />
			</Modal>
		</>
	)
}

export { Header }
