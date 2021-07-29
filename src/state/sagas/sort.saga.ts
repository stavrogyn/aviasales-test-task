import { put, select, takeEvery } from "redux-saga/effects";
import {
  CHEAPEST_SORT_WAS_CLICKED,
  FASTEST_SORT_WAS_CLICKED,
  OPTIMAL_SORT_WAS_CLICKED,
} from "../constants/sort.constants";
import { getSortedTickets } from "../selectors";
import { rerenderTickets } from "../actions/search.actions";
import { Tickets } from "../state.types";

export default function* sagaSortWatcher() {
  yield takeEvery(
    [
      CHEAPEST_SORT_WAS_CLICKED,
      FASTEST_SORT_WAS_CLICKED,
      OPTIMAL_SORT_WAS_CLICKED,
    ],
    sagaSortkWorker
  );
}

function* sagaSortkWorker() {
  const ticketsToDisplay: Tickets = yield select(
    getSortedTickets
  );
  yield put(rerenderTickets(ticketsToDisplay));
}
