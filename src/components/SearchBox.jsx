import React, { useState } from 'react';
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

const useStyles = makeStyles({
  root: {
    maxWidth: 220,
    display: 'inline-block',
    margin: '8px 10px 8px 10px'
  },
});

const SearchBox = ({data}) => {

    const classes = useStyles();  

    const [films, setFilms] = useState([])

    function SearchFunction(query) {

        //const films = data.filter(fm => fm.title.replace(/ /g,'').toLowerCase().includes(value.toLowerCase()))
       
        const films = data.filter(flm => {
            if (query === "") {
                return flm;
            } else if (flm.title.toLowerCase().includes(query.toLowerCase())) {
                return flm;
            }
        });

        setFilms(films)
    }
    
    return (
        <>
            <div className='search-bar'>
                <form noValidate autoComplete="off">
                    <TextField id="outlined" placeholder="Search" onChange={e => SearchFunction(e.target.value)} />
                </form>
            </div>

            {films.length > 0 && films.map((film) => 
                <Card className={classes.root} key={film.id}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={film.title}
                            height="160"
                            width="220"
                            image={IMAGE_URL + film.poster_path}
                            title={film.title}
                        />
                        <CardContent>
                            <Typography gutterBottom className='poster-title'>
                                {film.title}
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
        </>
    )
}

export default SearchBox
