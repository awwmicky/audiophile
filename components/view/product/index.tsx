import { useRouter } from 'next/router'
import { Children } from 'react'
import { Title, Button } from '@/components/blocks'
import { root_path } from '@/src/_.routes'
import { mock_list } from './_.constants'
import * as X from './_.styles'

const title_text = 'Our Products'

const ProductList = () => {
	const navigate = useRouter().push

	return (
		<X.FrameList>
			<Title h2>{ title_text }</Title>

			<X.List>
				{ Children.toArray(mock_list.map((item, index) => (
					<X.Card>
						<X.ImageBox>
							<X.Image src={ item.image } alt={`Product-${ index }`} />
						</X.ImageBox>

						<Title h4>{ item.name }</Title>

						<Button
							variant="filled"
							onPress={ () => navigate(
								`${ root_path }/${ item.category }/${ item.model }`
							) }
						/>
					</X.Card>
				))) }
			</X.List>
		</X.FrameList>
	)
}

export { ProductList }
export * from './category'
export * from './category/model-id'
