'use client'

import Link from 'next/link'
import { SWRConfig } from 'swr'

export default function Home() {
	return (
		<SWRConfig value={{ provider: () => new Map() }}>
			<div className='flex flex-col items-center'>
				<h1 className='text-center text-3xl font-bold mb-6'>
					Job Search Application
				</h1>
				<div className='flex flex-wrap justify-center  gap-5'>
					<Link
						className='p-2 w-36 text-center bg-blue-500 text-white rounded'
						href='/jobs'
					>
						Search Jobs
					</Link>
					<Link
						className='p-2 w-36 text-center bg-green-500 text-white rounded'
						href='/create-profile'
					>
						Create Profile
					</Link>
					<Link
						className='p-2 w-36 text-center bg-red-500 text-white rounded'
						href='/liked'
					>
						Liked Jobs
					</Link>
				</div>
			</div>
		</SWRConfig>
	)
}
