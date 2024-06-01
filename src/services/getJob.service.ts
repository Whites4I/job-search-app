import axios from 'axios'
import { API_KEY } from '../constants/API_KEY'
import { API_URL } from '../constants/API_URL'

export class JobService {
	apiKey: string
	apiUrl: string
	headers: { [key: string]: string }

	constructor() {
		this.apiKey = API_KEY
		this.apiUrl = API_URL
		this.headers = {
			'Content-Type': 'application/json',
			'X-RapidAPI-Key': this.apiKey,
			'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
		}
	}

	async searchJobs(query: string) {
		try {
			const response = await axios.get(`${this.apiUrl}/search`, {
				params: { query },
				headers: this.headers,
			})
			return response.data
		} catch (error) {
			console.error('Error fetching jobs:', error)
			throw error
		}
	}
}
