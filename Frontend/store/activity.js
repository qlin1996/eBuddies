import axios from "axios";
import { serverLink } from "./serverLink";

// ACTION TYPES
const POST_ACTIVITY = "POST_ACTIVITY";
const EDIT_ATTENDANCE = "EDIT_ATTENDANCE";

// ACTION CREATORS
export const postActivity = (activity) => ({
  type: POST_ACTIVITY,
  activity,
});

export const editAttendance = (attendance) => ({
  type: EDIT_ATTENDANCE,
  attendance,
});

// THUNK
export const postNewActivity = (activityObject) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${serverLink}/api/activities/`,
      activityObject
    );
    return dispatch(postActivity(data));
  } catch (error) {
    console.log(error);
  }
};

export const editActivityAttendance = (eventId, userId, attendance) => async (
  dispatch
) => {
  try {
    const { data } = await axios.patch(
      `${serverLink}/api/events/${eventId}/users/${userId}`,
      attendance
    );
    return dispatch(editAttendance(data));
  } catch (error) {
    console.error(error);
  }
};

// REDUCER
export default function activityReducer(state = [], action) {
  switch (action.type) {
    case POST_ACTIVITY:
      return [...state, action.activity];
    case EDIT_ATTENDANCE:
      return action.attendance;
    default:
      return state;
  }
}
