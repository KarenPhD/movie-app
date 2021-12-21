import React, { useEffect, lazy, Suspense } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import { loadMoviesAsync } from '../redux/reducers/thunks';

const MovieItem = lazy(() => import('./MovieItem'));

const useStyles = makeStyles({
  root: {
    maxWidth: 220,
    display: 'inline-block',
    margin: '8px 10px 8px 10px'
  },
});

const MoviesList = () => {

    const classes = useStyles();

    const dispatch = useDispatch();
    const films = useSelector(state => state.movies.movies);
    const errorMessage = useSelector(state => state.movies.errorMessage);

    const movies = JSON.stringify(films);
   
    useEffect(() => {
		dispatch(loadMoviesAsync());
	}, []);

    return (
        <div>
            {errorMessage && <h2 style={{marginLeft: '1%', color: 'red'}}>{errorMessage}</h2>}

            {JSON.parse(movies).length > 0 && JSON.parse(movies).map((movie) => 
                <Suspense fallback={<h3>Loading MovieItem Component...</h3>}>
                    <MovieItem movie={movie} key={movie.id} />
                </Suspense>
            )}
        </div>
    )
}

export default MoviesList
