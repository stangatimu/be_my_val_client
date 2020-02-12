import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button,Grid, Typography } from '@material-ui/core';
import "../App.css";

import useStyles from './styles';
import { getInvitationsFromLocalStorage } from '../lib';

// golden ring
import golden_ring from "../assets/golden_ring.svg";

const Home = () => {
    const classes = useStyles();

    let saved_invitations = getInvitationsFromLocalStorage();
    console.log(new Set(saved_invitations));
    return (
        <Grid className={classes.root}  justify="center" alignItems='center' container>
            <Grid item container style={{height:"200px"}} justify="center" direction="column" alignItems="center">
                <img
                src={golden_ring} 
                className={`${classes.golden_ring_home} App-logo`} 
                alt="spining golden ring"/>
                <Typography className={classes.caption} align="center">
                    GniLeEf sIhTeVoLi<span aria-label="love eyes" role="img">😍</span>
                </Typography>              
            </Grid>

            <Grid item className={classes.content} alignItems="center" justify="center" container direction="column">
                <Typography className={classes.welcome_message} align="center">
                    Need a date this valentine's? create an invitation below
                    and make him/her feel special.
                </Typography>
                <Button className={classes.button} variant="contained" size="big">
                    <Link to="/invite">
                        Create Invitation
                    </Link>
                </Button>
                {!!saved_invitations && saved_invitations.length && (
                    <Fragment>
                        <Typography style={{marginTop:"30px"}} align="center">
                            Looks liked you have a saved invitation <Link to="/sent">Click here</Link> to check on them
                        </Typography>

                    </Fragment>
                )}
            </Grid>            
        </Grid>
    );
}

export default Home;
