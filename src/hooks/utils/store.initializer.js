export default class StoreInitializerUtil {

    listeners = [];

    constructor(initialStore){
        this.store = initialStore;
    }

    addListener(listener){
        this.listeners.push(listener);
    }

    removeListener(listener){
        this.listeners = this.listeners.filter(li => li !== listener);
    }

    broadcastToAllListeners(updatedState){
        this.listeners.forEach(li => li(() => updatedState) );
    }

}