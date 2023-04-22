import { combineReducers } from "redux";

import cakeReducer from "./cakes/cakeReducer";


const rootReducer = combineReducers({
  cakes: cakeReducer
});

export default rootReducer;
