import tw, { styled } from 'twin.macro'
import { Input } from '@nextui-org/react'

type SFieldStyle = { status?: 'filled' | 'error' }
export const Field = styled('div')<SFieldStyle>(({ status }) => [
	tw`
		[& .nextui-input-block-label]:(p-0 text-xs font-bold)
		[& .nextui-input]:(font-bold caret-accent-1)
		[& .nextui-input-wrapper]:(rounded-md shadow-[0 0 0 2px] shadow-gray-400)
		[& .nextui-input-helper-text]:(ml-0 tracking-[1px])
		hover:[& .nextui-input-wrapper]:(shadow-accent-1)
	`,
	(status === 'filled') && tw`
		focus-within:[& .nextui-input-wrapper]:(shadow-accent-1)
		[& .nextui-input-wrapper--with-value]:(shadow-accent-1)
	`,
	(status === 'error') && tw`
		focus-within:[& .nextui-input-wrapper]:(shadow-red-400)
		[& .nextui-input-wrapper--with-value]:(shadow-red-400)
	`,
])

export const FieldInput = tw(Input)`min-w-[22ch]`
