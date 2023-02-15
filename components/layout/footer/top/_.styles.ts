import tw from 'twin.macro'

export const TopLine = tw.hr`
	h-1 w-28 bg-[#D87D4A]
	mx-auto md:mx-0
`

export const Grid = tw.div`
	pt-20 pb-12 grid gap-4 text-center
	[& a]:(text-white hover:text-[#D87D4A] active:text-white)
	[&>svg]:([grid-area: 1 / 1 / auto / auto] place-self-center)
	md:(grid-cols-2 text-start! [&>svg]:place-self-start!)
`

export const MenuList = tw.ul`
	m-0 [&>li]:mb-0 flex gap-6 flex-col
	uppercase font-bold
	md:([grid-area: 2 / 1 / auto / -1] flex-row)
	lg:([grid-area: 1 / 2 / auto / -1] place-content-end)
`

export const Text = tw.p`
	opacity-50
	md:[grid-area: 3 / 1 / auto / -1]
	lg:[grid-area: 2 / 1 / auto / auto]
`

export const Copyright = tw.span`
	font-bold opacity-50
	md:[grid-area: 4 / 1 / auto / 2]
	lg:[grid-area: 3 / 1 / auto / 2]
`

export const SocialList = tw.ul`
	m-0 [&>li]:mb-0 flex gap-6 place-content-center
	md:([grid-area: 4 / 2 / auto / -1] place-self-end)
	lg:[grid-area: 2 / 2 / auto / -1]
`
