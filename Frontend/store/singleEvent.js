import axios from "axios";

// network urls
// mac OS
// const localHost = "localhost:8081";

// android
const localHost = "192.168.1.3:8081";

const GET_SINGLE_EVENT = "GET_SINGLE_EVENT";

export const getSingleEvent = (event) => ({
  type: GET_SINGLE_EVENT,
  event,
});

export const fetchSingleEvent = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://${localHost}/api/events/${id}`);
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
