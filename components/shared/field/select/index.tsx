import type { FCC, HTMLAttributes, PropsWithChildren } from 'react'
import { Children, forwardRef } from 'react'
import * as UISelect from '@radix-ui/react-select'
import { Icon } from '@/components/blocks'
import * as X from './_.styles'

// FIXME:

// type TInputAttrs = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type TSelectAttrs = HTMLAttributes<HTMLElement>
interface IPSelect extends TSelectAttrs {
	id?: string
	label?: string
	value: string
	options: Array<{
		value: string
		label: string
	}>
	errorMessage?: string
	// disabled?: boolean
}

const Select: FCC<IPSelect> = ({
	id,
	label='Label',
	value, options=[],
	placeholder='Choose One',
	// ...rest { ...rest }
}) => (
	<div>
		<X.SelectLabel>{ label }</X.SelectLabel>
		<UISelect.Root defaultValue={ value ? value : undefined }>
			<X.SelectTrigger  aria-label={ id }>
				<UISelect.Value placeholder={ placeholder } />
				<UISelect.Icon><Icon.DownArrow /></UISelect.Icon>
			</X.SelectTrigger>

			<UISelect.Portal>
				<X.SelectContent>
					<UISelect.ScrollUpButton><Icon.UpArrow /></UISelect.ScrollUpButton>

					<UISelect.Viewport className="p-2">
						{/* <UISelect.Label>{ placeholder }</UISelect.Label> */}
						{ Children.toArray(options.map((item) => (
							<SelectItem value={ item.value }>{ item.label }</SelectItem>
						))) }
					</UISelect.Viewport>

					<UISelect.ScrollDownButton><Icon.DownArrow /></UISelect.ScrollDownButton>
				</X.SelectContent>
			</UISelect.Portal>
		</UISelect.Root>
	</div>
)

type TSelectItemAttrs = HTMLAttributes<HTMLDivElement> & PropsWithChildren
interface IPSelectItem extends TSelectItemAttrs {
	value: string
}

const SelectItem = forwardRef<HTMLDivElement, IPSelectItem>(({
	children, ...props }, ref
) => (
	<X.SelectItem ref={ ref } { ...props }>
		<UISelect.ItemText>{ children }</UISelect.ItemText>
		{/* <UISelect.ItemIndicator><Icon.Check /></UISelect.ItemIndicator> */}
	</X.SelectItem>
))

SelectItem.displayName = 'SelectItem'

export { Select }
