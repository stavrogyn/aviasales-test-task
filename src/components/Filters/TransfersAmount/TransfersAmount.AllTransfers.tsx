import React from "react";
import { useDispatch } from "react-redux";
import {
  checkAllTransfersAmountFilter,
  uncheckAllTransfersAmountFilter,
} from "../../../state/actions/filter.actions";

const TransferAmountCellAllTransfers: React.FC = () => {
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.checked) {
      dispatch(checkAllTransfersAmountFilter());
    } else {
      dispatch(uncheckAllTransfersAmountFilter());
    }
  };

  return (
    <div className="filters-transfers_amout-cell filters-transfers_amout-all">
      <input
        type="checkbox"
        id="filter-amout-all"
        name="filter-amout-all"
        onChange={handleChange}
        defaultChecked
      />
      <label htmlFor="filter-amout-all">Все</label>
    </div>
  );
};

export default TransferAmountCellAllTransfers;
