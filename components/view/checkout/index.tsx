// import NextLink from 'next/link'
import { useRouter } from 'next/router'
import type { FCC } from 'react'
import { Title, Text, Button, Icon } from '@/components/blocks'
import { root_path, currency } from '@/src'
import { copy } from './_.constants'
import * as X from './_.styles'
import { IOrder } from '@/types'

interface IPCheckout {
	status: "successful" | "cancelled"
	order?: IOrder
}

const Checkout: FCC<IPCheckout> = ({
	status, order
}) => {
	const navigate = useRouter().push
	const orderStatus = order && Boolean(order?.cart.length)
	const IconStatus = (status === 'successful') ? <Icon.Check size={ 40 } /> : <Icon.Cancelled size={ 40 } />

	return (
		<X.FrameCheckout>
			<X.Circle>{ IconStatus }</X.Circle>
			<Title h3>{ copy[status].title }</Title>
			<Text base="true">{ copy[status].description }</Text>

			{ orderStatus && (
				<X.OrderCard>
					<X.CardTop>
						<X.ImageBox data-image-box>
							<X.Image src={ order.cart[0].image } alt="Order-0" />
						</X.ImageBox>
						<Title h5 data-name>{ order.cart[0].name }</Title>
						<Text base="true" data-quantity>x{ order.cart[0].cart_qty }</Text>
						<Text base="true" data-price>{ currency.format(order.cart[0].price) }</Text>
						{ (order.cart_total > 1) && (
							<>
								<hr data-line />
								<Text base="true" data-other>
									and {`${ order.cart_total-1 } `}
									other item{ (order.cart_total-1 > 1) && '(s)' }
								</Text>
							</>
						)}
					</X.CardTop>

					<X.CardBottom>
						<Text base="true" mode="light">{ copy.total_text }</Text>
						<Text base="true" mode="light">{ currency.format(order.cart_subtotal) }</Text>
					</X.CardBottom>
				</X.OrderCard>
			)}

			<Button
				variant="filled"
				label={ copy.btn_text }
				onPress={ () => navigate(root_path.product) }
			/>
		</X.FrameCheckout>
	)
}

export { Checkout }
