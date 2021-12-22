import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadMoviesAsync } from '../redux/reducers/thunks';

const MovieItem = lazy(() => import('./MovieItem'));

const MoviesList = () => {

    const dispatch = useDispatch();
    const films = useSelector(state => state.movies.movies);
    const errorMessage = useSelector(state => state.movies.errorMessage);

    const movies = JSON.stringify(films);
   
    useEffect(() => {
		dispatch(loadMoviesAsync());
	}, [dispatch]);

    return (
        <div>
            {errorMessage && <h2 style={{marginLeft: '1%', color: 'red'}}>{errorMessage}</h2>}

            {JSON.parse(movies).length > 0 && JSON.parse(movies).map((movie) => 
                <Suspense fallback={<h3>Loading MovieItem Component...</h3>} key={movie.id}>
                    <MovieItem movie={movie} />
                </Suspense>
            )}
        </div>
    )
}

export default MoviesList
