import { Button as UIButton } from '@nextui-org/react'
import tw, { styled } from 'twin.macro'

export type TButtonStyle = {
	variant?: 'default' | 'filled' | 'filled-alt' | 'outline' | 'subtle'
	loading?: 'true' | 'false' | boolean
	disabled?: boolean
}

// px-6
const ButtonStyle = ({ variant, loading }: TButtonStyle) => [
	tw`
		bg-gray-300 text-black [&>*]:z-0!
		rounded-sm text-xs uppercase font-bold leading-[18px] tracking-[1px] cursor-pointer
		hover:bg-gray-500
		active:bg-gray-300
		disabled:(opacity-50 cursor-not-allowed)
		[& #loading]:text-black
	`,

	(variant === 'filled') && tw`
		bg-accent-1 text-white
		hover:bg-accent-2
		active:bg-accent-1
		[& #loading]:text-white
	`,

	(variant === 'filled-alt') && tw`
		bg-black text-white
		hover:bg-complement-4
		active:bg-black
		[& #loading]:text-white
	`,

	(variant === 'outline') && tw`
		border-black border-solid	bg-transparent text-black
		hover:(border-black bg-black text-white)
		active:(border-complement-3 bg-complement-3)
		disabled:opacity-20
		[& #loading]:text-white
	`,

	(loading === 'true') && tw`
		[& #text]:text-transparent
		relative [& #loading]:absolute
		disabled:(opacity-50 cursor-wait)
	`,
]

export const FrameButton = styled(UIButton)<TButtonStyle>(ButtonStyle)
// export const FrameButton = styled('button')(ButtonStyle)
