import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography,CircularProgress,Button } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import "../App.css";

import { getInvitationsFromLocalStorage } from '../lib';
import useStyles from './styles';

//assets
import golden_ring from "../assets/golden_ring.svg";
import { GET_SENT_INVITAIONS } from './queries';
import SentInvitation from '../components/sentInvitation';

// get invitations
let saved_invitations = getInvitationsFromLocalStorage();

const SentInvitations = () => {
    const classes = useStyles();

    const { loading,data,error } = useQuery(GET_SENT_INVITAIONS,{
        variables:{ids:[...new Set(saved_invitations)]},
        errorPolicy:"all"
    });
    console.log(data);

    return (
        <Grid className={classes.root} justify="center" container direction="row" >
            <Grid item container style={{height:"200px"}} justify="center" direction="column" alignItems="center">
                <img
                src={golden_ring} 
                className={`${classes.golden_ring_home} App-logo`} 
                alt="spining golden ring"/>
                <Typography className={classes.caption} align="center">
                    I got this feeling<span aria-label="love eyes" role="img">😍</span>
                </Typography>              
            </Grid>

            <Grid style={{position:"relative",borderRadius:"0",minWidth:"100%"}} item className={classes.content} alignItems="center" justify="center" container direction="row">
                {loading && !data && (
                    <CircularProgress color="secondary" size={40} thickness={4}/>
                )}
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

                {!!data && data.Invitation.GetManyByIds && (
                    <Grid style={{position:"absolute",top:"20px"}} justify="center" container direction="row">
                        {data.Invitation.GetManyByIds.map(invitation =>(
                            <SentInvitation data={invitation}/>
                        ))}
                    </Grid>
                )}
                {!loading && data && (<Button className={classes.button} style={{position:"absolute",bottom:"0px"}} variant="contained" size="big">
                    <Link to="/invite">
                        Create Invitation
                    </Link>
                </Button>)}
            </Grid>           
        </Grid>
    );
}

export default SentInvitations;
