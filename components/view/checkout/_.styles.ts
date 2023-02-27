import NextLink from 'next/link'
import tw from 'twin.macro'
import { Layer } from '@/components/layout'

export const FrameCheckout = tw(Layer)`
	flex gap-6 flex-col [&>h3]:whitespace-pre-line [&>p]:opacity-50
`

export const Circle = tw.div`
	p-2 self-start text-white bg-accent-1 rounded-full
`

export const OrderCard = tw.div`
	flex flex-col rounded-lg overflow-hidden
	md:(flex-row [&>*:nth-child(1)]:w-[55%] [&>*:nth-child(2)]:w-[45%])
`

/*  */

export const CardTop = tw.div`
	p-6 grid gap-3 grid-cols-4 bg-dominant-3

	[&>*[data-image-box]]:([grid-area: 1 / 1 / span 2 / auto])
	[&>*[data-name]]:([grid-area: 1 / 2 / auto / span 2])
	[&>*[data-quantity]]:([grid-area: 1 / 3 / auto / -1]
		text-lg font-bold opacity-50 justify-self-end
	)
	[&>*[data-price]]:([grid-area: 2 / 2 / auto / span 2]
		font-bold opacity-50
	)
	[&>*[data-line]]:([grid-area: 3 / 1 / auto / -1]
		text-xs opacity-25
	)
	[&>*[data-other]]:([grid-area: 4 / 1 / auto / -1]
		text-xs font-bold opacity-50 text-center
	)
`

export const ImageBox = tw.div`flex [&>img]:m-auto`
export const Image = tw.img``

/*  */

export const CardBottom = tw.div`
	p-6 flex gap-2 flex-col place-content-center bg-black
	[&>*:nth-child(1)]:(uppercase opacity-50)
	[&>*:nth-child(2)]:(text-lg font-bold)
`

export const Link = tw(NextLink)`
	basis-full
	[&>button]:w-full
	lg:(self-center)
`
