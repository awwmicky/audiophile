import NextLink from 'next/link'
import { Button } from '@/components/blocks'
import { hero_content_temp, product_content_temp } from './_.constants'
import * as X from './_.styles'

const btn_text = 'see product'

export const Hero = () => (
	<div className="bg-complement-3">
		<X.FrameHero>
			<X.HeroCopy>
				<X.HeroOverline overline="true" mode="light">{ hero_content_temp.overline }</X.HeroOverline>
				<X.HeroHeadline h1 mode="light">{ hero_content_temp.title }</X.HeroHeadline>
				<X.HeroDetail base="true" mode="light">{ hero_content_temp.description }</X.HeroDetail>
				<NextLink passHref href={ hero_content_temp.link }>
					<Button variant="filled">{ btn_text }</Button>
				</NextLink>
			</X.HeroCopy>
			<X.HeroImage src={ hero_content_temp.image } alt="Product-Hightlight" />
		</X.FrameHero>
	</div>
)

export const Product = () => (
	<X.FrameProduct>
		<X.ProductCard theme="1">
			<X.ProductCard theme="1a">
				<X.ProductImage src={ product_content_temp._1.image } alt="product-1" />
				{/* <img src="" alt="background" /> */}
			</X.ProductCard>

			<X.ProductCard theme="1b">
				<X.ProductTitle h2 mode="light">{ product_content_temp._1.name }</X.ProductTitle>
				<X.ProductDetail mode="light">{ product_content_temp._1.detail }</X.ProductDetail>
				<NextLink passHref href={ product_content_temp._1.link }>
					<Button variant="filled-alt">{ btn_text }</Button>
				</NextLink>
			</X.ProductCard>
		</X.ProductCard>

		<X.ProductCard theme="2">
			<X.ProductImage src={ product_content_temp._2.image } alt="product-2" />
			<X.ProductTitle h2>{ product_content_temp._2.name }</X.ProductTitle>
			<NextLink passHref href={ product_content_temp._2.link }>
				<Button variant="outline">{ btn_text }</Button>
			</NextLink>
		</X.ProductCard>

		<X.ProductCard theme="3">
			<X.ProductCard theme="3a">
				<X.ProductImage src={ product_content_temp._3.image } alt="product-3" />
			</X.ProductCard>

			<X.ProductCard theme="3b">
				<X.ProductTitle h2>{ product_content_temp._3.name }</X.ProductTitle>
				<NextLink passHref href={ product_content_temp._3.link }>
					<Button variant="outline">{ btn_text }</Button>
				</NextLink>
			</X.ProductCard>
		</X.ProductCard>
	</X.FrameProduct>
)
