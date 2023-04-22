import { combineReducers } from "redux";

import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./ice_cream/iceCreamReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cakes: cakeReducer,
  iceCreams: iceCreamReducer,
  users: userReducer
});

export default rootReducer;
