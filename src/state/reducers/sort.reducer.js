import {
    CHEAPEST_SORT_WAS_CLICKED,
    FASTEST_SORT_WAS_CLICKED,
    OPTIMAL_SORT_WAS_CLICKED,
    CHEAPEST,
    FASTEST,
    OPTIMAL
} from '../constants/sort.constants';
import initialState from '../initialState'


export default function sortReducer (state = initialState.sort, action) {
    switch (action.type) {
        case CHEAPEST_SORT_WAS_CLICKED:
            return CHEAPEST
        case FASTEST_SORT_WAS_CLICKED:
            return FASTEST
        case OPTIMAL_SORT_WAS_CLICKED:
            return OPTIMAL
        default:
            return state;
    }
}