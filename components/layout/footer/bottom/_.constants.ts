import { InfoIcon, TechIcon } from '@/components/blocks'

export const copy = {
	more_info: 'For more info',
	tech_used: 'Technologies used',
	made_by: 'Concept project made by Michael Alvarez',
}

export const content = {
	more_info: [
		{ title: 'GitHub',			icon: InfoIcon.Github,			link: 'http://github.com/awwmicky' },
		{ title: 'LinkedIn',		icon: InfoIcon.Linkedin,		link: 'http://linkedin.com/in/awwmicky/' },
		{ title: 'Twitter', 		icon: InfoIcon.Twitter,			link: 'http://twitter.com/awwmicky/' },
		// { title: 'Instagram', 	icon: InfoIcon.Instagram, 	link: 'http://instagram.com/awwmicky/' },
		{ title: 'Portfolio', 	icon: InfoIcon.Portfolio,		link: 'https://aww-micky.web.app/' },
		{ title: 'Repository',	icon: InfoIcon.Repository,	link: 'https://github.com/awwmicky/audiophile' },
	],

	technologies: [
		{ title: 'Next.js',				icon: TechIcon.NextJs,			link: 'https://nextjs.org/' },
		{ title: 'TypeScript',		icon: TechIcon.TypeScript,	link: 'https://typescriptlang.org/' },
		{ title: 'React',					icon: TechIcon.React,				link: 'https://reactjs.org/' },
		{ title: 'Tailwind CSS',	icon: TechIcon.TailwindCss,	link: 'https://tailwindcss.com/' },
		{ title: 'Easy Peasy', 		icon: TechIcon.EasyPeasy,		link: 'https://easy-peasy.vercel.app/' },
		{ title: 'Stripe', 				icon: TechIcon.Stripe,			link: 'https://stripe.com/' },
	],
}
