import { createSelector } from "reselect";
import filterTickets from "../utils/tickets.filter";
import sortTickets from "../utils/tickets.sort";
import AppState from "./state.types";

export const getAllTickets = (state: AppState) => state.search.allTickets;

export const getDisplayedTickets = (state: AppState) =>
  state.search.ticketsToDisplay;

export const getSort = (state: AppState) => state.sort;

export const getTransfersAmount = (state: AppState) =>
  state.filters.transfersAmount;
  
export const getSortedAndFilteredTickets = createSelector(
  [getAllTickets, getTransfersAmount, getSort],
  (tickets, filter, sort) => sortTickets(filterTickets(tickets, filter), sort)
);

export const getAllUniqieAmountOfTransfers = createSelector(
  getAllTickets,
  (tickets) => [
    ...new Set(tickets.flatMap((ticket) => ticket.segments.map((segment) => segment.stops.length))),
  ]
);

export const getSortedTickets = createSelector(
  getDisplayedTickets,
  getSort,
  (tickets, sort) => sortTickets(tickets, sort)
);
