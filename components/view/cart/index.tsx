// import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Children } from 'react'
import { Button as UIButton } from '@nextui-org/react'
import { Counter } from '@/components/shared'
import { Title, Text, Icon, Button } from '@/components/blocks'
import { root_path, currency } from '@/src'
import { useStoreState, useStoreActions } from '@/src/store'
import { copy, buttonProp } from './_.constants'
import * as X from './_.styles'

const Cart = () => {
	const navigate = useRouter().push
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
					<Button
						variant="filled-alt"
						label={ copy.empty_cart.btn_text }
						onPress={ () => navigate(root_path.product) }
					/>
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
								onPress={ () => onRemoveFromCart({ id: index }) }
								data-remove-btn
							/>
							<Counter
								max={ item.qty }
								value={ item.cart_qty }
								setCount={ (cb) => onUpdateCartQty({ id: index, qty: cb(item.cart_qty) }) }
								data-counter-field
							/>
						</X.CartItem>
					))) }
				</X.CartList>

				<X.CartFooter>
					<Text base="true">{ copy.total_line }</Text>
					<Text base="true">{ currency.format(totalPrice) }</Text>
					<Button
						variant="filled"
						label={ copy.checkout_btn_text }
						onPress={ () => navigate(
							`${ root_path.checkout }?status=successful&orderId=1`
						) }
					/>
				</X.CartFooter>
			</>
			) }
		</X.FrameCart>
	)
}

export { Cart }
