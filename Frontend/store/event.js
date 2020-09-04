import axios from "axios";
import { serverLink } from "./serverLink";

const SET_EVENT = "EVENT";

export const setEvent = (event) => ({
  type: SET_EVENT,
  event,
});

export const fetchEvent = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://${serverLink}/api/events/${id}`);
    dispatch(setEvent(data));
  } catch (error) {
    console.error(error);
  }
};

const initialState = [];

const singleEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EVENT:
      return action.campus;
    default:
      return state;
  }
};

export default singleEventReducer;
