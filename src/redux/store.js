import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const persistedState = localStorage.getItem('films') ? JSON.parse(localStorage.getItem('films')) : {}

const configureStore = () => {
	
	const middlewares = [thunk];

	if (process.env.NODE_ENV === 'development') {
		middlewares.push(logger)
	}

	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const enhancers = composeEnhancers(applyMiddleware(...middlewares));
	const store = createStore(rootReducer(), persistedState, enhancers);

  store.subscribe(() => {
    localStorage.setItem('films', JSON.stringify(store.getState()))
  })

	return store;
};

export default configureStore;