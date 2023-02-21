import NextLink from 'next/link'
import { Children } from 'react'
import * as X from './_.styles'
import { mock_product } from '../../_.constants'

const ProductRecommended = () => (
	<div data-layer data-flex data-product-recommended>
		<h2>you may also like</h2>
		<div data-card>
			<div data-card-image>
				<img src="" alt="" />
			</div>

			<div data-card-box>
				<h3>name</h3>
				<NextLink href="">
					<button>see product</button>
				</NextLink>
			</div>
		</div>
	</div>
)

export { ProductRecommended }
