import moment from "moment";
import React from 'react';

const ubuntuFont = {
    fontFamily: 'Ubuntu',
    fontSize: '13px'
}

const timeStyle = {
    ...ubuntuFont,
    fontSize: '12.5px',
    verticalAlign: 'top',
    paddingRight: '5px'
}

const styles = {
    'DefaultGreen' : { ...ubuntuFont, color: 'orange' },
    'DefaultRed' : {...ubuntuFont,color:'red'},
    'DefaultDefault' : {...ubuntuFont,color:'white'}
}

const Message = (props) => {
    console.log(props.message.category, props.message.cssClass, props.message.message);
    return (
        <React.Fragment>
            <table>
                <tbody>
                <tr>
                    <td style={timeStyle}> <div>{moment(Number(props.message.createdAt)).format("HH:mm:ss")}</div> </td>
                    <td>

                    <div style={styles[`${props.message.category}${props.message.cssClass}`]}>
                {props.message.message}
            </div>

                    </td>
                </tr>
                </tbody>
            </table>
            
            
            
            
        </React.Fragment>
    )
}


export default Message;