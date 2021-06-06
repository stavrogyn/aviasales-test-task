import {
    INITIAL_REQUEST_DID_SEND,
    INITIAL_RESPONSE_WAS_RECIEVED,
    RESULT_REQUEST_DID_SEND,
    RESULT_RESPONSE_WAS_RECIEVED,
    SEARCH_FINISHED
} from '../constants/search.constants.js'

const sendInitialRequest = () => ({ type: INITIAL_REQUEST_DID_SEND });
const processInitialResponse = () => ({ type: INITIAL_RESPONSE_WAS_RECIEVED });
const sendResultsRequest = () => ({ type: RESULT_REQUEST_DID_SEND });
const processResultsResponse = tickets => ({ type: RESULT_RESPONSE_WAS_RECIEVED, tickets });
const finishSearch = () => ({ type: SEARCH_FINISHED })

export {
    sendInitialRequest,
    processInitialResponse,
    sendResultsRequest,
    processResultsResponse,
    finishSearch
}