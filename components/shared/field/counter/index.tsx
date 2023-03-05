import type { FCC, HTMLAttributes } from 'react'
import { Icon } from '@/components/blocks'
import * as X from './_.styles'

type TCounterAttrs = HTMLAttributes<HTMLDivElement>
interface IPCounter extends TCounterAttrs {
	value: number
	min?: number
	max?: number
	disabled?: boolean
	setCount: (cb: (num: number) => number) => void
	// Dispatch<SetStateAction<number>>
}

const Counter: FCC<IPCounter> = ({
	value=1,
	min=1,
	max=1,
	disabled,
	setCount= () => undefined,
	...rest
}) => {
	// const [count, setCount] = useState(value)
	const decrement = () => (value > min) && setCount((prevNum) => prevNum-1)
	const increment = () => (value < max) && setCount((prevNum) => prevNum+1)

	return (
		<X.Field
			disabled={ disabled }
			{ ...rest }
		>
			<X.FieldButton
				auto
				disabled={ disabled }
				value="decrement"
				onPress={ decrement }
			><Icon.Minus />
			</X.FieldButton>

			<X.FieldInput
				type="number"
				id="counter"
				tabIndex={-1}
				disabled={ disabled }
				value={ value }
				aria-label="counter"
				readOnly
			/>

			<X.FieldButton
				auto
				disabled={ disabled }
				value="increment"
				onPress={ increment }
			><Icon.Plus />
			</X.FieldButton>
		</X.Field>
	)
}

export { Counter }
