import { root_path } from '@/src/_.routes'

export const mock_hero = {
	// new: true,
	overline: 'New product',
	name: 'XX99 Mark II\nHeadphones',
	detail: `
		Experience natural, life-like audio and exceptional
		build quality made for the passionate music enthusiast.
	`,
	link: `${ root_path.product }/headphones/XX99MIIH`, // /model-id
	image: '/assets/images/home/hero-image.jpg',
}

export const mock_product = [
	{
		id: 1,
		name: 'ZX9\nSpeaker',
		detail: `
			Upgrade to premium speakers that are phenomenally
			built to deliver truly remarkable sound.
		`,
		image: '/assets/images/home/speaker-zx9.png',
		link: `${ root_path.product }/speakers`, // /model-id
		btn_variant: 'filled-alt' as const,
	},
	{
		id: 2,
		name: 'ZX7 Speaker',
		image: '/assets/images/home/speaker-zx7.jpg',
		link: `${ root_path.product }/speakers`, // /model-id
		btn_variant: 'outline' as const,
	},
	{
		id: 3,
		name: 'YX1 Earphones',
		image: '/assets/images/home/earphones-yx1.jpg',
		link: `${ root_path.product }/earphones`, // /model-id
		btn_variant: 'outline' as const,
	},
]
