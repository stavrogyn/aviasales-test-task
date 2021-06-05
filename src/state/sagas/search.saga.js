import { all, call, fork, put, takeEvery, takeLatest } from "redux-saga/effects";
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
    const api = yield new ApiFetcher()
    yield call([api, api.getSearchId])
    yield put(processInitialResponse())
    const [tickets, stop] = yield call([api, api.getTickets])
    yield call([console, console.log(tickets)])
    yield call([console, console.log(stop)])
    yield put(processResultsResponse(tickets))
    // if (!stop) {
        
    // } 
}

// export function* sagaResultRequestWatcher () {
//     yield takeLatest(RESULT_REQUEST_DID_SEND, sagaResultRequestWorker)
// }

// function* sagaResultRequestWorker() {
//     const [tickets, stop] = yield call([api, api.getTickets])
//     yield put(processResultsResponse(tickets))
//     if (!stop) {

//     } 
// }
