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
import getAllTickets from '../selectors/getAllTickets';
import getSort from '../selectors/getSort';
import getTransfersAmount from '../selectors/getTransfersAmount';
import { changeTotalAmountOfTransfersAmountFilter } from '../actions/filter.actions'
import filterTickets from '../../helpers/filterTickets';
import sortTickets from '../../helpers/sortTickets';


export default function* sagaSearchWatcher () {
    yield takeEvery(INITIAL_REQUEST_DID_SEND, sagaSearchWorker)
}
  
function* sagaSearchWorker() {
    let stopSearchMarker = false, fetchedTickets, ticketsToDisplay;
    const api = yield new SearchApi();
    yield call([api, api.getSearchId]);
    yield put(processInitialResponse());
    while (!stopSearchMarker) {
        yield put(sendResultsRequest());
        [fetchedTickets, stopSearchMarker] = yield call([api, api.getTickets]);
        yield put(processResultsResponse(fetchedTickets));
        const currentTicketsInStore = yield select(getAllTickets);
        const currentFilterState = yield select(getTransfersAmount);
        const currentSortState = yield select(getSort);
        ticketsToDisplay = filterTickets(currentTicketsInStore, currentFilterState)
        ticketsToDisplay = sortTickets(ticketsToDisplay, currentSortState)
        yield put(rerenderTickets(ticketsToDisplay));
        const totalAmountOfTransfers = [...new Set(
            currentTicketsInStore.flatMap(t => t.segments.map(s => s.stops.length))
        )]
        yield put(changeTotalAmountOfTransfersAmountFilter(totalAmountOfTransfers))
    }
    yield put(finishSearch())
}