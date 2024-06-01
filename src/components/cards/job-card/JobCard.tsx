import Link from 'next/link'

export default function JobCard({
	job_title,
	employer_name,
	job_description,
	job_id,
}: IDataJob) {
	return (
		<div className='bg-gray-800 shadow-md rounded-lg p-4 m-4'>
			<h2 className='text-xl font-bold text-white mb-2'>{job_title}</h2>
			<p className='text-gray-400'>{employer_name}</p>
			<p className='text-gray-300 mt-2'>
				{job_description.length > 50
					? job_description.substring(0, 50) + '...'
					: job_description}
			</p>
			<Link href={`/job-details/${job_id}`}>
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
