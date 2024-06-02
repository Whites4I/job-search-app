'use client'

import { Form, Formik } from 'formik'
import { useEffect, useState } from 'react'
import MyButton from '../../../components/button/MyButton'
import JobCard from '../../../components/cards/job-card'
import TextInputs from '../../../components/inputs/text-inputs'
import jobService from '../../../services/getJob.service'

export default function JobsPage() {
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
			window.scrollTo({ top: 0, behavior: 'smooth' })
			setPage(prevPage => prevPage + 1)
		}
	}
	const previousPage = () => {
		if (!isLoading && page !== 1) {
			window.scrollTo({ top: 0, behavior: 'smooth' })
			setPage(prevPage => prevPage - 1)
		}
	}

	return (
		<div className='p-4 w-3/12 max-w-lg min-w-96'>
			<Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
				<Form className='mb-4'>
					<TextInputs
						className='p-2 border rounded w-full text-black'
						name='query'
						type='text'
						placeholder='Search for jobs'
					/>
					<MyButton text='Search' />
				</Form>
			</Formik>

			{error && <div>Failed to load jobs</div>}
			{isLoading && <div>Loading...</div>}
			{data && (
				<div>
					{data.data.map(job => (
						<JobCard key={job.job_id} {...job} />
					))}
					<div className='flex gap-5 justify-center'>
						<MyButton text='Previous page' handle={previousPage} />
						<MyButton text='Next page' handle={nextPage} />
					</div>
				</div>
			)}
		</div>
	)
}
