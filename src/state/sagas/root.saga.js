import { fork } from "redux-saga/effects";
import sagaSearchWatcher from './search.saga'

export default function* rootSaga() {
    yield fork(sagaSearchWatcher);
}