import {
    FILTERS_TRANSFERS_AMOUNT_DID_CHECK,
    FILTERS_TRANSFERS_AMOUNT_DID_UNCHECK,
    FILTERS_ALL_TRANSFERS_AMOUNT_DID_CHECK,
    FILTERS_ALL_TRANSFERS_AMOUNT_DID_UNCHECK,
    FILTERS_TOTAL_TRANSFERS_AMOUNT_WAS_CHANGED,
    REFRESH_TRANSFERS_AMOUNT_STATE
} from '../constants/filter.constants';
import initialState from '../initialState';

type FilterActionType = {
    type: string,
    transferNumber: number,
    newTransfers: number[]
}

export default function filterReducer (state = initialState.filters, action: FilterActionType) {
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
        case FILTERS_ALL_TRANSFERS_AMOUNT_DID_CHECK:
            return ({
                transfersAmount: {
                    ...Object.fromEntries(Object.entries(state.transfersAmount).map(([transfer]) => [transfer, true]))
                }
            })
        case FILTERS_ALL_TRANSFERS_AMOUNT_DID_UNCHECK:
            return ({
                transfersAmount: {
                    ...Object.fromEntries(Object.entries(state.transfersAmount).map(([transfer]) => [transfer, false]))
                }
            })
        case FILTERS_TOTAL_TRANSFERS_AMOUNT_WAS_CHANGED:
            return ({
                transfersAmount: {
                    ...Object.fromEntries(action.newTransfers.map(e => [e, true])),
                    ...state.transfersAmount
                }
            })
        case REFRESH_TRANSFERS_AMOUNT_STATE:
            return initialState.filters
        default:
            return state;
    }
}