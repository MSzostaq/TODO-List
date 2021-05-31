export const getTodoListsById = (state) => state.entities.todoLists;

export const getTodoListById = (state, id) => state.entities.todoLists[id];
