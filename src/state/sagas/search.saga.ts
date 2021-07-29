import { fetchSearchId, fetchTickets } from "../../api/search.api";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { INITIAL_REQUEST_DID_SEND } from "../constants/search.constants";
import {
  processInitialResponse,
  sendResultsRequest,
  processResultsResponse,
  rerenderTickets,
  finishSearch,
} from "../actions/search.actions";
import {
  getSortedAndFilteredTickets,
  getAllUniqieAmountOfTransfers,
} from "../selectors";
import { changeTotalAmountOfTransfersAmountFilter } from "../actions/filter.actions";
import { Tickets, TransfersAmount } from "../state.types";

export default function* sagaSearchWatcher() {
  yield takeEvery(INITIAL_REQUEST_DID_SEND, sagaSearchWorker);
}

function* sagaSearchWorker() {
  let stopSearchMarker = false,
    fetchedTickets;
  const { searchId } = yield call(fetchSearchId);
  yield put(processInitialResponse());
  while (!stopSearchMarker) {
    yield put(sendResultsRequest());
    const { stop, tickets } = yield call(fetchTickets, searchId);
    stopSearchMarker = stop;
    fetchedTickets = tickets;
    yield put(processResultsResponse(fetchedTickets));
    const ticketsToDisplay: Tickets = yield select(
      getSortedAndFilteredTickets
    );
    yield put(rerenderTickets(ticketsToDisplay));
    const totalAmountOfTransfers: TransfersAmount = yield select(
      getAllUniqieAmountOfTransfers
    );
    yield put(changeTotalAmountOfTransfersAmountFilter(totalAmountOfTransfers));
  }
  yield put(finishSearch());
}
