import tw, { styled } from 'twin.macro'
import { Layer } from '@/components/layout'
import { Title as UITitle, Text } from '@/components/blocks'

export const FrameSpecs = tw(Layer)`
	flex gap-24 flex-col
	lg:flex-row
	// [&:nth-child(1)]:bg-red-400
	lg:[&>*:nth-child(1)]:(flex-[2])
	lg:[&>*:nth-child(2)]:(flex-[1])
`

export const InnerBox = tw.div`
	flex gap-6 flex-col
`

export const Title = tw(UITitle)`
	md:(text-3xl)
`

/*  */

export const Detail = tw(Text)`
	flex gap-4 flex-col opacity-50
`

/*  */

export const List = tw.ul`
	flex gap-2 flex-col
`

export const Item = tw(Text)`
	[&>b]:(text-accent-1 font-bold mr-5)
	[&:not(b)]:(opacity-50)
`
