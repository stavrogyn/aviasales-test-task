import {
    FILTERS_TRANSFERS_AMOUNT_DID_CHECK,
    FILTERS_TRANSFERS_AMOUNT_DID_UNCHECK,
    FILTERS_TRANSFERS_AMOUNT_WAS_CHANGED
} from '../constants/filter.constants';
import initialState from '../initialState';

export default function filterReducer (state = initialState.filters, action) {
    switch (action.type) {
        case FILTERS_TRANSFERS_AMOUNT_DID_CHECK:
            return ({
                transfersAmount: {
                    ...state.transfersAmount,
                    [action.transferNumber]: true
                }
            })
        case FILTERS_TRANSFERS_AMOUNT_DID_UNCHECK:
            return ({
                transfersAmount: {
                    ...state.transfersAmount,
                    [action.transferNumber]: false
                }
            })
        case FILTERS_TRANSFERS_AMOUNT_WAS_CHANGED:
            return ({
                transfersAmount: {
                    ...Object.fromEntries(action.newTransfers.map(e => [e, false]))
                }
            })
        default:
            return state;
    }
}