// import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Children } from 'react'
import { Title, Button } from '@/components/blocks'
import { mock_hero, mock_product } from './_.constants'
import * as X from './_.styles'
import { root_path } from '@/src/_.routes'

// const background_image = '/assets/images/home/pattern-circles.svg'
const overline_text = 'New product'

export const Hero = () => {
	const navigate = useRouter().push

	return (
		<div className="bg-complement-3">
			<X.FrameHero>
				<X.HeroContent>
					{ mock_hero?.new && (
						<X.HeroOverline overline="true" mode="light">{ overline_text }</X.HeroOverline>
					)}
					<Title h1 mode="light">{ mock_hero.name }</Title>
					<X.HeroDetail base="true" mode="light">{ mock_hero.description }</X.HeroDetail>
					<Button
						variant="filled"
						onPress={ () => navigate(
							`${ root_path.product }/${ mock_hero.category }/${ mock_hero.model }`
						) }
					/>
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
						<X.ProductImage src={ item.image } alt={`Highlight-${ index }`} />
						{/* { (index === 0) && <X.BgImage src={ background_image } alt="background" /> } */}
					</div>

					<div data-content>
						<Title h2>{ item.name }</Title>
						{ item?.description && (
							<X.ProductDetail>{ item.description }</X.ProductDetail>
						)}
						<Button
							variant={ (index === 0) ? 'filled-alt' : 'outline' }
							onPress={ () => navigate(
								`${ root_path.product }/${ item.category }/${ item.model }`
							) }
						/>
					</div>
				</X.ProductCard>
			))) }
		</X.FrameProduct>
	)
}
