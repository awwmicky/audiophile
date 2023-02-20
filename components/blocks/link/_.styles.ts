import { Link as UILink } from '@nextui-org/react'
import tw, { styled } from 'twin.macro'

export type TLinkStyle = {
	variant?: 'default' | 'alt'
	active?: 'true' | 'false'
	mode?: 'light' | 'dark'
}

const LinkStyle = ({ variant, mode, active }: TLinkStyle) => [
	tw`
		font-default text-sm font-bold uppercase leading-[25px] tracking-[2px]
		hover:text-accent-1 active:text-black
	`,

	(variant === 'alt') && tw`
		px-4 [display: inherit] leading-[18px] tracking-[1px] opacity-50
		relative [& #icon]:(absolute -top-1 -right-2 text-accent-1)
		hover:([& #icon]:-right-4 text-accent-1)
		active:([& #icon]:-right-2 text-black)
		group-hover:([& #icon]:-right-4 text-accent-1)
		group-active:([& #icon]:-right-2 text-black)
	`,

	(mode === 'light') && tw`(text-white  active:text-white)`,
	(active === 'true') && tw`text-accent-1`,
]

export const FrameLink = styled(UILink)<TLinkStyle>(LinkStyle)
// export const FrameLink = styled('a')<TLinkStyle>(LinkStyle)
