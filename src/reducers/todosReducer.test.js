import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO_NAME,
  UPDATE_TODO_STATUS,
} from "actions/todosActions";
import reducer from "reducers/todosReducer";

describe("todos reducer", () => {
  it("should handle ADD_TODO", () => {
    const state = {
      1: { id: 1, todoListId: 1, name: "bananas", isDone: false },
    };
    const action = {
      type: ADD_TODO,
      payload: {
        id: 2,
        todoListId: 1,
        name: "3 apples",
        isDone: false,
      },
    };
    const expectedState = {
      1: { id: 1, todoListId: 1, name: "bananas", isDone: false },
      2: { id: 2, todoListId: 1, name: "3 apples", isDone: false },
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("should handle REMOVE_TODO", () => {
    const state = {
      1: { id: 1, todoListId: 1, name: "bananas", isDone: false },
      2: { id: 2, todoListId: 1, name: "3 apples", isDone: false },
    };
    const action = {
      type: REMOVE_TODO,
      payload: {
        id: 2,
      },
    };
    const expectedState = {
      1: { id: 1, todoListId: 1, name: "bananas", isDone: false },
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("should handle UPDATE_TODO_NAME", () => {
    const state = {
      1: { id: 1, todoListId: 1, name: "bananas" },
    };
    const action = {
      type: UPDATE_TODO_NAME,
      payload: {
        id: 1,
        name: "banana",
      },
    };
    const expectedState = {
      1: { id: 1, todoListId: 1, name: "banana" },
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("should handle UPDATE_TODO_STATUS", () => {
    const state = {
      1: { id: 1, todoListId: 1, name: "bananas", isDone: false },
    };
    const action = {
      type: UPDATE_TODO_STATUS,
      payload: {
        id: 1,
        isDone: true,
      },
    };
    const expectedState = {
      1: { id: 1, todoListId: 1, name: "bananas", isDone: true },
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });
});
