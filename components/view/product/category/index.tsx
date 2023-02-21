import NextLink from 'next/link'
import { type FCC, Children } from 'react'
import { Title, Text, Button } from '@/components/blocks'
import { category_content_temp } from './_.constants'
import * as X from './_.styles'

interface ICategoryTop {
	title?: string | string[]
}

const btn_text = 'See Product'

export const CategoryTop: FCC<ICategoryTop> = ({ title }) => (
	<X.FrameTop>
		<Title h1 mode="light">{ title }</Title>
	</X.FrameTop>
)

export const CategoryItem = () => (
	<X.FrameCategory>
		{ Children.toArray(category_content_temp.map(((item, index) => (
			<X.Section order={ index }>
				<X.ImageBox>
					<X.Image src="/" alt={`Product-${ index }`} />
				</X.ImageBox>

				<X.ContentBox>
					{ item?.overline && (
						<X.Overline overline="true">{ item.overline }</X.Overline>
					)}
					<X.Name h2>{ item.name }</X.Name>
					<X.Detail base="true">{ item.detail }</X.Detail>
					<NextLink href={ item.link }>
						<Button variant="filled">{ btn_text }</Button>
					</NextLink>
				</X.ContentBox>
			</X.Section>
		)))) }
	</X.FrameCategory>
)
