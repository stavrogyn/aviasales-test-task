import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import {
  checkTransfersAmountFilter,
  uncheckTransfersAmountFilter,
} from "../../../state/actions/filter.actions";
import transfersAmountsToString from "../../../utils/transfersAmountsToString";
import stateInterface, { TransferNumberType } from "../../../state/state.type";

interface TransferAmountCellOneTransfersProps {
  transferNumber: TransferNumberType;
}

const TransferAmountCellOneTransfers: React.FC<TransferAmountCellOneTransfersProps> =
  ({ transferNumber }) => {
    const inputEl = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const transferCheckedState: boolean =
      useSelector(
        (state: stateInterface) => state.filters.transfersAmount[transferNumber]
      ) ?? true;

    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        dispatch(checkTransfersAmountFilter(transferNumber));
      } else {
        dispatch(uncheckTransfersAmountFilter(transferNumber));
      }
    };

    useEffect(() => {
      inputEl.current!.checked = transferCheckedState;
    }, [transferCheckedState]);

    const { eng: transferNameInCssClass, ru: transferNameInHtmlLabel } =
      transfersAmountsToString(transferNumber);

    return (
      <div
        className={`filters-transfers_amout-cell filters-transfers_amout-${transferNameInCssClass}`}
      >
        <input
          type="checkbox"
          id={`filter-amout-${transferNameInCssClass}`}
          name={`filter-amout-${transferNameInCssClass}`}
          defaultChecked={transferCheckedState}
          onChange={handleCheck}
          ref={inputEl}
        />
        <label htmlFor={`filter-amout-${transferNameInCssClass}`}>
          {transferNameInHtmlLabel}
        </label>
      </div>
    );
  };

export default TransferAmountCellOneTransfers;
