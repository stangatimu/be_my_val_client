import React from 'react';
import { Grid, Typography, Snackbar } from '@material-ui/core';
import { useMutation } from '@apollo/react-hooks';
import "../App.css";

import useStyles from './styles';
//assets
import golden_ring from "../assets/golden_ring.svg";

// components
import CreateInvitationForm from "../components/createInvitation"; 

// queries
import { CREATE_INVITATION } from './queries';
    

const CreateInvitation = () => {
    const classes = useStyles();
    const [ createInvitation, {loading,data,error}] = useMutation(CREATE_INVITATION);
    let is_error_snackbar= false;

    return (
        <Grid className={classes.root} justify="center" container direction="row" >
            <Grid item container justify="center" direction="column" alignItems="center">
				{data && data.Invitation.Create._id && (
					<Typography className={`${classes.success} ${classes.alert}`} component="p">
						{`Success! send link below to ${data.Invitation.Create.recepient.name}. Goodluck`}
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
                <img
                src={golden_ring} 
                className={`${classes.golden_ring_home} App-logo`} 
                alt="spining golden ring"/>
                <Typography className={classes.caption} align="center">
                    GniLeEf sIhTeVoLi<span aria-label="love eyes" role="img">😍</span>
                </Typography>              
            </Grid>

            <Grid style={{minHeight:"40vh"}} item className={classes.content} alignItems="center" justify="center" container direction="row">
                <CreateInvitationForm is_loading={loading} onCreate={(data)=>createInvitation({variables:data})}/>
            </Grid>           
        </Grid>
    );
}

export default CreateInvitation;
