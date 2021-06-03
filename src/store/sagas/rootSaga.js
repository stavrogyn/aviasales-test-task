import { fork } from "redux-saga/effects";
import sagaInitialRequestWatcher from './sagaInitialRequest'

export default function* rootSaga() {
    yield fork(sagaInitialRequestWatcher);
}