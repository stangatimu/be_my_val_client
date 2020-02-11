import React, { Fragment } from 'react';
import { Button,Grid, Typography, CircularProgress } from '@material-ui/core';
import "../App.css";

import useStyles from './styles';

// golden ring
import golden_ring from "../assets/golden_ring.svg";
import { useQuery } from '@apollo/react-hooks';
import { GET_INVITATION_BY_ID } from './queries';

const Respond = ({match}) => {
    const classes = useStyles();
    const { data, error, loading } = useQuery(GET_INVITATION_BY_ID,{
        variables:{id:match.params.invitation}
    });
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
            <Grid item className={classes.content} alignItems="center" justify="flex-start" container direction="column">
                {loading && !data && (
                    <CircularProgress size={40} thickness={4}/>
                )}
                {data && data.Invitation.GetByID && (
					<Typography className={`${classes.success} ${classes.alert}`} component="p">
                        <span aria-label="love eyes" role="img">😉</span>
					</Typography>
				)}
				{/* errors */}
				{error && !!error.graphQLErrors.length && (
					<Typography className={`${classes.error} ${classes.alert}`}  component="p">
						{"Sorry, something went wrong. Try again later."}
					</Typography>)
				}
				{/* errors */}
				{error && error.networkError && (
					<Typography className={`${classes.error} ${classes.alert}`}  component="p">
						{"Sorry, something went wrong. Try again later."}
					</Typography>)
				}
            
                {!!data && data.Invitation.GetByID && (
                    <Fragment>
                    <Typography style={{fontSize:"3.5em",lineHeight:".6em"}} className={classes.welcome_message} align="center">
                        Will you 
                    </Typography>
                    <Typography style={{fontSize:"3.5em",lineHeight:".2em"}} className={classes.welcome_message}  align="center">
                        be my 
                    </Typography>
                    <Typography style={{fontSize:"3.5em",lineHeight:".7em"}} className={classes.welcome_message} align="center">
                        valentine's? 
                    </Typography>
                    <Typography align="center" className={`${classes.recepient_name} recepient_name`}>
                        {data.Invitation.GetByID.recepient.name}&ensp;<span className="blinker">_</span>
                    </Typography>
                    <Button fullWidth className={classes.button} variant="contained" size="big">
                        YES
                    </Button>
                    <Button fullWidth color="secondary" variant="outlined" size="big">
                        NO
                    </Button>
                    <Grid item container justify="center">
                        <Typography style={{position:"absolute",fontStyle:"italic",bottom:"60px"}}>
                            with love from&ensp;{data.Invitation.GetByID.sender}
                        </Typography>
                    </Grid>
                    </Fragment>
                 )}
            </Grid>            
        </Grid>
    );
}

export default Respond;
