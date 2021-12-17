import React from 'react';
import MoviesList from '../MoviesList';
import SearchBox from '../SearchBox';

const Home = () => {

    return (
        <div className='film-container'>
            <SearchBox />
            <MoviesList />
        </div>
    )
}

export default Home