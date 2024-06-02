'use client'

import { useEffect, useState } from 'react'

export default function useLikedJobs() {
	const [likedJobs, setLikedJobs] = useState<IDataJob[]>([])

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const storedJobs = localStorage.getItem('likedJobs')
			if (storedJobs) {
				setLikedJobs(JSON.parse(storedJobs))
			}
		}
	}, [])

	useEffect(() => {
		if (typeof window !== 'undefined') {
			localStorage.setItem('likedJobs', JSON.stringify(likedJobs))
		}
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
