import {
    INITIAL_REQUEST_DID_SEND,
    INITIAL_RESPONSE_WAS_RECIEVED,
    RESULT_REQUEST_DID_SEND,
    RESULT_RESPONSE_WAS_RECIEVED,
    SEARCH_FINISHED
} from '../constants/search.constants'
import initialState from '../initialState'

export default function searchReducer (state = initialState, action) {
    switch (action.type) {
        case INITIAL_REQUEST_DID_SEND:
            return state
        case INITIAL_RESPONSE_WAS_RECIEVED:
            return state
        case RESULT_REQUEST_DID_SEND:
            return state
        case RESULT_RESPONSE_WAS_RECIEVED:
            return ({
                ...state,
                allTickets: action.tickets
            })
        case SEARCH_FINISHED:
            return state
        default:
            return state;
    }
}