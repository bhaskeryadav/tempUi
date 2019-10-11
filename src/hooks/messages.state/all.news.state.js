import { useState, useCallback, useEffect } from "react";
import  useGlobalStore  from 'hooks/reusable/global.hook';
import { GET, redboxApiServer, PAGE_QUERY_PARAM_KEY } from 'utils/constants';

let allMessages = [];
let allMessageListeners = [];

const useAllMessages = ({url, publisher}) => {

    console.log("loading useAllMessages******************** ")
    const [ messages, setMessages ] = useState(allMessages);
    // const [ newMessage, setNewMessage ] = useState(undefined);
    const { sendHttpRequest } = useGlobalStore();

    const [isEnd, setIsEnd ] = useState(true);
    const [hasMore, setHasMore ] = useState(true);
    const [pageNo, setPageNo] = useState(0);
    const [showScrollToTop, setShowScrollToTop ] = useState(false);

    const isScrolling = (e) => {
        // console.log(e.target.scrollHeight,e.target.scrollTop,e.target.clientHeight);
        let bool = (e.target.scrollTop > e.target.clientHeight) ;
        if(bool != showScrollToTop ) setShowScrollToTop(()=>bool);

        
        const tData = e.target.scrollHeight <= Math.ceil(e.target.scrollTop + e.target.clientHeight) + 1;
        if (tData) {
          setIsEnd(true);
        }
    };

    const updateMessages = useCallback((data)=>{
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
        publisher(updateMessages);
    },[])

    useEffect(()=>{
    
    if(hasMore && isEnd){
        let apiUrl = `${redboxApiServer}${url}${PAGE_QUERY_PARAM_KEY}${pageNo}`;
        console.log('url',apiUrl);
        sendHttpRequest({
            url : apiUrl ,
            method : GET,
            successCallback : (data)=>{
                if(data.length === 0) setHasMore(()=>false);
                setMessages((oldData)=>[...oldData, ...data]);
                setIsEnd(()=>false);
                setPageNo((oldPageNo)=>(oldPageNo+1))
            },
        });
    }

    },[isEnd])

    return { messages, isScrolling, showScrollToTop };
}

export default useAllMessages;