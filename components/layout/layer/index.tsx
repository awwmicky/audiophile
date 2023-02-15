import type { FCC, HTMLAttributes } from 'react'
import tw from 'twin.macro'
import { Header, Footer } from '../'

// ref // interface IPLayer extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }
interface IPLayer extends HTMLAttributes<HTMLDivElement> { }

export const Layer = tw.div`container mx-auto`

export const RootLayer: FCC<IPLayer> = ({ children }) => (
	<>
		<Header />
		<main>{ children }</main>
		<Footer />
	</>
)
