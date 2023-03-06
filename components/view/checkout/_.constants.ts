
export const copy = {
	total_text: 'Grand Total',
	btn_text: 'Continue shopping',
	/*  */
	successful: {
		title: 'Thank you\nfor your order',
		description: 'You will receive an email confirmation shortly.',
	},
	cancelled: {
		title: 'Oh no,\nsomething went wrong',
		description: 'Try to buy again when you are ready to make a purchase.',
	},
}

export const mock_order = [
	{
		image: '/assets/images/temp/xx99-mark-two-headphones.png',
		name: 'XX99 Mark II',
		model: 'xx99-mk-ii',
		category: 'headphones' as const,
		price: 2999,
		qty: 1,
	},
	{
		image: '/assets/images',
		name: 'XX99 Mark I',
		model: 'xx99-mk-i',
		category: 'headphones' as const,
		price: 899,
		qty: 2,
	},
]
