'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSWRConfig } from 'swr'
import MyButton from '../../../../components/button/MyButton'
import useLikedJobs from '../../../../hooks/useLikedJobs'

export default function JobDetails() {
	const { cache } = useSWRConfig()
	const { slug } = useParams<{ slug: string }>()
	const [jobData, setJobData] = useState(null)

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

	const { isLiked, addToLiked, removeFromLiked } = useLikedJobs()

	if (!jobData) return <div>Loading...</div>

	const { job_description, job_title } = jobData

	const toggleLike = () => {
		if (isLiked(jobData)) {
			removeFromLiked(jobData)
		} else {
			addToLiked(jobData)
		}
	}

	return (
		<div className='p-4 container'>
			<h1 className='text-2xl font-bold'>{job_title}</h1>

			<p className='text-gray-500'>{job_description}</p>
			<div className='flex justify-end'>
				<MyButton
					type='button'
					handle={toggleLike}
					text={isLiked(jobData) ? 'Remove from Liked' : 'Add to Liked'}
				/>
			</div>
		</div>
	)
}
