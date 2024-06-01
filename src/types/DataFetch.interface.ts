interface IDataFetch {
	data: {
		data: IDataJob[]
		parameters: object
		status: string
		request_id: string
	}
	error: object | undefined
}
