// import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { type FC, Children } from 'react'
import { Title, Button } from '@/components/blocks'
import type { ICategoryItem } from '@/types'
import { root_path } from '@/src/_.routes'
// import { mock_category } from './_.constants'
import * as X from './_.styles'

interface IPCategoryTop {
	category?: string | string[]
}

interface IPCategory {
	productList: Array<ICategoryItem>
}

const overline_text = 'New Product'

export const CategoryTop: FC<IPCategoryTop> = ({ category }) => (
	<X.FrameTop>
		<Title h1 mode="light">{ category }</Title>
	</X.FrameTop>
)

export const CategoryItem: FC<IPCategory> = ({ productList }) => {
	const navigate = useRouter().push

	return (
		<X.FrameCategory>
			{ Children.toArray(productList.map(((item, index) => (
				<X.Section order={ index }>
					<X.ImageBox data-image>
						<X.Image src={ item.image } alt={`Product-${ index }`} />
					</X.ImageBox>

					<X.ContentBox data-content>
						{ item?.new && (
							<X.Overline overline="true">{ overline_text }</X.Overline>
						)}
						<X.Name h2>{ item.name }</X.Name>
						<X.Detail base="true">{ item.description }</X.Detail>
						<Button
							variant="filled"
							onPress={ () => navigate(
								`${ root_path.product }/${ item.category }/${ item.model }`
							) }
						/>
					</X.ContentBox>
				</X.Section>
			)))) }
		</X.FrameCategory>
	)
}
