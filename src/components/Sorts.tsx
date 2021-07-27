import { useDispatch, useSelector } from "react-redux";
import {
  sortByCheapest,
  sortByFastest,
  sortByOptimal,
} from "../state/actions/sort.actions";
import { CHEAPEST, FASTEST, OPTIMAL } from "../state/constants/sort.constants";
import { SortType } from "../state/state.types";
import { getSort } from "../state/selectors";

export const Sorts = () => {
  const dispatch = useDispatch();
  const sortState = useSelector(getSort);
  const memoizedSort = (sortType: SortType) => {
    switch (sortType) {
      case CHEAPEST:
        sortState != CHEAPEST && dispatch(sortByCheapest());
        break;
      case FASTEST:
        sortState != FASTEST && dispatch(sortByFastest());
        break;
      case OPTIMAL:
        sortState != OPTIMAL && dispatch(sortByOptimal());
        break;
    }
  };

  return (
    <div className="sorts">
      <div className="sort sort-cheapest">
        <input
          type="radio"
          id="sort-cheapest"
          name="sort"
          value="sort-cheapest"
          defaultChecked
          onClick={() => memoizedSort(CHEAPEST)}
        />
        <label htmlFor="sort-cheapest">САМЫЙ ДЕШЕВЫЙ</label>
      </div>
      <div className="sort sort-fastest">
        <input
          type="radio"
          id="sort-fastest"
          name="sort"
          value="sort-fastest"
          onClick={() => memoizedSort(FASTEST)}
        />
        <label htmlFor="sort-fastest">САМЫЙ БЫСТРЫЙ</label>
      </div>
      <div className="sort sort-optimal">
        <input
          type="radio"
          id="sort-optimal"
          name="sort"
          value="sort-optimal"
          onClick={() => memoizedSort(OPTIMAL)}
        />
        <label htmlFor="sort-optimal">САМЫЙ ДОРОГОЙ</label>
      </div>
    </div>
  );
};

