const combineReducers = (reducers) => {
    const reducerKeys = Object.keys(reducers)

    return (state = {}, action) => {
        let hasChanged = false
        const nextState = {}

        for (let i = 0; i < reducerKeys.length; i++){
            const key = reducerKeys[i]
            const reducer = reducers[key]
            const prevStateForKey = state[key]
            const nextStateForKey = reducer(prevStateForKey, action)

            nextState[key] = nextStateForKey

            hasChanged = hasChanged || nextStateForKey !== prevStateForKey
        }

        hasChanged = hasChanged || reducerKeys.length !== Object.keys(state).length

        return hasChanged ? nextState : state
    }
}

export default combineReducers