import { fork } from "redux-saga/effects";
import sagaSearchWatcher from './search.saga'
import sagaSortWatcher from './sort.saga'
import sagaFilterkWatcher from './filter.saga'

export default function* rootSaga() {
    yield fork(sagaSearchWatcher);
    yield fork(sagaSortWatcher);
    yield fork(sagaFilterkWatcher);
}