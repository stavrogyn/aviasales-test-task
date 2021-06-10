import { useSelector } from "react-redux";

export default function TransfersAmount () {
    const transfers = useSelector(state => state.filters.transfersAmount);

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
                    defaultChecked={transfers}
                />
                <label htmlFor="filter-amout-all">Все</label>
            </div>
            <div className="filters-transfers_amout-cell filters-transfers_amout-zero">
                <input
                    type="checkbox"
                    id="filter-amout-zero"
                    name="filter-amout-zero"
                />
                <label htmlFor="filter-amout-zero">Без пересадок</label>
            </div>
            <div className="filters-transfers_amout-cell filters-transfers_amout-one">
                <input
                    type="checkbox"
                    id="filter-amout-one"
                    name="filter-amout-one"
                />
                <label htmlFor="filter-amout-one">1 пересадка</label>
            </div>
            <div className="filters-transfers_amout-cell filters-transfers_amout-two">
                <input
                    type="checkbox"
                    id="filter-amout-two"
                    name="filter-amout-two"
                />
                <label htmlFor="filter-amout-two">2 пересадки</label>
            </div>
            <div className="filters-transfers_amout-cell filters-transfers_amout-three">
                <input
                    type="checkbox"
                    id="filter-amout-three"
                    name="filter-amout-three"
                />
                <label htmlFor="filter-amout-three">3 пересадки</label>
            </div>
        </div>
    );
}