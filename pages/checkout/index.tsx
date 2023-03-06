import type { NextPage } from 'next'
import { useEffect } from 'react'
import { RootLayer } from '@/components/layout'
import { Checkout } from '@/components/view'
import { useStoreActions } from '@/src/store'
import { runFireworks } from '@/src/_.utils'

// TODO: add 'orders=' to query

interface IPCheckout {
	status: "successful" | "cancelled"
}

const CheckoutPage: NextPage<IPCheckout> = ({ status }) => {
	const onEmptyCart = useStoreActions((action) => action.onEmptyCart)

	useEffect(() => {
		if (status !== 'successful') return
		// runFireworks()
		// onEmptyCart()
	}, [ status, onEmptyCart ])

	return (
		<RootLayer className="mt-4">
			<Checkout status={ status } />
		</RootLayer>
	)
}

CheckoutPage.getInitialProps = (ctx) => {
	let { status } = ctx.query as Pick<IPCheckout, 'status'>
	if (status !== 'successful') status = 'cancelled'
  return { status }
}

export default CheckoutPage
