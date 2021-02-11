import React from 'react';
import { Link } from 'react-router-dom';
import { Button,Divider,Grid, Typography } from '@material-ui/core';
import "../App.css";

import useStyles from './styles';

// golden ring
import golden_ring from "../assets/golden_ring.svg";
import static_couple from "../assets/couple_hug.png";


const Home = ({saved_invitations}) => {
    const classes = useStyles();
    
    return (
        <Grid className={classes.root}  justify="center" alignItems='center' alignContent='center' container>
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
                <Typography align="center"><strong>Suprise crush this valentine's</strong></Typography>
                <Divider/>
                <Typography align="center">
                   Cheza kama wewe!
                </Typography>
                <img alt="toon couple" style={{height:"150px"}} src={static_couple} />
                <Button className={classes.button} variant="contained" size="big">
                    <Link to="/invite">
                        Create Invitation
                    </Link>
                </Button>
                {saved_invitations?.length ? (
                    <Typography style={{marginTop:"30px"}} align="center">
                        Looks liked you have saved invitations <Link to="/sent">Click here</Link> to check on them
                    </Typography>
                ):(
                    <Typography style={{marginTop:"30px"}} align="center">
                        An Easy way to get a date.
                    </Typography>
                )}
            </Grid>            
        </Grid>
    );
}

export default Home;
