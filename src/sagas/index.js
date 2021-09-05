import { all } from "redux-saga/effects";
import todoListsSagas from "sagas/todoListsSagas";
import notificationsSagas from "sagas/notificationsSagas";

export default function* rootSaga() {
  yield all([...todoListsSagas, ...notificationsSagas]);
}
