import React from 'react'
import { Button,Select, Input, Header, Icon, Modal, Checkbox, Grid, Segment } from 'semantic-ui-react'
import useGlobalStore from 'hooks/reusable/global.store/global.hook';
import { HIDE_SEARCH_MODAL } from 'hooks/reusable/global.store/global.hook.constants';
import  useSearchMessageStore  from 'hooks/messages.state/search.message.state';
import moment from "moment";
import { ubuntuFont } from 'styles/message.style';
import SearchMessage from '../reusable/search.message';

const options = [
  {display:'Commodities', value:"commodities", checked: true},
  {display:'Global', value:"global", checked: true},
  {display:'Fixed Income', value:"fixed income", checked: true},
  {display:'Analysis', value:"analysis", checked: true}
]

const SearchModal = ({}) => {
  //state = { modalOpen: false }
  const {globalStore, executeActions} = useGlobalStore();

  const { searchResult, isScrolling, showScrollToTop, setExtraReqParam, extraReqParam  } = useSearchMessageStore({ url: '/message', 
  reqParams: {'region':'ALL','category':'ALL'}, });

  var searchText = '';

  const handleClose = () => executeActions(HIDE_SEARCH_MODAL);
  
    return (
      <div className={'search-modal'} style={{...ubuntuFont}}>
      <Modal
        open={globalStore.showSearchModal}
        basic
        style={{width:"97%", height:"92%"}}
      >

              
             <Grid>
      <Grid.Column computer={5} mobile={6} tablet={9}>
        <Segment style={{padding:'0 0', backgroundColor: 'transparent'}}>
        {/* <Input type='text' placeholder='Search...' onChange={(e) => {
                    console.log(e.target.value);
                    searchText = e.target.value;
                  }} action>
                    <input />
                    <Button type='submit' onClick={
                      () => {
                        console.log(searchText);
                        setExtraReqParam(oldVal => ({ ...oldVal, message: searchText }))
                      }
                    }>Search</Button>
                  </Input> */}

                  <Input
    icon={<Icon name='search' inverted circular link  />}
    placeholder='Search...'
    onChange={(e) => {
      console.log(e.target.key);
      searchText = e.target.value;
    }}
    onKeyDown={
      (e) => {
        console.log(e.key)
        e.key === 'Enter' && setExtraReqParam(oldVal => ({ ...oldVal, message: searchText }))
      }
    }
    fluid
  />

        </Segment>
      </Grid.Column>
      <Grid.Column computer={10}>
        <Segment style={{padding:'0.8rem 0.8rem', backgroundColor: 'transparent', color:'white'}}>
        {
                    options.map(op=><span><Checkbox label={op.display} checked={op.checked} style={{color:'#fff'}} />{'\u00A0'}{'\u00A0'}{'\u00A0'}</span>)
                  }
                  <span>
        <Checkbox checked={true} label={'twitter'} />
        <Icon  style={{ color: "#1dcaff" }} name='twitter' />
        </span>
        </Segment>
      </Grid.Column>
      <Grid.Column computer={1} mobile={6} tablet={3}>
        <Segment style={{padding:'0.8rem 0.8rem', backgroundColor: 'transparent', color:'white'}}>
        <Icon name='close' onClick={handleClose} style={{ color: "red" }} link size='big'/>
        </Segment>
      </Grid.Column>
    </Grid>

            
                  {
                    searchResult.map(m=><SearchMessage message={m} search={extraReqParam.message}></SearchMessage>)
                  }
              {/* {searchResult.map(m=>
              <tr key={m._id}>
                <td>{moment(Number(m.createdAt)).format("Do MMM YY HH:mm:ss")}</td>
                <td>{m.message}</td>
              </tr>
              
              )} */}
              
          
        {/* <Header style={{align:'right'}}>
        <Icon name='checkmark' onClick={handleClose} /> 
        <Input type='text' placeholder='Search...' onChange={(e)=>{
          console.log(e.target.value);
          searchText = e.target.value;
        }} action>
    <input />
    <Select compact options={options} defaultValue='articles' />
    <Button type='submit' onClick={
      () => {
        console.log(searchText);
        setExtraReqParam(oldVal=>({...oldVal, message:searchText}))
      }
    }>Search</Button>
  </Input>
          </Header>
        <Modal.Content>
          {searchResult.map(m=><li key={m._id}>{m.message}</li>)}
        </Modal.Content> */}
      </Modal>
      </div>
    )
  
}

export default SearchModal;