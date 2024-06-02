import { useField } from 'formik'

interface ITextInput {
	label?: string
	name: string
	type: string
	placeholder: string
	[key: string]: string | undefined
}

const TextInput = ({ label, ...props }: ITextInput) => {
	const [field, meta] = useField(props)
	return (
		<div className='mb-4'>
			<label
				htmlFor={props.id || props.name}
				className='block text-sm font-medium text-gray-100 mb-1'
			>
				{label}
			</label>
			<input
				className='mt-1 p-2 block w-full bg-gray-700 border border-gray-600 rounded-md text-gray-100'
				{...field}
				{...props}
			/>
			{meta.touched && meta.error ? (
				<div className='text-red-500 text-sm mt-1'>{meta.error}</div>
			) : null}
		</div>
	)
}

export default TextInput
