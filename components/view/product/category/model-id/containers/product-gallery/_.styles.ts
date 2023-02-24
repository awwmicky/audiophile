import tw, { styled } from 'twin.macro'
import { Layer } from '@/components/layout'

export const FrameGallery = tw(Layer)`
	grid gap-5 grid-cols-1

	// [&>*:nth-child(1)]:(h-44 bg-red-400)
	// [&>*:nth-child(2)]:(h-44 bg-blue-400)
	// [&>*:nth-child(3)]:(h-96 bg-green-400)

	md:(
		grid-cols-2 grid-rows-2
		[&>*:nth-child(1)]:[grid-area: 1 / 1 / auto / auto]
		[&>*:nth-child(2)]:[grid-area: 2 / 1 / auto / auto]
		[&>*:nth-child(3)]:[grid-area: 1 / 2 / -1 / -1]
	)

	lg:(gap-8)
`

export const ImageBox = tw.div`
	bg-complement-3 rounded-lg overflow-hidden
`

export const Image = tw.img``
