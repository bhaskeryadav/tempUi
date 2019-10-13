import React from "react";
import MessagesCard from 'ui/components/reusable/messages.card';
import { Grid } from "semantic-ui-react";
import { redboxApiServer, REDBOX_MESSAGE_SETTING } from 'utils/constants';
import useMessageChannel from 'hooks/reusable/socket.hook';
import useGlobalStore from "hooks/reusable/global.store/global.hook";
var _ = require('lodash');
const RedboxMessages = props => {
  // console.log("Ho gaya rebder....."); redboxMessageSettings
  const {globalStore} = useGlobalStore();
  console.log('Rendering >>>>>>>>>>>>>>>>>>>>>>> RedboxMessages', _.isEmpty(globalStore.redboxMessageSettings), globalStore);
  
  const {ALL_NEWS, GLOBAL,COMMODITIES,BLOCK_DETAILS,FIXED_INCOME} = globalStore.redboxMessageSettings;

  const { onMessageRecieved } = useMessageChannel();

  return <React.Fragment>
    {
      _.isEmpty(globalStore.redboxMessageSettings) ? (<div>Loading..</div>) : (
        
        <Grid columns={3}>
          
      <Grid.Row>
        <Grid.Column>

          <MessagesCard height={'half'} category={GLOBAL}>
            
          </MessagesCard>
          <MessagesCard height={'half'} category={COMMODITIES}>
            
          </MessagesCard>
          
        </Grid.Column>

        <Grid.Column style={{ paddingLeft: 0, paddingRight: 0 }}>
        <MessagesCard height={'full'} publisher={onMessageRecieved} category={ALL_NEWS}> {/* 82vh */}
            
          </MessagesCard>
        </Grid.Column>
        
        <Grid.Column>
        <MessagesCard height={'half'} category={BLOCK_DETAILS}>
            
          </MessagesCard>
          <MessagesCard height={'half'} category={FIXED_INCOME}>
            
          </MessagesCard>
        </Grid.Column>
      </Grid.Row>
    </Grid>
      )
    }
  </React.Fragment>;
};

export default React.memo(RedboxMessages);
