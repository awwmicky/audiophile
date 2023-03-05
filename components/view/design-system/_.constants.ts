
export const colors = [
	{ hex: '#D87D4A', rgb: '216, 125, 74',  hsl: '22, 65%, 57%' },
	{ hex: '#FBAF85', rgb: '251, 175, 133', hsl: '21, 94%, 75%' },
	{ hex: '#000000', rgb: '0, 0, 0',       hsl: '0, 0%, 0%' },
	{ hex: '#101010', rgb: '16, 16, 16',    hsl: '0, 0%, 6%' },
	{ hex: '#FFFFFF', rgb: '255, 255, 255', hsl: '0, 0%, 100%' },
	{ hex: '#FAFAFA', rgb: '250, 250, 250', hsl: '0, 0%, 98%' },
	{ hex: '#F1F1F1', rgb: '241, 241, 241', hsl: '0, 0%, 95%' },
]

export const typography = {
	typeface: {
		name: 'manrope',
		alphabet: [
			'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z \n',
			'a b c d e f g h i j k l m n o p q r s t u v w x y z \n',
			'1 2 3 4 5 6 7 8 9 0 ! @ # $ % ^ & * ( ) _ +',
		],
	},
	type_scale: {
		h1: {
			specs: 'H1 - Manrope Bold - 56px (All Upper, 58px Leading, 2px Tracking)',
			sample: 'morbi interdum mollis sapien',
		},
		h2: {
			specs: 'H2 - Manrope Bold - 40px (All Upper, 44px Leading, 1.5px Tracking)',
			sample: 'donec nec justo eget felis facilisis',
		},
		h3: {
			specs: 'H3 - Manrope Bold - 32px (All Upper, 36px Leading, 1.15px Tracking)',
			sample: 'nunc sem lacus accum',
		},
		h4: {
			specs: 'H4 - Manrope Bold - 28px (All Upper, 38px Leading, 2px Tracking)',
			sample: 'interdum consectetuer',
		},
		h5: {
			specs: 'H5 - Manrope Bold - 24px (All Upper, 33px Leading, 1.7px Tracking)',
			sample: 'nascetur ridiculus mus',
		},
		h6: {
			specs: 'H6 - Manrope Bold - 18px (All Upper, 24px Leading, 1.3px Tracking)',
			sample: 'natoque penatibus et',
		},
		overline: {
			specs: 'Overline - Manrope Regular - 14px (All Upper, 19px Leading, 10px Tracking)',
			sample: 'LOREM IPSUM',
		},
		subtitle: {
			specs: 'Subtitle - Manrope Bold - 13px (All Upper, 25px Leading, 1px Tracking)',
			sample: 'fusce ut est sed dolor gravida convallis',
		},
		body: {
			specs: 'Body - Manrope Medium - 15px (25px Leading)',
			sample: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		},
	},
}

// 15 => 3 * 5
export const buttons = {
	variant: [
		{ name: 'filled', label: 'click here' } as const,
		{ name: 'filled-alt', label: 'checkout' } as const,
		{ name: 'outline', label: 'see product' } as const,
		{ name: 'subtle', label: 'shop' } as const,
	],
	action: [
		'default' as const,
		'hover' as const,
		'active' as const,
		'disabled' as const,
		'loading' as const,
	],
}

// 12 => 3 * 4
export const fields = [
	{
		type: 'text',
		label: 'name',
		placeholder : 'enter name here',
		error: 'wrong format',
		actions: [
			{ name: 'default' as const, value: '', },
			{ name: 'active' as const, value: 'Zoda', },
			{ name: 'error' as const, value: '!@#$...', },
			{ name: 'disabled' as const, value: '', },
		],
	},
	{
		type: 'radio',
		actions: [
			{ name: 'default' as const, value: 'e-Money', },
			{ name: 'active' as const, value: 'e-Money', },
			{ name: 'hover' as const, value: 'e-Money', },
			{ name: 'disabled' as const, value: 'e-Money', },
		],
	},
	{
		type: 'counter',
		actions: [
			{ name: 'default' as const, value: '1', },
			{ name: 'active' as const, value: '1', },
			{ name: 'hover' as const, value: '1', },
			{ name: 'disabled' as const, value: '1', },
		],
	},
]
