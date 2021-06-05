import { fork } from "redux-saga/effects";
import { sagaInitialRequestWatcher } from './search.saga'

export default function* rootSaga() {
    yield fork(sagaInitialRequestWatcher);
}