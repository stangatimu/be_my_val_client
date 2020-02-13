import React from 'react';
import { Link } from 'react-router-dom';
import { Button,Grid, Typography } from '@material-ui/core';
import "../App.css";

import useStyles from './styles';

// golden ring
import golden_ring from "../assets/golden_ring.svg";
import static_couple from "../assets/static_couple.png";


const Home = ({saved_invitations}) => {
    const classes = useStyles();
    
    return (
        <Grid className={classes.root}  justify="center" alignItems='center' container>
            <Grid item container style={{height:"200px"}} justify="center" direction="column" alignItems="center">
                <img
                src={golden_ring} 
                className={`${classes.golden_ring_home} App-logo`} 
                alt="spining golden ring"/>
                <Typography className={classes.caption} align="center">
                I got this feeling<span aria-label="love eyes" role="img">😍</span>
                </Typography>              
            </Grid>

            <Grid item className={classes.content} alignItems="center" justify="center" container direction="column">
                <Typography className={classes.welcome_message} align="center">
                    Need a date this valentine's? create an invitation below
                    and make him/her feel special.
                </Typography>
                <img alt="toon couple" style={{height:"150px"}} src={static_couple} />
                <Button className={classes.button} variant="contained" size="big">
                    <Link to="/invite">
                        Create Invitation
                    </Link>
                </Button>
                {!!saved_invitations && !!saved_invitations.length && (
                    <Typography style={{marginTop:"30px"}} align="center">
                        Looks liked you have a saved invitation <Link to="/sent">Click here</Link> to check on them
                    </Typography>
                )}
            </Grid>            
        </Grid>
    );
}

export default Home;
