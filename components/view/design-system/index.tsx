import { RootLayer } from '@/components/layout'
import * as Element from './_.container'
import { Name } from './_.styles'

const DesignSystemPage = () => (
	<RootLayer className="my-40 flex gap-16 flex-col">
		<Name>Design System</Name>
		<Element.Color />
		<Element.Typography />
		<Element.Buttons />
		<Element.Fields />
	</RootLayer>
)

export { DesignSystemPage }
