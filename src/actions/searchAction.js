import { CHANGE_SEARCHFIELD } from "../constants/";

export default function searchAction(text) {
  return {
    type: CHANGE_SEARCHFIELD,
    payload: text,
  };
}
