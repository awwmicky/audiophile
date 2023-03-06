// import NextLink from 'next/link'
import { useRouter } from 'next/router'
import type { FCC } from 'react'
import { Title, Text, Button, Icon } from '@/components/blocks'
import { root_path, currency } from '@/src'
import { copy, mock_order } from './_.constants'
import * as X from './_.styles'

const init_cart_total = mock_order.length

const init_subtotal = mock_order.reduce((acc, curr) => (
	acc + (curr.qty * curr.price)
), 0)

interface IPCheckout {
	status: "successful" | "cancelled"
}

const Checkout: FCC<IPCheckout> = ({ status }) => {
	const navigate = useRouter().push
	const orderStatus = (status === 'successful') && Boolean(mock_order.length)
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
							<X.Image src={ mock_order[0].image } alt="Order-0" />
						</X.ImageBox>
						<Title h5 data-name>{ mock_order[0].name }</Title>
						<Text base="true" data-quantity>x{ mock_order[0].qty }</Text>
						<Text base="true" data-price>{ currency.format(mock_order[0].price) }</Text>
						{ (init_cart_total > 1) && (
							<>
								<hr data-line />
								<Text base="true" data-other>
									and {`${ init_cart_total-1 } `}
									other item{ (init_cart_total-1 > 1) && '(s)' }
								</Text>
							</>
						)}
					</X.CardTop>

					<X.CardBottom>
						<Text base="true" mode="light">{ copy.total_text }</Text>
						<Text base="true" mode="light">{ currency.format(init_subtotal) }</Text>
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
