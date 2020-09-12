import axios from "axios";
import { serverLink } from "./serverLink";

// ACTION TYPES
const GET_USER = "GET_USER";
const REMOVE_USER = "REMOVE_USER";
const UPDATE_CURRENT_USER = "UPDATE_CURRENT_USER";
const ADD_USER = "ADD_USER";

// ACTION CREATORS
const getUser = (user) => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });
const updateCurrentUser = (user) => ({ type: UPDATE_CURRENT_USER, user });

// THUNK
export const putUser = (id, newInfo) => async (dispatch) => {
  try {
    const { data } = await axios.put(`${serverLink}/api/users/${id}`, newInfo);
    return dispatch(updateUserAdmin(id, data));
  } catch (error) {
    console.log(error);
  }
};

// REDUCER
export const me = () => async (dispatch) => {
  try {
    const res = await axios.get(`${serverLink}/auth/me`);
    if (res.data) {
      dispatch(getUser(res.data));
    } else {
      return;
    }
  } catch (err) {
    console.error(err);
  }
};

export const auth1 = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${serverLink}/auth/login`, {
      email,
      password,
    });
    return dispatch(getUser(data));
  } catch (error) {
    throw error;
  }
};

export const auth2 = (
  firstName,
  lastName,
  email,
  password,
  description,
  imgUrl,
  city,
  state,
  zipCode,
  pushToken
) => async (dispatch) => {
  let res;
  try {
    res = await axios.post(`${serverLink}/auth/signup`, {
      firstName,
      lastName,
      email,
      password,
      description,
      imgUrl,
      city,
      state,
      zipCode,
      pushToken,
    });
    return dispatch(getUser(res.data));
  } catch (error) {
    console.error(error);
  }
};

export const getUserInfo = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${serverLink}/api/users/${id}`);
    return dispatch(getUser(data));
  } catch (err) {
    console.error(err);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios.post(`${serverLink}/auth/logout`);
    return dispatch(removeUser());
  } catch (err) {
    console.error(err);
  }
};

export const updateUser = (id, body) => async (dispatch) => {
  try {
    const { data } = await axios.put(`${serverLink}/api/users/${id}`, body);
    return dispatch(updateCurrentUser(data));
  } catch (error) {
    console.error(error);
  }
};

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return {};
    case UPDATE_CURRENT_USER:
      return action.user;
    case ADD_USER:
      return [...state, action.user];
    default:
      return state;
  }
}
