import tw, { styled } from 'twin.macro'
import { Layer } from '@/components/layout'
import { Text } from '@/components/blocks'

export const FrameHero = tw(Layer)`
	relative lg:(py-8 flex gap-6 place-content-between)
`

export const HeroContent = tw.div`
	h-[700px]
	relative py-10 text-center [&>h1]:whitespace-pre-line z-[1]
	flex gap-6 flex-col place-content-center place-items-center
	lg:(h-auto place-items-start text-start)
`

export const HeroOverline = tw(Text)`opacity-50`
export const HeroDetail = tw(Text)`opacity-75 w-[38ch] max-w-full`

export const HeroImage = tw.img`
	absolute inset-0 object-cover pointer-events-none
	w-full h-full mx-auto opacity-40
	lg:(static mx-0 w-[40rem] h-auto opacity-100)
`

/*  */

export const FrameProduct = tw(Layer)`flex gap-6 flex-col`

type TProductCardStyle = { order: number }
export const ProductCard = styled('div')<TProductCardStyle>(({ order }) => [
	(order === 0) && tw`
		px-6 py-10 flex gap-6 flex-col place-items-center
		bg-accent-1 rounded-lg overflow-hidden
		[&>*[data-image]]:(
			[&>img]:(w-40 pointer-events-none)
		)
		[&>*[data-content]]:(
			flex gap-6 flex-col place-items-center
		[&>*]:text-white text-center [&>h2]:whitespace-pre-line
		)
		lg:(
			h-[23rem] flex-row [&>*]:flex-1
			[&>*[data-image]]:[&>img]:(mx-auto w-72)
			[&>*[data-content]]:(
				pl-24 text-start place-items-start
			)!
		)
	`,

	(order === 1) && tw`
		px-6 py-10 h-[23rem]
		rounded-lg bg-dominant-4 overflow-hidden
		relative [&>*[data-image]]:(
			w-full h-full absolute bottom-0 right-0
			[&>img]:(w-full h-full object-cover pointer-events-none)
		)
		[&>*[data-content]]:(
			relative w-full h-full
			flex gap-6 flex-col place-content-center place-items-start
		)
		lg:[&>*[data-content]]:pl-24
	`,

	(order === 2) && tw`
		flex gap-6 flex-col
		[&>*]:(flex-1 rounded-lg)
		[&>*[data-image]]:(
			bg-complement-3 overflow-hidden
			[&>img]:(w-full object-cover aspect-video pointer-events-none)
		)
		[&>*[data-content]]:(
			px-6 py-10 bg-dominant-3
			flex gap-6 flex-col place-content-center place-items-start
		)
		lg:(
			flex-row
			[&>*[data-content]]:pl-24!
		)
	`,
])

export const ProductImage = tw.img``

// export const BgImage = tw.img`
// 	border absolute top-0 left-0 w-[100%]!
// `

export const ProductDetail = tw(Text)`opacity-75 w-[35ch] max-w-full`
