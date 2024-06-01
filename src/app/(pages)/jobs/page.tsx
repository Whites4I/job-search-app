'use client'

import { Form, Formik } from 'formik'
import { useEffect, useState } from 'react'
import JobCard from '../../../components/cards/job-card'
import TextInputs from '../../../components/inputs/text-inputs'
import jobService from '../../../services/getJob.service'

const JobsPage = () => {
	const [query, setQuery] = useState('')
	const [page, setPage] = useState(1)

	const { data, error, isLoading, mutate } = jobService.getJobsData(
		query ? `${query}` : 'null',
		page ?? `${page}`
	)

	useEffect(() => {
		mutate()
	}, [query, page])

	const handleSubmit = (values: { query: string }) => {
		setQuery(values.query)
		setPage(1)
	}

	const nextPage = () => {
		if (!isLoading) {
			setPage(prevPage => prevPage + 1)
		}
	}
	const previousPage = () => {
		if (!isLoading && page !== 1) {
			setPage(prevPage => prevPage - 1)
		}
	}

	return (
		<div className='p-4 w-3/12'>
			<Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
				<Form className='mb-4'>
					<TextInputs
						className='p-2 border rounded w-full text-black'
						name='query'
						type='text'
						placeholder='Search for jobs'
					/>
					<button
						className='mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
						type='submit'
					>
						Search
					</button>
				</Form>
			</Formik>

			{error && <div>Failed to load jobs</div>}
			{isLoading && <div>Loading...</div>}
			{!data ?? (
				<div>
					{data.data.map(job => (
						<JobCard key={job.job_id} {...job} />
					))}
					<div className='flex m-5'>
						<button
							className='mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
							type='button'
							onClick={nextPage}
						>
							Next page
						</button>
						<button
							className='mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
							type='button'
							onClick={previousPage}
						>
							Previous page
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default JobsPage
