'use client'

import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import MyButton from '../../../components/button/MyButton'
import TextInput from '../../../components/inputs/text-inputs/'

const ProfileSchema = Yup.object().shape({
	name: Yup.string().required('Name is required'),
	jobTitle: Yup.string().required('Desired Job Title is required'),
	aboutMe: Yup.string().required('About Me is required'),
})

export default function CreateProfile() {
	const handleSubmit = (values: {
		name: string
		jobTitle: string
		aboutMe: string
	}) => {
		localStorage.setItem('profile', JSON.stringify(values))
	}

	return (
		<div className='bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md'>
			<h1 className='text-2xl font-bold mb-6'>Create Profile</h1>
			<Formik
				initialValues={{ name: '', jobTitle: '', aboutMe: '' }}
				validationSchema={ProfileSchema}
				onSubmit={handleSubmit}
			>
				<Form className=' space-y-4'>
					<TextInput
						label='Name'
						name='name'
						type='text'
						placeholder='Enter your name'
					/>
					<TextInput
						label='Desired Job Title'
						name='jobTitle'
						type='text'
						placeholder='Enter desired job title'
					/>
					<TextInput
						label='About Me'
						name='aboutMe'
						type='textarea'
						placeholder='Tell us about yourself'
					/>
					<MyButton text='Create Profile' type='submit' />
				</Form>
			</Formik>
		</div>
	)
}
