import { useEffect, useState } from 'react'

export default function useLikedJobs() {
	const [likedJobs, setLikedJobs] = useState<any[]>([])

	useEffect(() => {
		const storedJobs = localStorage.getItem('likedJobs')
		if (storedJobs) {
			setLikedJobs(JSON.parse(storedJobs))
		}
	}, [])

	const addToLiked = (job: any) => {
		const updatedJobs = [...likedJobs, job]
		setLikedJobs(updatedJobs)
		localStorage.setItem('likedJobs', JSON.stringify(updatedJobs))
	}

	const removeFromLiked = (jobId: string) => {
		const updatedJobs = likedJobs.filter((job: any) => job.id !== jobId)
		setLikedJobs(updatedJobs)
		localStorage.setItem('likedJobs', JSON.stringify(updatedJobs))
	}

	const isLiked = (jobId: string) => {
		return likedJobs.some((job: any) => job.id === jobId)
	}

	return {
		likedJobs,
		addToLiked,
		removeFromLiked,
		isLiked,
	}
}
