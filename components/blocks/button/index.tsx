import type { FCC, ButtonHTMLAttributes } from 'react' // HTMLProps
import { forwardRef } from 'react'
import { Icon } from '../'
import { FrameButton, type TButtonStyle } from './_.styles'

type TButtonAttrs = ButtonHTMLAttributes<HTMLButtonElement> & TButtonStyle
interface IPButton extends TButtonAttrs {
	label?: string
}

const Button = forwardRef<HTMLButtonElement, IPButton>(({
	children, label, variant, disabled, loading,
	// ...rest
}, ref) => (
	<FrameButton
		ref={ ref }
		variant={ variant }
		disabled={ disabled }
		loading={ loading }
		// { ...rest }
	>
		<b id="text">{ children ?? label }</b>
		{ (variant === 'subtle') && <Icon.RightArrow id="icon" />}
		{ loading && <Icon.Loading id="loading" /> }
	</FrameButton>
))

Button.displayName = 'Button'

export { Button }
