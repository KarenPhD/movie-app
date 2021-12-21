import { omit } from "lodash";
import favouritesActionTypes from "../actionTypes/favouritesActionTypes";

const initialState = {
	favourites: []
}

const favouritesReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case favouritesActionTypes.ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: payload
            }

		case favouritesActionTypes.REMOVE_FROM_FAVOURITES:
            return omit(state, [payload])

		default:
			return state;
	}
};

export default favouritesReducer;