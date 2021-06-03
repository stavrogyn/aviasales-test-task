import { combineReducers } from 'redux';
import {
    INITIAL_REQUEST_WAS_SENT,
    SEARCH_ID_WAS_RECIEVED,
    RESULTS_REQUEST_WAS_SENT,
    RESULTS_WAS_RECIEVED
} from './consts.js'

const initialState = {
    currentSearchId: '',
    allTickets: [],
    ticketsToDisplay: [],
    sort: 'cheapest',
    filter: {}
}

const sortReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIAL_REQUEST_WAS_SENT:
            return state
        case SEARCH_ID_WAS_RECIEVED:
            return state
        case RESULTS_REQUEST_WAS_SENT:
            return state
        case RESULTS_WAS_RECIEVED:
            return state
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    sortReducer
});

export default rootReducer;