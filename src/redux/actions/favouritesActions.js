import favouritesActionTypes from "../actionTypes/favouritesActionTypes";

export const addToFavourites = (movie) => ({
	type: favouritesActionTypes.ADD_TO_FAVOURITES,
	payload: movie,
});

export const removeFromFavourites = (movie) => ({
	type: favouritesActionTypes.REMOVE_FROM_FAVOURITES,
	payload: movie,
});