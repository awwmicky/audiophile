import { Children } from 'react'
import * as X from './_.styles'

const content = {
	image: '/assets/images/desktop/image-best-gear.jpg',
	// title: 'Bringing you the best audio gear',
	title: ['Bringing you the ', <span>best</span>, ' audio gear'],
	description: `
		Located at the heart of New York City, Audiophile is the
		premier store for high end headphones, earphones, speakers,
		and audio accessories. We have a large showroom and luxury
		demonstration rooms available for you to browse and experience
		a wide range of our products. Stop by our store to meet
		some of the fantastic people who make Audiophile the best
		place to buy your portable audio equipment.
	`,
}

const About = () => (
	<X.Frame>
		<X.Image src={ content.image } alt="about-picture" />
		<X.Box>
			<X.Title h2>{ Children.toArray(content.title) }</X.Title>
			<X.Description base>{ content.description }</X.Description>
		</X.Box>
	</X.Frame>
)

export { About }
