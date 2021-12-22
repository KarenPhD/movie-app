import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromFavourites } from "../redux/actions/favouritesActions";
import { IMAGE_URL } from "../helpers/api";

const useStyles = makeStyles({
    root: {
        maxWidth: 220,
        display: 'inline-block',
        margin: '8px 10px 8px 10px'
    },
    favBtn: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '12px',
        paddingTop: '25px',
        paddingBottom: '5px'
    }
});

const Favourite = ({movie}) => {

    const classes = useStyles();

    const dispatch = useDispatch();

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
                    <Button size="small" color="primary" className={classes.favBtn} onClick={() => dispatch(removeFromFavourites(movie))}>
                        <span style={{color: 'red'}}>Remove From Favourites</span>
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default Favourite