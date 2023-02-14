import type { FCC, HTMLAttributes } from 'react'
import { Header, Footer } from '../'

// ref // interface IPLayer extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }
interface IPLayer extends HTMLAttributes<HTMLDivElement> { }

// export const RootLayer = tw.div`container`

export const Layer: FCC<IPLayer> = ({ children, className, ...rest }) => (
	<div className={`container mx-auto ${ className ?? '' }`} { ...rest }>{ children }</div>
)

export const RootLayer: FCC<IPLayer> = ({ children }) => (
	<>
		<Header />
		<main>{ children }</main>
		<Footer />
	</>
)
