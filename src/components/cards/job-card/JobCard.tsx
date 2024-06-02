import Link from 'next/link'
import MyButton from '../../button/MyButton'

export default function JobCard(job: IDataJob) {
	return (
		<div className='bg-gray-800 shadow-md rounded-lg p-4 m-4'>
			<h2 className='text-xl font-bold text-white mb-2'>{job.job_title}</h2>
			<p className='text-gray-400'>{job.employer_name}</p>
			<p className='text-gray-300 mt-2'>
				{job.job_description.length > 150
					? job.job_description.substring(0, 150) + '...'
					: job.job_description}
			</p>
			<div className='flex m-5 justify-end'>
				<Link href={`/job-details/${job.job_id}`}>
					<MyButton text='Details' />
				</Link>
			</div>
		</div>
	)
}
