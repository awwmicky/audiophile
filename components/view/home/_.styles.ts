import tw, { styled } from 'twin.macro'
import { Layer } from '@/components/layout'
import { Text } from '@/components/blocks'

export const FrameHero = tw(Layer)`
	relative lg:(py-8 flex gap-6 place-content-between)
`

export const HeroContent = tw.div`
	h-[700px]
	relative z-[1] py-10 text-center [&>h1]:whitespace-pre-line
	flex gap-6 flex-col place-content-center place-items-center
	lg:(h-auto place-items-start text-start)
`

export const HeroOverline = tw(Text)`opacity-50`

export const HeroDetail = tw(Text)`opacity-75 w-[37ch] max-w-full`

export const HeroImage = tw.img`
	absolute inset-0
	w-full h-full mx-auto object-cover opacity-40
	pointer-events-none
	lg:(static mx-0 w-[40rem] h-auto opacity-100)
`

/*  */

export const FrameProduct = tw(Layer)`
	flex gap-6 flex-col
`

type TProductCardStyle = { order: number }
export const ProductCard = styled('div')<TProductCardStyle>(({ order }) => [
	(order === 0) && tw`
		px-6 py-10
		rounded-lg bg-accent-1 overflow-hidden
		flex gap-6 flex-col place-items-center
		[&>*]:data-[image]:(
			[&>img]:(w-40 pointer-events-none)
		)
		[&>*]:data-[content]:(
			flex gap-6 flex-col place-items-center
			text-center [&>h2]:whitespace-pre-line
		)
		lg:(
			flex-row [&>*]:flex-1
			[&>*]:data-[image]:[&>img]:(mx-auto w-72)
			[&>*]:data-[content]:(
				pl-24 text-start place-items-start
			)!
		)
	`,

	(order === 1) && tw`
		px-6 py-10 h-80
		rounded-lg bg-dominant-4 overflow-hidden
		relative [&>*]:data-[image]:(
			w-full h-full absolute bottom-0 right-0
			[&>img]:(w-full h-full object-cover pointer-events-none)
		)
		[&>*]:data-[content]:(
			relative w-full h-full
			flex gap-6 flex-col place-content-center place-items-start
		)
		lg:[&>*]:data-[content]:pl-24
	`,

	(order === 2) && tw`
		flex gap-6 flex-col
		[&>*]:(flex-1 rounded-lg)
		[&>*]:data-[image]:(
			bg-complement-3 overflow-hidden
			[&>img]:(w-full h-80 object-cover pointer-events-none)
		)
		[&>*]:data-[content]:(
			px-6 py-10 bg-dominant-3
			flex gap-6 flex-col place-content-center place-items-start
		)
		lg:(
			flex-row
			[&>*]:data-[content]:pl-24!
		)
	`,
])

export const ProductImage = tw.img``

export const ProductDetail = tw(Text)`opacity-75 w-[35ch] max-w-full`
