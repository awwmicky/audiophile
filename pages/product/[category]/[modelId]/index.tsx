import type { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { About, Category } from '@/components/containers'
import { RootLayer } from '@/components/layout'
import * as V from '@/components/view/product'
import type { IDetailItem } from '@/types'
import { mock_product } from '@/components/view/product/category/model-id/_.constants'

interface IPProductItem {
	details: Pick<IDetailItem, 'details'>
	specs: Pick<IDetailItem, 'specs'>
	gallery: Pick<IDetailItem, 'gallery'>
	recommended: Pick<IDetailItem, 'recommended'>
}

const ProductItemPage: NextPage<IPProductItem> = ({
	details, specs, gallery, recommended
}) => {
	const { modelId } = useRouter().query

	return (
		<RootLayer>
			<V.ProductDetails modelId={ modelId } details={ details } />
			<V.ProductSpecs specs={ specs } />
			<V.ProductGallery gallery={ gallery } />
			<V.ProductRecommended recommended={ recommended } />
			<Category />
			<About />
		</RootLayer>
	)
}

const getServerSideProps: GetServerSideProps = async () => {
	const { details, specs, gallery, recommended,	} = mock_product
		// as Pick<IDetailItem, 'details' | 'specs' | 'gallery' | 'recommended'>

	if (!details || !specs || !gallery || !recommended) return { notFound: true, props: null, }
	return { props: { details, specs, gallery, recommended }, }
}

export default ProductItemPage
export { getServerSideProps }


