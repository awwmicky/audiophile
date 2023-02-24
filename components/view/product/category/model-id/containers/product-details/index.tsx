import { type FCC } from 'react'
import { Counter } from '@/components/shared/field'
import { Button } from '@/components/blocks'
import { currency } from '@/src/_utils'
import * as X from './_.styles'
import { mock_product } from '../../_.constants'

interface IPProductDetails {
	modelId?: string | string[]
}

const ProductDetails: FCC<IPProductDetails> = ({ modelId }) => (
	<X.FrameDetails>
		<X.ImageBox>
			<X.Image
				src={ mock_product.details.image }
				alt={`Product-${ mock_product.details.name }`}
			/>
		</X.ImageBox>

		<X.ContentBox>
			{ mock_product.details?.overline && (
				<X.Overline overline="true">{ mock_product.details.overline }</X.Overline>
			)}
			<X.Name h2>{ mock_product.details.name }</X.Name>
			<X.Details base="true">{ mock_product.details.detail }</X.Details>
			<X.Price>{ currency.format(mock_product.details.price) }</X.Price>

			<X.ActionBox>
				<Counter value={ 1 } />
				<Button variant="filled" label={ mock_product.details.btn_text } />
			</X.ActionBox>

			<small>
				model-id :: <b>{ modelId }</b>
			</small>
		</X.ContentBox>
	</X.FrameDetails>
)

export { ProductDetails }
