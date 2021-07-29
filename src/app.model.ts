import { store } from "./layouts/App.layout";
import {
  sendInitialRequest,
  rerenderTickets,
} from "./state/actions/search.actions";
import { Tickets } from "./state/state.types";

interface AppModelInterface {
  startSearch: () => void;
  showTickets: (tickets: Tickets) => void;
}

/**
 * @description: it's for cypress dispatching app actions from tests
 */
export default class AppModel implements AppModelInterface {
  startSearch: () => void = () => {
    return store.dispatch(sendInitialRequest());
  };

  showTickets: (tickets: Tickets) => void = (tickets) => {
    return store.dispatch(rerenderTickets(tickets));
  };
}
