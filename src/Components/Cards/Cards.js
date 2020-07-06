import React from 'react'
//Import Material UI
import { Card, CardContent, Typography, Grid } from '@material-ui/core'


//importing CSS 
import styles from './Cards.module.css';

const Cards = ( { data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if( !confirmed ) {
        return "Wait For a While..."
    }

    return (
        <div className={styles.container}>
            <Grid container  justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h4">{confirmed.value}</Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">Number of active cases of Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
    <Typography variant="h4">{recovered.value}</Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">Number of recovered cases of Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
    <Typography variant="h4">{deaths.value}</Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">Number of deaths of Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Cards
