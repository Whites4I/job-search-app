'use client'

import { Form, Formik } from 'formik'
import { useState } from 'react'
import useSWR from 'swr'
import * as Yup from 'yup'
import JobCard from '../../../components/cards/job-cards'
import TextInputs from '../../../components/inputs/text-inputs'
import { JobService } from '../../../services/getJob.service'

const JobsPage = () => {
	const [query, setQuery] = useState('')

	const fetcher = async (url: string) => {
		const jobService = new JobService()
		const searchQuery = new URLSearchParams(url.split('?')[1]).get('query')

		return jobService.searchJobs(searchQuery || 'null')
	}

	const { data, error } = useSWR(`query=${query}`, fetcher, {
		shouldRetryOnError: false,
	})

	const handleSubmit = (values: { query: string }) => {
		setQuery(values.query)
	}

	return (
		<div className='p-4'>
			<Formik
				initialValues={{
					query: '',
				}}
				validationSchema={Yup.object({
					query: Yup.string()
						.max(15, 'Must be 15 characters or less')
						.required('Required'),
				})}
				onSubmit={values => {
					handleSubmit(values)
				}}
			>
				<Form>
					<TextInputs name='query' type='text' placeholder='Search for jobs' />
				</Form>
			</Formik>

			{error && <div>Failed to load jobs</div>}
			{!error && !data && <div>Loading...</div>}
			{data && (
				<div>
					{data.map((job: any) => (
						<JobCard key={job.job_id} job={job} />
					))}
				</div>
			)}
		</div>
	)
}

export default JobsPage

{
	/* <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
	<Form className='mb-4'>
		<Field
			className='p-2 border rounded w-full text-black'
			name='query'
			placeholder='Search for jobs'
		/>
		<button
			className='mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
			type='submit'
		>
			Search
		</button>
	</Form>
</Formik> */
}
