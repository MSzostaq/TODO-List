import omit from "lodash/omit";
import { REMOVE_TODO } from "actions/todosActions";

const initialState = { 1: { id: 1, name: "bananas", isDone: false } };

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case REMOVE_TODO:
      return omit(state, action.payload.id);
    default:
      return state;
  }
}
