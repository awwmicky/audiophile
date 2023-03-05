import { type FC, Children } from 'react'
import type { IDetailItem } from '@/types'
import * as X from './_.styles'
import { mock_product } from '../../_.constants'

interface IPProductGallery {
	gallery: Pick<IDetailItem, 'gallery'>
}

const ProductGallery: FC<IPProductGallery> = ({ gallery }) => (
	<X.FrameGallery>
		{ Children.toArray(mock_product.gallery.map((item, index) => (
			<X.ImageBox>
				<X.Image src={ item } alt={`Gallery-${ index }`} />
			</X.ImageBox>
		))) }
	</X.FrameGallery>
)

export { ProductGallery }
