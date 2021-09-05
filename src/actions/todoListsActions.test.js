import { addList, ADD_LIST } from "actions/todoListsActions";

describe("todo lists actions", () => {
  describe("addList", () => {
    it("should create an action with new list", () => {
      const list = {
        id: "1",
        name: "List 1",
        items: [2],
      };
      const expectedAction = {
        type: ADD_LIST,
        payload: {
          id: "1",
          name: "List 1",
          items: [2],
        },
      };
      expect(addList(list)).toEqual(expectedAction);
    });

    it("should set default values if not provided", () => {
      const list = {};
      const { payload } = addList(list);
      expect(typeof payload.id).toBe("string");
      expect(payload.name).toBe("");
      expect(payload.items).toEqual([]);
    });
  });
});
