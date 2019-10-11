import React from 'react';
import { Container } from "semantic-ui-react";
import Header from 'ui/components/common/header';
import Footer from 'ui/components/common/footer';
import RedboxMessages from 'ui/screen/private/redbox.messages'
import ChatBox from 'ui/screen/private/chat.box';
import PrivateRoute from 'ui/components/reusable/private.routes';

const AppTemplate = ({ match }) => {
    // console.log('${match.path}', `${match.path}`)
    return (
        <React.Fragment>
        
        <Container style={{ margin: 10, width: "98%" }}>
            <Header></Header>
            
                <PrivateRoute
                    exact
                    path={`${match.path}`}
                    component={RedboxMessages}
                />
                <PrivateRoute
                    exact
                    path={`${match.path}/chat`}
                    component={ChatBox}
                />


                <Footer></Footer>
                </Container>
        </React.Fragment>
    )
}

export default AppTemplate;