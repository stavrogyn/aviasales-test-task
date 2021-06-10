import {
    CHEAPEST_SORT_WAS_CLICKED,
    FASTEST_SORT_WAS_CLICKED,
    OPTIMAL_SORT_WAS_CLICKED
} from '../constants/sort.constants';
import initialState from '../initialState'


export default function sortReducer (state = initialState.sort, action) {
    switch (action.type) {
        case CHEAPEST_SORT_WAS_CLICKED:
            return 'cheapest'
        case FASTEST_SORT_WAS_CLICKED:
            return 'fastest'
        case OPTIMAL_SORT_WAS_CLICKED:
            return 'optimal'
        default:
            return state;
    }
}