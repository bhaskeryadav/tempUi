import React, {useRef} from "react";
import { Segment } from "semantic-ui-react";
import useAllMessages from 'hooks/messages.state/all.news.state';
import Message from 'ui/components/reusable/message';
import {TWITTER_SOURCE} from 'utils/constants';
import TwitterMessage from 'ui/components/reusable/twitter.message';
import { Transition, config } from "react-spring/renderprops";
import { Icon } from 'semantic-ui-react'

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
const overFlowStyleAuto = ({height}) => ({overflowY: 'auto',overflowX:'hidden', height:`${calculateHeight(height)}vh`, paddingLeft:'4px' })

const overFlowStyleHidden = {overflow: 'hidden', height:`${headerHeight}vh`, color:'orange' }

const cardStyle = ({ height }) => (
    { 
        height: `${heights[height]}vh` , 
        background: "#000", 
        color: '#fff', 
        padding:'0',
        borderRadius: '2px',
        boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
       
    }
);
// 10px 10px 5px #aaaaaa
const dividerStyle = {borderTop: '1px solid black'}


const MessagesCard = (props) => {

    const { url, reqParams } = props.category;

    const { messages, isScrolling, showScrollToTop  } = useAllMessages({ url, 
                                                                        reqParams,
                                                                        publisher: props.publisher });
                                                                        
    console.log('Rendering >>>>>>>>>>>>>>>>>>>>>>> MessagesCard', props);
    
    const myRef = useRef(null)

    return (
        <Segment style={cardStyle(props)}>
            <div style={overFlowStyleHidden}>
                Header
            </div>
            <hr style={dividerStyle}></hr>
            <div style={overFlowStyleAuto(props)} 
            onScroll={event => {
                event.persist();
                isScrolling(event);
              }}
             
            >
                <div  ref={myRef}></div>

                <Transition
                    items={messages}
                    keys={message => message._id}
                    config={{duration : 500}}
                    from={{ transform: "translate3d(0,-40px,0)" }}
                    enter={{ transform: "translate3d(0,0px,0)" }}
                    leave={{ transform: "translate3d(0,-40px,0)" }}
                >
                    {m => props => {
                        // console.log(m.cssClass);
                        if(m.cssClass === TWITTER_SOURCE){
                            return (
                                <div style={props}>
                                    <TwitterMessage key={m._id} message={m}></TwitterMessage>
                                </div>
                            )
                        }
                        else 
                        return (
                            <div style={props}>
                                <Message key={m._id} message={m}></Message>
                            </div>
                        )
                    }
                    }
                </Transition>
               
                {props.children}
            </div>
            
            {
            showScrollToTop  && 
            (
                <div style={{align:'right'}}>        
                    <Icon style={{ color: "orange" }} name='angle double up'  size='big' link
                    onClick={()=> myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}/>
                </div>
            )
            }  
        </Segment>
    )
}

export default React.memo(MessagesCard);