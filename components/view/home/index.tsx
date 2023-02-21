import NextLink from 'next/link'
import { Title, Button } from '@/components/blocks'
import { mock_hero, mock_product } from './_.constants'
import * as X from './_.styles'
import { Children } from 'react'

export const Hero = () => (
	<div className="bg-complement-3">
		<X.FrameHero>
			<X.HeroContent>
				<X.HeroOverline overline="true" mode="light">{ mock_hero.overline }</X.HeroOverline>
				<Title h1 mode="light">{ mock_hero.title }</Title>
				<X.HeroDetail base="true" mode="light">{ mock_hero.description }</X.HeroDetail>
				<NextLink passHref href={ mock_hero.link }>
					<Button variant="filled" />
				</NextLink>
			</X.HeroContent>
			<X.HeroImage src={ mock_hero.image } alt="Product-Hightlight" />
		</X.FrameHero>
	</div>
)

export const Product = () => (
	<X.FrameProduct>
		{ Children.toArray(mock_product.map((item, index) => (
			<X.ProductCard order={ index }>
				<div data-image>
					<X.ProductImage src={ item.image } alt={`Product-${ index }`} />
					{/* { (index === 0) && <img src="" alt="background" /> } */}
				</div>

				<div data-content>
					<Title h2>{ item.name }</Title>
					{ item?.detail && (
						<X.ProductDetail>{ item.detail }</X.ProductDetail>
					)}
					<NextLink passHref href={ item.link }>
						<Button variant={ item.btn_variant } />
					</NextLink>
				</div>
			</X.ProductCard>
		))) }
	</X.FrameProduct>
)
