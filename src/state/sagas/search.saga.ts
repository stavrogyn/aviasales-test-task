import SearchApi from '../../api/search.api'
import { call, put, select, takeEvery } from "redux-saga/effects";
import { INITIAL_REQUEST_DID_SEND } from '../constants/search.constants'
import { 
    processInitialResponse,
    sendResultsRequest, 
    processResultsResponse,
    rerenderTickets,
    finishSearch
} from '../actions/search.actions';
import { sortedAndFilteredTicketsSelector, totalAmountOfTransfersSelector } from '../selectors';
import { changeTotalAmountOfTransfersAmountFilter } from '../actions/filter.actions'
import { TicketsInterface, TransfersAmountInterface } from "../state.type";



export default function* sagaSearchWatcher () {
    yield takeEvery(INITIAL_REQUEST_DID_SEND, sagaSearchWorker)
}
  
function* sagaSearchWorker() {
    let stopSearchMarker = false, fetchedTickets;
    const api: SearchApi = yield new SearchApi();
    yield call([api, api.getSearchId]);
    yield put(processInitialResponse());
    while (!stopSearchMarker) {
        yield put(sendResultsRequest());
        [fetchedTickets, stopSearchMarker] = yield call([api, api.getTickets]);
        yield put(processResultsResponse(fetchedTickets));
        const ticketsToDisplay: TicketsInterface = yield select(sortedAndFilteredTicketsSelector);
        yield put(rerenderTickets(ticketsToDisplay));
        const totalAmountOfTransfers: TransfersAmountInterface = yield select(totalAmountOfTransfersSelector);
        yield put(changeTotalAmountOfTransfersAmountFilter(totalAmountOfTransfers))
    }
    yield put(finishSearch())
}