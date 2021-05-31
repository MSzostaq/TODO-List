import { REMOVE_TODO } from "actions/todosActions";

const initialState = { 1: { id: 1, name: "Shopping", items: [1] } };

export default function todoListsReducer(state = initialState, action) {
  switch (action.type) {
    case REMOVE_TODO:
      return state.filter(id);
    default:
      return state;
  }
}

// TODO: state map all lists and remove id if needed
