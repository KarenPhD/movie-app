import React, { useState, useEffect, lazy, Suspense } from 'react';
import { TextField } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { loadMoviesAsync } from '../redux/reducers/thunks';

const MoviesList = lazy(() => import('./MoviesList'));
const MovieItem = lazy(() => import('./MovieItem'));

const SearchBox = () => {

    const [films, setFilms] = useState([])

    const dispatch = useDispatch();
    const data = useSelector(state => state.movies.movies);
    const errorMessage = useSelector(state => state.movies.errorMessage);

    useEffect(() => {
        dispatch(loadMoviesAsync());
    }, [dispatch]);

    function SearchFunction(query) {
        const films = data.filter(flm => {
            if (query === "" || query.length === 0) {
                return flm;
            } else if (query.length > 3 && flm.title.toLowerCase().includes(query.toLowerCase())) {
                return flm;
            }
        });

        setFilms(films);
    }

    const movies = JSON.stringify(films);
    
    return (
        <>
            <div className='search-bar'>
                <form noValidate autoComplete="off">
                    <TextField id="outlined"
                        placeholder="Search" 
                        type="text"
                        onChange={e => SearchFunction(e.target.value)}
                    />
                </form>
            </div>

            {errorMessage && <h2 style={{marginLeft: '1%', color: 'red'}}>{errorMessage}</h2>}

            {JSON.parse(movies).length === 0 || JSON.parse(movies).length === '' ? 
                <Suspense fallback={<h3>Loading MoviesList Component...</h3>}>
                    <MoviesList />
                </Suspense> :
            JSON.parse(movies).length > 0 && JSON.parse(movies).map((movie) => 
                <Suspense fallback={<h3>Loading MovieItem Component...</h3>}>
                    <MovieItem movie={movie} key={movie.id} />
                </Suspense>
            )}
        </>
    )
}

export default SearchBox
