import NextLink from 'next/link'
import { type FCC, Children } from 'react'
import { Title, Button } from '@/components/blocks'
import { mock_category } from './_.constants'
import * as X from './_.styles'

interface IPCategoryTop {
	category?: string | string[]
}

export const CategoryTop: FCC<IPCategoryTop> = ({ category }) => (
	<X.FrameTop>
		<Title h1 mode="light">{ category }</Title>
	</X.FrameTop>
)

export const CategoryItem = () => (
	<X.FrameCategory>
		{ Children.toArray(mock_category.map(((item, index) => (
			<X.Section order={ index }>
				<X.ImageBox data-image>
					<X.Image src={ item.image } alt={`Product-${ index }`} />
				</X.ImageBox>

				<X.ContentBox data-content>
					{ item?.overline && (
						<X.Overline overline="true">{ item.overline }</X.Overline>
					)}
					<X.Name h2>{ item.name }</X.Name>
					<X.Detail base="true">{ item.detail }</X.Detail>
					<NextLink href={ item.link }>
						<Button variant="filled" />
					</NextLink>
				</X.ContentBox>
			</X.Section>
		)))) }
	</X.FrameCategory>
)
