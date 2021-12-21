import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    pageTitle: {
        textAlign: 'center',
        color: 'cornflowerblue',
        marginBottom: '7%',
        marginTop: '2%',
    }
});

const Favourites = () => {

    const classes = useStyles();

    return (
        <>
            <Typography gutterBottom variant="h4" className={classes.pageTitle}>
                Favourite Movies
            </Typography>
        </>
    )
}

export default Favourites
