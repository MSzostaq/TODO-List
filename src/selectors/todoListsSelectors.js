import { createSelector } from "reselect";

export const getTodoListsById = (state) => state.entities.todoLists;

export const getTodoLists = createSelector(getTodoListsById, (items) =>
  Object.keys(items).map((id) => items[id])
);

export const getTodoListById = (state, id) => state.entities.todoLists[id];
