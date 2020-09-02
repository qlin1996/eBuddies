import axios from "axios";

// network urls
// mac OS
// const localHost = "localhost:8081";

// android
const localHost = "192.168.1.3:8081";

const SET_EVENT = "EVENT";

export const setEvent = (event) => ({
  type: SET_EVENT,
  event,
});

export const fetchEvent = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://${localHost}/api/events/${id}`);
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
