import moment from "moment";
import React from 'react';

const ubuntuFont = {
    fontFamily: 'Ubuntu',
    fontSize: '12px'
}

const timeStyle = {
    ...ubuntuFont,
    fontSize: '13px',
    verticalAlign: 'top',
    paddingRight: '10px'
}

const styles = {
    'Green' : { ...ubuntuFont, color: 'orange' },
    'Red' : {...ubuntuFont,color:'red'},
    'Default' : {...ubuntuFont,color:'white'}
}

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