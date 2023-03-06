import tw, { styled } from 'twin.macro'
import { Layer } from '@/components/layout'
import { Title, Text } from '@/components/blocks'

export const FrameDetails = tw(Layer)`
	mt-16
	flex gap-8 flex-col
	md:(gap-16 flex-row [&>*]:flex-1)
`

/*  */

export const ImageBox = tw.div`
	h-80 flex rounded-lg overflow-hidden
	bg-dominant-3 [&>img]:m-auto
	md:h-[30rem]
	lg:h-[35rem]
`

export const Image = tw.img`w-full h-full object-contain pointer-events-none`

/*  */

export const ContentBox = tw.div`
	flex gap-6 flex-col
	md:place-content-center
`

export const Overline = tw(Text)`text-accent-1`
export const Name = tw(Title)`whitespace-pre-line`
export const Details = tw(Text)`opacity-50`
export const Price = tw.span`text-lg font-bold first-letter:tracking-[0.5ch]`
export const ActionBox = tw.div`flex gap-4`
