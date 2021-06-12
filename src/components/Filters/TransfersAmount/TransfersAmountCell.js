import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import {
    checkTransfersAmountFilter,
    uncheckTransfersAmountFilter,
} from '../../../state/actions/filter.actions'

const transfersAmountsToString = { 
    0: { eng: 'zero', ru: 'Без пересадок' },
    1: { eng: 'one', ru: '1 пересадка' },
    2: { eng: 'two', ru: '2 пересадки' },
    3: { eng: 'three', ru: '3 пересадки' },
    4: { eng: 'four', ru: '4 пересадки' },
    5: { eng: 'five', ru: '5 пересадок' },
    6: { eng: 'six', ru: '6 пересадок'}
}

export default function TransferAmountCell ({ transferNumber }) {
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

    const transferNameInCssClass = transfersAmountsToString[transferNumber].eng
    const transferNameInHtmlLabel = transfersAmountsToString[transferNumber].ru

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