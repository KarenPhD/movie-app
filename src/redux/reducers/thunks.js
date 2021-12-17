import movieActions from "../actions/movieActions";
import MoviesService from "../../services/movies.service";


export const loadMoviesAsync = () => (dispatch) => {
	dispatch(movieActions.moviesLoadStart());

	MoviesService.getMovies()
		.then((response) => dispatch(movieActions.moviesLoadSuccess(response.data.results)))
		.catch((error) => dispatch(movieActions.moviesLoadError(error.message)));
};