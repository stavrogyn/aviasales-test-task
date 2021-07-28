import { ChangeEvent} from 'react'; 
import { useSelector, useDispatch } from "react-redux";

import {
  checkTransfersAmountFilter,
  uncheckTransfersAmountFilter,
  checkAllTransfersAmountFilter,
  uncheckAllTransfersAmountFilter
} from "../state/actions/filter.actions";
import { TransferAmountCellOneTransfer } from "../components/Filters/TransfersAmount/TransfersAmount.ParticularTransfer";
import { TransferAmountCellAllTransfers } from "../components/Filters/TransfersAmount/TransfersAmount.AllTransfers";
import { TransferNumber } from "../state/state.types";
import { getTransfersAmount } from '../state/selectors'

export const TransfersAmount = () => {
  const dispatch = useDispatch();
  const transfersAmountState = useSelector(getTransfersAmount);

  const handleChangeOneTransfersCell = (transferNumber: TransferNumber) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        dispatch(checkTransfersAmountFilter(transferNumber));
      } else {
        dispatch(uncheckTransfersAmountFilter(transferNumber));
      }
    }
  };

  const transfersCells = Object.entries(transfersAmountState).map(
    (transfer, i) => {
      const [transferName, transferState] = transfer;
      const transferNumber = Number(transferName) as TransferNumber;
      return (
        <TransferAmountCellOneTransfer
          transferNumber={transferNumber}
          checked={transferState}
          onChange={handleChangeOneTransfersCell(transferNumber)}
          key={i}
        />
      );
    }
  );

  const handleChangeAllTransfersCells = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatch(checkAllTransfersAmountFilter());
    } else {
      dispatch(uncheckAllTransfersAmountFilter());
    }
  };


  return (
    <div className="filters-transfers_amount">
      <div className="filters-transfers_amount-title">
        КОЛИЧЕСТВО ПЕРЕСАДОК
      </div>
      <TransferAmountCellAllTransfers onChange={handleChangeAllTransfersCells} />
      {transfersCells}
    </div>
  );
};
