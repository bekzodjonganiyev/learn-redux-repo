const redux = require("redux")
const reduLogger = require("redux-logger")

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduLogger.createLogger()

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "From by cake",
  };
}

function buyIceCream() {
    return {
      type: BUY_ICECREAM,
      info: "From by icecream",
    };
  }

const initialStateCake = {
  numberOfCakes: 10,
};

const initialStateIceCream = {
    numberOfIceCreams: 20,
  };

const iceCreamReducer = (state = initialStateIceCream, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numberOfIceCreams: state.numberOfIceCreams - 1 };
    default: 
      return state;
  }
};

const cakeReducer = (state = initialStateCake, action) => {
    switch (action.type) {
      case BUY_CAKE:
        return { ...state, numberOfCakes: state.numberOfCakes - 1 };
      default: 
        return state;
    }
  };

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log("Initial number of cakes", store.getState().cake)
console.log("Initial number of icecreams", store.getState().iceCream)
const unsubscribe = store.subscribe(() =>{})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()
