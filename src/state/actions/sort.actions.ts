import {
  CHEAPEST_SORT_WAS_CLICKED,
  FASTEST_SORT_WAS_CLICKED,
  OPTIMAL_SORT_WAS_CLICKED,
  REFRESH_SORT_STATE,
} from "../constants/sort.constants";

const sortByCheapest = () => ({ type: CHEAPEST_SORT_WAS_CLICKED });
const sortByFastest = () => ({ type: FASTEST_SORT_WAS_CLICKED });
const sortByOptimal = () => ({ type: OPTIMAL_SORT_WAS_CLICKED });
const refreshSortState = () => ({ type: REFRESH_SORT_STATE });

export { sortByCheapest, sortByFastest, sortByOptimal, refreshSortState };
