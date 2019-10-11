import React from "react";
import MessagesCard from 'ui/components/reusable/messages.card';
import { Grid } from "semantic-ui-react";
import { redboxApiServer } from 'utils/constants';
import useMessageChannel from 'hooks/reusable/socket.hook';

const RedboxMessages = props => {
  // console.log("Ho gaya rebder.....");
  console.log('Rendering >>>>>>>>>>>>>>>>>>>>>>> RedboxMessages');

  const { onMessageRecieved } = useMessageChannel();

  return <React.Fragment>
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>

          {/* <MessagesCard height={'half'}>
            1
          </MessagesCard>
          <MessagesCard height={'half'}>
            1
          </MessagesCard> */}
          
        </Grid.Column>

        <Grid.Column style={{ paddingLeft: 0, paddingRight: 0 }}>
        <MessagesCard height={'full'} publisher={onMessageRecieved}> {/* 82vh */}
            
          </MessagesCard>
        </Grid.Column>
        
        <Grid.Column>
        {/* <MessagesCard height={'half'}>
            1
          </MessagesCard>
          <MessagesCard height={'half'}>
            1
          </MessagesCard> */}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </React.Fragment>;
};

export default RedboxMessages;
