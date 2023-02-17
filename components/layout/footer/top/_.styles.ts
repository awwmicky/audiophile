import tw from 'twin.macro'
import { Text } from '@/components/blocks'
import { Layer } from '../../layer'

// FIXME:

export const Frame = tw(Layer)`
	relative pt-20 pb-12 grid gap-4
	text-white text-center
	md:(grid-cols-2 text-start! [&>svg]:place-self-start!)
`

export const TopLine = tw.hr`
	absolute top-0 place-self-center
	h-1 w-28 bg-accent-1
	[&+svg]:([grid-area: 1 / 1 / auto / -1] place-self-center)
	md:left-6
`

export const MenuList = tw.ul`
	m-0 [&>li]:mb-0 flex gap-9 flex-col
	uppercase font-bold
	md:([grid-area: 2 / 1 / auto / -1] flex-row)
	lg:([grid-area: 1 / 2 / auto / -1] place-content-end)
`

export const ClosingText = tw(Text)`
	text-white opacity-50
	md:[grid-area: 3 / 1 / auto / -1]
	lg:[grid-area: 2 / 1 / auto / auto]
`

export const Copyright = tw(Text)`
	text-white font-bold opacity-50
	md:[grid-area: 4 / 1 / auto / 2]
	lg:[grid-area: 3 / 1 / auto / 2]
`

export const SocialList = tw.ul`
	m-0 [&>li]:mb-0 flex gap-6 place-content-center
	md:([grid-area: 4 / 2 / auto / -1] place-self-end)
	lg:[grid-area: 2 / 2 / auto / -1]
`
