import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { INITIAL_REQUEST_WAS_SENT } from '../consts'


export default function* sagaInitialRequestWatcher () {
    yield takeEvery(INITIAL_REQUEST_WAS_SENT, sagaInitialRequestWorker)
}

const fetchSearchId = (url) => {
    return fetch(url)
        .then(response => response.json())
        .then(data => data.searchId)
}
  
function* sagaInitialRequestWorker() {
    let searchId = yield call(fetchSearchId, 'https://front-test.beta.aviasales.ru/search')
    yield call([console, console.log], searchId)
    document.title = searchId
}