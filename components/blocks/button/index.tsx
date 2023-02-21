import type { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from 'react' // HTMLProps
import { forwardRef } from 'react'
import type { AsProp } from '@nextui-org/react'
import { Icon } from '../'
import { FrameButton, type TButtonStyle } from './_.styles'

type TButtonAttrs = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & TButtonStyle & AsProp
interface IPButton extends TButtonAttrs {
	label?: string | ReactNode
}

const Button = forwardRef<HTMLButtonElement, IPButton>(({
	children, label, variant, disabled, loading,
	...rest
}, ref) => (
	<FrameButton
		ref={ ref }
		auto
		// color="default"
		variant={ variant }
		disabled={ loading || disabled }
		loading={ loading }
		{ ...rest }
	>
		<span id="text">{ children ?? label }</span>
		{ loading && <Icon.Loading id="loading" /> }
	</FrameButton>
))

Button.displayName = 'Button'

export { Button }
