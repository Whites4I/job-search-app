'use client'

import { useEffect, useState } from 'react'

function getInitialLikedJobs(): IDataJob[] {
	const storedJobs = localStorage.getItem('likedJobs')
	return storedJobs ? JSON.parse(storedJobs) : []
}

export default function useLikedJobs() {
	const [likedJobs, setLikedJobs] = useState<IDataJob[]>(getInitialLikedJobs)

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
