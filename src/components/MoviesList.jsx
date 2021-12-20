import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IMAGE_URL } from '../helpers/api';
import { useDispatch, useSelector } from "react-redux";
import { loadMoviesAsync } from '../redux/reducers/thunks';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 220,
    display: 'inline-block',
    margin: '8px 10px 8px 10px'
  },
});

const MoviesList = ({movie}) => {

    const classes = useStyles();

    const dispatch = useDispatch();
    const films = useSelector(state => state.movies.movies);
    const errorMessage = useSelector(state => state.movies.errorMessage);

    const movies = JSON.stringify(films);

    useEffect(() => {
		dispatch(loadMoviesAsync());
	}, [dispatch]);
    
    return (
        <div>
            {errorMessage && <h2 style={{marginLeft: '1%'}}>{errorMessage}</h2>}

            {JSON.parse(movies).length > 0 && JSON.parse(movies).map((movie) => 
                <Card className={classes.root} key={movie.id}>
                    <Link to="/description" state={{title: movie.title, overview: movie.overview, poster: movie.poster_path}}>
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
        </div>
    )
}

export default MoviesList
