import axios from "axios";
import { serverLink } from "./serverLink";

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

// REDUCER
export default function usersReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.users;
    default:
      return state;
  }
}
