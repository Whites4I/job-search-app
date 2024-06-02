import { useEffect, useState } from 'react'

export default function useLikedJobs() {
	const [likedJobs, setLikedJobs] = useState<IDataJob[]>([])

	useEffect(() => {
		const storedJobs = localStorage.getItem('likedJobs')
		if (storedJobs) {
			setLikedJobs(JSON.parse(storedJobs))
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('likedJobs', JSON.stringify(likedJobs))
	}, [likedJobs])

	const addToLiked = (job: IDataJob) => {
		setLikedJobs(prevJobs => [...prevJobs, job])
	}

	const removeFromLiked = (job: IDataJob) => {
		setLikedJobs(prevJobs =>
			prevJobs.filter((j: IDataJob) => j.job_id !== job.job_id)
		)
	}

	const isLiked = (job: IDataJob) => {
		return likedJobs.some((j: IDataJob) => j.job_id === job.job_id)
	}

	return {
		likedJobs,
		addToLiked,
		removeFromLiked,
		isLiked,
	}
}
