import type { Action, Computed } from 'easy-peasy'
import { action, computed } from 'easy-peasy'
import { toast } from 'react-hot-toast'
import type { IProduct } from '@/types'
// import { mock_cart } from '@/components/view/cart/_.constants'

interface ICartItem extends IProduct {
	cart_qty: number
}

/*  */

export interface ICartModel {
	cartList: Array<ICartItem>
	totalCartQty: Computed<this, number>
	totalPrice: Computed<this, number>

	onEmptyCart: Action<this>
	onAddToCart: Action<this, { product: IProduct, qty?: number }>
	onUpdateCartQty: Action<this, { id: number, qty?: number }>
	onRemoveFromCart: Action<this, { id: number }>
}

const message = {
	issue1: (name: string) => toast(`${ name }\n is out of stock.`, { icon: '⚠' }),
	issue2: (name: string, qty: number) => toast(`${ name }\n has a max limit of ${ qty }.`, { icon: '⚠' }),
	success: (name: string, qty: number) => toast.success(`${ qty } ${ name }\nadded to the cart.`),
}

const initialCartState: Pick<ICartModel, 'cartList'> = {
	cartList: [],
}

const cartStore: ICartModel = {
	cartList: [],
	totalCartQty: computed((state) => (
		state.cartList.reduce((acc, curr) => (acc + curr.cart_qty), 0)
	)),
	totalPrice: computed((state) => (
		state.cartList.reduce((acc, curr) => (acc + (curr.cart_qty * curr.price)), 0)
	)),

	onEmptyCart: action((state) => ({
		...state,
		...initialCartState,
	})),

	onAddToCart: action((state, { product, qty=1 }) => {
		const cartId = state.cartList.findIndex((item) => (item.model === product.model))
		const cartItem = state.cartList[cartId]

		if (!cartItem) {
			if (!product.qty) { message.issue1(product.name); return }
			state.cartList.push({ ...product, cart_qty: qty })
		} else {
			if (cartItem.cart_qty + qty > product.qty) { message.issue2(product.name, product.qty); return }
			cartItem.cart_qty += qty
		}

		message.success(product.name, qty)
	}),

	onUpdateCartQty: action((state, { id, qty=1 }) => {
		const cartItem = state.cartList[id]
		if (!cartItem) return

		const diffQty = Math.abs(cartItem.cart_qty - qty)
		if (cartItem.cart_qty < qty) cartItem.cart_qty += diffQty
		if (cartItem.cart_qty > qty) cartItem.cart_qty -= diffQty
	}),

	onRemoveFromCart: action((state, { id }) => {
		delete state.cartList[id]
		state.cartList = state.cartList.filter(Boolean)
	}),
}

export { cartStore }
