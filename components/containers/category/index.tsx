import { Children } from 'react'
import { Button } from '@/components/blocks'
// import { path } from '@/src'
import { content } from './_.constants'
import * as X from './_.styles'

const Category = () => (
	<X.Frame>
		{ Children.toArray(content.map((item) => (
			<X.Card href={ item.link }>
				<X.Image src={ item.image } alt={`Category-${ item.title }`} />
				<X.Category base="true">{ item.title }</X.Category>
				<Button variant="subtle" label="shop" />
			</X.Card>
		))) }
	</X.Frame>
)

export { Category }
