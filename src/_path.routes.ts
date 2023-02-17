export const path = {
	home: 					'/' as const,
	product:				'/product' as const,
	//  (category='', id='') {
	// 	if (!category) return '/product' as const
	// 	const modelId = id ?? `/${ id }`
	// 	return `/product/${ category }${ modelId }` as const
	// 		// category = /headphones | /speakers | /earphones
	// 		// id = (product model)
	// },
	cart: 					'/cart' as const,
	checkout: 			'/checkout' as const, // ?confirm= success | cancelled
	design_system: 	'/design-system' as const,
	error: 					'/*',
}

export const paths_nav = [
	{ label: 'Home', 				link: path.home },
	{ label: 'Headphones',	link: `${ path.product }/headphones` as const },
	{ label: 'Speakers',		link: `${ path.product }/speakers` as const },
	{ label: 'Earphones',		link: `${ path.product }/earphones` as const },
]
