
export const copy = {
	count_line: 'Cart',
	empty_cart: {
		title: 'Your shopping bag is empty',
		btn_text: 'Continue Shopping',
	},
	total_line: 'Total',
	btn_text: 'Checkout',
}

export const buttonProp = {
	auto: true,
	light: true,
	size: "sm" as const,
	color: "error" as const,
}

export const mock_cart = {
	cart_total: 3,
	list: [
		{
			image: '/assets/images',
			name: 'XX99 KM II',
			price: 2999,
			qty: 1,
		},
		{
			image: '/assets/images',
			name: 'XX99 KM II',
			price: 899,
			qty: 2,
		},
		{
			image: '/assets/images',
			name: 'XX99 KM II',
			price: 599,
			qty: 1,
		},
		{
			image: '/assets/images',
			name: 'XX99 KM II',
			price: 2999,
			qty: 1,
		},
		{
			image: '/assets/images',
			name: 'XX99 KM II',
			price: 899,
			qty: 2,
		},
		{
			image: '/assets/images',
			name: 'XX99 KM II',
			price: 599,
			qty: 1,
		},
		{
			image: '/assets/images',
			name: 'XX99 KM II',
			price: 2999,
			qty: 1,
		},
		{
			image: '/assets/images',
			name: 'XX99 KM II',
			price: 899,
			qty: 2,
		},
		{
			image: '/assets/images',
			name: 'XX99 KM II',
			price: 599,
			qty: 1,
		},
	],
	subtotal: 0,
	btn_text: 'Checkout',
}
