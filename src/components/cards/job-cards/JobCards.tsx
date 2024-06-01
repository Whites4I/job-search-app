import Link from 'next/link'

export default function JobCard({ job }: { job: any }) {
	return (
		<div className='bg-gray-800 shadow-md rounded-lg p-4 m-4'>
			<h2 className='text-xl font-bold text-white mb-2'>{job.title}</h2>
			<p className='text-gray-400'>{job.company_name}</p>
			<p className='text-gray-300 mt-2'>
				{job.description.length > 50
					? job.description.substring(0, 50) + '...'
					: job.description}
			</p>
			<Link href={`/job-details/${job.id}`}>
				<button
					className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'
					title='Details'
					type='button'
				>
					Details
				</button>
			</Link>
		</div>
	)
}
