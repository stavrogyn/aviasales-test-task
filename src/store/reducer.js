import { combineReducers } from 'redux';

const initialTicketsState = {
    allTickets: [],
    ticketsToDisplay: []
}

const initialSortState = {
    sort: "cheapest"
}

const sortReducer = (state = initialSortState, action) => {
    switch (action.type) {
        case 'SORT_DID_CHANGE_CHEAPEST':
            return ({ sort: "cheapest" })
        case 'SORT_DID_CHANGE_FASTEST':
            return ({ sort: "fastest" })
        case 'SORT_DID_CHANGE_OPTIMAL':
            return ({ sort: "optimal" })
        default:
            return state;
    }
}

const filterTransfersAmountReducer = (state = initialFilterState, action) => {
    switch (action.type) {
        case 'AMOUNT_OF_TRANSFERS_WAS_DEFINED':
            return ({
                allTickets: action.tickets,
                ticketsToDisplay: action.tickets
            })
        default:
            return state;
    }
}

const ticketsReducer = (state = initialTicketsState, action) => {
    switch (action.type) {
        case 'TICKETS_WAS_LOADED':
            return ({
                allTickets: action.tickets,
                ticketsToDisplay: action.tickets
            })
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    ticketsReducer,
    sortReducer,
    filterTransfersAmountReducer
});

export default rootReducer;