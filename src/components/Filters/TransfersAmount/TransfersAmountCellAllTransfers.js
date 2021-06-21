import { useDispatch } from "react-redux";import {
    checkAllTransfersAmountFilter,
    uncheckAllTransfersAmountFilter
} from '../../../state/actions/filter.actions'

export default function TransferAmountCellAllTransfers () {

    const dispatch = useDispatch();
    const handleChange = e => {
        if (e.target.checked) {
            dispatch(checkAllTransfersAmountFilter())
        } else {
            dispatch(uncheckAllTransfersAmountFilter())
        }
    }

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
}