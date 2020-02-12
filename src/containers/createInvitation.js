import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Typography } from '@material-ui/core';
import { useMutation } from '@apollo/react-hooks';
import "../App.css";

import useStyles from './styles';
import { saveInvitationToLocalStorage } from './../lib';
//assets
import golden_ring from "../assets/golden_ring.svg";

// components
import CreateInvitationForm from "../components/createInvitation"; 

// queries
import { CREATE_INVITATION } from './queries';
import ShareInvitation from '../components/shareInvitation';
    

const CreateInvitation = ({saved_invitations}) => {
    const classes = useStyles();
    const [ createInvitation, {loading,data,error}] = useMutation(CREATE_INVITATION);

    let is_data = false;
    if(data && data.Invitation.Create){
        is_data = true;
        saveInvitationToLocalStorage(data.Invitation.Create._id);
    }

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

            <Grid style={{minHeight:"70"}} item className={classes.content} alignItems="center" justify="center" container direction="row">
                {data && !!data.Invitation.Create && data.Invitation.Create._id && (
					<Typography className={`${classes.success} ${classes.alert}`} component="p">
						{`Success! send link below to ${data.Invitation.Create.recepient.name}. Goodluck`}
                        <span aria-label="love eyes" role="img">😉</span>
					</Typography>
				)}
				{/* errors */}
				{error && !!error.graphQLErrors.length && (
					<Typography className={`${classes.error} ${classes.alert}`}  component="p">
						{error.graphQLErrors[0].message}
					</Typography>)
				}
				{/* errors */}
				{error && error.networkError && (
					<Typography className={`${classes.error} ${classes.alert}`}  component="p">
						{"Sorry, something went wrong. Try again later."}
					</Typography>)
				}
                {!is_data && <CreateInvitationForm is_loading={loading} onCreate={(data)=>createInvitation({variables:data,errorPolicy:"all"})}/>}
                {!!data &&  !!data.Invitation.Create && !!data.Invitation.Create._id && (
                    <ShareInvitation id={data.Invitation.Create._id}/>
                )}
                {!!saved_invitations.length && !loading && (
                    <Typography style={{marginTop:"30px"}} align="center">
                        Looks liked you have a saved invitation <Link to="/sent">Click here</Link> to check on them
                    </Typography>
                )}
            </Grid>           
        </Grid>
    );
}

export default CreateInvitation;
