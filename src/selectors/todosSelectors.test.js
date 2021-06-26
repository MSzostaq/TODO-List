import { getTodosById } from "selectors/todosSelectors";

describe("todo selectors", () => {
  describe("getTodosById", () => {
    it("should get todos by id", () => {
      const state = {
        entities: { todos: { 1: { id: 1 } } },
      };
      const expected = {
        1: { id: 1 },
      };
      expect(getTodosById(state)).toEqual(expected);
    });
  });
});
