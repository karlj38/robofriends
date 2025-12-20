import {
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
} from "../constants";

export default function requestRobots() {
  return async (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      dispatch({ payload: users, type: REQUEST_ROBOTS_SUCCESS });
    } catch (error) {
      dispatch({ error, type: REQUEST_ROBOTS_FAILED });
    }
  };
}
