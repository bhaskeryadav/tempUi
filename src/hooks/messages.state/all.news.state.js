import { useState, useCallback, useEffect } from "react";
import useHttp from 'hooks/reusable/http.hook';
import { GET, redboxApiServer } from 'utils/constants';

let allMessages = [];
let allMessageListeners = [];

const useAllMessages = ({ url, publisher, reqParams }) => {

    console.log("loading useAllMessages******************** ")
    const [messages, setMessages] = useState(allMessages);

    const { sendHttpRequest } = useHttp();

    const [isEnd, setIsEnd] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const [pageNo, setPageNo] = useState(0);
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    const isScrolling = (e) => {

        let bool = (e.target.scrollTop > e.target.clientHeight);
        if (bool != showScrollToTop) setShowScrollToTop(() => bool);

        const tData = e.target.scrollHeight <= Math.ceil(e.target.scrollTop + e.target.clientHeight) + 1;
        if (tData) {
            setIsEnd(true);
        }

    };

    const updateMessages = useCallback((data) => {
        setMessages((oldMessages) => [data, ...oldMessages])
    }, []);


    // TODO : figure out a way to extract this in resuable code
    useEffect(() => {
        allMessageListeners.push(setMessages);
        return () => {
            allMessageListeners = allMessageListeners.filter(li => li !== setMessages);
        }
    }, [])

    useEffect(() => {
        publisher && publisher(updateMessages);
    }, [])

    const getMessages = () => {
        let apiUrl = `${redboxApiServer}${url}`;
        console.log('url', apiUrl);
        sendHttpRequest({
            url: apiUrl,
            method: GET,
            reqParams: { ...reqParams, pageNo },
            successCallback: (data) => {
                if (data.length === 0) setHasMore(() => false);
                setMessages((oldData) => [...oldData, ...data]);
                setIsEnd(() => false);
                setPageNo((oldPageNo) => (oldPageNo + 1))
            },
        });
    }

    useEffect(() => {
        console.log(hasMore, isEnd);
        if (hasMore && isEnd) {
            getMessages();
        }

    }, [isEnd])



    return { messages, isScrolling, showScrollToTop };
}

export default useAllMessages;