import { store } from './components/App';
import { sendInitialRequest, rerenderTickets } from './state/actions/search.actions'
import { TicketsInterface } from './state/state.type'

interface AppModelInterface {
    startSearch: () => void;
    showTickets: (tickets: TicketsInterface) => void;
}

/**
 * @description: it's for cypress dispatching app actions from tests
 */
export default class AppModel implements AppModelInterface {
    startSearch: () => void = () => {
        return store.dispatch(sendInitialRequest())
    }

    showTickets: (tickets: TicketsInterface) => void = (tickets) => {
        return store.dispatch(rerenderTickets(tickets))
    }
}