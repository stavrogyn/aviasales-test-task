import React from "react";
import { useSelector } from "react-redux";
import TransferAmountCellOneTransfers from "./TransfersAmount.ParticularTransfer";
import TransferAmountCellAllTransfers from "./TransfersAmount.AllTransfers";
import stateInterface from "../../../state/state.type";
import { TransferNumberType } from "../../../state/state.type";

const TransfersAmount: React.FC = () => {
  const transfersState = useSelector(
    (state: stateInterface) => state.filters.transfersAmount
  );

  const transfersCells: JSX.Element[] = Object.entries(transfersState).map(
    (transfer, i) => {
      const transferNumber = parseInt(transfer[0]) as TransferNumberType;
      return (
        <TransferAmountCellOneTransfers
          transferNumber={transferNumber}
          key={i}
        />
      );
    }
  );

  return (
    <div className="filters-transfers_amout">
      <div className="filters-transfers_amout-title">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <TransferAmountCellAllTransfers />
      {transfersCells}
    </div>
  );
};

export default TransfersAmount;
