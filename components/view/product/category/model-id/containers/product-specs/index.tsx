import { Children } from 'react'
import * as X from './_.styles'
import { mock_product } from '../../_.constants'

const ProductSpecs = () => (
	<div data-layer data-flex data-product-specs>
		<div data-specs-box>
			<h3 data-title>feature title</h3>
			<p data-detail>feature detail</p>
		</div>

		<div data-specs-box>
			<h3 data-title>list title</h3>
			<ul>
				<li><span>list num</span> list detail</li>
			</ul>
			<p data-detail>list detail</p>
		</div>
	</div>
)

export { ProductSpecs }
