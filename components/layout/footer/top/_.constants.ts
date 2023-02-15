import { InfoIcon } from '@/components/blocks'

export const contentTop = {
	menu_links: [
		{ label: 'Home',				link: '/' },
		{ label: 'Headphones',	link: '/category/headphones' },
		{ label: 'Speakers',		link: '/category/speakers' },
		{ label: 'Earphones',		link: '/category/earphones' },
	],

	closing_text: `
		Audiophile is an all in one stop to fulfill your audio needs.
		We're a small team of music lovers and sound specialists who
		are devoted to helping you get the most out of personal audio.
		Come and visit our demo facility - we're open 7 days a week.
	`,

	copyright: 'Copyright 2021. All Rights Reserved',

	social_links: [
		{ title: 'Facebook',	icon: InfoIcon.FacebookAlt,		link: '#' },
		{ title: 'Twitter',		icon: InfoIcon.TwitterAlt,		link: '#' },
		{ title: 'Instagram',	icon: InfoIcon.InstagramAlt,	link: '#' },
	],
}
