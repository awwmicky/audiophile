import { useRouter } from 'next/router'
import { About, Category } from '@/components/containers'
import { RootLayer } from '@/components/layout'
import * as V from '@/components/view/product'

const ProductItemPage = () => {
	const { modelId } = useRouter().query

	return (
		<RootLayer>
			<V.ProductDetails modelId={ modelId } />
			<V.ProductSpecs />
			<V.ProductGallery />
			<V.ProductRecommended />
			<Category />
			<About />
		</RootLayer>
	)
}

export default ProductItemPage
