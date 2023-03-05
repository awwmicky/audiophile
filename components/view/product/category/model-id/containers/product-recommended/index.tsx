// import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { type FC, Children } from 'react'
import { Title, Button } from '@/components/blocks'
import { root_path } from '@/src/_path.routes'
import { IDetailItem } from '@/types'
import * as X from './_.styles'
import { copy, mock_product } from '../../_.constants'

interface IPProductRecommended {
	recommended: Pick<IDetailItem, 'recommended'>
}

const ProductRecommended: FC<IPProductRecommended> = ({
	recommended
}) => {
	const navigate = useRouter().push

	return (
		<X.FrameRecommended>
			<Title h3>{ copy.recommended_title }</Title>
			<X.List>
				{ Children.toArray(mock_product.recommended.map((item, index) => (
					<X.Card>
						<X.ImageBox>
							<X.Image src={ item.image } alt={`Product-${index}`} />
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
		</X.FrameRecommended>
	)
}

export { ProductRecommended }
