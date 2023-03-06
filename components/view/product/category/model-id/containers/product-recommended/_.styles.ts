import tw from 'twin.macro'
import { Layer } from '@/components/layout'

export const FrameRecommended = tw(Layer)`
	[&>h3]:(mb-10 text-center)
`

export const List = tw.div`
	flex gap-14 flex-col
	md:(gap-4 flex-row [&>*]:flex-1)
	lg:gap-8
`

export const Card = tw.div`
	flex gap-8 flex-col place-items-center [&>h4]:mb-0
`

export const ImageBox = tw.div`
	w-full h-32 flex [&>img]:m-auto
	bg-dominant-3 rounded-lg
	md:h-80
`

export const Image = tw.img`w-full h-full object-contain pointer-events-none`
