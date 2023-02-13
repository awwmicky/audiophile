import type { FCC, HTMLAttributes } from 'react'

// ref // interface IPRootLayer extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }
interface IPRootLayer extends HTMLAttributes<HTMLDivElement> { }

// export const RootLayer = tw.div`container`

export const RootLayer: FCC<IPRootLayer> = ({ children, className, ...rest }) => (
	<div className={`container mx-auto ${ className ?? '' }`} { ...rest }>{ children }</div>
)
