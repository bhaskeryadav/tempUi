import React from 'react';
import moment from "moment";
import {timeStyle, styles} from 'styles/message.style';
import { Icon } from 'semantic-ui-react'

const TwitterMessage = ({ message }) => {

    return (


        <React.Fragment>
            <table>
                <tbody>
                    <tr>
                        <td style={timeStyle}> <div>{moment(Number(message.createdAt)).format("HH:mm:ss")}</div> </td>
                        <td>

                            <div style={styles[`${message.cssClass}`]}>
                            <Icon style={{ color: "#1dcaff" }} name='twitter' />
                                {message.user}:{'\u00A0'}{message.message}
                                {'\u00A0'}
                                <a
                                    href={message.url}
                                    target="_blank"
                                    style={{ color: "#1dcaff" }}
                                >
                                    {message.url}
                                </a>
                            </div>

                        </td>
                    </tr>
                </tbody>
            </table>




        </React.Fragment>
    );

}

export default React.memo(TwitterMessage);
