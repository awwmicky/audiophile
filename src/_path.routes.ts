export const root_path = {
	home: 					'/' as const,
	product:				'/product' as const,
	cart: 					'/cart' as const,
	checkout: 			'/checkout' as const, // ?confirm= success | cancelled
	design_system: 	'/design-system' as const,
	error: 					'/*',
}

	//  (category='', id='') {
	// 	if (!category) return '/product' as const
	// 	const modelId = id ?? `/${ id }`
	// 	return `/product/${ category }${ modelId }` as const
	// 		// category = /headphones | /speakers | /earphones
	// 		// id = (product model)
	// },

export const paths_nav = [
	{ label: 'Home', 				link: root_path.home },
	{ label: 'Headphones',	link: `${ root_path.product }/headphones` as const },
	{ label: 'Speakers',		link: `${ root_path.product }/speakers` as const },
	{ label: 'Earphones',		link: `${ root_path.product }/earphones` as const },
]
