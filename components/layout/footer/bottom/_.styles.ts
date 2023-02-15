import tw, { styled } from 'twin.macro'
import { Layer } from '../../layer'

export const Frame = tw(Layer)`
	grid md:grid-cols-2
`

export const Group = tw.div``

type ITitle = { children?: string, text?: string }
const TitleAttrs = ({ children, text }: ITitle) => ({
	children: text || children
})
const TitleStyle = () => [
	tw`text-white font-bold text-center`,
]
export const Title = styled('p')
	.attrs(TitleAttrs)<ITitle>(TitleStyle)

export const List = tw.ul`
	m-0 flex gap-4 flex-wrap place-content-center place-items-center
	[&>li]:mb-0 [& hr]:(w-[2px] h-6 bg-white)
	[& svg]:(text-white hover:text-[#D87D4A] active:text-white)
`

type ILink = { open?: boolean }
const LinkAttr = ({ open }: ILink) => ({
	...(!open ? {} : {
		target: '_blank',
		rel: 'noreferrer noopener',
	}),
})
export const Link = styled('a')
	.attrs(LinkAttr)<ILink>(() => [])

export const ClosingText = tw.span`
	my-4 text-center
	md:col-span-full
`
