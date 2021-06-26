import {
  getTodoListsById,
  getTodoLists,
  getTodoListById,
} from "selectors/todoListsSelectors";

describe("todo lists selectors", () => {
  describe("getTodoListsById", () => {
    it("should get todo lists by id", () => {
      const state = {
        entities: { todoLists: { 1: { id: 1 } } },
      };
      const expected = {
        1: { id: 1 },
      };
      expect(getTodoListsById(state)).toEqual(expected);
    });
  });

  describe("getTodoLists", () => {
    it("should get todo lists", () => {
      const state = {
        entities: { todoLists: { 1: { id: 1 } } },
      };
      const expected = [{ id: 1 }];
      expect(getTodoLists(state)).toEqual(expected);
    });
  });

  describe("getTodoListById", () => {
    it("should get todo list by id", () => {
      const state = {
        entities: { todoLists: { 1: { id: 1 } } },
      };
      const expected = { id: 1 };
      expect(getTodoListById(state, 1)).toEqual(expected);
    });
  });
});
