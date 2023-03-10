import { type FC, useState } from 'react'
import { Counter } from '@/components/shared/field'
import { Text, Button } from '@/components/blocks'
import { useStoreActions } from '@/src/store'
import { currency } from '@/src/_utils'
import type { IDetailItem } from '@/types'
import * as X from './_.styles'
import { copy, mock_product } from '../../_.constants'

interface IPProductDetails {
	modelId?: string | string[]
	details: Pick<IDetailItem, 'details'>
}

const ProductDetails: FC<IPProductDetails> = ({
	modelId,
	// details
}) => {
	const [ cartQty, setCartQty ] = useState(1)
	const onAddtoCart = useStoreActions((state) => state.onAddToCart)

	return (
		<X.FrameDetails>
			<X.ImageBox>
				<X.Image src={ mock_product.details.image } alt="Product"	/>
			</X.ImageBox>

			<X.ContentBox>
				{ mock_product.details?.new && (
					<X.Overline overline="true">{ copy.details.overline }</X.Overline>
				)}
				<X.Name h2>{ mock_product.details.name }</X.Name>
				<X.Details base="true">{ mock_product.details.description }</X.Details>
				<X.Price>{ currency.format(mock_product.details.price) }</X.Price>

				{ !mock_product.details.qty ? (
					<Text>{ copy.details.sold_text }</Text>
				) : (
					<X.ActionBox>
						<Counter
							value={ cartQty }
							max={ mock_product.details.qty }
							setCount={ setCartQty }
						/>
						<Button
							variant="filled"
							label={ copy.details.btn_text }
							onPress={ () => onAddtoCart({ product: mock_product.details, qty: cartQty }) }
						/>
					</X.ActionBox>
				)}

				<small>
					model-id :: <b>{ modelId }</b>
				</small>
			</X.ContentBox>
		</X.FrameDetails>
	)
}

export { ProductDetails }
