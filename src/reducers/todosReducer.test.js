import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO_STATUS,
} from "actions/todosActions";
import todosReducer from "reducers/todosReducer";

describe("todos reducer", () => {
  it("should handle ADD_TODO", () => {
    const state = [{ id: 1, todoListId: 1, name: "bananas", isDone: false }];
    const action = {
      type: ADD_TODO,
      payload: {
        id: 2,
        todoListId: 2,
        name: "Buy 3 apples",
        idDone: false,
      },
    };
    const expectedState = {
      "0": { id: 1, isDone: false, name: "bananas", todoListId: 1 },
      "2": { id: 2, idDone: false, name: "Buy 3 apples", todoListId: 2 },
    };
    expect(todosReducer(state, action)).toEqual(expectedState);
  });
});
