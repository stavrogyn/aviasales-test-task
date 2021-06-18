import { put, select, takeEvery } from "redux-saga/effects";
import {
    FILTERS_TRANSFERS_AMOUNT_DID_CHECK,
    FILTERS_TRANSFERS_AMOUNT_DID_UNCHECK,
    FILTERS_ALL_TRANSFERS_AMOUNT_DID_CHECK,
    FILTERS_ALL_TRANSFERS_AMOUNT_DID_UNCHECK
} from '../constants/filter.constants';
import getAllTickets from '../selectors/getAllTickets';
import getSort from '../selectors/getSort';
import getTransfersAmount from '../selectors/getTransfersAmount';
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
    const currentTicketsInStore = yield select(getAllTickets);
    const currentFilterState = yield select(getTransfersAmount);
    const currentSortState = yield select(getSort);
    ticketsToDisplay = filterTickets(currentTicketsInStore, currentFilterState);
    ticketsToDisplay = sortTickets(ticketsToDisplay, currentSortState);
    yield put(rerenderTickets(ticketsToDisplay));
}