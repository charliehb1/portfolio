import { type NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import ColourCard from '~/components/ColourCard'
import ColourContainer from '~/components/ColourContainer'
import { ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import HorizontalContacts from '~/components/HorizontalContacts'
import { useEffect } from 'react'

const Home: NextPage = () => {
	const projects = [
		{
			title: 'PAPL - University Coursework',
			link: 'https://github.com/charliehb1/PAPLCW',
		},
		{
			title: 'Ethical Hacking 1 - University Coursework',
			link: 'https://github.com/charliehb1/Courseworks/blob/main/Ethical%20Hacking%20-%20CW1.pdf',
		},
		{
			title: 'Ethical Hacking 2 - University Coursework',
			link: 'https://github.com/charliehb1/Courseworks/blob/main/Ethical%20Hacking%20-%20CW2.pdf',
		},
		{
			title: 'Portfolio - Personal Project',
			link: 'https://github.com/charliehb1/portfolio',
		},
	]
	const techStack = [
		{
			title: 'Languages',
			items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'GraphQL', 'SQL', 'HTML', 'CSS'],
		},
		{
			title: 'Frameworks',
			items: ['React', 'Next.js', 'Node.js', 'Express', 'Docker', 'Tailwind', 'Jest'],
		},
		{
			title: 'Platforms',
			items: ['GCP', 'Azure', 'GitHub/Git', 'IaC'],
		},
	]
	const animationString =
		'animate-fade-in opacity-100 transition-opacity duration-700 ease-in animate-fade-in-custom'
	const colourString = 'from-[#C4A6F2] to-[#8AB7F9] bg-gradient-to-r bg-clip-text text-transparent'
	useEffect(() => {
		// Find all divs with the class animate-fade-in-custom
		const divs = document.querySelectorAll('.animate-fade-in-custom')
		divs.forEach((div) => {
			div.classList.remove('opacity-100')
			div.classList.add('opacity-70')
		})
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.remove('opacity-70')
					entry.target.classList.add('opacity-100')
				}
			})
		})
		const elements = document.querySelectorAll('.animate-fade-in')
		elements.forEach((element) => {
			observer.observe(element)
		})
	}, [])

	return (
		<>
			<Head>
				<title>Charles Hamerston-Budgen</title>
				<meta name="description" content="Charles' portfolio" />
				<link rel="icon" href="/CHB.svg" />
				<link rel="preload" href={`/profile_picture.jpg`} as="Image" />
			</Head>
			<main className="max-w-4 m-auto flex min-h-screen max-w-5xl flex-col px-4 pt-10 pb-36 md:pt-20">
				<div className={`h-screen`}>
					<div className={`flex flex-col pt-20 md:flex-row`}>
						<div className="h-fit">
							<ColourContainer>
								<>
									<h1 className={`w-full text-5xl ${colourString}`}>Hey!</h1>
									<div className="max-w-xl pt-16">
										<p>
											I&apos;m Charlie, a Software Engineer from Bournemouth, Dorset, UK. I&apos;m
											currently studying for my Bachelors Degree in Computer Science from the
											University of Portsmouth.
										</p>
										<p className="pt-4">
											I&apos;m passionate about designing and developing anything and everything,
											from web applications to autonomous scripts.
										</p>
									</div>
								</>
							</ColourContainer>
						</div>
						<div className="mx-auto">
							<Image
								src="/profile_picture.jpg?q=70"
								height={300}
								width={300}
								priority
								alt="Profile Picture"
								className="mt-12 rounded-full md:mt-0"
							/>
						</div>
					</div>
					<div className="px-auto flex flex-col items-center justify-center pt-8">
						<HorizontalContacts />
						<ChevronDownIcon
							onClick={() => {
								const element = document.getElementById('about-me')
								if (element) {
									element.scrollIntoView({ behavior: 'smooth' })
								}
							}}
							className="invisible mt-48 h-36 w-36 animate-bounce cursor-pointer text-neutral-500 md:visible"
						/>
					</div>
				</div>

				<div className={animationString}>
					<ColourContainer>
						<>
							<h2 id="about-me" className={`scroll-m-20 text-3xl ${colourString}`}>
								About Me
							</h2>
							<p className="pt-4">
								A bit more about me, I&apos;m currently on my work placement at Elanco Animal
								Health, here are a few of my projects, and my favourite technologies!
							</p>
							<div className="flex flex-col md:flex-row md:justify-between">
								<div className="flex-1 md:w-1/3">
									<ColourCard>
										<div>
											<h3 className="text-2xl">Projects</h3>
											<ul className="pt-4">
												{projects.map((project) => (
													<li key={project.title}>
														<Link
															href={project.link}
															className={`flex w-full flex-row items-center justify-between pt-4 transition-transform duration-300 ease-in-out hover:translate-x-4`}
														>
															<div className="w-60">{project.title}</div>
															<ArrowRightIcon className="mx-2 h-6 w-6 text-white" />
														</Link>
													</li>
												))}
											</ul>
										</div>
									</ColourCard>
								</div>
								<div className="md:w-2/3 md:pl-4">
									<ColourCard>
										<>
											<h3 className="text-2xl">My Tech Stack</h3>
											<ul className="grid grid-cols-2 pt-2 md:flex md:flex-row md:justify-between">
												{techStack.map((stack) => (
													<li key={stack.title}>
														<div className="flex flex-col px-4 pt-4">
															<span className="w-fit text-xl">
																{stack.title}
																<div className="mb-2 h-1 rounded-full bg-gradient-to-r from-[#C4A6F2] to-[#8AB7F9]"></div>
															</span>
															<ul>
																{stack.items.map((item) => (
																	<li className="ml-4 list-disc pt-1" key={item}>
																		{item}
																	</li>
																))}
															</ul>
														</div>
													</li>
												))}
											</ul>
										</>
									</ColourCard>
								</div>
							</div>
						</>
					</ColourContainer>
					<div className={`pt-20 ${animationString}`}>
						<ColourContainer>
							<>
								<h2 className={`text-3xl ${colourString}`}>Work Experience</h2>
								<p className="pt-4">
									Elanco Animal Health - Software Engineer (Placement) - July 2022 - Present
								</p>
								<p className="pt-4">
									I worked as a software engineer in a few different teams within Elanco. A few of
									my responabilities:{' '}
								</p>
								<ul className="list-disc space-y-2 pt-2 pl-8">
									<li>
										Designed, implemented and maintained internal systems such as the Developer
										Portal.
									</li>
									<li>
										Designed, implemented and maintained autonomous systems which pull and push data
										for use in software such as PowerBI for business portfolio decisions.
									</li>
									<li>
										Created architecture diagrams for larger data based applications and dashboards.
									</li>
									<li>
										Provided technical consultation for external vendors to help them build products
										to our standards.
									</li>
									<li>
										Worked with a team of engineers to develop and maintain our software
										applications.
									</li>
									<li>Successfully completed all projects on time and within budget.</li>
									<li>
										Contributed to the development of Elanco&apos;s software engineering best
										practices.
									</li>
									<li>Proven ability to work independently and as part of a team.</li>
									<li>Excellent problem-solving and analytical skills.</li>
									<li>Strong communication and interpersonal skills.</li>
								</ul>
							</>
						</ColourContainer>
					</div>
					<div className={`pt-20 ${animationString}`}>
						<ColourContainer>
							<>
								<h2 className={`text-3xl ${colourString}`}>
									Additional Information / Other Interests
								</h2>
								<p className="pt-4">
									I was a member of the GDSC (Google Developer Student Club) at the University of
									Portsmouth, before starting my placement at Elanco.
								</p>
								<p className="pt-3">
									I recently attended DTX (2022), as well as React Advanced (2022) in London which I
									enjoyed, I learned a lot of new technologies and services (Such as Storybook,
									Shopify and Kontent.ai!) which I would like to utilize in my projects in the
									future, as well as developing my React knowledge further.
								</p>
								<p className="pt-3">
									I&apos;m interested in a few other areas, such as application security, large
									scale applications, as well as infrastructure-as-code (IaC). I&apos;d love to talk
									this, so please reach out to me!
								</p>
							</>
						</ColourContainer>
					</div>
					<div className={`pt-20 ${animationString}`}>
						<ColourContainer>
							<>
								<h2 className={`text-3xl ${colourString}`}>Contact Me</h2>
								<span className="pt-4">
									You can contact me and view my work on these platforms. I&apos;m always happy to
									chat!
								</span>
								<div className="pt-4">
									<HorizontalContacts />
								</div>
							</>
						</ColourContainer>
					</div>
				</div>
			</main>
			<div className="flex w-full flex-row justify-center pb-2 text-neutral-400">
				Charles Hamerston-Budgen | Portfolio version: v0.0.1
			</div>
		</>
	)
}

export default Home
