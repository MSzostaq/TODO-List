import { ADD_TODO, REMOVE_TODO } from "actions/todosActions";
import reducer from "reducers/todoListsReducer";

describe("todoLists reducer", () => {
  it("should handle ADD_TODO", () => {
    const state = {
      1: { id: 1, name: "Shopping", items: [1] },
    };
    const action = {
      type: ADD_TODO,
      payload: {
        id: 2,
        todoListId: 1,
      },
    };
    const expectedState = {
      1: { id: 1, name: "Shopping", items: [1, 2] },
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("should handle REMOVE_TODO", () => {
    const state = {
      1: { id: 1, name: "Shopping", items: [1, 2] },
    };
    const action = {
      type: REMOVE_TODO,
      payload: {
        id: 2,
        todoListId: 1,
      },
    };
    const expectedState = {
      1: { id: 1, name: "Shopping", items: [1] },
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });
});
