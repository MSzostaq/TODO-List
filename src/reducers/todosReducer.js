import omit from "lodash/omit";
import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO_NAME,
  UPDATE_TODO_STATUS,
} from "actions/todosActions";

const initialState = {
  1: { id: 1, todoListId: 1, name: "bananas", isDone: false },
  2: { id: 2, todoListId: 2, name: "Resident Evil", isDone: false },
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return { ...state, [action.payload.id]: action.payload };
    }
    case REMOVE_TODO: {
      return omit(state, action.payload.id);
    }
    case UPDATE_TODO_NAME: {
      const currentTodo = state[action.payload.id];
      const updatedTodo = { ...currentTodo, name: action.payload.name };
      return { ...state, [action.payload.id]: updatedTodo };
    }
    case UPDATE_TODO_STATUS: {
      const currentTodo = state[action.payload.id];
      const updatedTodo = { ...currentTodo, isDone: action.payload.isDone };
      return { ...state, [action.payload.id]: updatedTodo };
    }
    default:
      return state;
  }
}
