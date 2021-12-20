import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { IMAGE_URL } from '../helpers/api';
import { useLocation, NavLink } from "react-router-dom";

const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      display: 'inline-block',
      margin: '8px 10px 8px 10px'
    },
    pageTitle: {
        textAlign: 'center',
        color: 'cornflowerblue',
        marginBottom: '7%'
    },
    details: {
        marginTop: '2%',
        width: '70%',
        margin: 'auto'
    },
    name: {
        display: 'inline-block',
        position: 'relative',
        bottom: '274px',
        left: '2.5%',
    },
    title: {
        textDecorationLine: 'underline',
        marginBottom: '25px',
        width: '50%',
        fontStyle: 'italic',
        color: 'darkturquoise'
    },
    overview: {
        width: '55%',
        display: 'inline-block',
        position: 'absolute',
        top: '38%',
        right: '12.5%'
    },
    backBtn: {
        width: '2%',
        height: '1%',
        position: 'absolute',
        left: '75%',
        background: 'darkgoldenrod',
        width: '5%',
        height: '5%',
        color: 'aliceblue',
        fontSize: '3em',
        "&:hover": {
            background: 'darkcyan',
            color: 'antiquewhite'
        }
    }
  });

const MovieDetails = () => {

    const classes = useStyles();

    const location = useLocation();
    const { title, overview, poster } = location.state;

    return (
        <div className={classes.details}>
            <Typography gutterBottom variant="h4" className={classes.pageTitle}>
                Movie Details
            </Typography>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={title}
                        height="200"
                        width="300"
                        image={IMAGE_URL + poster}
                        title={title}
                    />
                </CardActionArea>
            </Card>
            <div className={classes.name}>
                <Typography gutterBottom variant="h6" className={classes.title}>
                    NAME:
                </Typography>
                <Typography gutterBottom variant="h6">
                    {title}
                </Typography>
            </div>
            <div className={classes.overview}>
                <Typography gutterBottom variant="h6" className={classes.title}>
                    OVERVIEW:
                </Typography>
                <Typography gutterBottom variant="h6">
                    {overview}
                </Typography>
            </div>
            <NavLink to="/">
                <Button className={classes.backBtn}>
                    Back
                </Button>
            </NavLink>
        </div>
    )
}

export default MovieDetails
