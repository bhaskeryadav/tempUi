import React,{useEffect} from 'react';
import { Container } from "semantic-ui-react";
import Header from 'ui/components/common/header';
import Footer from 'ui/components/common/footer';
import RedboxMessages from 'ui/screen/private/redbox.messages'
import ChatBox from 'ui/screen/private/chat.box';
import PrivateRoute from 'ui/components/reusable/private.routes';
import SearchModal from '../common/search.modal';
import useGlobalStore from 'hooks/reusable/global.store/global.hook';
import { SET_REDBOX_MESSAGE_SETTING } from 'hooks/reusable/global.store/global.hook.constants';
import { REDBOX_MESSAGE_SETTING } from 'utils/constants';

const AppTemplate = (props) => {
    const {match} = props;
    console.log('${match.path}', props,match.params.region )
    const {executeActions} = useGlobalStore();
    useEffect(()=>{
        executeActions(SET_REDBOX_MESSAGE_SETTING, REDBOX_MESSAGE_SETTING[`${props,match.params.region}`])
    },[])
    // const {onMessageRecieved} = useMessageChannel();
    return (
        <React.Fragment>
        
        <Container style={{ margin: 10, width: "100%" }}>
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

                <SearchModal></SearchModal>
                <Footer></Footer>
                </Container>
        </React.Fragment>
    )
}

export default AppTemplate;