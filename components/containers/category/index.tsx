import NextLink from 'next/link'
import { Children } from 'react'
import { Link } from '@/components/blocks'
import { content } from './_.constants'
import * as X from './_.styles'

const link_text = 'Shop'

const Category = () => (
	<X.Frame>
		{ Children.toArray(content.map((item) => (
			<NextLink href={ item.link }>
				<X.Card className="group">
					<X.Image src={ item.image } alt={`Category-${ item.title }`} />
					<X.Category base="true">{ item.title }</X.Category>
					<Link as="button" variant="alt">{ link_text }</Link>
				</X.Card>
			</NextLink>
		))) }
	</X.Frame>
)

export { Category }
