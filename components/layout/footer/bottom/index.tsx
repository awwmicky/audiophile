import { Children } from 'react'
import { Layer } from '@/components/layout'
import { contentBottom } from './_.constants'
import * as X from './_.styles'

const Bottom = () => (
		<Layer>
			<X.Grid>
				<X.Group>
					<X.Title text={ contentBottom.text.techUsed } />
					<X.List>
						{ Children.toArray(contentBottom.technologies.map((item) => (
							<li><X.Link title={ item.title } href={ item.link } open>{ item.icon() }</X.Link></li>
						))) }
					</X.List>
				</X.Group>

				<X.Group>
					<X.Title text={ contentBottom.text.moreInfo } />
					<X.List>
						{ Children.toArray(contentBottom.moreInfo.map((item) => (
							<>
								{ item.title === 'Repository' && <hr /> }
								<li><X.Link title={ item.title } href={ item.link } open>{ item.icon() }</X.Link></li>
							</>
						))) }
					</X.List>
				</X.Group>

				<X.ClosingText>
					<code>{ contentBottom.text.madeBy }</code>
				</X.ClosingText>
			</X.Grid>
		</Layer>
)

export { Bottom }
