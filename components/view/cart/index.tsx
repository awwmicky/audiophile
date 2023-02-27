import NextLink from 'next/link'
import { Children } from 'react'
import { Button as UIButton } from '@nextui-org/react'
// import { useStoreState } from 'easy-peasy'
import { Counter } from '@/components/shared'
import { Title, Text, Icon, Button } from '@/components/blocks'
import { root_path, currency } from '@/src'
import { useStoreState, useStoreActions } from '@/src/store'
import { copy, buttonProp } from './_.constants'
import * as X from './_.styles'

const Cart = () => {
	const { cartList, totalCartQty, totalPrice } = useStoreState((state) => ({
		cartList: state.cartList,
		totalCartQty: state.totalCartQty,
		totalPrice: state.totalPrice,
	}))
	const { onEmptyCart, onRemoveFromCart, onUpdateCartQty } = useStoreActions((action) => ({
		onEmptyCart: () => action.onEmptyCart(),
		onRemoveFromCart: action.onRemoveFromCart,
		onUpdateCartQty: action.onUpdateCartQty,
	}))

	return (
		<X.FrameCart>
			<X.CartHeader>
				<X.CartTotal h3>{ copy.count_line } <b>({ totalCartQty })</b></X.CartTotal>
				<UIButton { ...buttonProp } onPress={ onEmptyCart }>{ copy.remove_btn_text }</UIButton>
			</X.CartHeader>

			{ (!cartList.length) ? (
				<X.CartEmpty>
					<Title h4>{ copy.empty_cart.title }</Title>
					<NextLink href={ root_path.product }>
						<Button variant="filled-alt">{ copy.empty_cart.btn_text }</Button>
					</NextLink>
				</X.CartEmpty>
			) : (
			<>
				<X.CartList>
					{ Children.toArray(cartList?.map((item, index) => (
						<X.CartItem>
							<X.ImageBox data-image-box>
								<X.Image src={ item.image } alt={`Cart-${ index }`} />
							</X.ImageBox>
							<Title h5 data-name>{ item.name }</Title>
							<X.Price base="true" data-price>{ currency.format(item.price) }</X.Price>
							<UIButton
								{ ...buttonProp }
								icon={ <Icon.Remove size={16} /> }
								data-remove-btn
								onPress={ () => onRemoveFromCart({ id: index }) }
							/>
							<Counter
								max={ item.qty }
								value={ item.cart_qty }
								data-counter-field
								setCount={ (cb) => onUpdateCartQty({ id: index, qty: cb(item.cart_qty) }) }
							/>
						</X.CartItem>
					))) }
				</X.CartList>

				<X.CartFooter>
					<Text base="true">{ copy.total_line }</Text>
					<Text base="true">{ currency.format(totalPrice) }</Text>
					<Button variant="filled">{ copy.checkout_btn_text }</Button>
				</X.CartFooter>
			</>
			) }
		</X.FrameCart>
	)
}

export { Cart }
