import { combineReducers } from "redux";
import todoListsReducer from "reducers/todoListsReducer";
import todosReducer from "reducers/todosReducer";

const rootReducer = combineReducers({
  todoLists: todoListsReducer,
  todos: todosReducer,
});

export default rootReducer;
