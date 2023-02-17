import { Children } from 'react'
import { Link } from '@/components/blocks'
import { contentBottom } from './_.constants'
import * as X from './_.styles'

const Bottom = () => (
	<div className="bg-[#101010]/40">
		<X.Frame>
				<X.Group>
					<X.Title>{ contentBottom.text.techUsed }</X.Title>
					<X.List>
						{ Children.toArray(contentBottom.technologies.map((item) => (
							<li><Link newTab isDark title={ item.title } href={ item.link }>{ item.icon() }</Link></li>
						))) }
					</X.List>
				</X.Group>

				<X.Group>
					<X.Title>{ contentBottom.text.moreInfo }</X.Title>
					<X.List>
						{ Children.toArray(contentBottom.moreInfo.map((item) => (
							<>
								{ item.title === 'Repository' && <hr /> }
								<li><Link newTab isDark title={ item.title } href={ item.link }>{ item.icon() }</Link></li>
							</>
						))) }
					</X.List>
				</X.Group>

				<X.ClosingText>
					<code>{ contentBottom.text.madeBy }</code>
				</X.ClosingText>
		</X.Frame>
	</div>
)

export { Bottom }
