import React,{ Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import {ApolloProvider} from "@apollo/react-hooks";
import  ApolloClient from 'apollo-boost';


//components
import Home from './home';
import Create from './createInvitation';
import Respond from './respond';
import SentInvitations from './sentInvitations';

const client = new ApolloClient({
	uri: process.env.REACT_APP_API_URL,
});

const   Invitation = () => {
    return (
        <Fragment>
            <Route path="/" exact component={()=>(<Home/>)}/>
            <Route path="/invite" component={()=>(<Create/>)}/>
            <Route path="/r/:invitation" component={(props)=>(<Respond {...props}/>)}/>
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
