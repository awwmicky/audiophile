// import NextLink from 'next/link'
import tw from 'twin.macro'
import { Icon } from '@/components/blocks'
import { Layer } from '../layer'

export const Frame = tw(Layer)`
	py-8 flex gap-4 place-content-between
	border-b-white/10 border-b
`

export const Logo = tw(Icon.Logo)`
	order-2
	md:(ml-10 mr-auto)
	lg:(order-1 mx-0)
`

export const Menu = tw(Icon.Menu)`
	order-1
	text-white hover:text-[#D87D4A] active:text-white
	lg:hidden
`

export const NavMenu = tw.nav`
	order-2
	hidden gap-9 flex-wrap
	lg:flex
`

export const Cart = tw(Icon.Cart)`
	order-3
	text-white hover:text-[#D87D4A] active:text-white
`
