import tw from 'twin.macro'
import { Layer } from '../layer'

export const Frame = tw(Layer)`
	py-8 flex gap-4 place-content-between place-items-center
	border-b-white/10 border-b

	[& .branding]:(order-2 md:(ml-10 mr-auto) lg:(order-1 mx-0))
	[& .cart-menu]:(order-3)
	[& .nav-btn]:(order-1 lg:hidden)

	[& .nextui-badge]:(bg-accent-1/75)
	[& .nextui-button-icon]:(
		text-white hover:text-[#D87D4A] active:text-white
	)
`

export const NavMenu = tw.nav`
	order-2 gap-9 flex-wrap hidden lg:flex
`
