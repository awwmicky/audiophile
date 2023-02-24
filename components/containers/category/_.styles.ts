import NextLink from 'next/link'
import tw from 'twin.macro'
import { Layer } from '../../layout'
import { Text } from '@/components/blocks'

export const Frame = tw(Layer)`
	flex gap-24 flex-col place-items-center
	md:(gap-4 flex-row)
	lg:gap-8
`

export const Card = tw(NextLink)`
	relative mt-12 p-6 pt-20 w-full
	flex gap-4 flex-col place-items-center
	bg-dominant-3 rounded-lg
`

export const Image = tw.img`
	absolute -top-[35%] max-w-[175px] pointer-events-none
`

export const Category = tw(Text)`
	font-default text-[15px] font-bold uppercase leading-[20px] tracking-[1px]
`
