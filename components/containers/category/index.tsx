import { Children } from 'react'
import { path } from '@/src'
import { Icon } from '@/components/blocks'
import * as X from './_.styles'

const content = [
	{ title: 'Headphones',	image: '/assets/images/desktop/image-category-thumbnail-headphones.png',	link: '/' /* `${ path.product }/headphone` */ },
	{ title: 'Speakers',		image: '/assets/images/desktop/image-category-thumbnail-speakers.png',		link: '/' /* `${ path.product }/speakers` */ },
	{ title: 'Earphones',		image: '/assets/images/desktop/image-category-thumbnail-earphones.png',		link: '/' /* `${ path.product }/earphones` */ },
]

const Category = () => (
	<X.Frame>
		{ Children.toArray(content.map((item) => (
			<X.Card href={ item.link }>
				<X.Image src={ item.image } alt={`Category-${ item.title }`} />
				<X.Category base>{ item.title }</X.Category>
				<X.Button>shop <Icon.RightArrow /></X.Button>
			</X.Card>
		))) }
	</X.Frame>
)

export { Category }
