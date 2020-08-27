import axios from "axios";

const GET_INTERESTS = "GET_INTERESTS";
const POST_INTEREST = "POST_INTEREST";

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

export const getAllInterests = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://localhost:8080/api/interests/${userId}`
    );
    // const { data } = await axios.get("http://192.168.1.3:8081/api/events");

    return dispatch(getInterests(data));
  } catch (error) {}
};

export const postNewInterest = (interest) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:8080/api/interests",
      interest
    );
    return dispatch(postInterest(data));
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
    case POST_INTEREST:
      return [...state, action.interest];
    default:
      return state;
  }
}
