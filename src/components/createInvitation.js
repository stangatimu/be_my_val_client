import React, { useState } from 'react';
import { Grid,TextField, Typography, Button, CircularProgress } from "@material-ui/core";

// styles
import useStyles from "../containers/styles";

const CreateInvitation = ({onCreate,is_loading}) => {
    const classes = useStyles();
    const [ details, setDetails ] = useState({
        recepient:{
            name:"",
            alias:""
        },
        sender:""
    });

    const onCreateInvitation = (e)=>{
        e.preventDefault();

        onCreate(details);

        // submit form
    }
    return (
        <Grid item container>
            <form className={classes.form} onSubmit={onCreateInvitation}>
                <Typography className={classes.input} align="center" variant="h5">
                    Create Invitation
                </Typography>
                <TextField
                  error
                  required
                  size="small"
                  fullWidth
                  id="recepient_name"
                  placeholder="His/Her name"
                  variant="outlined"
                  value={details.recepient.name}
                  className={classes.input}
                  onChange={(e)=>setDetails({
                      ...details,
                      recepient:{
                          ...details.recepient,
                          name:e.target.value
                        }
                    })}
                />
                <TextField
                  error
                  size="small"
                  fullWidth
                  id="alias"
                  placeholder="nickname (optional)"
                  variant="outlined"
                  className={classes.input}
                  value={details.recepient.alias}
                  onChange={(e)=>setDetails({
                    ...details,
                    recepient:{
                        ...details.recepient,
                        alias:e.target.value
                      }
                  })}
                />
                <TextField
                  error
                  required
                  size="small"
                  fullWidth
                  id="sender_name"
                  placeholder="Your name"
                  variant="outlined"
                  className={classes.input}
                  value={details.sender}
                  onChange={(e)=>setDetails({
                    ...details,
                    sender:e.target.value
                  })}
                />
                <Button disabled={is_loading} fullWidth type="submit" className={classes.button} variant="contained">
                    {!is_loading?"Create Invitation":(<CircularProgress size={24} thickness={4}/>)}
                </Button>
            </form>
        </Grid>
    );
}

export default CreateInvitation;
