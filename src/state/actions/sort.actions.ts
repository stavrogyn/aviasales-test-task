import {
  CHEAPEST_SORT_WAS_CLICKED,
  FASTEST_SORT_WAS_CLICKED,
  OPTIMAL_SORT_WAS_CLICKED,
  REFRESH_SORT_STATE,
} from "../constants/sort.constants";

export const sortByCheapest = () => ({ type: CHEAPEST_SORT_WAS_CLICKED });
export const sortByFastest = () => ({ type: FASTEST_SORT_WAS_CLICKED });
export const sortByOptimal = () => ({ type: OPTIMAL_SORT_WAS_CLICKED });
export const refreshSortState = () => ({ type: REFRESH_SORT_STATE });
