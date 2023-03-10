import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { RootLayer } from '@/components/layout'
import { Checkout } from '@/components/view'
import { useStoreState, useStoreActions } from '@/src/store'
import { runFireworks } from '@/src/_.utils'
import localforage from 'localforage'
import { IOrder } from '@/types'

// TODO: add 'orders=' to query

interface IPCheckout {
	status: "successful" | "cancelled"
	orderId: string
}

interface ILocalOrder {
	[key: string]: IOrder
}

const local = localforage.createInstance({
	driver: localforage.LOCALSTORAGE,
})

const CheckoutPage: NextPage<IPCheckout> = ({
	status, orderId
}) => {
	const [ order, setOrder ] = useState<IOrder>(null!)
	const cartList = useStoreState((state) => state.cartList)
	const onEmptyCart = useStoreActions((action) => action.onEmptyCart)

	useEffect(() => {
		if (status === 'successful' && cartList.length) {
			runFireworks()
			local.getItem<ILocalOrder>('ORDER').then((item) => {
				// const id = Object.keys(item || {}).length+1
				local.setItem('ORDER', { ...item, [1]: {
					cart: cartList,
					cart_total: cartList.length,
					cart_subtotal: cartList.reduce((acc, curr) => (
						acc + (curr.cart_qty * curr.price)
					), 0)
				} })
			}).catch((error) => console.warn('[reason]', error))
			onEmptyCart()
		}
	}, [ status, cartList, onEmptyCart ])

	useEffect(() => {
		if (!orderId) return
		(async () => {
			console.info('[order]', orderId)
			let allOrders = await local.getItem<ILocalOrder>('ORDER') || {}
			if (allOrders[orderId]) setOrder(allOrders[orderId])
		})()
	}, [ orderId ])

	return (
		<RootLayer className="mt-4">
			<Checkout status={ status } order={ order } />
		</RootLayer>
	)
}

CheckoutPage.getInitialProps = async (ctx) => {
	let { status, orderId } = ctx.query as {
		status: 'successful' | 'cancelled'
		orderId: string
	}
	if (status !== 'successful') status = 'cancelled'
  return { status, orderId }
}

export default CheckoutPage

/*
TEMPORARY ORDER_PRODUCT LIST
- if ('successful' & cartList)
	- create storage key'order_id'
	- set key'order_id' as { 1: cartList }
- if (order_id)
	- get key'order_id'
*/
