import type { NextPage } from 'next'
import type { ReactElement } from 'react'

interface ColourContainerProps {
	children: ReactElement
}

const ColourContainer: NextPage<ColourContainerProps> = ({ children }) => {
	return (
		<div className="flex flex-row">
			<div className="w-1 flex-shrink-0 rounded-full bg-gradient-to-b from-[#C4A6F2] to-[#8AB7F9]"></div>
			<div className="ml-4">{children}</div>
		</div>
	)
}

export default ColourContainer
