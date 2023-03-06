
export const copy = {
	count_line: 'Cart',
	remove_btn_text: 'Remove All',
	empty_cart: {
		title: 'Your shopping bag is empty',
		btn_text: 'Continue Shopping',
	},
	total_line: 'Total',
	checkout_btn_text: 'Checkout',
}

export const buttonProp = {
	auto: true,
	light: true,
	size: "sm" as const,
	color: "error" as const,
}

export const mock_cart = [
	{
		image: '/assets/images/temp/xx99-mark-two-headphones.png',
		name: 'XX99 MK II',
		model: 'xx99-mk-ii',
		category: 'headphones' as const,
		description: '---',
		price: 2999,
		qty: 5,
		cart_qty: 2,
	},
	{
		image: '/assets/images/temp/xx99-mark-one-headphones.png',
		name: 'XX99 MK I',
		model: 'xx99-mk-i',
		category: 'headphones' as const,
		description: '---',
		price: 1999,
		qty: 3,
		cart_qty: 1,
	},
]
