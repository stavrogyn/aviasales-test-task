import {
  INITIAL_REQUEST_DID_SEND,
  INITIAL_RESPONSE_WAS_RECIEVED,
  RESULT_REQUEST_DID_SEND,
  RESULT_RESPONSE_WAS_RECIEVED,
  RERENDER_DISPLAYED_TICKETS,
  SEARCH_FINISHED,
  REFRESH_SEARCH_STATE,
} from "../constants/search.constants";

export const sendInitialRequest = () => ({ type: INITIAL_REQUEST_DID_SEND });
export const processInitialResponse = () => ({ type: INITIAL_RESPONSE_WAS_RECIEVED });
export const sendResultsRequest = () => ({ type: RESULT_REQUEST_DID_SEND });
export const processResultsResponse = (tickets: any) => ({
  type: RESULT_RESPONSE_WAS_RECIEVED,
  tickets,
});
export const rerenderTickets = (tickets: any) => ({
  type: RERENDER_DISPLAYED_TICKETS,
  tickets,
});
export const finishSearch = () => ({ type: SEARCH_FINISHED });
export const refreshSearchState = () => ({ type: REFRESH_SEARCH_STATE });
