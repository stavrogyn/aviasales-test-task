import {
  CHEAPEST_SORT_WAS_CLICKED,
  FASTEST_SORT_WAS_CLICKED,
  OPTIMAL_SORT_WAS_CLICKED,
  CHEAPEST,
  FASTEST,
  OPTIMAL,
  REFRESH_SORT_STATE,
} from "../constants/sort.constants";
import initialState from "../initialState";

type SortAction = {
  type: string;
};

export default function sortReducer(
  state = initialState.sort,
  action: SortAction
) {
  switch (action.type) {
    case CHEAPEST_SORT_WAS_CLICKED:
      return CHEAPEST;
    case FASTEST_SORT_WAS_CLICKED:
      return FASTEST;
    case OPTIMAL_SORT_WAS_CLICKED:
      return OPTIMAL;
    case REFRESH_SORT_STATE:
      return initialState.sort;
    default:
      return state;
  }
}
