
export interface IProduct {
	image: string
	name: string
	model: string
	category: 'speakers' | 'headphones' | 'earphones'
	description: string
	price: number
	qty: number
}

export interface IProductHighlight
	extends	Pick<IProduct, 'image' | 'name' | 'model'> {
		new?: boolean
		description?: string
}

export interface IProductDetail
	extends IProduct {
		new?: boolean
		feature_description: string
		deliverables_list: Array<{
			pre: string
			text: string
		}>
		gallery: Array<string>
		recommended_list: Array<{
			image: string
			name: string
			link: string
		}>
}
