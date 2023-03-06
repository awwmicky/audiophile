import tw from 'twin.macro'
import { Layer } from '@/components/layout'

export const FrameGallery = tw(Layer)`
	grid gap-6 grid-cols-1

	[&>*:nth-child(1)]:(h-44)
	[&>*:nth-child(2)]:(h-44)
	[&>*:nth-child(3)]:(h-[368px])

	md:(
		grid-cols-2 grid-rows-2
		[&>*:nth-child(1)]:([grid-area: 1 / 1 / auto / auto])
		[&>*:nth-child(2)]:([grid-area: 2 / 1 / auto / auto])
		[&>*:nth-child(3)]:([grid-area: 1 / 2 / -1 / -1] h-auto!)
	)

	lg:(
		gap-8
		[&>*:nth-child(1)]:(h-72!)
		[&>*:nth-child(2)]:(h-72!)
	)
`

export const ImageBox = tw.div`
	bg-dominant-3	rounded-lg overflow-hidden
`

export const Image = tw.img`w-full h-full object-cover object-center pointer-events-none`
