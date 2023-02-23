import type { FCC } from 'react'
import { Children } from 'react'
import * as X from './_.styles'

// FIXME:

interface IPRadios {
	label?: string
	value: string
	options: Array<{
		value: string
		label: string
	}>
	// errorMessage?: string
	// disabled?: boolean
}

const Radios: FCC<IPRadios> = ({
	label='Label',
	value, options=[]
}) => (
	<X.Field label={ label } defaultValue={ value }>
		{ Children.toArray(options?.map((item) => (
			<X.FieldRadio
				value={ item.value }
			>{ item.label }
			</X.FieldRadio>
		))) }
	</X.Field>
)

export { Radios }
