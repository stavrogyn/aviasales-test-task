import { ChangeEvent } from 'react';

interface TransferAmountCellAllTransfersProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const TransferAmountCellAllTransfers = ({ onChange }: TransferAmountCellAllTransfersProps) => {

  return (
    <div className="filters-transfers_amount-cell filters-transfers_amount-all">
      <input
        type="checkbox"
        id="filter-amount-all"
        name="filter-amount-all"
        onChange={onChange}
        defaultChecked
      />
      <label htmlFor="filter-amount-all">Все</label>
    </div>
  );
};

