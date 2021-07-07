import { createSelector } from "reselect";
import filterTickets from '../utils/tickets.filter';
import sortTickets from '../utils/tickets.sort';
import stateInterface from "./state.type";

const getAllTickets = (state: stateInterface) =>  state.search.allTickets;

const getDisplayedTickets = (state: stateInterface) => state.search.ticketsToDisplay;

const getSort = (state: stateInterface) => state.sort;

const getTransfersAmount = (state: stateInterface) => state.filters.transfersAmount;

export const sortedAndFilteredTicketsSelector = createSelector(
    [
        getAllTickets,
        getTransfersAmount,
        getSort
    ],
    (tickets, filter, sort) => sortTickets(filterTickets(tickets, filter), sort)
)

export const totalAmountOfTransfersSelector = createSelector(
    getAllTickets,
    tickets => [...new Set(
        tickets.flatMap(t => t.segments.map(s => s.stops.length))
    )]
)

export const sortedTicketsSelector = createSelector(
    getDisplayedTickets, 
    getSort,
    (tickets, sort) => sortTickets(tickets, sort)
)