import movieActionTypes from "../actionTypes/movieActionTypes";

const initialState = {
    isLoading: false,
	movies: [],
	errorMessage: null,
}

const moviesReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case movieActionTypes.MOVIES_LOAD_START:
			return {
				...state,
				isLoading: true,
				movies: [],
				errorMessage: null,
			};

		case movieActionTypes.MOVIES_LOAD_SUCCESS:
			return {
				...state,
				isLoading: false,
				movies: payload,
			};

		case movieActionTypes.MOVIES_LOAD_ERROR:
			return {
				...state,
				isLoading: false,
				errorMessage: payload,
			};

		default:
			return state;
	}
};

export default moviesReducer;