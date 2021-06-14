import { useSelector } from "react-redux";
import TransferAmountCellOneTransfers from './TransferAmountCellOneTransfers'
import TransferAmountCellAllTransfers from './TransferAmountCellAllTransfers'

export default function TransfersAmount () {
    const transfersState = useSelector(state => state.filters.transfersAmount);
    const transfersCells = Object.entries(transfersState).map(([transferNumber], id) => {
        return <TransferAmountCellOneTransfers transferNumber={transferNumber} key={id} />
    })

    return (
        <div className="filters-transfers_amout">
            <div className="filters-transfers_amout-title">
                КОЛИЧЕСТВО ПЕРЕСАДОК
            </div>
            <TransferAmountCellAllTransfers />
            {transfersCells}
        </div>
    );
}