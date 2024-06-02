'use client'

import LikedCard from '../../../components/cards/liked-card'
import useLikedJobs from '../../../hooks/useLikedJobs'

export default function LikedJobs() {
	const { likedJobs, removeFromLiked } = useLikedJobs()

	return (
		<div className='container max-w-5xl p-4'>
			<h1 className='text-2xl font-bold mb-4'>Liked Jobs</h1>
			{likedJobs.length === 0 ? (
				<div>No liked jobs</div>
			) : (
				<div>
					{likedJobs.map(job => (
						<LikedCard job={job} handle={removeFromLiked(job)} />
					))}
				</div>
			)}
		</div>
	)
}
