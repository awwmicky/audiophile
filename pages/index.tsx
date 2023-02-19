import { About, Category } from '@/components/containers'
import { RootLayer } from '@/components/layout'
import { Hero, Product } from '@/components/view'

const IndexPage = () => (
	<RootLayer>
		<Hero />
		<Category />
		<Product />
		<About />
	</RootLayer>
)

export default IndexPage
