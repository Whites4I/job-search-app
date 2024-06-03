import Link from 'next/link'
import MyButton from '../../button/MyButton'
interface ILikedCard {
	job: IDataJob
	handle: any
}

export default function LikedCard({ job, handle }: ILikedCard) {
	return (
		<div key={job.job_id} className='p-4 border rounded shadow-md mb-4'>
			<h2 className='text-xl font-bold'>{job.job_title}</h2>
			<p className='text-gray-400'>{job.job_employment_type}</p>
			<p className='text-gray-400'>{job.employer_name}</p>
			<p className='text-gray-400'>{job.job_country}</p>
			<p className='text-gray-300 mt-2'>
				{job.job_description.length > 200
					? job.job_description.substring(0, 200) + '...'
					: job.job_description}
			</p>
			<div className='flex justify-around'>
				<MyButton
					type='button'
					text='Remove'
					style={{ width: '100px' }}
					handle={handle}
				/>

				<Link href={`/job-details/${job.job_id}`}>
					<MyButton text='Details' />
				</Link>
			</div>
		</div>
	)
}
