import { useField } from 'formik'

interface ITextInputs {
	label?: string
	name: string
	type: string
	placeholder: string
	[key: string]: string | undefined
}

export default function TextInput({ label, ...props }: ITextInputs) {
	const [field, meta] = useField(props as any)
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input className='text-input' {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className='error'>{meta.error}</div>
			) : null}
		</>
	)
}
