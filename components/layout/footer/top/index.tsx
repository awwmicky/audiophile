import { Children } from 'react'
import { Icon, Link } from '@/components/blocks'
import { paths_nav } from '@/src'
import { contentTop } from './_.constants'
import * as X from './_.styles'

const Top = () => (
	<div className="bg-complement-2">
		<X.Frame>
			<X.TopLine />
			<Icon.Logo />

			<X.MenuList>
				{ Children.toArray(paths_nav.map((item) => (
					<li><Link isDark href={ item.link }>{ item.label }</Link></li>
				))) }
			</X.MenuList>

			<X.ClosingText base="true">{ contentTop.closing_text }</X.ClosingText>
			<X.Copyright base="true">{ contentTop.copyright }</X.Copyright>

			<X.SocialList>
				{ Children.toArray(contentTop.social_links.map((item) => (
					<li><Link isDark href={ item.link }>{ item.icon() }</Link></li>
				))) }
			</X.SocialList>
		</X.Frame>
	</div>
)

export { Top }
