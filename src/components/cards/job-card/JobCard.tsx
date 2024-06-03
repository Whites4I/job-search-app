import Link from 'next/link'
import MyButton from '../../button/MyButton'

export default function JobCard(job: IDataJob) {
	return (
		<div className='flex flex-col bg-gray-800 shadow-md rounded-lg box-border p-3 mb-2 min-w-72 '>
			<h2 className='text-lg sm:text-xl font-bold text-white mb-2'>
				{job.job_title}
			</h2>
			<p className='w-auto text-gray-400 text-sm sm:text-base'>
				{job.employer_name}
			</p>
			<p className='w-auto text-gray-300 text-sm sm:text-base mt-2'>
				{job.job_description.length > 150
					? job.job_description.substring(0, 150) + '...'
					: job.job_description}
			</p>
			<div className='flex justify-end w-auto mt-4'>
				<Link href={`/job-details/${job.job_id}`}>
					<MyButton text='Details' />
				</Link>
			</div>
		</div>
	)
}
