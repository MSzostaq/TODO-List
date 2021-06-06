import { ADD_TODO, REMOVE_TODO } from "actions/todosActions";

const initialState = { 1: { id: 1, name: "Shopping", items: [1] } };

export default function todoListsReducer(state = initialState, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}

// TODO: state map all lists and remove id if needed
