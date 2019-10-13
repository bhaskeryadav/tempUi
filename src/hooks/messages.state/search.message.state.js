import { useCallback, useState, useEffect } from 'react';
import StoreInitializerUtil from 'hooks/utils/store.initializer';
import useHttp from 'hooks/reusable/http.hook';
import { redboxApiServer, GET } from 'utils/constants';

let searchMessagStore = new StoreInitializerUtil({});

const useSearchMessageStore = ({url, reqParams }) => {

    const { sendHttpRequest } = useHttp();
    const [searchResult, setSearchResult] = useState([]);
    const [extraReqParam, setExtraReqParam] = useState({});
    const [paginationDetails, setPaginationDetails] = useState({
        pageNo: 0,
        hasMore: true,
        isEnd: true
    });
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(()=>{
        searchMessagStore.addListener(setSearchResult);
        return () => searchMessagStore.removeListener(setSearchResult);
    },[])

    const isScrolling = (e) => {
        let bool = (e.target.scrollTop > e.target.clientHeight);
        if (bool != showScrollToTop) setShowScrollToTop(() => bool);
        const tData = e.target.scrollHeight <= Math.ceil(e.target.scrollTop + e.target.clientHeight) + 1;
        if (tData) {
           setPaginationDetails(oldPage=>({
               ...oldPage,
               isEnd : true,
           }))
        }
    };

    useEffect(()=>{
        if(paginationDetails.hasMore && paginationDetails.isEnd && JSON.stringify(extraReqParam) !== '{}'){
            let apiUrl = `${redboxApiServer}${url}`;
            console.log('url', apiUrl);
            sendHttpRequest({
                url: apiUrl,
                method: GET,
                reqParams: { ...reqParams, pageNo: paginationDetails.pageNo , ...extraReqParam },
                successCallback: (data) => {
                    
                    setSearchResult((oldData) => [...oldData, ...data]);
                    setPaginationDetails((oldPage)=>({
                        hasMore : data.length !== 0,
                        isEnd : false,
                        pageNo : Number(oldPage.pageNo) + 1,
                    }));
                },
            });
        }

    },[paginationDetails])

    useEffect(() => {
        console.log("extra parameter", JSON.stringify(extraReqParam))
        if (JSON.stringify(extraReqParam) !== '{}') {
            setPaginationDetails(() => ({
                pageNo: 0,
                hasMore: true,
                isEnd: true
            }));
            setSearchResult(()=>[]);
        }
    }, [extraReqParam])

    return { setExtraReqParam , searchResult, showScrollToTop, isScrolling, extraReqParam }
}

export default useSearchMessageStore;