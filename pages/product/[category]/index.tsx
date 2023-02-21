import { useRouter } from 'next/router'
import { RootLayer } from '@/components/layout'
import { About, Category } from '@/components/containers'
import * as V from '@/components/view/product'

const ProductCategoryPage = () => {
	const { category } = useRouter().query

	return (
		<RootLayer>
			<V.CategoryTop category={ category } />
			<V.CategoryItem />
			<Category />
			<About />
		</RootLayer>
	)
}

export default ProductCategoryPage
