import { put, select, takeEvery, fork } from "redux-saga/effects";
import { 
    CHEAPEST_SORT_WAS_CLICKED,
    FASTEST_SORT_WAS_CLICKED,
    OPTIMAL_SORT_WAS_CLICKED,
    CHEAPEST,
    FASTEST,
    OPTIMAL
} from '../constants/sort.constants';
import getDisplayedTickets from '../selectors/getDisplayedTickets'
import { rerenderTickets } from '../actions/search.actions';
import sortTickets from '../../helpers/sortTickets';


export default function* sagaSortWatcher() {
    yield fork(sagaSortCheapestWatcher);
    yield fork(sagaSortFastestWatcher);
    yield fork(sagaSortOptimalWatcher);
}

function* sagaSortCheapestWatcher () {
    yield takeEvery(CHEAPEST_SORT_WAS_CLICKED, sagaSortCheapestWorker)
}
  
function* sagaSortCheapestWorker() {
    const currentDisplayedTickets = yield select(getDisplayedTickets);
    const ticketsToDisplay = sortTickets(currentDisplayedTickets, CHEAPEST)
    yield put(rerenderTickets(ticketsToDisplay));
}

function* sagaSortFastestWatcher () {
    yield takeEvery(FASTEST_SORT_WAS_CLICKED, sagaSortFastestWorker)
}
  
function* sagaSortFastestWorker() {
    const currentDisplayedTickets = yield select(getDisplayedTickets);
    const ticketsToDisplay = sortTickets(currentDisplayedTickets, FASTEST)
    yield put(rerenderTickets(ticketsToDisplay));
}

function* sagaSortOptimalWatcher () {
    yield takeEvery(OPTIMAL_SORT_WAS_CLICKED, sagaSortOptimalWorker)
}
  
function* sagaSortOptimalWorker() {
    const currentDisplayedTickets = yield select(getDisplayedTickets);
    const ticketsToDisplay = sortTickets(currentDisplayedTickets, OPTIMAL)
    yield put(rerenderTickets(ticketsToDisplay));
}