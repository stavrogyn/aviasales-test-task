import { useDispatch } from "react-redux";

import {
  sortByCheapest,
  sortByFastest,
  sortByOptimal,
} from "../state/actions/sort.actions";
import { Sort } from '../components/Sort';
import { sortsInfo } from '../entities/sorts.entity';

export const Sorts = () => {
  const dispatch = useDispatch();

  return (
    <div className="sorts">
      <Sort {...sortsInfo.cheapest} key={0} onClick={() => dispatch(sortByCheapest())} />
      <Sort {...sortsInfo.fastest} key={1} onClick={() => dispatch(sortByFastest())} />
      <Sort {...sortsInfo.optimal} key={2} onClick={() => dispatch(sortByOptimal())} />
    </div>
  );
};

