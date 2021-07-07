import { useDispatch } from "react-redux";
import {
  sortByCheapest,
  sortByFastest,
  sortByOptimal,
} from "../state/actions/sort.actions";

const Sorts: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div className="sorts">
      <div className="sort sort-cheapest">
        <input
          type="radio"
          id="sort-cheapest"
          name="sort"
          value="sort-cheapest"
          defaultChecked
          onClick={() => dispatch(sortByCheapest())}
        />
        <label htmlFor="sort-cheapest">САМЫЙ ДЕШЕВЫЙ</label>
      </div>
      <div className="sort sort-fastest">
        <input
          type="radio"
          id="sort-fastest"
          name="sort"
          value="sort-fastest"
          onClick={() => dispatch(sortByFastest())}
        />
        <label htmlFor="sort-fastest">САМЫЙ БЫСТРЫЙ</label>
      </div>
      <div className="sort sort-optimal">
        <input
          type="radio"
          id="sort-optimal"
          name="sort"
          value="sort-optimal"
          onClick={() => dispatch(sortByOptimal())}
        />
        <label htmlFor="sort-optimal">САМЫЙ ДОРОГОЙ</label>
      </div>
    </div>
  );
};

export default Sorts;
