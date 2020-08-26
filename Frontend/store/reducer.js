// @flow
import { combineReducers } from "redux";
import userReducer from "./user";
import usersReducer from "./users";
import eventsReducer from "./events";

// Root Reducer
const rootReducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  events: eventsReducer,
});

export default rootReducer;
