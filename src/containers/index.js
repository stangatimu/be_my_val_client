import React from 'react';
import { Route } from 'react-router-dom';

const   Invitation = () => {
    return (
        <div>
            <Route path="/" exact component={()=>(<p>home</p>)}/>
            <Route path="/invite" component={()=>(<p>invite</p>)}/>
            <Route path="/respond/:invitation" component={()=>(<p>accept/decline invitation</p>)}/>
            <Route path="/invitations" component={()=>(<p>see invitation status</p>)}/>
            
        </div>
    );
}

export default  Invitation;
