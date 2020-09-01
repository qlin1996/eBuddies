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
//     const { data } = await axios.get("http://localhost:8080/api/events");
    // const { data } = await axios.get("http://192.168.1.3:8081/api/events");
    // const { data } = await axios.get("http://192.168.1.126:8080/api/events");
    const { data } = await axios.get("http://localhost:8081/api/events");
    // const { data } = await axios.get("http://192.168.1.3/api/events");
    return dispatch(getEvents(data));
  } catch (err) {
    console.error(err);
  }
};

export const getUserEvents = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
//       `http://localhost:8080/api/events/${userId}`);
    // const { data } = await axios.get("http://192.168.1.3:8081/api/events");
      `http://localhost:8081/api/events/${userId}`
    );
    return dispatch(getEvents(data));
  } catch (error) {}
};

export const postNewEvent = (addEventForm) => async (dispatch) => {
  try {
    const { data } = await axios.post(
//       "http://localhost:8080/api/events",
      // "http://192.168.1.3:8081/api/events",
      "http://localhost:8081/api/events",
      addEventForm
    );
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
