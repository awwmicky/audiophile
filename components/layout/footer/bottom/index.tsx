import { Children } from 'react'
import { Layer } from '@/components/layout'
import { content } from './_.constants'
import * as X from './_.styles'

const Bottom = () => (
	<Layer className="s1">
		<X.Frame>
			<X.Group>
				<X.Title text={ content.text.techUsed } />
				<X.List>
					{ Children.toArray(content.technologies.map((item) => (
						<li><X.Link title={ item.title } href={ item.link } open>{ item.icon() }</X.Link></li>
					))) }
				</X.List>
			</X.Group>

			<X.Group>
				<X.Title text={ content.text.moreInfo } />
				<X.List>
					{ Children.toArray(content.moreInfo.map((item) => (
						<>
							{ item.title === 'Repository' && <hr /> }
							<li><X.Link title={ item.title } href={ item.link } open>{ item.icon() }</X.Link></li>
						</>
					))) }
				</X.List>
			</X.Group>
		</X.Frame>

		<X.ClosingText>
			<code>{ content.text.madeBy }</code>
		</X.ClosingText>
	</Layer>
)

export { Bottom }
