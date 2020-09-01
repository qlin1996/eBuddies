import axios from "axios";

const CREATE_MESSAGE = "CREATE_MESSAGE";

export const createMesssage = (message) => {
  return {
    type: CREATE_MESSAGE,
    message,
  };
};

export const createMesssageThunk = (message) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:8081/api/messages",
      message
    );
    return dispatch(createMesssage(data));
  } catch (error) {
    console.log(error);
  }
};

export default function createMessageReducer(state = {}, action) {
  switch (action.type) {
    case CREATE_MESSAGE:
      return action.message;
    default:
      return state;
  }
}
