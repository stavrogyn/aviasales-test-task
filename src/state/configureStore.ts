import rootReducer from "./reducers/root.reducer";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/root.saga";
import initialState from "./initialState";
import AppState from "./state.types";
import { composeWithDevTools } from "redux-devtools-extension";

export default function ConfigureStore(state: AppState = initialState) {
  const saga = createSagaMiddleware();
  const middlewares = applyMiddleware(saga);
  const store = createStore(
    rootReducer,
    state,
    composeWithDevTools(middlewares)
  );

  saga.run(rootSaga);

  return store;
}
