import { useRouter } from 'next/router'
import MyButton from '../../../components/button/MyButton'
import useLikedJobs from '../../../hooks/useLikedJobs'
import jobService from '../../../services/getJob.service'

export default function JobDetails() {
	const { id } = useRouter().query

	const { data, error, isLoading } = jobService.getJobDetail(`job_id=${id}`)

	const { job_description, job_title, employer_logo, job_id } = data.data[0]

	const { isLiked, addToLiked, removeFromLiked } = useLikedJobs()

	const toggleLike = () => {
		if (isLiked(id as string)) {
			removeFromLiked(id as string)
		} else {
			addToLiked(data.data[0])
		}
	}

	if (error) return <div>Failed to load job details</div>
	if (isLoading) return <div>Loading...</div>

	return (
		<div className='p-4'>
			<h1 className='text-2xl font-bold'>{job_title}</h1>
			<img
				src={employer_logo}
				alt={job_title}
				className='my-4 w-full h-64 object-cover rounded'
			/>
			<p className='text-gray-800'>{job_description}</p>

			<MyButton
				handle={toggleLike}
				text={isLiked(job_id) ? 'Remove from Liked' : 'Add to Liked'}
			/>
		</div>
	)
}
