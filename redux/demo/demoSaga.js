import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
import "isomorphic-unfetch";

import { demoTypes } from "./demoAction";

// es6promise.polyfill();

function* sayhi(action) {
  try {
    // const res = yield fetch("https://jsonplaceholder.typicode.com/users");
    // const data = yield res.json();
    const data = action.payload.content;
    yield put({
      type: demoTypes.SAY_HI_SUCCESS,
      content: data
    });
  } catch (err) {
    console.log("err", err);
  }
}

export default function* watchAuthRoot() {
  yield takeLatest(demoTypes.SAY_HI, sayhi);
}
