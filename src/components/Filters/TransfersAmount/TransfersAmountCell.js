import { useDispatch } from "react-redux";
import {
    checkTransfersAmountFilter,
    uncheckTransfersAmountFilter,
} from '../../../state/actions/filter.actions'

export default function TransferAmountCell ({ transfersNumber, checkedState }) {
    const transfersAmountsToString = { 
        0: { eng: 'zero', ru: 'Без пересадок' },
        1: { eng: 'one', ru: '1 пересадка' },
        2: { eng: 'two', ru: '2 пересадки' },
        3: { eng: 'three', ru: '3 пересадки' },
        4: { eng: 'four', ru: '4 пересадки' },
        5: { eng: 'five', ru: '5 пересадок' },
        6: { eng: 'six', ru: '6 пересадок'}
    }

    const dispatch = useDispatch();
    const handleChange = e => {
        if (e.target.checked) {
            dispatch(checkTransfersAmountFilter(transfersNumber))
        } else {
            dispatch(uncheckTransfersAmountFilter(transfersNumber))
        }
    }

    const transferNameInCssClass = transfersAmountsToString[transfersNumber].eng
    const transferNameInHtmlLabel = transfersAmountsToString[transfersNumber].ru

    return (
        <div className={`filters-transfers_amout-cell filters-transfers_amout-${transferNameInCssClass}`}>
            <input
                type="checkbox"
                id={`filter-amout-${transferNameInCssClass}`}
                name={`filter-amout-${transferNameInCssClass}`}
                defaultChecked={checkedState}
                onChange={handleChange}
            />
            <label htmlFor={`filter-amout-${transferNameInCssClass}`}>{transferNameInHtmlLabel}</label>
        </div>
    );
}