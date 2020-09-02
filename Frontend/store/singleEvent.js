import axios from "axios";
import { serverLink } from "./serverLink";
const GET_SINGLE_EVENT = "GET_SINGLE_EVENT";

export const getSingleEvent = (event) => ({
  type: GET_SINGLE_EVENT,
  event,
});

export const fetchSingleEvent = (id) => async (dispatch) => {
  try {
    console.log("id sent to thunk", id);
    console.log("serverLink", serverLink);
    const { data } = await axios.get(`${serverLink}/api/events/${id}`);
    console.log("data", data);
    return dispatch(getSingleEvent(data));
  } catch (err) {
    console.error(err);
  }
};

export default function singleEventReducer(state = [], action) {
  switch (action.type) {
    case GET_SINGLE_EVENT:
      return action.event;
    default:
      return state;
  }
}
