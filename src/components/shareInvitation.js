import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Grid,Typography } from '@material-ui/core';
import { 
    FacebookShareButton,
    WhatsappShareButton,
    TwitterShareButton,
    RedditShareButton,
    TelegramShareButton, 
    FacebookIcon, 
    WhatsappIcon, 
    TelegramIcon, 
    TwitterIcon, 
    RedditIcon 
} from "react-share";
import useStyles from '../containers/styles';

const ShareInvitation = ({id,name}) => {
    const classes = useStyles();
    const url = ` Hello *${name}*,\nLove is in the air🥰 and I would like you to be my valentine's date.\nplease click on the link below to accept my invitation 💕💕\n${window.location.origin}/r/${id}`;
    return (
        <Grid item container alignItems="flex-start" direction="column" justify="center">

            <Typography style={{width:"100%"}} className={classes.input} align="center" variant="body2">
                share via;
            </Typography>
            <Grid item container justify="center" direction="row" xs={12}>
                <FacebookShareButton url={url}>
                    <FacebookIcon size={32} round={true}/>
                </FacebookShareButton>
                <WhatsappShareButton url={url}>
                    <WhatsappIcon size={32} round={true}/>
                </WhatsappShareButton>
                <TelegramShareButton url={url}>
                    <TelegramIcon size={32} round={true}/>
                </TelegramShareButton>
                <TwitterShareButton url={url}>
                    <TwitterIcon size={32} round={true}/>
                </TwitterShareButton>
                <RedditShareButton url={url}>
                    <RedditIcon size={32} round={true}/>
                </RedditShareButton> 
            </Grid>
            <Typography style={{marginTop:"30px",width:"100%"}} align="center">
                to check on invitation status, <RouterLink to="/sent">Click here</RouterLink>
            </Typography>
        </Grid>
    );
}

export default ShareInvitation;
