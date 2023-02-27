import NextLink from 'next/link'
import { Title, Text, Button, Icon } from '@/components/blocks'
import { root_path, currency } from '@/src'
import { content, mock_order } from './_.constants'
import * as X from './_.styles'

// interface IPCheckout {
// 	status: "success" | "cancelled"
// 	order?: string
// }

const init_cart_total = mock_order.length

const init_subtotal = mock_order.reduce((acc, curr) => (
	acc + (curr.qty * curr.price)
), 0)

const CheckoutPage = () => (
	<X.FrameCheckout>
		<X.Circle><Icon.Check size={ 40 } /></X.Circle>
		<Title h3>{ content.title }</Title>
		<Text base="true">{ content.description }</Text>

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
				<Text base="true" mode="light">{ content.total_text }</Text>
				<Text base="true" mode="light">{ currency.format(init_subtotal) }</Text>
			</X.CardBottom>
		</X.OrderCard>

		<X.Link href={ root_path.home }>
			<Button variant="filled">{ content.btn_text }</Button>
		</X.Link>
	</X.FrameCheckout>
)

export { CheckoutPage }
