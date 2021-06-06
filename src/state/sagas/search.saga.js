import { call, put, takeEvery } from "redux-saga/effects";
import { 
    INITIAL_REQUEST_DID_SEND, 
    INITIAL_RESPONSE_WAS_RECIEVED, 
    RESULT_REQUEST_DID_SEND,
    RESULT_RESPONSE_WAS_RECIEVED
} from '../constants/search.constants'
import { processInitialResponse, processResultsResponse } from '../actions/search.actions'
import ApiFetcher from '../../api/api'

export function* sagaInitialRequestWatcher () {
    yield takeEvery(INITIAL_REQUEST_DID_SEND, sagaInitialRequestWorker)
}
  
function* sagaInitialRequestWorker() {
    let stop = false, tickets
    const api = yield new ApiFetcher()
    yield call([api, api.getSearchId])
    yield put(processInitialResponse())

    while (!stop) {
        [tickets, stop] = yield call([api, api.getTickets])
        yield call([console, console.log], tickets)
        const stateObject = yield call(processResultsResponse, tickets)
        yield call([console, console.log], stateObject)
        yield put(stateObject)
    }
}