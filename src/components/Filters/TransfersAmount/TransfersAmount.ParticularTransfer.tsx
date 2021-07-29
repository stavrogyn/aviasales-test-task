import { ChangeEvent } from "react";

import { stringifyTransfersAmounts } from "../../../utils/ticket.stringifyTransfersAmounts";
import { TransferNumber } from "../../../state/state.types";

interface TransferAmountCellOneTransfersProps {
  transferNumber: TransferNumber,
  checked: boolean,
  onChange: (event: ChangeEvent<HTMLInputElement>, transferNumber: TransferNumber) => void;
}

export const TransferAmountCellOneTransfer =
    ({ transferNumber, checked, onChange }: TransferAmountCellOneTransfersProps) => {

    const { eng: transferNameInCssClass, ru: transferNameInHtmlLabel } =
      stringifyTransfersAmounts(transferNumber);

    return (
      <div
        className={`filters-transfers_amount-cell filters-transfers_amount-${transferNameInCssClass}`}
      >
        <input
          type="checkbox"
          id={`filter-amount-${transferNameInCssClass}`}
          name={`filter-amount-${transferNameInCssClass}`}
          defaultChecked={checked}
          onChange={(event) => onChange(event, transferNumber)}
        />
        <label htmlFor={`filter-amount-${transferNameInCssClass}`}>
          {transferNameInHtmlLabel}
        </label>
      </div>
    );
  };

