import tw, { styled } from 'twin.macro'
import * as UISelect from '@radix-ui/react-select'

export const SelectLabel = tw.span`
	mb-2 text-xs font-bold
`

export const SelectTrigger = tw(UISelect.Trigger)`
	border-2 rounded-md border-gray-400
	relative px-5 py-2 flex min-w-[22ch] [transition: 'border' var(--nextui-transitions-default)]
	[&>*:nth-child(1)]:(font-bold)
	[&>*:nth-child(2)]:(absolute right-0)
	data-[placeholder]:(text-gray-400)
	data-[state="open"]:border-accent-1
	data-[state="open"]:[&>*:nth-child(2)]:rotate-180
	hover:border-accent-1
`

export const SelectContent = styled(UISelect.Content).attrs({
	position: 'popper',
	sideOffset: 6,
})(() => [
	tw`
		w-[var(--radix-select-trigger-width)]
		bg-white rounded-md shadow-md overflow-hidden
	`,
])

export const SelectItem = styled(UISelect.Item)(() => [
	tw`
		px-4 min-w-[22ch] rounded text-sm
		data-[disabled]:(opacity-25 pointer-events-none)
		data-[highlighted]:(bg-accent-2 outline-none)
	`,
])
