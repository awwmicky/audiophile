import { Children } from 'react'
import { content } from './_.constants'
import * as X from './_.styles'

const About = () => (
	<X.Frame>
		<X.Image src={ content.image } alt="about-picture" />
		<X.Box>
			<X.Title h2>{ Children.toArray(content.title) }</X.Title>
			<X.Description base="true">{ content.description }</X.Description>
		</X.Box>
	</X.Frame>
)

export { About }
