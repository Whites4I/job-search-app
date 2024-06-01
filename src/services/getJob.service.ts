import axios from 'axios'
import useSWR from 'swr'
import { API_KEY } from '../constants/API_KEY'
import { API_URL } from '../constants/API_URL'

class JobService {
	apiKey: string
	apiUrl: string
	headers: { [key: string]: string }

	constructor(apiKey: string, apiUrl: string) {
		this.apiKey = apiKey
		this.apiUrl = apiUrl
		this.headers = {
			'Content-Type': 'application/json',
			'X-RapidAPI-Key': this.apiKey,
			'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
		}
	}

	private async fetchData(url: string, params: any) {
		try {
			const response = await axios.get(url, { params, headers: this.headers })
			return response.data
		} catch (error) {
			console.error('Error fetching data:', error)
			throw error
		}
	}

	private async fetcher(url: any, params: { query?: any; job_id?: any }) {
		return this.fetchData(url, params)
	}

	getJobsData(query: any | unknown | string) {
		const url = `${this.apiUrl}/search?`
		const { data, error }: IDataFetch = useSWR(
			url,
			(url: any) => this.fetcher(url, { query: query }),
			{
				shouldRetryOnError: false,
			}
		)
		return { data, error }
	}

	getJobDetail(jobId: any | unknown | string) {
		const url = `${this.apiUrl}/job-details?`
		const { data, error }: IDataFetch = useSWR(
			url,
			(url: any) => this.fetcher(url, { job_id: jobId }),
			{
				shouldRetryOnError: false,
			}
		)
		return { data, error }
	}
}

const jobService = new JobService(API_KEY, API_URL)
export default jobService
