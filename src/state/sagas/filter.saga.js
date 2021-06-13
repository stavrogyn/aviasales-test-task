import { put, select, takeEvery } from "redux-saga/effects";
import {
    FILTERS_TRANSFERS_AMOUNT_DID_CHECK,
    FILTERS_TRANSFERS_AMOUNT_DID_UNCHECK,
    FILTERS_ALL_TRANSFERS_AMOUNT_DID_CHECK,
    FILTERS_ALL_TRANSFERS_AMOUNT_DID_UNCHECK
} from '../constants/filter.constants';
import { rerenderTickets } from '../actions/search.actions';
import filterTickets from '../../helpers/filterTickets';
import sortTickets from "../../helpers/sortTickets";


export default function* sagaFilterkWatcher () {
    yield takeEvery([
        FILTERS_TRANSFERS_AMOUNT_DID_CHECK,
        FILTERS_TRANSFERS_AMOUNT_DID_UNCHECK,
        FILTERS_ALL_TRANSFERS_AMOUNT_DID_CHECK,
        FILTERS_ALL_TRANSFERS_AMOUNT_DID_UNCHECK
    ], sagaFilterkWorker)
}

function* sagaFilterkWorker() {
    let ticketsToDisplay;
    const currentTicketsInStore = yield select(state => state.search.allTickets);
    const currentFilterState = yield select(state => state.filters.transfersAmount);
    const currentSortState = yield select(state => state.sort);
    ticketsToDisplay = filterTickets(currentTicketsInStore, currentFilterState);
    ticketsToDisplay = sortTickets(ticketsToDisplay, currentSortState);
    yield put(rerenderTickets(ticketsToDisplay));
}