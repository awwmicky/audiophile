import NextLink from 'next/link'
import { Children } from 'react'
import { Icon, Link } from '@/components/blocks'
import { paths_nav } from '@/src'
import { copy, content } from './_.constants'
import * as X from './_.styles'

const Top = () => (
	<div className="bg-complement-2">
		<X.Frame>
			<X.TopLine />
			<Icon.Logo />

			<X.MenuList>
				{ Children.toArray(paths_nav.map((item) => (
					<li>
						<NextLink passHref legacyBehavior href={ item.link }>
							<Link mode="light" href={ item.link }>{ item.label }</Link>
						</NextLink>
					</li>
				))) }
			</X.MenuList>

			<X.ClosingText base="true" mode="light">{ copy.closing_text }</X.ClosingText>
			<X.Copyright base="true" mode="light">{ copy.copyright }</X.Copyright>

			<X.SocialList>
				{ Children.toArray(content.social_links.map((item) => (
					<li><Link mode="light" href={ item.link }>{ item.icon() }</Link></li>
				))) }
			</X.SocialList>
		</X.Frame>
	</div>
)

export { Top }
