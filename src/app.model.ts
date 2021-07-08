import { store } from './components/App';
import { sendInitialRequest } from './state/actions/search.actions'

interface AppModelInterface {
    startSearch: () => void;
}

/**
 * @description: it's for cypress dispatching app actions from tests
 */
export default class AppModel implements AppModelInterface {
    startSearch: () => void = () => {
        return store.dispatch(sendInitialRequest())
    }
}