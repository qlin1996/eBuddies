import axios from "axios";
import { serverLink } from "./serverLink";

// ACTION TYPES
const CREATE_MESSAGE = "CREATE_MESSAGE";

// ACTION CREATORS
export const createMesssage = (message) => {
  return {
    type: CREATE_MESSAGE,
    message,
  };
};

// THUNK
export const createMesssageThunk = (message) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${serverLink}/api/messages`, message);
    return dispatch(createMesssage(data));
  } catch (error) {
    console.log(error);
  }
};

// REDUCER
export default function messageReducer(state = {}, action) {
  switch (action.type) {
    case CREATE_MESSAGE:
      return { ...state, message: action.message };
    default:
      return state;
  }
}
