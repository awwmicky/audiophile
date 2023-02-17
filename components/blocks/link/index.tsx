import NextLink, { type LinkProps } from 'next/link'
import type { AnchorHTMLAttributes, ReactNode } from 'react' // HTMLProps
import { forwardRef } from 'react'
import { Link as UILink } from '@nextui-org/react'
import tw, { styled } from 'twin.macro'

/*
- Link
- NextLink
- LinkButton
*/

type IPLink = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps & {
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
	font-default text-sm font-bold uppercase leading-[25px]! tracking-[2px]
	hover:text-accent-1
	`,
	isDark && tw`(text-white  active:text-white bg-black)`,
	isActive && tw`text-accent-1`,
]

export const Anchor = styled('a')(AnchorStyle)

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
