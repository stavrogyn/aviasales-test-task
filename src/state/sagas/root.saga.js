import { fork } from "redux-saga/effects";
import sagaSearchWatcher from './search.saga'
import sagaSortWatcher from './sort.saga'

export default function* rootSaga() {
    yield fork(sagaSearchWatcher);
    yield fork(sagaSortWatcher);
}