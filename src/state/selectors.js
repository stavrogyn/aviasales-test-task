import { createSelector } from "reselect";
import filterTickets from '../helpers/filterTickets';
import sortTickets from '../helpers/sortTickets';

const getAllTickets = state =>  state.search.allTickets;

const getDisplayedTickets = state => state.search.ticketsToDisplay;

const getSort = state => state.sort;

const getTransfersAmount = state => state.filters.transfersAmount;

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