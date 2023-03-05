// import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Children } from 'react'
import { Title, Button } from '@/components/blocks'
import { mock_hero, mock_product } from './_.constants'
import * as X from './_.styles'

// const background_image = '/assets/images/home/pattern-circles.svg'

export const Hero = () => {
	const navigate = useRouter().push

	return (
		<div className="bg-complement-3">
			<X.FrameHero>
				<X.HeroContent>
					<X.HeroOverline overline="true" mode="light">{ mock_hero.overline }</X.HeroOverline>
					<Title h1 mode="light">{ mock_hero.name }</Title>
					<X.HeroDetail base="true" mode="light">{ mock_hero.detail }</X.HeroDetail>
					<Button variant="filled" onPress={ () => navigate(mock_hero.link) } />
				</X.HeroContent>
				<X.HeroImage src={ mock_hero.image } alt="Product-Highlight" />
			</X.FrameHero>
		</div>
	)
}

export const Product = () => {
	const navigate = useRouter().push

	return (
		<X.FrameProduct>
			{ Children.toArray(mock_product.map((item, index) => (
				<X.ProductCard order={ index }>
					<div data-image>
						<X.ProductImage src={ item.image } alt={`Product-${ index }`} />
						{/* { (index === 0) && <X.BgImage src={ background_image } alt="background" /> } */}
					</div>

					<div data-content>
						<Title h2>{ item.name }</Title>
						{ item?.detail && (
							<X.ProductDetail>{ item.detail }</X.ProductDetail>
						)}
						<Button variant={ item.btn_variant } onPress={ () => navigate(item.link) } />
					</div>
				</X.ProductCard>
			))) }
		</X.FrameProduct>
	)
}
