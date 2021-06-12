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
import filterTickets from '../../helpers/filterTickets';
import sortTickets from '../../helpers/sortTickets';


export function* sagaInitialRequestWatcher () {
    yield takeEvery(INITIAL_REQUEST_DID_SEND, sagaInitialRequestWorker)
}
  
function* sagaInitialRequestWorker() {
    let stopSearchMarker = false, fetchedTickets, ticketsToDisplay;
    const api = yield new SearchApi();
    yield call([api, api.getSearchId]);
    yield put(processInitialResponse());
    while (!stopSearchMarker) {
        yield put(sendResultsRequest());
        [fetchedTickets, stopSearchMarker] = yield call([api, api.getTickets]);
        yield put(processResultsResponse(fetchedTickets));
        const currentTicketsInStore = yield select(state => state.search.allTickets);
        const currentFilterState = yield select(state => state.filters.transfersAmount);
        const currentSortState = yield select(state => state.sort);
        ticketsToDisplay = filterTickets(currentTicketsInStore, currentFilterState)
        ticketsToDisplay = sortTickets(ticketsToDisplay, currentSortState)
        yield put(rerenderTickets(ticketsToDisplay));
    }
    yield put(finishSearch())
}