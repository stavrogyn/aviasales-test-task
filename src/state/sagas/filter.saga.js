import { put, select, takeEvery, fork } from "redux-saga/effects";
import { 
    CHEAPEST_SORT_WAS_CLICKED,
    FASTEST_SORT_WAS_CLICKED,
    OPTIMAL_SORT_WAS_CLICKED,
    CHEAPEST,
    FASTEST,
    OPTIMAL
} from '../constants/sort.constants';
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
    const currentTicketsInStore = yield select(state => state.search.allTickets);
    const ticketsToDisplay = sortTickets(currentTicketsInStore, CHEAPEST)
    yield put(rerenderTickets(ticketsToDisplay));
}

function* sagaSortFastestWatcher () {
    yield takeEvery(FASTEST_SORT_WAS_CLICKED, sagaSortFastestWorker)
}
  
function* sagaSortFastestWorker() {
    const currentTicketsInStore = yield select(state => state.search.allTickets);
    const ticketsToDisplay = sortTickets(currentTicketsInStore, FASTEST)
    yield put(rerenderTickets(ticketsToDisplay));
}

function* sagaSortOptimalWatcher () {
    yield takeEvery(OPTIMAL_SORT_WAS_CLICKED, sagaSortOptimalWorker)
}
  
function* sagaSortOptimalWorker() {
    const currentTicketsInStore = yield select(state => state.search.allTickets);
    const ticketsToDisplay = sortTickets(currentTicketsInStore, OPTIMAL)
    yield put(rerenderTickets(ticketsToDisplay));
}