import tw, { styled } from 'twin.macro'
import { Layer } from '@/components/layout'
import { Text, Title } from '@/components/blocks'

export const FrameTop = tw.div`
	bg-black h-48 flex [&>*]:m-auto md:h-80
`

/*  */

export const FrameCategory = tw(Layer)`
	mb-8 flex gap-32 flex-col
`

type TSectionStyle = { order?: number }
export const Section = styled('section')<TSectionStyle>(({ order }) => [
	tw`
		flex gap-8 flex-col
		lg:(flex-row [&>*]:flex-1)
	`,
	(order! % 2 === 0)
		? tw`lg:[&>*[data-content]]:ml-20`
		: tw`
			lg:[&>*[data-image]]:order-2
			lg:[&>*[data-content]]:mr-20
		`
	,
])

export const ImageBox = tw.div`
	flex [&>*]:m-auto
	rounded-lg bg-dominant-3
`

export const ContentBox = tw.div`
	flex gap-4 flex-col place-content-center place-items-center text-center
	lg:(place-items-start text-start)
`

export const Image = tw.img``
export const Overline = tw(Text)`text-accent-1`
export const Name = tw(Title)`whitespace-pre-line`
export const Detail = tw(Text)`my-4 max-w-[60ch] opacity-50`
