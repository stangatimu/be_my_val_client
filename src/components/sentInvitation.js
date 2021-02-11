import React, { Fragment } from 'react';
import { Grid, Typography, Divider } from '@material-ui/core';
// peding
import pending from "../assets/pending.webp";

const SentInvitation = ({data}) => {
    return (
        <Fragment>
        <Grid direction="row" container justify="space-evenly">
            <Grid item xs={8}>
                <Typography variant="h6">
                    {!!data.recepient && data.recepient.name}
                    {!!data.recepient && data.recepient.alias !== "null" && (
                        <span>
                            ({data.recepient.alias})
                        </span>
                    )}
                </Typography>
            </Grid>
            <Grid item xs={3} container justify="flex-end">
                {data.status?
                 (
                     <Typography align="center">
                         <span style={{lineHeight:"1em",fontSize:"2.2em",color:"#0f0"}} role="img" aria-label="check">&#10004;</span>
                     </Typography>
                 ):
                 (
                     <Typography style={{color:"#8a4003"}}>
                         <img style={{height:"30px"}} src={pending} alt="pending"/>
                     </Typography>
                 )
                }
            </Grid>          
        </Grid>
        <Divider style={{width:"95%",marginTop:"10px"}}/>
        </Fragment>
    );
}

export default SentInvitation;
