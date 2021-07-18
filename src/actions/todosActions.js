import { v4 as uuidv4 } from "uuid";

export const ADD_TODO = "ADD_TODO";
export function addTodo({
  id = uuidv4(),
  todoListId = null,
  name = "",
  isDone = false,
}) {
  return {
    type: ADD_TODO,
    payload: { id, todoListId, name, isDone },
  };
}

export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO_NAME = "UPDATE_TODO_NAME";
export const UPDATE_TODO_STATUS = "UPDATE_TODO_STATUS";
