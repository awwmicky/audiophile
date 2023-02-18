import NextLink, { type LinkProps } from 'next/link'
import type { FCC, AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react' // HTMLProps
import { forwardRef } from 'react'
import { Link as UILink, Button as UIButton } from '@nextui-org/react'
import tw, { styled } from 'twin.macro'
import { Icon } from '../'

type TAnchor = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps
interface IPLink extends TAnchor {
	// to?: string
	label?: string | ReactNode
	newTab?: boolean
	isActive?: boolean
	isDark?: boolean
	// prefetch?: boolean
}

type SAnchor = Pick<IPLink, 'isActive' | 'isDark'>

const AnchorStyle = ({ isActive, isDark }: SAnchor) => [
	tw`
		font-default text-sm font-bold uppercase leading-[25px] tracking-[2px]
		hover:text-accent-1 active:text-black
	`,
	isDark && tw`(text-white  active:text-white)`,
	isActive && tw`text-accent-1`,
]

// const Anchor = styled(UILink)<SAnchor>(AnchorStyle)
const Anchor = styled('a')(AnchorStyle)

export const Link = forwardRef<HTMLAnchorElement, IPLink>(({
  as, children, href, passHref, replace, scroll, shallow,
	label, newTab, isActive, isDark, ...rest
}, ref) => {
	if (newTab) return (
		<Anchor
			ref={ ref }
			href={ href }
			target="_blank"
			rel="noreferrer noopener"
			color="text"
			isDark={ isDark }
			isActive={ isActive }
			{ ...rest }
		>{ children || label }
		</Anchor>
	)

	return (
		<NextLink
			as={as}
			href={ href }
			passHref={ passHref }
			replace={ replace }
			scroll={ scroll }
			shallow={ shallow }
			legacyBehavior
		>
			<Anchor
				ref={ ref }
				color="text"
				isDark={ isDark }
				isActive={ isActive }
				{ ...rest }
			>{ children || label }
			</Anchor>
		</NextLink>
	)
})

Link.displayName = 'Link'

/*  */

type SButton = {
	variant?: 'filled' | 'outline' | 'subtle'
	disabled?: boolean
	loading?: 'true' | 'false' | boolean
}

const ButtonStyle = ({ variant, ...props }: SButton) => [
	// s1
	// px-6
	tw`
		bg-gray-300! text-black
		rounded-sm text-xs uppercase font-bold leading-[18px] tracking-[1px] cursor-pointer
		hover:bg-gray-400!
		active:bg-gray-300!
		disabled:(opacity-50 cursor-not-allowed)
	`,

	(props.loading) && tw`
		disabled:(opacity-50 cursor-wait)
		[& #text]:text-transparent
		relative [& #loading]:(absolute text-black)
		[& #icon]:hidden
	`,

	(variant === 'filled') && tw`
		bg-accent-1! text-white
		hover:bg-accent-2!
		active:bg-accent-1!
		[& #loading]:text-white
	`,

	(variant === 'outline') && tw`
		border-black border-solid	bg-transparent! text-black
		hover:(border-dominant-4 bg-dominant-4!)
		active:(border-black bg-black! text-white)
		disabled:opacity-20
	`,

	(variant === 'subtle') && tw`
		bg-transparent!
		font-default text-sm font-bold uppercase leading-[18px] tracking-[1px] opacity-50
		relative [& #icon]:(absolute right-10 text-accent-1)
		hover:(bg-transparent! text-accent-1)
		hover:[& #icon]:right-5
		active:[& #icon]:right-10
		disabled:opacity-20
	`,
]

const Button = styled(UIButton)<SButton>(ButtonStyle)
// export const Button = styled('button')(ButtonStyle)

type TButton = ButtonHTMLAttributes<HTMLButtonElement> & SButton
interface IPLinkButton extends TButton {
	label?: string
}

// ref={ ref }
export const LinkButton: FCC<IPLinkButton> = ({
	children, label, variant, disabled, loading, ...rest
}) => (
	<Button variant={ variant } disabled={ disabled }>
		<b id="text">{ children ?? label }</b>
		{ (variant === 'subtle') && <Icon.RightArrow id="icon" />}
		{ loading && <Icon.Loading id="loading" /> }
	</Button>
)

// export const LinkButton_ = forwardRef<HTMLAnchorElement, IPLink>(({
//   as, children, href, passHref, replace, scroll, shallow,
// 	label, newTab, isActive, isDark, ...rest
// }, ref) => {
// 	// return <a href="#">link</a>
// 	return (
// 		<NextLink
// 			as={as}
// 			href={ href }
// 			passHref={ passHref }
// 			replace={ replace }
// 			scroll={ scroll }
// 			shallow={ shallow }
// 			legacyBehavior
// 		>
// 			<LinkButton
// 				ref={ ref }
// 				// isDark={ isDark }
// 				// isActive={ isActive }
// 				// { ...rest }
// 			>
// 				<b id="text">{ children || label }</b>
// 				<Icon.RightArrow id="icon" />
// 				<Icon.Loading id="loading" />
// 			</LinkButton>
// 		</NextLink>
// 	)
// })


// LinkButton_.displayName = 'LinkButton'
