import type { FCC, InputHTMLAttributes } from 'react'
import type { InputProps } from '@nextui-org/react'
import * as X from './_.styles'

// FIXME:

type TColor = { color?: "error" | "default" | "primary" | "secondary" | "success" | "warning" | undefined }
// type TInputAttrs = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type TInputAttrs = InputHTMLAttributes<HTMLInputElement> & TColor
interface IPInput extends TInputAttrs {
// interface IPInput {
	id?: string
	label?: string
	value: string
	errorMessage?: string
	// color?: TColor
	// disabled?: boolean
}

const Input: FCC<IPInput> = ({
	id='text-input',
	label='Label',
	placeholder='Enter Here',
	value, errorMessage,
	// ...rest
}) => {
	const status = (errorMessage) ? 'error' : (value) ? 'filled' : undefined
	const isError = (errorMessage) ? 'error' : 'default'

	return (
		<X.Field status={ status }>
			<X.FieldInput
				type="text"
				id={ id }
				placeholder={ placeholder }
				bordered
				// status="error"
				label={ label }
				color={ isError }
				helperText={ errorMessage }
				helperColor={ isError }
				value={ value }
				aria-label="text-input"
				// { ...rest }
			/>
		</X.Field>
	)
}

export { Input }
