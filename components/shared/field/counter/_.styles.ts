import tw, { styled } from 'twin.macro'
import { Button, Input } from '@nextui-org/react'

type SFieldStyle = { disabled?: boolean }
export const Field = styled('div')<SFieldStyle>(({ disabled }) => [
	tw`max-w-[8rem] flex [&>*]:flex-1 rounded-sm`,
	disabled && tw`bg-dominant-4`,
])

export const FieldButton = tw(Button)`
	p-0 bg-dominant-3 text-black font-bold rounded-none
	[&:nth-child(1)]:(z-[1] rounded-l-sm)
	[&:nth-child(3)]:(z-[1] rounded-r-sm)
	hover:text-accent-1
	disabled:(text-transparent opacity-90)
`

export const FieldInput = tw(Input)`
	text-black [&_input]:(font-bold text-center) [&>*]:rounded-none
	// disabled:opacity-50
`
