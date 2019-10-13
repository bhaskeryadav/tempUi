import {useState, useEffect} from 'react';
import {HIDE_SEARCH_MODAL,SHOW_SEARCH_MODAL, GET_SEARCH_MODAL} from 'hooks/reusable/global.store/global.hook.constants';

var globalStoreInitialState = {
    showSearchModal : false,
};

var globalStoreListeners = [];
const setterActions = (globalStore, type, data) => {

    const actionHandlers = {
        [`${HIDE_SEARCH_MODAL}`] : () => ({ ...globalStore, showSearchModal:false}),
        [`${SHOW_SEARCH_MODAL}`] : () => ({ ...globalStore, showSearchModal:true}),
    }

    let updateState = actionHandlers[`${type}`](data);
    broadcastGlobalStateChange(updateState);
}

const broadcastGlobalStateChange = updatedState =>
{
    console.log(updatedState);
    globalStoreListeners.forEach(li =>
    li(() => updatedState)
  );
}

const useGlobalStore = () => {

    const [globalStore, setDataInGlobalStore ] = useState(globalStoreInitialState);

    useEffect(() => {
        globalStoreListeners.push(setDataInGlobalStore);
        return () => {
            globalStoreListeners = globalStoreListeners.filter(li => li !== setDataInGlobalStore);
        };
      }, []);
    
    const executeActions = (type) => {

        setterActions(globalStore,type)
    };

    return {globalStore,executeActions};
}

export default useGlobalStore;