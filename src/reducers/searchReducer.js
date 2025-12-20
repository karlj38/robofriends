import { CHANGE_SEARCHFIELD } from "../constants";

const initialState = {
  searchTerm: "",
};

export default function searchReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
}
