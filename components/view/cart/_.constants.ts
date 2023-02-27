
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
		image: '/assets/images',
		name: 'XX99 MK II',
		model: 'xx99-mk-ii',
		category: 'speakers' as const,
		description: '---',
		price: 2999,
		qty: 5,
		cart_qty: 2,
	},
	{
		image: '/assets/images',
		name: 'XX99 MK IV',
		model: 'xx99-mk-iv',
		category: 'speakers' as const,
		description: '---',
		price: 399,
		qty: 1,
		cart_qty: 1,
	},
	{
		image: '/assets/images',
		name: 'XX99 MK III',
		model: 'xx99-mk-iii',
		category: 'speakers' as const,
		description: '---',
		price: 599,
		qty: 3,
		cart_qty: 3,
	},
	{
		image: '/assets/images',
		name: 'XX99 MK I',
		model: 'xx99-mk-i',
		category: 'speakers' as const,
		description: '---',
		price: 799,
		qty: 1,
		cart_qty: 1,
	},
]
