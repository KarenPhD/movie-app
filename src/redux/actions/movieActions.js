import movieActionTypes from '../actionTypes/movieActionTypes';

const moviesLoadStart = () => ({
	type: movieActionTypes.MOVIES_LOAD_START,
});

const moviesLoadSuccess = (movies) => ({
	type: movieActionTypes.MOVIES_LOAD_SUCCESS,
	payload: movies,
});

const moviesLoadError = (errorMessage) => ({
	type: movieActionTypes.MOVIES_LOAD_ERROR,
	payload: errorMessage,
});

export default {
	moviesLoadStart,
	moviesLoadSuccess,
	moviesLoadError,
};