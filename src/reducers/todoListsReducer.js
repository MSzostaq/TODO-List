import omit from "lodash/omit";
import { ADD_TODO, REMOVE_TODO } from "actions/todosActions";
import {
  ADD_LIST_OK,
  REMOVE_LIST,
  UPDATE_LIST_ITEMS_ORDER,
  UPDATE_LIST_NAME,
} from "actions/todoListsActions";

const initialState = {
  1: { id: 1, name: "Shopping", items: [1] },
  2: { id: 2, name: "Games to play", items: [2] },
};

export default function todoListsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LIST_OK: {
      return { ...state, [action.payload.id]: action.payload };
    }
    case REMOVE_LIST: {
      return omit(state, action.payload.id);
    }
    case ADD_TODO: {
      const { id, todoListId } = action.payload;
      const currentList = state[todoListId];
      const updatedList = { ...currentList, items: [...currentList.items, id] };
      return { ...state, [todoListId]: updatedList };
    }
    case REMOVE_TODO: {
      const { id, todoListId } = action.payload;
      const currentList = state[todoListId];
      const updatedList = {
        ...currentList,
        items: currentList.items.filter((item) => item !== id),
      };
      return { ...state, [todoListId]: updatedList };
    }
    case UPDATE_LIST_ITEMS_ORDER: {
      const { id, order } = action.payload;
      const currentList = state[id];
      const updatedList = { ...currentList, items: order };
      return { ...state, [id]: updatedList };
    }
    case UPDATE_LIST_NAME: {
      const { id, name } = action.payload;
      const currentList = state[id];
      const updatedList = { ...currentList, name };
      return { ...state, [id]: updatedList };
    }
    default:
      return state;
  }
}

// TODO: state map all lists and remove id if needed
