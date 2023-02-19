import { Children } from 'react'
import { Link } from '@/components/blocks'
// import { path } from '@/src'
import { content } from './_.constants'
import * as X from './_.styles'

const link_text = 'Shop'

const Category = () => (
	<X.Frame>
		{ Children.toArray(content.map((item) => (
			<X.Card href={ item.link } className="group">
				<X.Image src={ item.image } alt={`Category-${ item.title }`} />
				<X.Category base="true">{ item.title }</X.Category>
				<Link variant="alt">{ link_text }</Link>
			</X.Card>
		))) }
	</X.Frame>
)

export { Category }
