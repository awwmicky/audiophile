import { Children } from 'react'
import * as X from './_.styles'
import { mock_product } from '../../_.constants'

const ProductGallery = () => (
	<X.FrameGallery>
		{ Children.toArray(mock_product.gallery.map((item, index) => (
			<X.ImageBox>
				<X.Image src={ item } alt={`Gallery-${ index }`} />
			</X.ImageBox>
		))) }
	</X.FrameGallery>
)

export { ProductGallery }
