import React, { useState } from 'react';
import { Grid,TextField, Typography, Button, CircularProgress } from "@material-ui/core";

// styles
import useStyles from "../containers/styles";

const CreateInvitation = ({onCreate,is_loading}) => {
    const classes = useStyles();
    const [ details, setDetails ] = useState({
        name:"",
        alias:"",
        sender:""
    });

    const onCreateInvitation = (e)=>{
        e.preventDefault();

        onCreate({...details,alias:details.alias || "null"});

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
                  min="3"
                  required
                  size="small"
                  type="text"
                  fullWidth
                  id="recepient_name"
                  placeholder="His/Her name"
                  variant="outlined"
                  value={details.name}
                  className={classes.input}
                  onChange={(e)=>setDetails({
                      ...details,
                      name:e.target.value
                    })}
                />
                <TextField
                  error
                  min="3"
                  size="small"
                  fullWidth
                  type="text"
                  id="alias"
                  placeholder="nickname (optional)"
                  variant="outlined"
                  className={classes.input}
                  value={details.alias}
                  onChange={(e)=>setDetails({
                    ...details,
                    alias:e.target.value
                  })}
                />
                <TextField
                  error
                  required
                  min="3"
                  size="small"
                  fullWidth
                  id="sender_name"
                  type="text"
                  placeholder="Your name"
                  variant="outlined"
                  className={classes.input}
                  value={details.sender}
                  onChange={(e)=>setDetails({
                    ...details,
                    sender:e.target.value
                  })}
                />
                {!is_loading && (
                    <Button disabled={is_loading} fullWidth type="submit" className={classes.button} variant="contained">
                        Create CreateInvitation
                    </Button>
                )}
                {is_loading && (
                    <Button fullWidth disabled className={classes.button} variant="contained">
                        <CircularProgress color="secondary" size={24} thickness={4}/>
                    </Button>
                )}
            </form>
        </Grid>
    );
}

export default CreateInvitation;
