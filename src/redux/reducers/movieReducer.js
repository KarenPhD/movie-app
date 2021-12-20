import movieActionTypes from "../actionTypes/movieActionTypes";

const initialState = {
    isLoading: false,
	movies: [],
    //filteredMovies: [],
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
        
        /* case movieActionTypes.MOVIE_SEARCH:
            return {
                ...state,
                filteredMovies : console.log("Filtered movies: " + [...state.movies].filter((item) =>
                    item.title.toLowerCase().includes(payload.toLowerCase())
                ))
            }; */

		default:
			return state;
	}
};

export default moviesReducer;