import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IMAGE_URL } from '../helpers/api';

const useStyles = makeStyles({
  root: {
    maxWidth: 220,
    display: 'inline-block',
    margin: '8px 10px 8px 10px'
  },
});

const MoviesList = ({movies, isLoading, isError}) => {

    const classes = useStyles();
    
    return (
        <div>
            {isError && <div>Something went wrong ...</div>}

            {isLoading ? (
                <div>Loading ...</div>
            ) : movies.length > 0 && movies.map((movie) => 
                <Card className={classes.root} key={movie.id}>
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
