import type { DetailedHTMLProps, AnchorHTMLAttributes, ReactNode } from 'react' // HTMLProps
import { forwardRef } from 'react'
import type { AsProp } from '@nextui-org/react'
import { Icon } from '../'
import { FrameLink, type TLinkStyle } from './_.styles'

type TLinkAttrs = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & TLinkStyle & AsProp
interface IPLink extends TLinkAttrs {
	label?: string | ReactNode
	newTab?: boolean
}

const Link = forwardRef<HTMLAnchorElement, IPLink>(({
	children, label, newTab, variant, mode, active,
	...rest
}, ref) => (
	<FrameLink
		ref={ ref }
		{ ...(!newTab) ? {} : {
			target: '_blank',
			rel: 'noreferrer noopener',
		}}
		// color="text"
		variant={ variant }
		mode={ mode }
		active={ active }
		{ ...rest }
	>
		{ children ?? label }
		{ (variant === 'alt') && <Icon.RightArrow id="icon" />}
	</FrameLink>
))

Link.displayName = 'Link'

export { Link }
