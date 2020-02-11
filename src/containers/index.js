import React,{ Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import {ApolloProvider} from "@apollo/react-hooks";
import  ApolloClient from 'apollo-boost';


//components
import Home from './home';
import Create from './createInvitation';

const client = new ApolloClient({
	uri: process.env.REACT_APP_API_URL,
});

const   Invitation = () => {
    return (
        <Fragment>
            <Route path="/" exact component={()=>(<Home/>)}/>
            <Route path="/invite" component={()=>(<Create/>)}/>
            <Route path="/respond/:invitation" component={()=>(<p>accept/decline invitation</p>)}/>
            <Route path="/invitations" component={()=>(<p>see invitation status</p>)}/>
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
