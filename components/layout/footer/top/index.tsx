import NextLink from 'next/link'
import { Children } from 'react'
import { Link } from '@nextui-org/react'
import { Icon } from '@/components/blocks'
import { Layer } from '@/components/layout'
import { contentTop } from './_.constants'
import * as X from './_.styles'

const Top = () => (
	<div className="bg-[#101010] text-white">
		<Layer>
			<X.TopLine />
			<X.Grid>
				<Icon.Logo />

				<X.MenuList>
					{ Children.toArray(contentTop.menu_links.map((item) => (
						<li><NextLink href={ item.link }>{ item.label }</NextLink></li>
					))) }
				</X.MenuList>

				<X.Text>{ contentTop.closing_text }</X.Text>
				<X.Copyright>{ contentTop.copyright }</X.Copyright>

				<X.SocialList>
					{ Children.toArray(contentTop.social_links.map((item) => (
						<li><Link href={ item.link }>{ item.icon() }</Link></li>
					))) }
				</X.SocialList>
			</X.Grid>
		</Layer>
	</div>
)

export { Top }
