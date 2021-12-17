import { apiClient } from "../helpers/api";


class MoviesService {
	getMovies = () => apiClient().get(`/discover/movie`, {
        params: {
            api_key: '29090ee2dd9966f989be1d9d7139a9a7',
            language: 'en_US'
        }
    });
}

export default new MoviesService();