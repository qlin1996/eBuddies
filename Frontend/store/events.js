import axios from "axios";

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
    const { data } = await axios.get("http://localhost:8081/api/events");
    return dispatch(getEvents(data));
  } catch (error) {
    console.log(error);
  }
};

export const postNewEvent = (event) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:8081/api/events",
      event
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
