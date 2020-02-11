import React from 'react';
import { Route } from 'react-router-dom';


//components
import Home from './home';


const   Invitation = () => {
    return (
        <div>
            <Route path="/" exact component={()=>(<Home/>)}/>
            <Route path="/invite" component={()=>(<p>invite</p>)}/>
            <Route path="/respond/:invitation" component={()=>(<p>accept/decline invitation</p>)}/>
            <Route path="/invitations" component={()=>(<p>see invitation status</p>)}/>
            
        </div>
    );
}

export default  Invitation;
