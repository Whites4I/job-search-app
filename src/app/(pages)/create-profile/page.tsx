import { Form, Formik } from 'formik'
import MyButton from '../../../components/button/MyButton'
import TextInput from '../../../components/inputs/text-inputs/'

export default function CreateProfile() {
	const handleSubmit = (values: {
		name: string
		jobTitle: string
		aboutMe: string
	}) => {
		localStorage.setItem('profile', JSON.stringify(values))
	}

	return (
		<div className=' container bg-gray-900 text-gray-100 min-h-screen flex items-center justify-center'>
			<div className='bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md'>
				<h1 className='text-2xl font-bold mb-6'>Create Profile</h1>
				<Formik
					initialValues={{ name: '', jobTitle: '', aboutMe: '' }}
					onSubmit={handleSubmit}
				>
					<Form className='space-y-4'>
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
						<MyButton text='Create Profile' />
					</Form>
				</Formik>
			</div>
		</div>
	)
}
