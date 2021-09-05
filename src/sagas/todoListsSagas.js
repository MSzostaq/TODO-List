import { put, takeEvery } from "redux-saga/effects";
import { addNotification } from "actions/notificationsActions";
import {
  ADD_LIST,
  ADD_LIST_OK,
  ADD_LIST_ERROR,
} from "actions/todoListsActions";

function* onAddTodoList(action) {
  try {
    // todo: call API endpoint
    const res = { data: action.payload };
    yield put({ type: ADD_LIST_OK, payload: res.data });
    // put = dispatch
    yield put(
      addNotification({ title: "List created", message: `Id: ${res.data.id}` })
    );
  } catch (err) {
    yield put({ type: ADD_LIST_ERROR, payload: err });
    yield put(
      addNotification({
        type: "error",
        title: "Error",
        message: `List not created.`,
      })
    );
  }
}

export default [takeEvery(ADD_LIST, onAddTodoList)];
