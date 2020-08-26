import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./user";
import usersReducer from "./users";
import eventReducer from "./events";
const rootReducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  events: eventReducer,
});
const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};
export default configureStore;
