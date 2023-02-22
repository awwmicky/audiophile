import type { HTMLAttributes, PropsWithChildren } from 'react'
import { Children, forwardRef } from 'react'
import * as UISelect from '@radix-ui/react-select'
import { Icon } from '@/components/blocks'

// FIXME:

const select_list = [
	'apple',
	'banana',
	'blueberry',
	'grapes',
	'pineapple',
]

const Select = () => (
  <UISelect.Root>
    <UISelect.Trigger className="SelectTrigger" aria-label="Food">
      <UISelect.Value placeholder="Select a fruit…" />

      <UISelect.Icon className="SelectIcon">
        <Icon.DownArrow />
      </UISelect.Icon>
    </UISelect.Trigger>

    <UISelect.Portal>
      <UISelect.Content className="SelectContent">
        <UISelect.ScrollUpButton className="SelectScrollButton">
          <Icon.UpArrow />
        </UISelect.ScrollUpButton>

        <UISelect.Viewport className="SelectViewport">
          <UISelect.Group>
            <UISelect.Label className="SelectLabel">Fruits</UISelect.Label>
						{ Children.toArray(select_list.map((item) => (
							<SelectItem value={ item }>{ item }</SelectItem>
						))) }
          </UISelect.Group>
        </UISelect.Viewport>

        <UISelect.ScrollDownButton className="SelectScrollButton">
          <Icon.DownArrow />
        </UISelect.ScrollDownButton>
      </UISelect.Content>
    </UISelect.Portal>
  </UISelect.Root>
)

type TSelectItemAttrs = HTMLAttributes<HTMLDivElement> & PropsWithChildren
interface IPSelectItem extends TSelectItemAttrs {
	value: string
}

const SelectItem = forwardRef<HTMLDivElement, IPSelectItem>(({
	children, ...props }, ref
) => (
	<UISelect.Item ref={ ref } { ...props }>
		<UISelect.ItemText>{ children }</UISelect.ItemText>
		<UISelect.ItemIndicator className="SelectItemIndicator">
			<Icon.Check />
		</UISelect.ItemIndicator>
	</UISelect.Item>
))

SelectItem.displayName = 'SelectItem'

export { Select }
