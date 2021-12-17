import axios from "axios";

export const IMAGE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

export const apiClient = () => {
	const BASE_URL = 'https://api.themoviedb.org/3';
	
	const axiosInstance = axios.create({
		baseURL: BASE_URL,
		responseType: "json",
	});

	return axiosInstance;
};