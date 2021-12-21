import { combineReducers } from "redux";
import favouritesReducer from "./favouritesReducer";
import moviesReducer from "./movieReducer";

const rootReducer = () =>
	combineReducers({
		movies: moviesReducer,
		favourites: favouritesReducer
	});

export default rootReducer;