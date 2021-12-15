import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MoviesList from '../MoviesList';
import SearchBox from '../SearchBox';
import { API_KEY, BASE_URL } from '../../helpers/api';

const Home = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [query, setQuery] = useState('taxi');

    // Search movies
    useEffect(() => {
        const searchMovies = async () => {
            setIsError(false);
            setIsLoading(true);
      
            try {
              
              const result = await axios(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en_US&query=${query}`)
      
              setData(result.data.results);

            } catch (error) {
              setIsError(true);
            }
      
            setIsLoading(false);
        };

        searchMovies();
    }, []);

    return (
        <div className='film-container'>
            <SearchBox data={data} />
            <MoviesList movies={data} isLoading={isLoading} isError={isError} />
        </div>
    )
}

export default Home