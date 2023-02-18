import NextLink from 'next/link'
import tw from 'twin.macro'
import { Layer } from '../../layout'
import { Text } from '@/components/blocks'

export const Frame = tw(Layer)`
	my-28	flex gap-24 flex-col place-items-center
	md:(gap-4 flex-row)
	lg:gap-8
`

export const Card = tw(NextLink)`
	relative p-6 pt-24 w-full
	flex gap-1 flex-col place-items-center
	bg-dominant-3 rounded-lg
	hover:[&>button]:text-accent-1
`

export const Image = tw.img`
	absolute -top-[35%] max-w-[175px]
`

export const Category = tw(Text)`
	font-default text-[15px] font-bold uppercase leading-[20px] tracking-[1px]
`

export const Button = tw.button`
	relative px-6
	font-default text-sm font-bold uppercase leading-[18px] tracking-[1px] opacity-50
	[&>svg]:(absolute -top-1 right-0 text-accent-1)
	hover:[&>svg]:(-right-3)
	active:[&>svg]:right-0
`
