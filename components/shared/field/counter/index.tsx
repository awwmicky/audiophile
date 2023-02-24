import type { FCC, DetailedHTMLProps, HTMLAttributes } from 'react'
import { useState } from 'react'
import { Icon } from '@/components/blocks'
import * as X from './_.styles'

// FIXME:

type TCounterAttrs = HTMLAttributes<HTMLDivElement>
interface IPCounter extends TCounterAttrs {
	value: number
	min?: number
	max?: number
	disabled?: boolean
}

const Counter: FCC<IPCounter> = ({
	value=1,
	min=0,
	max=10,
	disabled,
	...rest
}) => {
	const [count, setCount] = useState(value)
	const increment = () => (count < max) && setCount((prevNum) => prevNum+1)
	const decrement = () => (count > min) && setCount((prevNum) => prevNum-1)

	return (
		<X.Field
			disabled={ disabled }
			{ ...rest }
		>
			<X.FieldButton
				auto
				disabled={ disabled }
				onClick={ decrement }
			><Icon.Minus />
			</X.FieldButton>

			<X.FieldInput
				type="number"
				id="counter"
				disabled={ disabled }
				readOnly
				tabIndex={-1}
				value={ count }
				aria-label="counter"
			/>

			<X.FieldButton
				auto
				disabled={ disabled }
				onClick={ increment }
			><Icon.Plus />
			</X.FieldButton>
		</X.Field>
	)
}

export { Counter }
