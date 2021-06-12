import { useSelector, useDispatch } from "react-redux";
import TransferAmountCell from './TransfersAmountCell'

export default function TransfersAmount () {
    const transfersState = useSelector(state => state.filters.transfersAmount);
    const transfersCells = Object.entries(transfersState).map(([k, v]) => <TransferAmountCell transfersNumber={k} checkedState={v} />)

    const dispatch = useDispatch();

    return (
        <div className="filters-transfers_amout">
            <div className="filters-transfers_amout-title">
                КОЛИЧЕСТВО ПЕРЕСАДОК
            </div>
            <div className="filters-transfers_amout-cell filters-transfers_amout-all">
                <input
                    type="checkbox"
                    id="filter-amout-all"
                    name="filter-amout-all"
                    defaultChecked="true"
                />
                <label htmlFor="filter-amout-all">Все</label>
            </div>
            {transfersCells}
        </div>
    );
}