import { useRouter } from 'next/router'
import { RootLayer } from '@/components/layout'
import { About, Category } from '@/components/containers'
import { CategoryTop, CategoryItem } from '@/components/view'

const ProductCategoryPage = () => {
	const { category } = useRouter().query

	return (
		<RootLayer>
			<CategoryTop title={ category } />
			<CategoryItem />
			<Category />
			<About />
		</RootLayer>
	)
}

export default ProductCategoryPage
