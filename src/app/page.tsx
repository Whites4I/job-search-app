import Link from 'next/link'

export default function Home() {
	return (
		<div>
			<h1 className='text-3xl font-bold mb-6'>Job Search Application</h1>
			<div className='space-x-4'>
				<Link className='px-4 py-2 bg-blue-500 text-white rounded' href='/jobs'>
					Search Jobs
				</Link>
				<Link
					className='px-4 py-2 bg-green-500 text-white rounded'
					href='/create-profile'
				>
					Create Profile
				</Link>
				<Link className='px-4 py-2 bg-red-500 text-white rounded' href='/liked'>
					Liked Jobs
				</Link>
			</div>
		</div>
	)
}
