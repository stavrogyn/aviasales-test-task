import { useCallback } from "react";
import { useDispatch } from "react-redux";

import {
  sortByCheapest,
  sortByFastest,
  sortByOptimal,
} from "../state/actions/sort.actions";
import { SortItem } from '../components/Sort';
import { sortsInfo } from '../entities/sorts.entity';

export const Sorts = () => {
  const dispatch = useDispatch();

  const handleCheapestClick = useCallback(() => {
    dispatch(sortByCheapest())
  }, [dispatch])

  const handleFastestClick = useCallback(() => {
    dispatch(sortByFastest())
  }, [dispatch])

  const handleOptimalClick = useCallback(() => {
    dispatch(sortByOptimal())
  }, [dispatch])

  return (
    <div className="sorts">
      <SortItem {...sortsInfo.cheapest} key={0} onClick={handleCheapestClick} />
      <SortItem {...sortsInfo.fastest} key={1} onClick={handleFastestClick} />
      <SortItem {...sortsInfo.optimal} key={2} onClick={handleOptimalClick} />
    </div>
  );
};

