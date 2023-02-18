
import tw from 'twin.macro'
import { Layer } from '@/components/layout'
import { Text, Title } from '@/components/blocks'

export const FrameHero = tw(Layer)`
	relative py-28
	lg:(py-16 flex gap-6 place-content-between)
`

export const HeroCopy = tw.div`
	relative z-[1] py-6 text-center
	flex gap-6 flex-col place-content-center place-items-center
	lg:(place-items-start text-start)
`

export const Overline = tw(Text)`
	text-white opacity-50
`

export const Headline = tw(Title)`
	text-white max-w-[11ch]
`

export const Detail = tw(Text)`
	text-white opacity-75 w-[37ch] max-w-full
`

export const HeroImage = tw.img`
	absolute inset-0
	w-auto h-full mx-auto object-cover opacity-40
	pointer-events-none
	lg:(relative opacity-100 mx-0 w-[35rem] h-auto)
	// border
`

/*  */
