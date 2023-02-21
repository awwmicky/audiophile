import { type FCC } from 'react'
import * as X from './_.styles'
import { mock_product } from '../../_.constants'

interface IPProductDetails {
	modelId?: string | string[]
}

const ProductDetails: FCC<IPProductDetails> = ({ modelId }) => (
	<div data-layer data-flex data-product-detail>
		<div data-image-box>
			<img src="" alt="" />
		</div>

		<div data-content-box>
			<p data-overline>overline</p>
			<h2 data-name>name</h2>
			<p data-base>detail</p>
			<span data-price>price</span>
			<input data-counter type="text" />
			<pre>model-id :: { modelId }</pre>
		</div>
	</div>
)

export { ProductDetails }
