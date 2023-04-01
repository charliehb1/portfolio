import { type AppType } from 'next/dist/shared/lib/utils'
import { Roboto_Mono } from 'next/font/google'

const roboto_mono = Roboto_Mono({
	weight: ['400', '700'],
	display: 'swap',
	subsets: ['latin'],
})

import '~/styles/globals.css'

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<main className={`${roboto_mono.className} bg-[#1E2124] text-white`}>
			<Component {...pageProps} />
		</main>
	)
}

export default MyApp
