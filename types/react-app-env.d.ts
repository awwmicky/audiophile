import { type PropsWithChildren } from 'react'

declare module 'react' {
	// type FCC<P = {}> = FunctionComponent<P>
	type FCC<P = {}> = (props: PropsWithChildren<P>, context?: any) => ReactElement | null;
}
