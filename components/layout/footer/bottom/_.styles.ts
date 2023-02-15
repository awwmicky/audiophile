import tw, { styled } from 'twin.macro'

export const Grid = tw.div`
	grid md:grid-cols-2
`

export const Group = tw.div``

type ITitle = { children?: string, text?: string }
const TitleAttrs = ({ children, text }: ITitle) => ({
	children: text || children
})
const TitleStyle = () => [
	tw`font-bold text-center`,
]
export const Title = styled('p')
	.attrs(TitleAttrs)<ITitle>(TitleStyle)

export const List = tw.ul`
	m-0 flex gap-4 flex-wrap place-content-center place-items-center
	[&>li]:mb-0 [& hr]:(w-[2px] h-6 bg-black)
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
