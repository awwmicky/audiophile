import tw from 'twin.macro'
import { Layer } from '@/components/layout'
import { Title, Text } from '@/components/blocks'

export const FrameCart = tw(Layer)`
	mt-4 flex gap-8 flex-col
`

export const CartHeader = tw.div`
	flex gap-4 place-content-between
	[&>button]:(text-black/50 hover:text-red-400 z-[1])
`

export const CartTotal = tw(Title)`
	[&>b]:(font-extrabold text-accent-1)
`

/*  */

export const CartEmpty = tw.div`
	flex gap-6 flex-col place-items-center
	[&>h4]:(text-center)
`

export const CartList = tw.div`
	flex gap-6 flex-col
`

export const CartItem = tw.div`
	grid gap-4 grid-rows-2 grid-cols-4

	[&>*[data-image-box]]:([grid-area: 1 / 1 / -1 / auto])
	[&>*[data-name]]:([grid-area: 1 / 2 / auto / -2])
	[&>*[data-price]]:([grid-area: 2 / 2 / auto / auto])
	[&>*[data-remove-btn]]:([grid-area: 1 / -2 / auto / auto]
		w-min min-w-min justify-self-end z-[1]
		text-black/50 hover:text-red-400
	)
	[&>*[data-counter-field]]:([grid-area: 2 / -3 / auto / -1]
		place-self-end
	)
`

export const ImageBox = tw.div`
	bg-dominant-3 rounded-lg overflow-hidden
	flex [&>img]:m-auto
`
export const Image = tw.img`pointer-events-none`
export const Price = tw(Text)`text-sm font-bold opacity-50`

/*  */

export const CartFooter = tw.div`
	sticky -bottom-[2px] bg-white z-[5]
	py-6 flex gap-6 flex-wrap place-content-between
	[&>*:nth-child(1)]:(uppercase opacity-50)
	[&>*:nth-child(2)]:(font-bold)
	[&>*:nth-child(3)]:(basis-full)
	lg:(ml-auto w-72)
`
