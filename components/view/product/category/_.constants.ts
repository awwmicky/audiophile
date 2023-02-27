import { root_path } from '@/src/_path.routes'

export const mock_category = [
	{
		id: 1,
		overline: 'New Product',
		name: 'XX99 Mark II\nHeadphones',
		detail: `
			The new XX99 Mark II headphones is the pinnacle of
			pristine audio. It redefines your premium headphone
			experience by reproducing the balanced depth
			and precision of studio-quality sound.
		`,
		link: `${ root_path.product }/headphones`, // /model-id
		image: '/assets/images'
	},
	{
		id: 2,
		name: 'XX99 Mark II Headphones',
		detail: `
			The new XX99 Mark II headphones is the pinnacle of
			pristine audio. It redefines your premium headphone
			experience by reproducing the balanced depth
			and precision of studio-quality sound.
		`,
		link: `${ root_path.product }/headphones`, // /model-id
		image: '/assets/images'
	},
	{
		id: 3,
		name: 'XX99 Mark II Headphones',
		detail: `
			The new XX99 Mark II headphones is the pinnacle of
			pristine audio. It redefines your premium headphone
			experience by reproducing the balanced depth
			and precision of studio-quality sound.
		`,
		link: `${ root_path.product }/headphones`, // /model-id
		image: '/assets/images'
	},
]
