import Link from 'next/link'

const HorizontalContacts = () => {
	return (
		<div className="flex flex-row gap-4">
			<Link
				href="mailto:contact@charliehb.dev"
				aria-label="Email"
				className={`rounded-full bg-gradient-to-r from-[#C4A6F2] to-[#8AB7F9] p-0.5`}
			>
				<div className="rounded-full bg-[#1E2124] p-3">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="h-6 w-6 text-white"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
						/>
					</svg>
				</div>
			</Link>
			<Link
				href="https://github.com/charliehb1"
				aria-label="Github"
				className="rounded-full bg-gradient-to-r from-[#C4A6F2] to-[#8AB7F9] p-0.5"
			>
				<div className="rounded-full bg-[#1E2124] p-3">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 text-white"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
					</svg>
				</div>
			</Link>
			<Link
				href="https://www.linkedin.com/in/charlie-hamerston-budgen-083277191/"
				aria-label="LinkedIn"
				className="rounded-full bg-gradient-to-r from-[#C4A6F2] to-[#8AB7F9] p-0.5"
			>
				<div className="rounded-full bg-[#1E2124] p-3">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 text-white"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<rect x="4" y="4" width="16" height="16" rx="2" />
						<line x1="8" y1="11" x2="8" y2="16" />
						<line x1="8" y1="8" x2="8" y2="8.01" />
						<line x1="12" y1="16" x2="12" y2="11" />
						<path d="M16 16v-3a2 2 0 0 0 -4 0" />
					</svg>
				</div>
			</Link>
		</div>
	)
}

export default HorizontalContacts
