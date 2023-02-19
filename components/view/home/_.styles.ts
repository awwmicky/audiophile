
import tw, { styled } from 'twin.macro'
import { Layer } from '@/components/layout'
import { Text, Title } from '@/components/blocks'

export const FrameHero = tw(Layer)`
	relative py-28
	lg:(py-8 flex gap-6 place-content-between)
`

export const HeroCopy = tw.div`
	relative z-[1] py-6 text-center
	flex gap-6 flex-col place-content-center place-items-center
	lg:(place-items-start text-start)
`

export const HeroOverline = tw(Text)`opacity-50`

export const HeroHeadline = tw(Title)`max-w-[12ch]`

export const HeroDetail = tw(Text)`opacity-75 w-[37ch] max-w-full`

export const HeroImage = tw.img`
	absolute inset-0
	w-auto h-full mx-auto object-cover opacity-40
	pointer-events-none
	lg:(relative mx-0 w-[40rem] h-auto opacity-100)
`

/*  */

export const FrameProduct = tw(Layer)`
	my-28 flex gap-6 flex-col
`

type TProductCardStyle = { theme: '1' | '1a' | '1b' | '2' | '3' | '3a' | '3b' }
export const ProductCard = styled('div')<TProductCardStyle>(({ theme }) => [
	tw`rounded-lg`,
	(theme === '1') && tw`
		px-6 py-10
		bg-accent-1
		flex gap-6 flex-col place-items-center
		lg:(flex-row [&>*]:flex-1)
	`,
	(theme === '1a') && tw`
		mt-10
		w-40
		lg:[&>img]:(mx-auto w-72)
		// mb-8
	`,
	(theme === '1b') && tw`
		// px-6 py-10
		flex gap-6 flex-col place-items-center
		text-center [&>h2]:max-w-[7ch]
		lg:(pl-24 text-start place-items-start)
	`,
	(theme === '2') && tw`
		px-6 py-10 bg-dominant-4 overflow-hidden
		flex gap-6 flex-col place-content-center place-items-start
		relative [&>*]:(relative z-[1])
		[&>img]:(absolute top-0 right-0 w-full h-full object-cover)
		lg:(pl-24 py-20 [&>img]:h-auto)
	`,
	(theme === '3') && tw`
		flex gap-6 flex-col [&>*]:flex-1
		lg:flex-row
	`,
	(theme === '3a') && tw`
		bg-complement-3 overflow-hidden
		[&>img]:(w-full h-80 object-cover)
		lg:[&>img]:h-auto
	`,
	(theme === '3b') && tw`
		px-6 py-10 bg-dominant-3
		flex gap-6 flex-col place-content-center place-items-start
		lg:pl-24
	`,
])

export const ProductImage = tw.img``

export const ProductTitle = tw(Title)``

export const ProductDetail = tw(Text)`opacity-75 w-[35ch] max-w-full`
