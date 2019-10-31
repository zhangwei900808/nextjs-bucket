import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import { fromJS } from "immutable";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// 组合middleware
const middleWares = [sagaMiddleware, logger];

export default function configureStore(preloadedState = fromJS({})) {
  const store = createStore(rootReducer, applyMiddleware(...middleWares));

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}
