import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./user";
import usersReducer from "./users";
import eventsReducer from "./events";
import eventReducer from "./event";
import interestReducer from "./interest";
import activityReducer from "./activity";
import messageReducer from "./message";
import messagesReducer from "./messages";

const rootReducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  events: eventsReducer,
  event: eventReducer,
  interests: interestReducer,
  activities: activityReducer,
  message: messageReducer,
  messages: messagesReducer,
});

const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};

export default configureStore;
