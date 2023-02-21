import { root_path } from '@/src/_path.routes'

export const mock_product = {
	details: {
		overline: 'New product',
		name: 'XX99 Mark II\nHeadphones',
		details: `
			The new XX99 Mark II headphones is the pinnacle of pristine audio.
			It redefines your premium headphone experience by reproducing
			the balanced depth and precision of studio-quality sound.
		`,
		price: '$ 2,999',
		btn_text: 'Add to cart',
	},

	specs: {
		features: {
			title: 'Features',
			description: [
				`Featuring a genuine leather head strap and premium earcups,
				these headphones deliver superior comfort for those who like
				to enjoy endless listening. It includes intuitive controls
				designed for any situation. Whether you’re taking a business
				call or just in your own personal space, the auto on/off and
				pause features ensure that you’ll never miss a beat.`,

				`The advanced Active Noise Cancellation with built-in equalizer
				allow you to experience your audio world on your terms. It
				lets you enjoy your audio in peace, but quickly interact with
				your surroundings when you need to. Combined with Bluetooth
				5.0 compliant connectivity and 17 hour battery life, the XX99
				Mark II headphones gives you superior sound, cutting-edge
				technology, and a modern design aesthetic.`,
			],
		},
		list: {
			title: 'In the box',
			bullets: [
				{ pre: '1x', text: 'Headphone Unit' },
				{ pre: '2x', text: 'Replacement Earcups' },
				{ pre: '1x', text: 'User Manual' },
				{ pre: '1x', text: '3.5mm 5m Audio Cable' },
				{ pre: '1x', text: 'Travel Bag' },
			],
		},
	},

	gallery: [
		'/assets/images',
		'/assets/images',
		'/assets/images',
	],

	recommended: {
		title: 'You may also like',
		list: [
			{
				image: '/',
				name: 'ZX9 Speaker',
				link: `${ root_path.product }/speakers`,
			},
			{
				image: '/',
				name: 'ZX9 Speaker',
				link: `${ root_path.product }/speakers`,
			},
			{
				image: '/',
				name: 'ZX9 Speaker',
				link: `${ root_path.product }/speakers`,
			},
		],
	},
}
