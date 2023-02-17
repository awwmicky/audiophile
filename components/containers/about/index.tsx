
const content = {
	image: '/public/assets/images/desktop/image-best-gear.jpg',
	title: 'Bringing you the best audio gear',
	description: `
		Located at the heart of New York City, Audiophile is the
		premier store for high end headphones, earphones, speakers,
		and audio accessories. We have a large showroom and luxury
		demonstration rooms available for you to browse and experience
		a wide range of our products. Stop by our store to meet
		some of the fantastic people who make Audiophile the best
		place to buy your portable audio equipment.
	`
}

const About = () => (
	<div>
		<img src={ content.image } alt="about-picture" />
		<h2>{ content.title }</h2>
		<p>{ content.description }</p>
	</div>
)

export { About }
