import { Children } from 'react'
import { path } from '@/src'

const content = [
	{ image: '/', title: 'Headphones', link: `${ path.product }/headphone` },
	{ image: '/', title: 'Speakers', link: `${ path.product }/speakers` },
	{ image: '/', title: 'Earphones', link: `${ path.product }/earphones` },
]

const Category = () => (
	<div>
		{ Children.toArray(content.map((item) => (
			<div>
				<img src={ item.image } alt={`Category-${ item.title }`} />
				<p>{ item.title }</p>
				<a href={ item.link }>shop</a>
			</div>
		))) }
	</div>
)

export { Category }
