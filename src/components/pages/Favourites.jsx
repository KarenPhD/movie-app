import React, { lazy, Suspense} from 'react';
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const Favourite = lazy(() => import('../Favourite'));

const useStyles = makeStyles({
    pageTitle: {
        textAlign: 'center',
        color: 'cornflowerblue',
        marginBottom: '7%',
        marginTop: '2%',
    },
    noFavsText: {
        textAlign: 'center',
        fontStyle: 'italic',
        color: 'cyan',
        marginTop: '15%',
    }
});

const Favourites = () => {

    const classes = useStyles();

    const films = useSelector(state => state.favourites.favourites);
    const favMovies = JSON.stringify(films);

    return (
        <>
            <Typography gutterBottom variant="h4" className={classes.pageTitle}>
                Favourite Movies
            </Typography>
            
            {JSON.parse(favMovies).length > 0 ? JSON.parse(favMovies).map((movie) => 
                <Suspense fallback={<h3>Loading Favourite Component...</h3>} key={movie.id}>
                    <Favourite movie={movie} />
                </Suspense>
            ) : <Typography gutterBottom variant="h5" className={classes.noFavsText}>
                    There are currently no favourite movies!
                </Typography>}
        </>
    )
}

export default Favourites
