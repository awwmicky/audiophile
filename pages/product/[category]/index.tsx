import type { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { RootLayer } from '@/components/layout'
import { About, Category } from '@/components/containers'
import * as V from '@/components/view/product'
import { mock_category } from '@/components/view/product/category/_.constants'
import type { ICategoryItem } from '@/types'

interface IPProductCategory {
	productList: Array<ICategoryItem>
}

const ProductCategoryPage: NextPage<IPProductCategory> = ({
	productList
}) => {
	const { category } = useRouter().query

	return (
		<RootLayer>
			<V.CategoryTop category={ category } />
			<V.CategoryItem productList={ productList } />
			<Category />
			<About />
		</RootLayer>
	)
}

const getServerSideProps: GetServerSideProps = async () => {
	const productList = mock_category

	if (!productList) return { notFound: true, props: null, }
	return { props: { productList }, }
}

export default ProductCategoryPage
export { getServerSideProps }
