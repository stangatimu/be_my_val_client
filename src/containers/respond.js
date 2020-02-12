import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { Button,Grid, Typography, CircularProgress } from '@material-ui/core';
import "../App.css";

import useStyles from './styles';

// golden ring
import golden_ring from "../assets/golden_ring.svg";
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_INVITATION_BY_ID, RESPOND_TO_INVITATION } from './queries';
import AccepetedInvitation from '../components/accepetedInvitation';

const Respond = ({match}) => {
    const classes = useStyles();
    const { data, error, loading } = useQuery(GET_INVITATION_BY_ID,{
        variables:{id:match.params.invitation},
        errorPolicy:"all"
    });

    const [ onRespond, { data:res_data,loading:res_loading,error:res_error}] = useMutation(RESPOND_TO_INVITATION);

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
            <Grid item className={classes.content} alignItems="center" justify="flex-start" container direction="column">
                {loading && !data && (
                    <CircularProgress color="secondary" size={40} thickness={4}/>
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
                {res_error && !!error.graphQLErrors.length && (
					<Typography className={`${classes.error} ${classes.alert}`}  component="p">
						{"Sorry, something went wrong. Try again later."}
					</Typography>)
				}
				{/* errors */}
				{res_error && error.networkError && (
					<Typography className={`${classes.error} ${classes.alert}`}  component="p">
						{"Sorry, something went wrong. Try again later."}
					</Typography>)
				}
                {!!data && !res_data && data.Invitation.GetByID && (
                    <Fragment>
                    <Typography style={{fontSize:"2.5em",lineHeight:".6em"}} className={classes.welcome_message} align="center">
                        Will you 
                    </Typography>
                    <Typography style={{fontSize:"2.5em",lineHeight:".2em"}} className={classes.welcome_message}  align="center">
                        be my 
                    </Typography>
                    <Typography style={{fontSize:"3.5em",lineHeight:".7em"}} className={classes.welcome_message} align="center">
                        valentine's? 
                    </Typography>
                    <Typography align="center" className={`${classes.recepient_name} recepient_name`}>
                        {data.Invitation.GetByID.recepient.name}&ensp;<span className="blinker">_</span>
                    </Typography>
                    {!res_loading && (
                        <Fragment>
                            <Button 
                            fullWidth 
                            onClick={()=>{
                                onRespond({variables:{id:match.params.invitation,status:true},errorPolicy:"all"})
                            }}
                            className={classes.button} 
                            variant="contained">
                                YES
                            </Button>
                            <Button 
                            fullWidth
                            onClick={()=>{
                                onRespond({variables:{id:match.params.invitation,status:false},errorPolicy:"all"})
                            }} 
                            color="secondary" 
                            variant="outlined">
                                NO
                            </Button>
                        </Fragment>
                    )}
                    {res_loading && (
                       <CircularProgress color="secondary" size={24} thickness={4}/> 
                    )}
                    <Grid item container justify="center">
                        <Typography style={{position:"absolute",fontStyle:"italic",bottom:"5px"}}>
                            with love from&ensp;{data.Invitation.GetByID.sender}
                            {data.Invitation.GetByID.recepient && data.Invitation.GetByID.recepient.alias && (
                                <span>
                                    &ensp;to {data.Invitation.GetByID.recepient.alias}
                                </span>
                            )}
                        </Typography>
                    </Grid>
                    </Fragment>
                 )}
                 {!!res_data && !!res_data.Invitation.RespondToInvitation && (
                     <AccepetedInvitation sad={false}/>
                 )}
                 {!!res_data && !res_data.Invitation.RespondToInvitation && (
                     <AccepetedInvitation sad={true}/>
                 )}
                 {!!res_data && (
                     <Button className={classes.button} style={{position:"absolute",bottom:"20px"}} variant="contained" size="big">
                        <Link to="/invite">
                            Create Invitation
                        </Link>
                    </Button>
                 )}
            </Grid>            
        </Grid>
    );
}

export default Respond;
