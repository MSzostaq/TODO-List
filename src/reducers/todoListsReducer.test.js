import { ADD_TODO, REMOVE_TODO } from "actions/todosActions";
import {
  UPDATE_LIST_ITEMS_ORDER,
  UPDATE_LIST_NAME,
} from "actions/todoListsActions";
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

  it("should handle UPDATE_LIST_ITEMS_ORDER", () => {
    const state = {
      1: { id: 1, name: "Shopping", items: [1, 2] },
    };
    const action = {
      type: UPDATE_LIST_ITEMS_ORDER,
      payload: {
        id: 1,
        order: [2, 1],
      },
    };
    const expectedState = {
      1: { id: 1, name: "Shopping", items: [2, 1] },
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("should handle UPDATE_LIST_NAME", () => {
    const state = {
      1: { id: 1, name: "Shopping" },
    };
    const action = {
      type: UPDATE_LIST_NAME,
      payload: {
        id: 1,
        name: "Shopping List",
      },
    };
    const expectedState = {
      1: { id: 1, name: "Shopping List" },
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });
});
