import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'JobSearch',
	description: 'Job search site',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<main className='flex min-h-screen flex-col items-center justify-center p-4'>
					{children}
				</main>
			</body>
		</html>
	)
}
