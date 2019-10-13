import {useState, useEffect, useCallback} from 'react';
import {HIDE_SEARCH_MODAL,SHOW_SEARCH_MODAL, SET_REDBOX_MESSAGE_SETTING} from 'hooks/reusable/global.store/global.hook.constants';

var globalStoreInitialState = {
    showSearchModal : false,
    redboxMessageSettings : {}
};

var globalStoreListeners = [];
const setterActions = (globalStore, type, data) => {

    const actionHandlers = {
        [`${HIDE_SEARCH_MODAL}`] : () => ({ ...globalStore, showSearchModal:false}),
        [`${SHOW_SEARCH_MODAL}`] : () => ({ ...globalStore, showSearchModal:true}),
        [`${SET_REDBOX_MESSAGE_SETTING}`] : (data) => ({...globalStore, redboxMessageSettings : data})
    }

    let updateState = actionHandlers[`${type}`](data);
    broadcastGlobalStateChange(updateState);
}

const broadcastGlobalStateChange = updatedState =>
{
    console.log(updatedState, globalStoreListeners.length);
    globalStoreListeners.forEach(li =>
    li((old) => updatedState)
  );
}

const useGlobalStore = () => {

    
    const [globalStore, setDataInGlobalStore ] = useState(globalStoreInitialState);
    
    console.log("loading global store >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",globalStore);
    useEffect(() => {
        console.log("calling use feec");
        
        globalStoreListeners.push(setDataInGlobalStore);
        return () => {
            globalStoreListeners = globalStoreListeners.filter(li => li !== setDataInGlobalStore);
        };
      }, []);
    
    const executeActions = (type, data) => {
        console.log(type, data);
        
        setterActions(globalStore,type, data)
    };

    return {globalStore,executeActions};
}

export default useGlobalStore;