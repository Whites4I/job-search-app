import MyButton from '../../../components/button/MyButton'
import useLikedJobs from '../../../hooks/useLikedJobs'

const LikedJobs = () => {
	const { likedJobs, removeFromLiked } = useLikedJobs()

	return (
		<div className='p-4'>
			<h1 className='text-2xl font-bold mb-4'>Liked Jobs</h1>
			{likedJobs.length === 0 ? (
				<div>No liked jobs</div>
			) : (
				<div>
					{likedJobs.map(job => (
						<div key={job.id} className='p-4 border rounded shadow-md mb-4'>
							<h2 className='text-xl font-bold'>{job.title}</h2>
							<MyButton text='Remove' handle={removeFromLiked(job.id)} />
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default LikedJobs
