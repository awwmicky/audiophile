import { RootLayer } from '@/components/layout'
import { Hero, Product } from '@/components/view'
import { About, Category } from '@/components/containers'

const IndexPage = () => (
	<RootLayer>
		<h1 className="text-center">Home Page</h1>
		<Hero />
		<Category />
		{/* <Product /> */}
		<About />
	</RootLayer>
)

export default IndexPage
