import NextLink from 'next/link'
import { Layer } from '@/components/layout'
import * as Element from './_.container'

const DesignSystemPage = () => (
	<Layer className="my-40 flex gap-16 flex-col">
		<div className="flex gap-6 flex-col place-items-end text-end">
			<NextLink href="/" className="hover:text-accent-1 active:text-inherit">
				Go Back Home
			</NextLink>
			<h1 className="text-5xl font-bold tracking-widest uppercase">
				Design System
			</h1>
		</div>
		<Element.Color />
		<Element.Typography />
		{/* <Element.Buttons /> */}
		{/* <Element.Fields /> */}
	</Layer>
)

export { DesignSystemPage }
