import axios from "axios";
import { serverLink } from "./serverLink";

// network urls
// mac OS
// const localHost = "localhost:8081";

// android
// const localHost = "192.168.1.3:8081";

// ACTION TYPES
const GET_ALL_USERS = "GET_ALL_USERS";

// ACTION CREATORS
const getAllUsers = (users) => ({ type: GET_ALL_USERS, users });

// THUNK
export const getUsersInfo = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${serverLink}/api/users`);
    dispatch(getAllUsers(data));
  } catch (error) {
    console.log(error);
  }
};

// Initial State
const defaultUsers = [];

// REDUCER
export default function usersReducer(state = defaultUsers, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.users;
    default:
      return state;
  }
}
