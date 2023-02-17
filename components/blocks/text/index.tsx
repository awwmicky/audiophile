import { Text as UIText } from '@nextui-org/react'
// import type Props from '@nextui-org/react/types/text/text'
import tw, { styled } from 'twin.macro'

interface IPText {
	// alt?:
	// 	| 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	// 	| 'overline' | 'subtitle'
	overline?: boolean
	subtitle?: boolean
	default?: boolean
}

export const Title = styled(UIText)<IPText>((props) => [
	props.h1 && tw`font-default text-5xl font-bold uppercase leading-[58px] tracking-[2px]`,
	props.h2 && tw`font-default text-4xl font-bold uppercase leading-[44px] tracking-[1.7px]`,
	props.h3 && tw`font-default text-2xl font-bold uppercase leading-[36px] tracking-[1.15px]`,
	props.h4 && tw`font-default text-xl font-bold uppercase leading-[38px] tracking-[2px]`,
	props.h5 && tw`font-default text-lg font-bold uppercase leading-[33px] tracking-[1.7px]`,
	props.h6 && tw`font-default text-sm font-bold uppercase leading-[24px] tracking-[1.3px]`,
	props.default && props && tw`font-default text-[15px] leading-[25px] tracking-[0]`,
])

// Title.displayName = 'Title'

export const Text = styled(UIText)<IPText>((props) => [
	props.overline && tw`text-accent-1 text-sm uppercase leading-[19px] tracking-[10px]`,
	props.subtitle && tw`text-accent-1 text-xs font-bold uppercase leading-[25px] tracking-[1px]`,
	props.default && tw`font-default text-[15px] leading-[25px] tracking-[0]`,
])

// Text.displayName = 'Text'
