import React from 'react';
import { Grid, Typography } from '@material-ui/core';
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
    console.log(error)
    console.log(data)

    return (
        <Grid className={classes.root} justify="center" container direction="row" >
            <Grid item container justify="center" direction="column" alignItems="center">
                <img
                src={golden_ring} 
                className={`${classes.golden_ring_home} App-logo`} 
                alt="spining golden ring"/>
                <Typography className={classes.caption} align="center">
                    GniLeEf sIhTeVoLi<span role="img">😍</span>
                </Typography>              
            </Grid>

            <Grid style={{minHeight:"40vh"}} item className={classes.content} alignItems="center" justify="center" container direction="row">
                <CreateInvitationForm is_loading={loading} onCreate={(data)=>createInvitation({variables:data})}/>
            </Grid>            
        </Grid>
    );
}

export default CreateInvitation;
