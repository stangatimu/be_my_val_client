import React from 'react';
import { Link } from 'react-router-dom';
import { Button,Grid, Typography } from '@material-ui/core';
import "../App.css";

import useStyles from './styles';

// golden ring
import golden_ring from "../assets/golden_ring.svg";

const Home = () => {
    const classes = useStyles();
    return (
        <Grid className={classes.root} justify="center" container direction="row" >
            <Grid item container justify="center" direction="column" alignItems="center">
                <img
                src={golden_ring} 
                className={`${classes.golden_ring_home} App-logo`} 
                alt="spining golden ring"/>
                <Typography className={classes.caption} align="center">
                    GniLeEf sIhTeVoLi<span aria-label="love eyes" role="img">😍</span>
                </Typography>              
            </Grid>

            <Grid item className={classes.content} alignItems="center" justify="center" container direction="row">
                <Typography className={classes.welcome_message} align="center">
                    Need a date this valentine's? create an invitation below
                    and make him/her feel special.
                </Typography>
                <Button className={classes.button} variant="contained" size="big">
                    <Link to="/invite">
                        Create Invitation
                    </Link>
                </Button>
            </Grid>            
        </Grid>
    );
}

export default Home;
