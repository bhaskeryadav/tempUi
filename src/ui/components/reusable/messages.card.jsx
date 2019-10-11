import React from "react";
import { Segment } from "semantic-ui-react";
import useAllMessages from 'hooks/messages.state/all.news.state';
import Message from 'ui/components/reusable/message';

const headerHeight = 4;

const heights = {
    half : 40,
    full : 82
}

const calculateHeight = (height) => {
    const heightCalculator = {
        half : () => (heights.half-headerHeight-3),
        full : () => (heights.full-headerHeight-3)
    }
    return heightCalculator[`${height}`]();
}
const overFlowStyleAuto = ({height}) => ({overflow: 'auto', height:`${calculateHeight(height)}vh`, paddingLeft:'4px' })

const overFlowStyleHidden = {overflow: 'hidden', height:`${headerHeight}vh`, color:'orange' }

const cardStyle = ({ height }) => (
    { 
        height: `${heights[height]}vh` , 
        background: "#202020", 
        color: '#fff', 
        padding:'0',
        borderRadius: '2px',
        boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
       
    }
);

const dividerStyle = {borderTop: '1px solid black'}



const MessagesCard = (props) => {

    const { messages, setMessages, newMessage } = useAllMessages({ url: 'https://api.wikiaboutme.org/message', publisher: props.publisher });
    console.log('Rendering >>>>>>>>>>>>>>>>>>>>>>> MessagesCard');
    
    return (
        <Segment style={cardStyle(props)}>
            <div style={overFlowStyleHidden}>
                Header
            </div>
            <hr style={dividerStyle}></hr>
            <div style={overFlowStyleAuto(props)} >
                {/* { newMessage && <Message key={newMessage._id} message={newMessage}></Message>} */}
                {messages.map(m => <Message key={m._id} message={m}></Message>)}
               
                {props.children}
            </div>
        </Segment>
    )
}

export default React.memo(MessagesCard);