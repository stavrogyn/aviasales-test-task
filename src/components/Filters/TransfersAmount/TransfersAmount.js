import { useSelector, useDispatch } from "react-redux";
import TransferAmountCell from './TransfersAmountCell'
import {
    checkAllTransfersAmountFilter,
    uncheckAllTransfersAmountFilter,
} from '../../../state/actions/filter.actions'

export default function TransfersAmount () {
    const transfersState = useSelector(state => state.filters.transfersAmount);
    const transfersCells = Object.entries(transfersState).map(([number, state]) => <TransferAmountCell transferNumber={number} />)

    const dispatch = useDispatch();
    const handleChange = e => {
        if (e.target.checked) {
            dispatch(checkAllTransfersAmountFilter())
        } else {
            dispatch(uncheckAllTransfersAmountFilter())
        }
    }

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
                    onChange={handleChange}
                />
                <label htmlFor="filter-amout-all">Все</label>
            </div>
            {transfersCells}
        </div>
    );
}