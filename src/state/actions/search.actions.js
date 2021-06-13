import {
    INITIAL_REQUEST_DID_SEND,
    INITIAL_RESPONSE_WAS_RECIEVED,
    RESULT_REQUEST_DID_SEND,
    RESULT_RESPONSE_WAS_RECIEVED,
    RERENDER_DISPLAYED_TICKETS,
    SEARCH_FINISHED,
    REFRESH_SEARCH_STATE
} from '../constants/search.constants.js'

const sendInitialRequest = () => ({ type: INITIAL_REQUEST_DID_SEND });
const processInitialResponse = () => ({ type: INITIAL_RESPONSE_WAS_RECIEVED });
const sendResultsRequest = () => ({ type: RESULT_REQUEST_DID_SEND });
const processResultsResponse = tickets => ({ type: RESULT_RESPONSE_WAS_RECIEVED, tickets });
const rerenderTickets = tickets => ({ type: RERENDER_DISPLAYED_TICKETS, tickets });
const finishSearch = () => ({ type: SEARCH_FINISHED })
const refreshSearchState = () => ({ type: REFRESH_SEARCH_STATE })

export {
    sendInitialRequest,
    processInitialResponse,
    sendResultsRequest,
    processResultsResponse,
    rerenderTickets,
    finishSearch,
    refreshSearchState
}