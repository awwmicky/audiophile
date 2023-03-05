import type { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from 'react' // HTMLProps
import { forwardRef } from 'react'
import type { ButtonProps } from '@nextui-org/react'
import { Icon } from '../'
import { FrameButton, type TButtonStyle } from './_.styles'

type TButtonAttrs =
	DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
	& TButtonStyle & ButtonProps
interface IPButton extends TButtonAttrs {
	label?: string | ReactNode
}

const DEFAULT_TEXT = 'See product'

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
		<span id="text">{ children ?? label ?? DEFAULT_TEXT }</span>
		{ loading && <Icon.Loading size="sm" type="points" id="loading" /> }
	</FrameButton>
))

Button.displayName = 'Button'

export { Button }
