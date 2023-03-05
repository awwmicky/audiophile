import tw, { styled } from 'twin.macro'
// import tw from 'twin.macro'
// import { motion } from 'framer-motion'

export const Section = tw.section``

export const Title = tw.h2`
	mb-14 text-3xl font-bold tracking-widest uppercase
`

export const VariantTitle = tw.p`capitalize font-bold`

export const ActionTitle = tw.p`capitalize opacity-50`

export const No = tw.span`mr-6 text-accent-1`

/* LAYOUT */

type PFlexBox = { alt?: '1' | '2' | '3' }
export const FlexBox = styled('div')<PFlexBox>(({ alt }) => [
	(alt === '1') && tw`
		flex gap-4 flex-wrap place-content-around
		sm:(flex-col place-content-start)
	`,
	(alt === '2') && tw`
		flex gap-8 flex-col w-fit text-center
		sm:[&>p]:text-left
	`,
	(alt === '3') && tw`
		flex gap-6 flex-col flex-wrap
		sm:(flex-row)
	`,
])

export const ColorGrid = tw.div`
	grid gap-6 [grid: auto-flow / minmax(100%, 1fr)]
	sm:[grid: auto-flow / repeat( auto-fit, minmax(325px, 1fr) )]
`

export const TypeFlex = tw.div`
	p-14 flex gap-4 flex-wrap bg-dominant-3 rounded-lg lg:[&>*]:flex-1
`

export const TypeGrid = tw.div`
	grid gap-6 [grid: auto-flow / minmax(100%, 1fr)]
	sm:[grid: auto-flow / repeat( auto-fit, minmax(375px, 1fr) )]
`

/* COLOR */

export const Card = tw.div`
	rounded-lg overflow-hidden
`

type PCardHeader = { colorValue?: string }
export const CardHeader = styled('div')<PCardHeader>(({ colorValue }) => [
	tw`h-24 border rounded-lg bg-white`,
	colorValue && `background-color: ${ colorValue }`,
])

export const CardBody = tw.ul`p-4`

export const CardItem = tw.li`font-bold`

export const Val = tw.span`opacity-50 font-normal pr-8`

/* TYPOGRAPHY */

export const TypeName = tw.p`font-default text-4xl uppercase font-bold`

export const TypeAlphabet = tw.p`
	inline-flex flex-col
	font-default text-xl font-bold opacity-50
	whitespace-pre-line
`

export const TypeSpecs = tw.p`opacity-50`

type PTypeSample = { variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'overline' | 'subtitle' | 'body' }
export const TypeSample = styled('p')<PTypeSample>(({ variant }) => [
	tw`font-default break-words`,
	(variant === 'h1') && tw`
		text-6xl font-bold
		uppercase leading-[58px] tracking-[2px]
	`,
	(variant === 'h2') && tw`
		text-5xl font-bold
		uppercase leading-[44px] tracking-[1.7px]
	`,
	(variant === 'h3') && tw`
		text-4xl font-bold
		uppercase leading-[36px] tracking-[1.15px]
	`,
	(variant === 'h4') && tw`
		text-3xl font-bold
		uppercase leading-[38px] tracking-[2px]
	`,
	(variant === 'h5') && tw`
		text-2xl font-bold
		uppercase leading-[33px] tracking-[1.7px]
	`,
	(variant === 'h6') && tw`
		text-lg font-bold
		uppercase leading-[24px] tracking-[1.3px]
	`,
	(variant === 'overline') && tw`
		text-accent-1 text-sm
		uppercase leading-[19px] tracking-[10px]
	`,
	(variant === 'subtitle') && tw`
		text-accent-1 text-xs font-bold
		uppercase leading-[25px] tracking-[1px]
	`,
])

/* BUTTONS */

type PButton = {
	variant?: 'filled' | 'filled-alt' | 'outline' | 'subtle'
	action?: 'default' | 'hover' | 'active' | 'loading' | 'disabled'
}
export const Button = styled('button')<PButton>(({ variant, action }) => [
	tw`rounded-sm text-xs uppercase font-bold cursor-pointer`,
	(variant === 'filled') && tw`
		p-[1em 2em] bg-accent-1 text-white
	`,
	(variant === 'filled' && action === 'hover') && tw`bg-accent-2`,
	(variant === 'filled' && action === 'active') && tw``,
	(variant === 'filled' && action === 'loading') && tw`
		relative text-transparent opacity-50 cursor-wait
		before:(content-['⬚'] absolute! left-0 right-0 text-black)
	`,
	(variant === 'filled' && action === 'disabled') && tw`opacity-50 cursor-not-allowed`,

	(variant === 'outline') && tw`
		p-[1em 2em] bg-white text-black border-2 border-black
	`,
	(variant === 'outline' && action === 'hover') && tw`bg-black text-white`,
	(variant === 'outline' && action === 'active') && tw``,
	(variant === 'outline' && action === 'loading') && tw`
		relative text-transparent opacity-50 cursor-wait
		before:(content-['⬚'] absolute! left-0 right-0 text-black)
	`,
	(variant === 'outline' && action === 'disabled') && tw`opacity-50 cursor-not-allowed`,

	(variant === 'subtle') && tw`
		text-black opacity-50 relative
		after:(content-['>'] absolute! left-[125%])
	`,
	(variant === 'subtle' && action === 'hover') && tw`after:left-[150%] text-accent-1 opacity-100`,
	(variant === 'subtle' && action === 'active') && tw``,
	(variant === 'subtle' && action === 'loading') && tw`
		relative text-transparent opacity-20 cursor-wait
		before:(content-['⬚'] absolute! left-0 right-0 text-black)
		after:hidden
	`,
	(variant === 'subtle' && action === 'disabled') && tw`opacity-20 cursor-not-allowed`,
])

/* FIELDS */

type PInputField = { action?: 'default' | 'active' | 'hover' | 'error' | 'disabled' }

export const FieldGroup = tw.div`relative flex`

/*  */

const TextFieldInputAttr = ({ action }: PInputField) => ({
	type: 'text',
	readOnly: true,
	disabled: action === 'disabled',
})

const TextFieldInputStyle = ({ action }: PInputField) => [
	tw`
		p-[1em 2em] w-full text-sm font-bold
		border border-dominant-4 rounded-lg outline-none
	`,
	(action === 'active') && tw`border-accent-1 caret-accent-1`,
	(action === 'error') && tw`border-red-500 [&~*]:text-red-500`,
	(action === 'disabled') && tw`bg-gray-300 opacity-50 cursor-not-allowed!`,
]

export const TextFieldInput = styled('input')
	.attrs<PInputField>(TextFieldInputAttr)<PInputField>(TextFieldInputStyle)

export const TextFieldLabel = tw.label`
	absolute -top-[50%] left-0 text-xs font-bold
`

export const TextFieldError = tw.span`
	absolute -top-[50%] right-0 text-xs font-bold w-max
`

/*  */

const RadioFieldInputAttr = ({ action }: PInputField) => ({
	type: 'radio',
	readOnly: true,
	checked: action === 'active',
	disabled: action === 'disabled',
})

const RadioFieldInputStyle = ({ action }: PInputField) => [
	tw`
		absolute left-6 self-center
		scale-150 checked:accent-accent-1
	`,
	(action === 'active') && tw``,
	(action === 'hover') && tw`[&+label]:border-accent-1`,
	(action === 'disabled') && tw`[&+label]:(bg-gray-300 opacity-50 cursor-not-allowed!)`,
]

export const RadioFieldInput = styled('input')
	.attrs<PInputField>(RadioFieldInputAttr)<PInputField>(RadioFieldInputStyle)

export const RadioFieldLabel = tw.label`
	p-[1em 2em 1em 4em] w-full
	text-sm font-bold text-left cursor-pointer
	border border-dominant-4 rounded-lg
	peer-checked:border-accent-1
`

/*  */

export const CounterFieldBox = styled('div')<PInputField>(({ action }) => [
	tw`
		flex w-[150px] [&>*]:w-1/3 bg-dominant-3
		border border-transparent rounded-lg overflow-hidden
	`,
	(action === 'active') && tw`[&>input]:(border border-accent-1 rounded-lg caret-accent-1)`,
	(action === 'hover') && tw`[&>button]:text-accent-1`,
	(action === 'disabled') && tw`bg-gray-300 [&>*]:(opacity-20 cursor-not-allowed!)`,
])

export const CounterFieldInput = styled('input').attrs({
	type: 'number',
	readOnly: true,
})(() => [
	tw`p-[0.75em 0.5em] bg-transparent font-bold text-center outline-none`,
])

export const CounterFieldButton = tw.button`
	p-[0.75em] text-sm font-bold
`
