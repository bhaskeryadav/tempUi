import { useState, useCallback, useEffect } from "react";
import  useGlobalStore  from 'hooks/reusable/global.hook';
import { GET } from 'utils/constants';

let allMessages = [];
let allMessageListeners = [];

const useAllMessages = ({url}) => {

    const [ messages, setMessages ] = useState(allMessages);
    const { sendHttpRequest } = useGlobalStore();

    // TODO : figure out a way to extract this in resuable code
    useEffect(()=>{
        allMessageListeners.push(setMessages);

        return ()=>{
            allMessageListeners = allMessageListeners.filter(li => li !== setMessages);
        }
    },[])

    useEffect(()=>{
        console.log('use All Messages');
        sendHttpRequest({
            url,
            method : GET,
            successCallback : (data)=>setMessages(()=>data),
        })
    },[])

    return { messages, setMessages };
}

export default useAllMessages;