interface IMyButton {
	text?: string
	handle: () => void
	options?: any
}

export default function MyButton({ text, handle, options }: IMyButton) {
	return (
		<button
			className='mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
			type='button'
			onClick={handle}
			{...options}
		>
			{text}
		</button>
	)
}
