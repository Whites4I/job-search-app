import { CSSProperties } from 'react'

interface IMyButton {
	text?: string
	handle?: () => void
	options?: any
	style?: CSSProperties | undefined
	type?: 'button' | 'submit' | 'reset' | undefined
}

export default function MyButton({
	text,
	handle,
	options,
	style,
	type,
}: IMyButton) {
	return (
		<button
			className={`mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${style}`}
			type={type}
			onClick={handle}
			{...options}
		>
			{text}
		</button>
	)
}
