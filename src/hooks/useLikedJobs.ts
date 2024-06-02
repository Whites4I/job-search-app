import { useEffect, useState } from 'react'

export default function useLikedJobs() {
	const [likedJobs, setLikedJobs] = useState<IDataJob[]>(() => {
		const storedJobs = localStorage.getItem('likedJobs')
		return storedJobs ? JSON.parse(storedJobs) : []
	})

	useEffect(() => {
		localStorage.setItem('likedJobs', JSON.stringify(likedJobs))
	}, [likedJobs])

	const addToLiked = (job: IDataJob) => {
		setLikedJobs(prevJobs => [...prevJobs, job])
	}

	const removeFromLiked = (getJob: IDataJob) => {
		setLikedJobs(prevJobs =>
			prevJobs.filter((job: IDataJob) => job.job_id !== getJob.job_id)
		)
	}

	const isLiked = (getJob: IDataJob) => {
		return likedJobs.some((job: IDataJob) => job.job_id === getJob.job_id)
	}

	return {
		likedJobs,
		addToLiked,
		removeFromLiked,
		isLiked,
	}
}
