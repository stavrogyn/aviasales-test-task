import {
  INITIAL_REQUEST_DID_SEND,
  INITIAL_RESPONSE_WAS_RECIEVED,
  RESULT_REQUEST_DID_SEND,
  RESULT_RESPONSE_WAS_RECIEVED,
  RERENDER_DISPLAYED_TICKETS,
  SEARCH_FINISHED,
  REFRESH_SEARCH_STATE,
} from "../constants/search.constants";
import initialState from "../initialState";
import { TicketsInterface } from "../state.type";

type SearchActionType = {
  type: string;
  tickets: TicketsInterface;
};

export default function searchReducer(
  state = initialState.search,
  action: SearchActionType
) {
  switch (action.type) {
    case INITIAL_REQUEST_DID_SEND:
      return state;
    case INITIAL_RESPONSE_WAS_RECIEVED:
      return state;
    case RESULT_REQUEST_DID_SEND:
      return state;
    case RESULT_RESPONSE_WAS_RECIEVED:
      return {
        ...state,
        allTickets: [...state.allTickets, ...action.tickets],
      };
    case RERENDER_DISPLAYED_TICKETS:
      return {
        ...state,
        ticketsToDisplay: [...action.tickets],
      };
    case SEARCH_FINISHED:
      return state;
    case REFRESH_SEARCH_STATE:
      return initialState.search;
    default:
      return state;
  }
}
