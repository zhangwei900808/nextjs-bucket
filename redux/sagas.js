import { all, fork } from "redux-saga/effects";
import demoSaga from "./demo/demoSaga";

/*添加对action的监听 */
export default function* rootSaga() {
  yield all([fork(demoSaga)]);
}
