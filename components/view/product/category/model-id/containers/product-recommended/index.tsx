import NextLink from 'next/link'
import { Children } from 'react'
import * as X from './_.styles'
import { Title, Button } from '@/components/blocks'
import { mock_product } from '../../_.constants'

const ProductRecommended = () => (
	<X.FrameRecommended>
		<Title h3>you may also like</Title>
		<X.List>
			{ Children.toArray(mock_product.recommended.list.map((item, index) => (
				<X.Card>
					<X.ImageBox>
						<X.Image src={ item.image } alt={`Product-${index}`} />
					</X.ImageBox>

					<Title h4>{ item.name }</Title>

					<NextLink href={ item.link }>
						<Button variant="filled" />
					</NextLink>
				</X.Card>
			))) }
		</X.List>
	</X.FrameRecommended>
)

export { ProductRecommended }
