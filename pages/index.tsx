import { About, Category } from '@/components/containers'
import { RootLayer } from '@/components/layout'
import { Hero, Product } from '@/components/view'

const HomePage = () => (
	<RootLayer>
		<Hero />
		<Category />
		<Product />
		<About />
	</RootLayer>
)

export default HomePage
