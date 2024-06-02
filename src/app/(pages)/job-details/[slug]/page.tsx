'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSWRConfig } from 'swr'
import MyButton from '../../../../components/button/MyButton'
import useLikedJobs from '../../../../hooks/useLikedJobs'

export default function JobDetails() {
	const { cache } = useSWRConfig()
	const { slug } = useParams<{ slug: string }>()
	const [jobData, setJobData] = useState(null)

	// Hooks should be called in the same order on every render
	useEffect(() => {
		const getJobData = async () => {
			if (!slug || !cache) return

			const cachedPage = cache.get(`https://jsearch.p.rapidapi.com/search?`)
			if (!cachedPage) return

			const jobDataFound = cachedPage.data.data.find(
				(job: { job_id: string }) => job.job_id === decodeURIComponent(slug)
			)

			if (jobDataFound) setJobData(jobDataFound)
		}

		getJobData()
	}, [slug, cache])

	// Destructure the hook after all useState and useEffect hooks
	const { isLiked, addToLiked, removeFromLiked } = useLikedJobs()

	if (!jobData) return <div>Loading...</div>

	const { job_description, job_title, employer_logo, job_id } = jobData

	const toggleLike = () => {
		if (isLiked(job_id)) {
			removeFromLiked(job_id)
		} else {
			addToLiked(jobData)
		}
	}

	return (
		<div className='p-4 container'>
			<h1 className='text-2xl font-bold'>{job_title}</h1>
			{employer_logo && (
				<Image
					src={employer_logo}
					alt={job_title}
					className='my-4 h-64 object-cover rounded w-40'
				/>
			)}

			<p className='text-gray-500'>{job_description}</p>
			<div className='flex'>
				<MyButton
					handle={toggleLike}
					text={isLiked(job_id) ? 'Remove from Liked' : 'Add to Liked'}
				/>
			</div>
		</div>
	)
}
