import {
    CHEAPEST_SORT_WAS_CLICKED,
    FASTEST_SORT_WAS_CLICKED,
    OPTIMAL_SORT_WAS_CLICKED
} from '../constants/sort.constants'

const sortByCheapest = () => ({ type: CHEAPEST_SORT_WAS_CLICKED });
const sortByFastest = () => ({ type: FASTEST_SORT_WAS_CLICKED });
const sortByOptimal = () => ({ type: OPTIMAL_SORT_WAS_CLICKED });

export {
    sortByCheapest,
    sortByFastest,
    sortByOptimal
}