import tw from 'twin.macro'
import { Layer } from '../../layer'

export const Frame = tw(Layer)`
	grid md:grid-cols-2
`

export const Group = tw.div``

export const Title = tw.p`
	text-white font-bold text-center
`

export const List = tw.ul`
	m-0 flex gap-4 flex-wrap place-content-center place-items-center
	[&>li]:mb-0 [& hr]:(w-[2px] h-6 bg-white)
`

export const ClosingText = tw.span`
	my-4 text-center md:col-span-full
`
