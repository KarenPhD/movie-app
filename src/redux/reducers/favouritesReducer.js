import favouritesActionTypes from "../actionTypes/favouritesActionTypes";

const initialState = {
	favourites: []
}

const favouritesReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case favouritesActionTypes.ADD_TO_FAVOURITES:
           const favMovie = {
                id: payload.id,
                title: payload.title,
                poster_path: payload.poster_path,
				overview: payload.overview
            }
            const addedFavourites = [...state.favourites.filter((fav) => fav.id !== payload.id), favMovie]
            return {
                ...state,
                favourites: addedFavourites
            }

		case favouritesActionTypes.REMOVE_FROM_FAVOURITES:
			const removeFavourites = state.favourites.filter((fav) => fav.id !== payload.id)
            return {
                ...state,
                favourites: removeFavourites
            }

		default:
			return state;
	}
};

export default favouritesReducer;