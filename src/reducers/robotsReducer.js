import {
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
} from "../constants";

const initialState = {
  error: null,
  isPending: true,
  robots: [],
};

export default function robotsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: action.error, isPending: false };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, isPending: false, robots: action.payload };
    default:
      return state;
  }
}
