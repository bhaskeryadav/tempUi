import { useState, useCallback, useEffect } from "react";
import  useGlobalStore  from 'hooks/reusable/global.hook';
import { GET } from 'utils/constants';

let allMessages = [];
let allMessageListeners = [];

const useAllMessages = ({url, publisher}) => {

    console.log("loading useAllMessages******************** ")
    const [ messages, setMessages ] = useState(allMessages);
    const [ newMessage, setNewMessage ] = useState(undefined);
    const { sendHttpRequest } = useGlobalStore();
    const updateMessages = useCallback((data)=>{
        //newMessage && setMessages((oldMessages)=>[newMessage, ...oldMessages]);
        //setNewMessage(()=>data);
        setMessages((oldMessages)=>[data, ...oldMessages])
    },[]);
    

    // TODO : figure out a way to extract this in resuable code
    useEffect(()=>{
        allMessageListeners.push(setMessages);

        return ()=>{
            allMessageListeners = allMessageListeners.filter(li => li !== setMessages);
        }
    },[])

    useEffect(()=>{
       // console.log('use All Messages');
        sendHttpRequest({
            url,
            method : GET,
            successCallback : (data)=>setMessages(()=>data),
        });
        publisher(updateMessages);
    },[])

    return { messages, setMessages, newMessage };
}

export default useAllMessages;