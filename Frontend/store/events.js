import axios from "axios";
import { serverLink } from "./serverLink";

const GET_EVENTS = "GET_EVENTS";
const POST_NEW_EVENT = "POST_NEW_EVENT";

export const getEvents = (events) => ({
  type: GET_EVENTS,
  events,
});

export const postEvent = (event) => ({
  type: POST_NEW_EVENT,
  event,
});

export const getAllEvents = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${serverLink}/api/events`);
    return dispatch(getEvents(data));
  } catch (err) {
    console.error(err);
  }
};

export const getUserEvents = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${serverLink}/api/events/${userId}`);
    return dispatch(getEvents(data));
  } catch (error) {}
};

export const postNewEvent = (addEventForm) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${serverLink}/api/events`, addEventForm);
    return dispatch(postEvent(data));
  } catch (error) {
    console.log(error);
  }
};

export default function eventReducer(state = [], action) {
  switch (action.type) {
    case GET_EVENTS:
      return action.events;
    case POST_NEW_EVENT:
      return [...state, action.event];
    default:
      return state;
  }
}
