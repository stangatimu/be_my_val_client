import React from 'react';


import toon_couple_kiss from "../assets/couple_kiss.gif";
import sad_cat from "../assets/sad_cat.gif";
const AccepetedInvitation = ({sad}) => {
    if(sad){
        return <img alt="sad_face" src={sad_cat} style={{width:"200px",margin:"20px auto",borderRadius:"50%"}}/>
    }
    return (
        <img alt="toon kiss" src={toon_couple_kiss} style={{width:"100%",borderRadius:'inherit',}}/>
    );
}

export default AccepetedInvitation;
