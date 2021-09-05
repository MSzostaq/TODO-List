import { v4 as uuidv4 } from "uuid";

export const ADD_LIST = "ADD_LIST";
export const addList = ({ id = uuidv4(), name = "", items = [] } = {}) => ({
  type: ADD_LIST,
  payload: { id, name, items },
});
export const ADD_LIST_OK = "ADD_LIST_OK";
export const ADD_LIST_ERROR = "ADD_LIST_ERROR";
export const REMOVE_LIST = "REMOVE_LIST";
export const RENAME_LIST = "RENAME_LIST";
export const UPDATE_LIST_ITEMS_ORDER = "UPDATE_LIST_ITEMS_ORDER";
export const UPDATE_LIST_NAME = "UPDATE_LIST_NAME";
