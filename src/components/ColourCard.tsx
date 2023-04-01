import type { ReactElement } from 'react'
import Image from 'next/image'

interface ColourCardProps {
	children: ReactElement
}

const ColourCard = ({ children }: ColourCardProps) => {
	return (
		<div className="relative mt-10 px-4">
			<Image
				src="corner.svg"
				height={40}
				width={40}
				alt="image corner"
				className="absolute top-0 left-0"
			/>
			<div className="p-3">{children}</div>
			<Image
				src="corner.svg"
				height={40}
				width={40}
				alt="image corner"
				className="absolute bottom-0 right-0 rotate-180"
			/>
		</div>
	)
}

export default ColourCard
