import { ActionTypes } from "./actionTypes"

const createStore = (reducer) => {
    let currentReducer = reducer // kirib kelgan reducerni mutatsiya qilmaslik uchun yangi o`zgaruvchiga olamiz
    let currentState = undefined
    let currentListeners = []

    const getState = () => {
        return currentState
    }

    const dispatch = (action) => {
        currentState = currentReducer(currentState, action) // yangi obtyekt qaytaradi

        /** subscribe bo`lganda yig`ib olingan listenerlar */
        const listeners = currentListeners

        /** listenrlarni bitta-bitta dispatch qilamiz */
        for(let i = 0; i < listeners.length; i++){
            const listener = listeners[i]
            listener()
        }
    }

    /** Bu funksiya state o`zgarganligini bilib urish uchun uni eshitib turadi 
     * parametr sifatida o`ziga listenerlarni qabul qiladi
     * 
     */
    const subscribe = (listener) => {
        /**
         * state o`zgarsa true bo`lmasa false, har doim subscribe qilmaslik uchun o`zgaruvchi
         */
        let isSubscribed = true

        /**
         * currentListenersga kirib kelgan listenerlarni push qilamiz
         * qandaydir o`zgarish bo`lsa shu funksiyalarga murojaat qilamiz
        */
        currentListeners.push(listener)

        return () => { 
            /** 
             * subscribe funksiya ishlashi isSubscribe ga bog`liq
             */
            if (!isSubscribed){ 
                return;
            }


            isSubscribed = false
            const index = currentListeners.indexOf(listener)

            /**
             * bir marta ishlagan listenerni listenerlar ro`yxatidan chiqarib yuborilyapti
             */
            currentListeners.splice(index, 1)
        }
    }

    dispatch({type: ActionTypes.INIT})

    const store = {
        getState, 
        dispatch, 
        subscribe
    }

    return store
}

export default createStore