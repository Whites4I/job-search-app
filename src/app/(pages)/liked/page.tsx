'use client'

import MyButton from '../../../components/button/MyButton'
import useLikedJobs from '../../../hooks/useLikedJobs'

const LikedJobs = () => {
	const { likedJobs, removeFromLiked } = useLikedJobs()

	return (
		<div className='container max-w-5xl p-4'>
			<h1 className='text-2xl font-bold mb-4'>Liked Jobs</h1>
			{likedJobs.length === 0 ? (
				<div>No liked jobs</div>
			) : (
				<div>
					{likedJobs.map(job => (
						<div key={job.job_id} className='p-4 border rounded shadow-md mb-4'>
							<h2 className='text-xl font-bold'>{job.job_title}</h2>
							<p className='text-gray-400'>{job.employer_name}</p>
							<p className='text-gray-400'>{job.job_country}</p>
							<p className='text-gray-300 mt-2'>
								{job.job_description.length > 700
									? job.job_description.substring(0, 700) + '...'
									: job.job_description}
							</p>
							<div className='flex justify-end'>
								<MyButton
									text='Remove'
									style={{ width: '100px' }}
									handle={() => removeFromLiked(job.job_id)}
								/>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default LikedJobs
