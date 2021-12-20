import React, { useState, useEffect, lazy, Suspense } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IMAGE_URL } from '../helpers/api';
import { TextField } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { loadMoviesAsync } from '../redux/reducers/thunks';
import { Link } from "react-router-dom";

const MoviesList = lazy(() => import('./MoviesList'));

const useStyles = makeStyles({
  root: {
    maxWidth: 220,
    display: 'inline-block',
    margin: '8px 10px 8px 10px'
  },
});

const SearchBox = () => {

    const classes = useStyles();  

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
            } else if (query.length > 2 && flm.title.toLowerCase().includes(query.toLowerCase())) {
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

            {errorMessage && <h2 style={{marginLeft: '1%'}}>{errorMessage}</h2>}

            {JSON.parse(movies).length === 0 || JSON.parse(movies).length === '' ? 
            <Suspense fallback={<h3>Loading MoviesList Component...</h3>}>
                <MoviesList />
            </Suspense> :
            JSON.parse(movies).length > 0 && JSON.parse(movies).map((movie) => 
                <Card className={classes.root} key={movie.id}>
                    <Link to={"/description"} state={{title: movie.title, overview: movie.overview, poster: movie.poster_path}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt={movie.title}
                                height="160"
                                width="220"
                                image={IMAGE_URL + movie.poster_path}
                                title={movie.title}
                            />
                            <CardContent>
                                <Typography gutterBottom className='poster-title'>
                                    {movie.title}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                    <CardActions>
                        <Button size="small" color="primary" className='fav-btn'>
                            Add To Favourites
                        </Button>
                    </CardActions>
                </Card>
            )}
        </>
    )
}

export default SearchBox
