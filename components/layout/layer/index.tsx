import type { FCC, HTMLAttributes } from 'react'
import tw from 'twin.macro'
import { Header } from '../header'
import { Footer } from '../footer'

// ref → interface IPLayer extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }
interface IPLayer extends HTMLAttributes<HTMLDivElement> {
	spacing?: 'top' | 'bottom' | 'both' | 'none'
}

export const Layer = tw.div`container mx-auto`

export const RootLayer: FCC<IPLayer> = ({
	children, className='', spacing='bottom', ...rest
}) => (
	<>
		<Header />
		<main
			className={
				(spacing === 'both') ? `my-28 ${ className }`
				: (spacing === 'bottom') ? `mb-28 ${ className }`
				: (spacing === 'top') ? `mt-28 ${ className }`
				: (spacing === 'none') ? `${ className }`
				: className
			} { ...rest }
		>{ children }
		</main>
		<Footer />
	</>
)
