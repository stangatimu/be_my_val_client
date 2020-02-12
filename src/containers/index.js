import React,{ Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import {ApolloProvider} from "@apollo/react-hooks";
import  ApolloClient from 'apollo-boost';

import { getInvitationsFromLocalStorage } from '../lib';


//components
import Home from './home';
import Create from './createInvitation';
import Respond from './respond';
import SentInvitations from './sentInvitations';

const client = new ApolloClient({
	uri: process.env.REACT_APP_API_URL,
});

const   Invitation = () => {
    let saved_invitations = getInvitationsFromLocalStorage();
    return (
        <Fragment>
            <Route path="/" exact component={()=>(<Home saved_invitations={saved_invitations} />)}/>
            <Route path="/invite" component={()=>(<Create saved_invitations={saved_invitations}/>)}/>
            <Route path="/r/:invitation" component={(props)=>(<Respond saved_invitations={saved_invitations} {...props}/>)}/>
            <Route path="/sent" component={()=>(<SentInvitations/>)}/>
        </Fragment>
    );
}

class InvitationGQL extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<Invitation {...this.props}/>
			</ApolloProvider>
		);
	}
}

export default InvitationGQL;
