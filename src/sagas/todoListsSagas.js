import { call, put, takeEvery } from "redux-saga/effects";
import { addNotification } from "actions/notificationsActions";
import {
  ADD_LIST,
  ADD_LIST_OK,
  ADD_LIST_ERROR,
  REMOVE_LIST,
  REMOVE_LIST_OK,
  REMOVE_LIST_ERROR,
} from "actions/todoListsActions";

function* onAddTodoList(action) {
  try {
    // todo: call API endpoint
    const res = { data: action.payload };
    yield put({ type: ADD_LIST_OK, payload: res.data });
    // put = dispatch
    if (action.meta.onSuccess) {
      yield call(action.meta.onSuccess, res.data);
    }
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

function* onRemoveTodoList(action) {
  try {
    // todo: call API endpoint
    yield put({ type: REMOVE_LIST_OK, payload: { id: action.payload.id } });
    yield put(
      addNotification({
        title: "List removed",
        message: `Id: ${action.payload.id}`,
      })
    );
  } catch (err) {
    yield put({ type: REMOVE_LIST_ERROR, payload: err });
    yield put(
      addNotification({
        type: "error",
        title: "Error",
        message: `List not removed.`,
      })
    );
  }
}

export default [
  takeEvery(ADD_LIST, onAddTodoList),
  takeEvery(REMOVE_LIST, onRemoveTodoList),
];
