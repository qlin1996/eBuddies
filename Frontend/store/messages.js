import axios from "axios";
import { serverLink } from "./serverLink";

const GET_MESSAGES = "GET_MESSAGES";

export const getMesssages = (messages) => {
  return {
    type: GET_MESSAGES,
    messages,
  };
};

export const getMesssagesThunk = (eventId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${serverLink}/api/events/${eventId}/messages`
    );
    return dispatch(getMesssages(data));
  } catch (error) {
    console.log(error);
  }
};
export default function messagesReducer(state = [], action) {
  switch (action.type) {
    case GET_MESSAGES:
      return action.messages;
    default:
      return state;
  }
}
