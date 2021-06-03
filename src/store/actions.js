import {
    INITIAL_REQUEST_WAS_SENT,
    SEARCH_ID_WAS_RECIEVED,
    RESULTS_REQUEST_WAS_SENT,
    RESULTS_WAS_RECIEVED
} from './consts.js'

const sendInitialRequest = () => ({ type: INITIAL_REQUEST_WAS_SENT });
const processInitialResponse = () => ({ type: SEARCH_ID_WAS_RECIEVED });
const sendResultsRequest = () => ({ type: RESULTS_REQUEST_WAS_SENT });
const processResultsResponse = () => ({ type: RESULTS_WAS_RECIEVED });

export {
    sendInitialRequest,
    processInitialResponse,
    sendResultsRequest,
    processResultsResponse
}