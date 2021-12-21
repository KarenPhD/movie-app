import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IMAGE_URL } from '../helpers/api';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFavourites, removeFromFavourites } from '../redux/actions/favouritesActions';

const useStyles = makeStyles({
    root: {
      maxWidth: 220,
      display: 'inline-block',
      margin: '8px 10px 8px 10px'
    },
  });

const MovieItem = ({movie}) => {

    const classes = useStyles();

    const dispatch = useDispatch();
    const [favourite, setFavourite] = useState(false);

    const dispatchFavourites = (favMovie) => {
        if (favourite) {
            dispatch(removeFromFavourites(favMovie));
            setFavourite(false);
        } else {
            dispatch(addToFavourites(favMovie));
            setFavourite(true);
        }
    }

    return (
        <>
            <Card className={classes.root}>
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
                    <Button size="small" color="primary" className='fav-btn' onClick={() => dispatchFavourites(movie)}>
                        {favourite ? <span style={{color: 'red'}}>Remove From Favourites</span> : "Add To Favourites"}
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default MovieItem
