import { put, select, takeEvery } from "redux-saga/effects";
import {
  FILTERS_TRANSFERS_AMOUNT_DID_CHECK,
  FILTERS_TRANSFERS_AMOUNT_DID_UNCHECK,
  FILTERS_ALL_TRANSFERS_AMOUNT_DID_CHECK,
  FILTERS_ALL_TRANSFERS_AMOUNT_DID_UNCHECK,
} from "../constants/filter.constants";
import { rerenderTickets } from "../actions/search.actions";
import { sortedAndFilteredTicketsSelector } from "../selectors";
import { TicketsInterface } from "../state.type";

export default function* sagaFilterkWatcher() {
  yield takeEvery(
    [
      FILTERS_TRANSFERS_AMOUNT_DID_CHECK,
      FILTERS_TRANSFERS_AMOUNT_DID_UNCHECK,
      FILTERS_ALL_TRANSFERS_AMOUNT_DID_CHECK,
      FILTERS_ALL_TRANSFERS_AMOUNT_DID_UNCHECK,
    ],
    sagaFilterkWorker
  );
}

function* sagaFilterkWorker() {
  const ticketsToDisplay: TicketsInterface = yield select(
    sortedAndFilteredTicketsSelector
  );
  yield put(rerenderTickets(ticketsToDisplay));
}
