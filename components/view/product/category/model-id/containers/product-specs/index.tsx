import { type FC,Children } from 'react'
// import { Title } from '@/components/blocks'
import { IDetailItem } from '@/types'
import * as X from './_.styles'
import { copy, mock_product } from '../../_.constants'

interface IPProductSpecs {
	specs: Pick<IDetailItem, 'specs'>
}

const ProductSpecs: FC<IPProductSpecs> = ({
	// specs
}) => (
	<X.FrameSpecs>
		<X.InnerBox data-features>
			<X.Title h3>{ copy.features_title }</X.Title>
			<X.Detail base="true">{ mock_product.specs.features_description }</X.Detail>
		</X.InnerBox>

		<X.InnerBox data-deliverables>
			<X.Title h3>{ copy.deliverables_title }</X.Title>
			<X.List>
				{ Children.toArray(mock_product.specs.deliverables_list.map((item) => (
					<X.Item as="li" base="true"><b>{ item.amount }x</b> { item.label }</X.Item>
				))) }
			</X.List>
		</X.InnerBox>
	</X.FrameSpecs>
)

export { ProductSpecs }
