import React from 'react';
import moment from "moment";
import {ubuntuFont,timeStyle, styles} from 'styles/message.style';


const Message = (props) => {
    console.log('Rendering >>>>>>>>>>>>>>>>>>>>>>> Message');
    //console.log(props.message.category, props.message.cssClass, props.message.message);
    return (
        <React.Fragment>
            <table>
                <tbody>
                <tr>
                    <td style={timeStyle}> <div>{moment(Number(props.message.createdAt)).format("HH:mm:ss")}</div> </td>
                    <td>

                    <div style={styles[`${props.message.cssClass}`]}>
                            {props.message.message}
                    </div>

                    </td>
                </tr>
                </tbody>
            </table>
            
            
            
            
        </React.Fragment>
    )
}


export default React.memo(Message);