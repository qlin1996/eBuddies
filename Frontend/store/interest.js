import axios from "axios";
import { serverLink } from "./serverLink";

// network urls
// mac OS
// const localHost = "${localHost}";

// android
// const localHost = "192.168.1.3:8081";

// ngrok
// const localHost = "http://41f2a4a1c6a8.ngrok.io";

const GET_INTERESTS = "GET_INTERESTS";
const POST_INTEREST = "POST_INTEREST";
const DELETE_INTERESTS = "DELETE_INTERESTS";

export const getInterests = (interests) => {
  return {
    type: GET_INTERESTS,
    interests,
  };
};

export const postInterest = (interest) => ({
  type: POST_INTEREST,
  interest,
});

export const deleteInterests = () => ({
  type: DELETE_INTERESTS,
});

export const getAllInterests = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${serverLink}/api/interests/${userId}`);
    return dispatch(getInterests(data));
  } catch (error) {}
};

export const postNewInterest = (interestObject) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${serverLink}/api/interests/`,
      interestObject
    );
    return dispatch(postInterest(data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteAllInterests = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(
      `${serverLink}/api/interests/${userId}`
    );
    return dispatch(deleteInterests(data));
  } catch (error) {
    console.log(error);
  }
};

const initialState = {
  interests: [],
};

export default function interestReducer(state = [], action) {
  switch (action.type) {
    case GET_INTERESTS:
      return action.interests;
    case DELETE_INTERESTS:
      return [];
    case POST_INTEREST:
      return [...state, action.interest];
    default:
      return state;
  }
}
