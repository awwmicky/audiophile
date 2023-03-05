import { Children } from 'react'
import { Link } from '@/components/blocks'
import { copy, content } from './_.constants'
import * as X from './_.styles'

const Bottom = () => (
	<div className="bg-complement-3">
		<X.Frame>
			<div>
				<X.Title>{ copy.techUsed }</X.Title>
				<X.List>
					{ Children.toArray(content.technologies.map((item) => (
						<li><Link newTab mode="light" title={ item.title } href={ item.link }>{ item.icon() }</Link></li>
					))) }
				</X.List>
			</div>

			<div>
				<X.Title>{ copy.moreInfo }</X.Title>
				<X.List>
					{ Children.toArray(content.moreInfo.map((item, index) => (
						<>
							{ (index === content.moreInfo.length-1) && <hr /> }
							<li><Link newTab mode="light" title={ item.title } href={ item.link }>{ item.icon() }</Link></li>
						</>
					))) }
				</X.List>
			</div>

			<X.ClosingText>
				<code>{ copy.madeBy }</code>
			</X.ClosingText>
		</X.Frame>
	</div>
)

export { Bottom }
