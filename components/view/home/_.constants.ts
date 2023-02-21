import { root_path } from '@/src/_path.routes'

export const mock_hero = {
	overline: 'New product',
	title: 'XX99 Mark II\nHeadphones',
	description: `
		Experience natural, life-like audio and exceptional
		build quality made for the passionate music enthusiast.
	`,
	link: `${ root_path.product }/headphones`, // /model-id
	image: '/assets/images/hero-image.jpg',
	btn_variant: 'filled',
}

export const mock_product = [
	{
		id: 1,
		name: 'ZX9\nSpeaker',
		detail: `
			Upgrade to premium speakers that are phenomenally
			built to deliver truly remarkable sound.
		`,
		image: '/assets/images/home/desktop/image-speaker-zx9.png',
		link: `${ root_path.product }/speakers`, // /model-id
		btn_variant: 'filled-alt' as const,
	},
	{
		id: 2,
		name: 'ZX7 Speaker',
		image: '/assets/images/home/desktop/image-speaker-zx7.jpg',
		link: `${ root_path.product }/speakers`, // /model-id
		btn_variant: 'outline' as const,
	},
	{
		id: 3,
		name: 'YX1 Earphones',
		image: '/assets/images/home/desktop/image-earphones-yx1.jpg',
		link: `${ root_path.product }/earphones`, // /model-id
		btn_variant: 'outline' as const,
	},
]
