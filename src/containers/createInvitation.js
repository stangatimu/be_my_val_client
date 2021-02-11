import React from 'react';
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
    
    React.useEffect(()=>{
        if(data?.Invitation?.Create){
            saveInvitationToLocalStorage(data.Invitation.Create._id);
        }
    },[data])

    return (
        <Grid className={classes.root} justify="center" container alignItems="flex-start" direction="row" >
            <Grid item container style={{height:"200px"}} justify="center" direction="column" alignItems="center">
                <img
                src={golden_ring} 
                className={`${classes.golden_ring_home} App-logo`} 
                alt="spining golden ring"/>
                <Typography className={classes.caption} align="center">
                I got this feeling<span aria-label="love eyes" role="img">😍</span>
                </Typography>              
            </Grid>

            <Grid 
            style={{minHeight:"70"}} 
            item className={`${classes.content} 
            ${classes.form_content}`} 
            alignItems="center" 
            justify="center" 
            container 
            direction="row"
            >
                {data && !!data.Invitation.Create && data.Invitation.Create._id && (
					<Typography className={`${classes.success} ${classes.alert}`} component="p">
						{`Success! send link below to ${data.Invitation.Create.recepient.name}. Goodluck`}
                        <span aria-label="love eyes" role="img">😉</span>
					</Typography>
				)}
				{/* errors */}
				{error?.graphQLErrors?.length && (
					<Typography className={`${classes.error} ${classes.alert}`}  component="p">
						{error.graphQLErrors[0].message}
					</Typography>)
				}
				{/* errors */}
				{error?.networkError && (
					<Typography className={`${classes.error} ${classes.alert}`}  component="p">
						{"Sorry, something went wrong. Try again later."}
					</Typography>
                )
				}
                
                {!data?.Invitation?.Create? 
                <CreateInvitationForm 
                is_loading={loading} 
                onCreate={(data)=>createInvitation({variables:data,errorPolicy:"all"})}/>:
                (
                    <ShareInvitation name={data?.Invitation?.Create?._id?.recepient?.name || "Love"} id={"data.Invitation.Create._id"}/>
                )}
            </Grid>           
        </Grid>
    );
}

export default CreateInvitation;
