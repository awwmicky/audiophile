import { path } from '@/src/_path.routes'

export const hero_content_temp = {
	overline: 'new product',
	title: 'XX99 Mark II Headphones',
	description: `
		Experience natural, lifelike audio and exceptional
		build quality made for the passionate music enthusiast.
	`,
	link: `${ path.product }/[_model-id_]`,
	image: '/assets/images/hero-image.jpg',
	btn_variant: 'filled',
}

export const product_content_temp = {
	_1: {
		id: 1,
		name: 'ZX9 Speaker',
		detail: `
			Upgrade to premium speakers that are phenomenally
			built to deliver truly remarkable sound.
		`,
		image: '/assets/images/home/desktop/image-speaker-zx9.png',
		link: `${ path.product }/[_model-id_]`,
		btn_variant: 'filled-alt',
	},
	_2: {
		id: 2,
		name: 'ZX7 Speaker',
		image: '/assets/images/home/desktop/image-speaker-zx7.jpg',
		link: `${ path.product }/[_model-id_]`,
		btn_variant: 'outline',
	},
	_3: {
		id: 3,
		name: 'YX1 EARPHONES',
		image: '/assets/images/home/desktop/image-earphones-yx1.jpg',
		link: `${ path.product }/[_model-id_]`,
		btn_variant: 'outline',
	},
}
