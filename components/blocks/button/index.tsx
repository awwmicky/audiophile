import type { FCC, ButtonHTMLAttributes } from 'react' // HTMLProps
import { Icon } from '../'
import { FrameButton, type TButtonStyle } from './_.styles'

type TButtonAttrs = ButtonHTMLAttributes<HTMLButtonElement> & TButtonStyle
interface IPButton extends TButtonAttrs {
	label?: string
}

// ref={ ref }
const Button: FCC<IPButton> = ({
	children, label, variant, disabled, loading,
	// ...rest
}) => (
	<FrameButton
		variant={ variant }
		disabled={ disabled }
		loading={ loading }
		// { ...rest }
	>
		<b id="text">{ children ?? label }</b>
		{ (variant === 'subtle') && <Icon.RightArrow id="icon" />}
		{ loading && <Icon.Loading id="loading" /> }
	</FrameButton>
)

export { Button }
