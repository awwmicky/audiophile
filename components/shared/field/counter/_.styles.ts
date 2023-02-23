import tw, { styled } from 'twin.macro'
import { Button, Input } from '@nextui-org/react'

type SFieldStyle = { disabled?: boolean }
export const Field = styled('div')<SFieldStyle>(({ disabled }) => [
	tw`
		w-40 flex [&>*]:flex-1
		bg-accent-1	rounded-lg overflow-hidden
	`,
	disabled && tw`bg-dominant-4`,
])

export const FieldButton = tw(Button)`
	p-0 bg-dominant-3 text-black font-bold rounded-none
	[&:nth-child(1)]:(rounded-l-lg)
	[&:nth-child(3)]:(rounded-r-lg)
	hover:text-accent-1
	disabled:(text-transparent opacity-90)
`

export const FieldInput = tw(Input)`
	text-black [&_input]:(font-bold text-center) [&>*]:rounded-none
	disabled:bg-red-400!
	// disabled:opacity-50
`
