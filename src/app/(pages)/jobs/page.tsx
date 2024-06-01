'use client'

import { Form, Formik } from 'formik'
import { useState } from 'react'
import JobCard from '../../../components/cards/job-card'
import TextInputs from '../../../components/inputs/text-inputs'
import jobService from '../../../services/getJob.service'

const JobsPage = () => {
	const [query, setQuery] = useState('')

	const { data, error } = jobService.getJobsData(query ? `${query}` : `null`)

	const handleSubmit = (values: { query: string }) => {
		setQuery(values.query)
	}

	return (
		<div className='p-4'>
			<Formik
				initialValues={{
					query: '',
				}}
				onSubmit={values => {
					handleSubmit(values)
				}}
			>
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
			{!error && !data && <div>Loading...</div>}
			{data && (
				<div>
					{data.data.map((job: any) => (
						<JobCard key={job.job_id} {...job} />
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
