// import { root_path } from '@/src/_.routes'

export const copy = {
	details: {
		overline: 'New product',
		sold_text: 'Sold out',
		btn_text: 'Add to cart',
	},
	features_title: 'Features',
	deliverables_title: 'In the box',
	recommended_title: 'You may also like',
}

export const mock_product = {
	details: {
		new: true,
		image: '/assets/images',
		name: 'XX99 Mark II\nHeadphones',
		model: 'xx99-mk-ii',
		category: 'headphones' as const,
		description: `
			The new XX99 Mark II headphones is the pinnacle of pristine audio.
			It redefines your premium headphone experience by reproducing
			the balanced depth and precision of studio-quality sound.
		`,
		price: 5555,
		qty: 5,
	},

	specs: {
		features_description: "\
			Featuring a genuine leather head strap and premium earcups,\
			these headphones deliver superior comfort for those who like\
			to enjoy endless listening. It includes intuitive controls\
			designed for any situation. Whether you're taking a business\
			call or just in your own personal space, the auto on/off and\
			pause features ensure that you'll never miss a beat."+
			"\n\n"+
			"The advanced Active Noise Cancellation with built-in equalizer\
			allow you to experience your audio world on your terms. It\
			lets you enjoy your audio in peace, but quickly interact with\
			your surroundings when you need to. Combined with Bluetooth\
			5.0 compliant connectivity and 17 hour battery life, the XX99\
			Mark II headphones gives you superior sound, cutting-edge\
			technology, and a modern design aesthetic.\
		",
		deliverables_list: [
			{ amount: 1, label: 'Headphone Unit' },
			{ amount: 2, label: 'Replacement Earcups' },
			{ amount: 1, label: 'User Manual' },
			{ amount: 1, label: '3.5mm 5m Audio Cable' },
			{ amount: 1, label: 'Travel Bag' },
		],
	},

	gallery: [
		'/assets/images',
		'/assets/images',
		'/assets/images',
	],

	recommended: [
		{
			image: '/assets/images',
			name: 'XX99 Mark I',
			model: 'xx99-mk-i',
			category: 'headphones' as const,
		},
		{
			image: '/assets/images',
			name: 'XX59',
			model: 'xx59',
			category: 'headphones' as const,
		},
		{
			image: '/assets/images',
			name: 'ZX9 Speaker',
			model: 'zx9-s',
			category: 'speakers' as const,
		},
	],
}
