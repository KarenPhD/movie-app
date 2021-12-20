import React, { lazy, Suspense} from 'react';
const SearchBox = lazy(() => import('../SearchBox'));

const Home = () => {

    return (
        <div className='film-container'>
            <Suspense fallback={<div>Loading SearchBox Component...</div>}>
                <SearchBox />
            </Suspense>
        </div>
    )
}

export default Home