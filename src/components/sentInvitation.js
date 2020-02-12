import React, { Fragment } from 'react';
import { Grid, Typography, Divider } from '@material-ui/core';
import useStyles from '../containers/styles';

const SentInvitation = ({data}) => {
    const classes = useStyles();
    return (
        <Fragment>
        <Grid direction="row" container justify="space-evenly">
            <Grid item xs={8}>
                <Typography variant="h5" className={classes.sent_invitation_name}>
                    {!!data.recepient && data.recepient.name}
                    {!!data.recepient && data.recepient.alias !== "null" && (
                        <span>
                            ({data.recepient.alias})
                        </span>
                    )}
                </Typography>
            </Grid>
            <Grid item xs={3}>
                {data.status?
                 (
                     <Typography align="center">
                         <span style={{lineHeight:"1em",fontSize:"2.2em",color:"#0f0"}} role="img" aria-label="check">&#10004;</span>
                     </Typography>
                 ):
                 (
                     <Typography style={{fontStyle:"italic",color:"#8a4003",fontSize:"1.3em"}}>
                         pending
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
