import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import moment from 'moment';
import { timeStyle, styles } from 'styles/message.style';
var Highlight = require('react-highlighter');

const SearchMessage = ({ message,search }) => {
    console.log(search);
    return (
        <div className={'searchMessage'}>
            <Grid >
                <Grid.Column computer={2} mobile={6} tablet={9}>
                    <Segment style={{ padding: '0.8rem 0.8rem',  backgroundColor: 'transparent', color:'white' }}>
                        <div style={timeStyle}>{moment(Number(message.createdAt)).format("Do MMM YY HH:mm:ss")}</div>
                    </Segment>
                </Grid.Column>
                <Grid.Column computer={14} mobile={6} tablet={9}>
                    <Segment style={{ padding: '0.8rem 0.8rem',  backgroundColor: 'transparent', color:'white' }}>
                        <div style={styles[`${message.cssClass}`]}>
                            <Highlight search={search}>{message.message}</Highlight>
                        </div>
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default React.memo(SearchMessage);