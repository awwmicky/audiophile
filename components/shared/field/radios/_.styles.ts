import tw, { styled } from 'twin.macro'
import { Radio } from '@nextui-org/react'

export const Field = styled(Radio.Group)(() => [
	tw`
		min-w-[22ch]
		[& .nextui-radio-group-label]:(p-0 text-inherit text-xs font-bold)
		[& .nextui-radio-text]:(text-base font-bold)
		[& .nextui-radio-label]:(px-5 py-2 [transition: 'border' var(--nextui-transitions-default)])
		[& .nextui-radio-point]:(mr-5)
		[& .nextui-radio--checked.nextui-radio-label]:(border-accent-1)
		[& .nextui-radio--checked .nextui-radio-point]:after:(border-accent-1)
		hover:[& .nextui-radio-point]:after:(border-accent-1)
	`,
])

export const FieldRadio = tw(Radio)`
	border-2 rounded-md border-gray-400
	hover:border-accent-1
`
