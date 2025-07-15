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
			title:
				'Final Year Project - An analysis of the orchestration, maintainence and security of IoT devices.',
			link: 'https://github.com/charliehb1/FYP-Report',
		},
		{
			title: 'Ethical Hacking 1 - University Coursework.',
			link: 'https://github.com/charliehb1/Courseworks/blob/main/Ethical%20Hacking%20-%20CW1.pdf',
		},
		{
			title: 'Ethical Hacking 2 - University Coursework.',
			link: 'https://github.com/charliehb1/Courseworks/blob/main/Ethical%20Hacking%20-%20CW2.pdf',
		},
		{
			title: 'Portfolio - Personal Project.',
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
			title: 'Databases',
			items: ['Postgres', 'Firestore', 'Vector Store'],
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
			<main className="max-w-4 m-auto flex min-h-screen max-w-5xl flex-col px-4 pb-36 pt-10 md:pt-32">
				<div className={`h-screen`}>
					<div className={`flex flex-col md:flex-row`}>
						<div className="h-fit">
							<ColourContainer>
								<>
									<h1 className={`w-full text-5xl ${colourString}`}>Hey!</h1>
									<div className="max-w-xl pt-16">
										<p>
											I&apos;m Charlie, a Software Engineer from Bournemouth, Dorset, UK. I&apos;m a
											AI Engineer working at Elanco Animal Health, I graduated from the University
											of Portsmouth with First Class degree with Honours in Computer Science.
										</p>
										<p className="pt-4">
											I&apos;m passionate about designing and developing anything and everything,
											from web applications to AI agentic workflow, and I&apos;m always eagar to
											learn more!
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

				<div className={`${animationString} pt-56 md:pt-0`}>
					<ColourContainer>
						<>
							<h2 id="about-me" className={`scroll-m-20 text-3xl ${colourString}`}>
								About Me
							</h2>
							<p className="pt-4">
								A bit more about me, I&apos;m currently working at Elanco Animal Health as a AI
								Engineer, here are a few of my projects, and my favourite technologies!
							</p>
							<p className="pt-4">
								Within my final year, I authored a paper on the security of IoT devices, examining
								protocols for communication. I conducted an in-depth analysis of the firmware and an
								exploration of vulnerabilities inherent in devices without cryptoprocessors,
								supported by a proof of concept and live demo.
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
								<h2 className={`text-3xl ${colourString}`}>Awards</h2>
								<Link
									className="flex w-full flex-row items-center justify-between pt-4 transition-transform duration-300 ease-in-out hover:translate-x-4"
									href={'https://globeeawards.com/2024-winners-technology/'}
								>
									Silver Globee Winner 2024 - ElancoGPT - Achievement in Enhancing Business
									Operations
									<ArrowRightIcon className="mx-2 h-6 w-6 text-white" />
								</Link>
							</>
						</ColourContainer>
					</div>
					<div className={`pt-20 ${animationString}`}>
						<ColourContainer>
							<>
								<h2 className={`text-3xl ${colourString}`}>Work Experience</h2>
								<div>
									<p className="pt-4">
										Elanco Animal Health - Generative AI Engineer - 2024 - Present
									</p>
									<ul className="list-disc space-y-2 pt-2 pl-8">
										<li>
											As a placement student I developed the proof-of-concept for an internal AI
											chatbot, working directly with the Enterprise Architect and the CTO, gaining
											visibility to both the senior leadership team and C suite.
										</li>
									</ul>
								</div>
								<div>
									<p className="pt-4">
										Elanco Animal Health - Generative AI Engineer - 2024 - Present
									</p>
									<ul className="list-disc space-y-2 pt-2 pl-8">
										<li>
											Scaled an internal-facing AI chatbot from a proof-of-concept to a mature
											product supported by 20 full time employees, serving 9,500 users and saving an
											estimated 80,000 hours of work.
										</li>
										<li>
											Consulted with external third party cloud providers for Elanco’s AI models to
											ensure compliance and security requirements, ensuring AI can scale for other
											projects.
										</li>
										<li>
											Designed and developed an internal AI workflow within the chatbot allowing for
											end users to query over 3,200 quality docs in a variety of formats and
											structured from acquisitions and divestitures over multiple years. The result
											of this reduced the time to find documents from 24+ hours to less than 30
											seconds, aiding in the audit and review process of manufacturing sites.
										</li>
										<li>
											Tested and evaluated new LLMs across a series of internal benchmarks such as
											misuse and relevancy based on user feedback to ensure quality and speed
											resulting in a positive user experience.
										</li>
										<li>
											Mentored multiple students within the placement program helping to build
											technical and interpersonal skills.
										</li>
										<li>
											Created a new curriculum based on the feedback from previous years of the
											placement program to ensure a smooth onboarding and helping to build new
											technical skills.
										</li>
										<li>
											Provided an easy way for students to engage with Elanco’s cloud providers in a
											safe manner, offering support sessions to support students with internal
											coding challenges.
										</li>
										<li>
											Implemented a rollout of Elanco’s indemnity controls to ensure the models used
											by Elanco were risk managed.
										</li>
										<li>
											Authored a risk management layer for the organisation to ensure transparency
											to Elanco’s AI governance board for ongoing and new AI initiatives.
										</li>
										<li>
											Designed and developed an organisation wide pipeline for ingesting SharePoint
											to the RAG database, utilising scalable VM’s and ensuring compliance with
											Elanco’s file security standards.
										</li>
										<li>
											Implemented a model testing suite, based on a custom feedback loop form users
											utilising the application.
										</li>
										<li>
											Engaged with external engineering teams to build upon Elanco’s AI chatbot
											either using custom workflows within the AI or the API directly ensuring the
											team reached their desired outcome.
										</li>
										<li>
											Implemented an addition to the agentic workflow, allowing custom MCP servers
											to be utilised within the tooling resulting in a self-serve model for users to
											build upon.
										</li>
										<li>
											Reduced monthly cloud spend by 99.3% (from $16,000/month to $100/month)
											without compromising on performance.
										</li>
										<li>
											Conducted 20+ interviews for the placement program and the Enterprise AI team.
										</li>
										<li>
											Implemented an AI POC into the risk management process alongside the SOC team
											to reduce time to results from &gt;3 days to &lt;1 day.
										</li>
									</ul>
									<p className="pt-4">Elanco Animal Health - Software Engineer - 2022 - 2024</p>
									<ul className="list-disc space-y-2 pt-2 pl-8">
										<li>
											As a placement student I developed the proof-of-concept for an internal AI
											chatbot, working directly with the Enterprise Architect and the CTO, gaining
											visibility to both the senior leadership team and C suite.
										</li>
										<li>
											Designed, implemented and maintained platforms such as the Developer Portal.
										</li>
										<li>
											Maintained legacy systems, resulting in increased uptime and performance
											increase which enabled more users to utilise the tooling directly.
										</li>
										<li>
											Contributed to Elanco’s software engineering standards by completing reviews
											on API endpoints, pinpoint common misconfigurations and mitigate these with
											the appropriate teams, reducing the overall attack surface and educating
											teams.
										</li>
										<li>
											Designed the technical architecture for a multi-project analytics platform
											combining application security and cloud cost, increasing visibility for both
											development teams and senior leadership.
										</li>
										<li>
											Benchmarked the latest LLMs from GPT3.5 to Gemini Pro 2.5 to select the
											optimum model for cost to performance.
										</li>
										<li>
											Owned the end to end workflow from problem discovery to building a production
											ready RAG system.
										</li>
									</ul>
								</div>
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
									I&apos;m interested in a few other areas, such as application security, large
									scale applications, infrastructure-as-code (IaC), and of course, AI! I&apos;d love
									to talk about any of these, so please reach out to me!
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
			<div className="px-auto flex w-full flex-col items-center pb-2 text-neutral-400">
				<span className="w-fit">Charles Hamerston-Budgen</span>
				<span className="w-fit">Portfolio version: v0.0.2</span>
			</div>
		</>
	)
}

export default Home
