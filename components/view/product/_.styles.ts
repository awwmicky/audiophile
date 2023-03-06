import tw from 'twin.macro'
import { Layer } from '@/components/layout'

export const FrameList = tw(Layer)`
	mt-16 flex flex-col gap-10
	[&>h2]:text-center
`

export const List = tw.div`
	grid gap-8 grid-cols-12
	[&>*]:(
		col-span-full
		sm:col-span-6
		lg:col-span-4
		xl:col-span-3
	)
`

export const Card = tw.div`
	flex gap-8 flex-col place-items-center
	[&>h4]:text-center
`

export const ImageBox = tw.div`
	w-full h-32 flex [&>img]:m-auto
	bg-dominant-3 rounded-lg
	md:h-80
`

export const Image = tw.img`w-full h-full object-contain pointer-events-none`
