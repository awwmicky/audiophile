import tw from 'twin.macro'
import { Layer } from '../../layout'
import { Title as UITitle, Text as UIText } from '@/components/blocks'

export const Frame = tw(Layer)`
	flex gap-10 flex-col place-items-center
	lg:(flex-row place-content-between [&>img]:order-2)
`

export const Image = tw.img`
	rounded-lg
`

export const Box = tw.div`
	flex gap-8 flex-col place-items-center
	text-center
	lg:(text-start place-items-start)
`

export const Title = tw(UITitle)`
	uppercase [&>span]:text-accent-1
	max-w-[20ch] lg:max-w-[15ch]
`

export const Description = tw(UIText)`
	opacity-50 max-w-[66ch]
`
