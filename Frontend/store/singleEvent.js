import axios from "axios";
import { serverLink } from "./serverLink";

const GET_SINGLE_EVENT = "GET_SINGLE_EVENT";
const UPDATE_EVENT = "UPDATE_EVENT";

export const getSingleEvent = (event) => ({
  type: GET_SINGLE_EVENT,
  event,
});
export const updateEvent = (event) => ({
  type: UPDATE_EVENT,
  event,
});
export const fetchSingleEvent = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${serverLink}/api/events/${id}`);
    return dispatch(getSingleEvent(data));
  } catch (err) {
    console.error(err);
  }
};
export const fetchUpdateEvent = (id, event) => async (dispatch) => {
  try {
    const { data } = await axios.put(`${serverLink}/api/events/${id}`, event);
    return dispatch(updateEvent(data));
  } catch (err) {
    console.error(err);
  }
};
export default function singleEventReducer(state = [], action) {
  switch (action.type) {
    case GET_SINGLE_EVENT:
      return action.event;
    case UPDATE_EVENT:
      return [...state, action.event];
    default:
      return state;
  }
}
