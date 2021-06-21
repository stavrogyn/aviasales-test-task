import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import {
    checkTransfersAmountFilter,
    uncheckTransfersAmountFilter,
} from '../../../state/actions/filter.actions'
import transfersAmountsToString from '../../../utils/getTransferName'

export default function TransferAmountCellOneTransfers ({ transferNumber }) {
    const inputEl = useRef(null);
    const dispatch = useDispatch();
    const transferCheckedState = useSelector(state => state.filters.transfersAmount[transferNumber]);

    const handleCheck = e => {
        if (e.target.checked) {
            dispatch(checkTransfersAmountFilter(transferNumber))
        } else {
            dispatch(uncheckTransfersAmountFilter(transferNumber))
        }
    }

    useEffect(() => {
        inputEl.current.checked = transferCheckedState
    }, [transferCheckedState])

    const { eng: transferNameInCssClass, ru: transferNameInHtmlLabel } = transfersAmountsToString(transferNumber)

    return (
        <div className={`filters-transfers_amout-cell filters-transfers_amout-${transferNameInCssClass}`}>
            <input
                type="checkbox"
                id={`filter-amout-${transferNameInCssClass}`}
                name={`filter-amout-${transferNameInCssClass}`}
                defaultChecked={transferCheckedState}
                onChange={handleCheck}
                ref={inputEl}
            />
            <label htmlFor={`filter-amout-${transferNameInCssClass}`}>{transferNameInHtmlLabel}</label>
        </div>
    );
}