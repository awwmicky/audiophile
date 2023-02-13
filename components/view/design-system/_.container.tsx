"use client"

import { Children } from 'react'
import * as X from './_.styles'
import * as copy from './_.constants'

export const Color = () => (
	<X.Section>
		<X.Title><X.No>01</X.No> Colors</X.Title>

		<X.ColorGrid>
			{ Children.toArray(copy.colors.map((item) => (
				<X.Card>
					<X.CardHeader colorValue={ item.hex } />
					<X.CardBody>
						<X.CardItem><X.Val>HEX</X.Val> { item.hex }</X.CardItem>
						<X.CardItem><X.Val>RGB</X.Val> { item.rgb }</X.CardItem>
						<X.CardItem><X.Val>HSL</X.Val> { item.hsl }</X.CardItem>
					</X.CardBody>
				</X.Card>
			))) }
		</X.ColorGrid>
	</X.Section>
)

export const Typography = () => (
	<X.Section>
		<X.Title><X.No>02</X.No> Typography</X.Title>

		<X.TypeFlex>
			<X.TypeName>{ copy.typography.typeface.name }</X.TypeName>
			<X.TypeAlphabet>
				<span>{ copy.typography.typeface.alphabet.line1 }</span>
				<span>{ copy.typography.typeface.alphabet.line2 }</span>
				<span>{ copy.typography.typeface.alphabet.line3 }</span>
			</X.TypeAlphabet>
		</X.TypeFlex>
		<br />
		<X.TypeGrid>
			{ Children.toArray(Object.entries(copy.typography.type_scale).map(([key, val]) => (
				<div>
					<X.TypeSpecs>{ val.specs }</X.TypeSpecs>
					<X.TypeSample variant={ key as any }>{ val.sample }</X.TypeSample>
				</div>
			))) }
		</X.TypeGrid>
		<br />
		<small className="block text-center">
			<b>definition: </b>
			<span>line-height <i>(line spacing | leading)</i></span>; &nbsp;
			<span>letter-spacing <i>(character spacing | tracking)</i></span>;
		</small>
		<br />
	</X.Section>
)

export const Buttons = () => (
	<X.Section>
		<X.Title><X.No>03</X.No> Buttons</X.Title>

		<X.FlexBox alt="1">
			{ Children.toArray(copy.buttons.variant.map((item, idx) => (
				<X.FlexBox alt="2">
					<X.VariantTitle>Button { idx+1 } - { item.name }</X.VariantTitle>
					<X.FlexBox alt="3">
						{ Children.toArray(copy.buttons.action.map((_item) => (
							<div>
								<X.Button variant={ item.name } action={ _item }>{ item.label }</X.Button>
								<X.ActionTitle>{ _item }</X.ActionTitle>
							</div>
						))) }
					</X.FlexBox>
				</X.FlexBox>
			))) }
		</X.FlexBox>
	</X.Section>
)

export const Fields = () => (
	<X.Section>
		<X.Title><X.No>04</X.No> Fields</X.Title>

		<X.FlexBox alt="1">
			{ Children.toArray(copy.fields.map((item) => (
				<X.FlexBox alt="2">
					<X.VariantTitle>Field - { item.type }</X.VariantTitle>
					<X.FlexBox alt="3">
						{ (item.type === 'text') ? (
							Children.toArray(item.actions.map((_item) => (
								<div>
									<TextField value={ _item.value } action={ _item.name } />
									<X.ActionTitle>{ _item.name }</X.ActionTitle>
								</div>
							)))
						) : (item.type === 'radio') ? (
							Children.toArray(item.actions.map((_item, idx) => (
								<div>
									<RadioField value={ `${_item.value+idx}` } action={ _item.name } />
									<X.ActionTitle>{ _item.name }</X.ActionTitle>
								</div>
							)))
						)	: (item.type === 'counter')	? (
							Children.toArray(item.actions.map((_item) => (
								<div>
									<CounterField value={ _item.value } action={ _item.name } />
									<X.ActionTitle>{ _item.name }</X.ActionTitle>
								</div>
							)))
						)	: null }
					</X.FlexBox>
				</X.FlexBox>
			))) }
		</X.FlexBox>
	</X.Section>
)

const TextField = ({ value='', action='' }) => (
	<X.FieldGroup>
		<X.TextFieldInput id={ value } placeholder="Enter name here" value={ value } action={ action as any } />
		<X.TextFieldLabel htmlFor="name">Name</X.TextFieldLabel>
		{ (action === 'error') && <X.TextFieldError>Wrong format</X.TextFieldError> }
	</X.FieldGroup>
)

const RadioField = ({ value='', action='' }) => (
	<X.FieldGroup>
		<X.RadioFieldInput id={ value } name="radio" value={ value } action={ action as any } className="peer" />
		<X.RadioFieldLabel htmlFor={ value }>e-Money</X.RadioFieldLabel>
	</X.FieldGroup>
)

const CounterField = ({ value='', action='' }) => {
	const isDisabled = action === 'disabled'
	return (
		<X.FieldGroup>
			<X.CounterFieldBox action={ action as any }>
				<X.CounterFieldButton disabled={ isDisabled }>-</X.CounterFieldButton>
				<X.CounterFieldInput value={ value } disabled={ isDisabled } />
				<X.CounterFieldButton disabled={ isDisabled }>+</X.CounterFieldButton>
			</X.CounterFieldBox>
		</X.FieldGroup>
	)
}
