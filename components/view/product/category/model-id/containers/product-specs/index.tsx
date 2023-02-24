import { Children } from 'react'
// import { Title } from '@/components/blocks'
import * as X from './_.styles'
import { mock_product } from '../../_.constants'

const ProductSpecs = () => (
	<X.FrameSpecs>
		<X.InnerBox>
			<X.Title h3>{ mock_product.specs.features.title }</X.Title>
			<X.Detail base="true">
				{ Children.toArray(mock_product.specs.features.description.map((item, index) => (
					<span>{ item }</span>
				)))}
			</X.Detail>
		</X.InnerBox>

		<X.InnerBox>
			<X.Title h3>{ mock_product.specs.deliverables.title }</X.Title>
			<X.List>
				{ Children.toArray(mock_product.specs.deliverables.list.map((item) => (
					<X.Item as="li" base="true"><b>{ item.pre }</b> { item.text }</X.Item>
				))) }
			</X.List>
		</X.InnerBox>
	</X.FrameSpecs>
)

export { ProductSpecs }
