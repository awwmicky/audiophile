import { btn_text, hero_content_temp, product_content_temp } from './_.constants'
import * as X from './_.styles'

export const Hero = () => (
	<div className="bg-black">
		<X.FrameHero>
			<X.HeroCopy>
				<X.Overline overline="true">{ hero_content_temp.overline }</X.Overline>
				<X.Headline h1>{ hero_content_temp.title }</X.Headline>
				<X.Detail base="true">{ hero_content_temp.description }</X.Detail>
				{/* <a href={ hero_content_temp.link }>{ btn_text }</a> */}
			</X.HeroCopy>
			<X.HeroImage src={ hero_content_temp.image } alt="Product-Hightlight" />
		</X.FrameHero>
	</div>
)

export const Product = () => (
	<section>
		<div data-box="1">
			<img src={ product_content_temp._1.image } alt="product-1" />
			<h3>{ product_content_temp._1.name }</h3>
			<a href={ product_content_temp._1.link }>{ btn_text }</a>
		</div>

		<div data-box="2">
			<img src={ product_content_temp._2.image } alt="product-2" />
			<h3>{ product_content_temp._2.name }</h3>
			<a href={ product_content_temp._2.link }>{ btn_text }</a>
		</div>

		<div data-box="3">
			<img src={ product_content_temp._3.image } alt="product-3" />
			<div>
				<h3>{ product_content_temp._3.name }</h3>
				<a href={ product_content_temp._3.link }>{ btn_text }</a>
			</div>
		</div>
	</section>
)
