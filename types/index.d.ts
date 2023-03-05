
export interface IProduct {
	image: string
	name: string
	model: string
	category: 'speakers' | 'headphones' | 'earphones'
	description: string
	price: number
	qty: number
}

export interface ICategoryItem
	extends IProduct {
		new?: boolean
}

export interface IDetailItem {
	details: IProduct & { new?: boolean },
	specs: {
		features_description: string,
		deliverables_list: Array<{
			amount: number,
			label: string,
		}>
	},
	gallery: Array<string>,
	recommended: Array<{
		image: string,
		name: string,
		model: string,
		category: 'speakers' | 'headphones' | 'earphones',
	}>,
}
