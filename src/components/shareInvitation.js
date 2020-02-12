import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Grid, Link,Typography } from '@material-ui/core';
import { FacebookShareButton,WhatsappShareButton,TwitterShareButton,RedditShareButton,TelegramShareButton, FacebookIcon, WhatsappIcon, TelegramIcon, TwitterIcon, RedditIcon } from "react-share";
import useStyles from '../containers/styles';

const ShareInvitation = ({id}) => {
    const classes = useStyles();
    const url = `${window.location.origin}/r/${id}`;
    return (
        <Grid style={{marginTop:"-110px"}} item container alignItems="flex-start" justify="center">
            
            <Typography className={classes.input} variant="p" align="center">
                <Link  className={classes.invitation_link} style={{wordBreak:"break-word"}} to="#">
                    {url}
                </Link>
            </Typography>

            <Typography className={classes.input} align="center" variant="p">
                or share via;
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
            <Typography style={{marginTop:"30px"}} align="center">
                to check on invitation status, <RouterLink to="/sent">Click here</RouterLink>
            </Typography>
        </Grid>
    );
}

export default ShareInvitation;
