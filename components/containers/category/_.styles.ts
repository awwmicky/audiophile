import { Card as UICard } from '@nextui-org/react'
import tw from 'twin.macro'
import { Layer } from '@/components/layout/layer'
import { Text } from '@/components/blocks'

export const Frame = tw(Layer)`
	flex gap-8 flex-col place-items-center place-content-between
	[&>*]:(w-full) md:(gap-4 flex-row) lg:gap-8
`

export const Card = tw(UICard)`
	relative mt-12 p-6 pt-20
	flex gap-4 flex-col place-items-center
	bg-dominant-3 rounded-lg overflow-visible
`

export const Image = tw.img`
	absolute -top-[35%] max-w-[175px] pointer-events-none
`

export const Category = tw(Text)`
	font-default text-[15px] font-bold uppercase leading-[20px] tracking-[1px]
`
