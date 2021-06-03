export default function Filters () {
    return (
        <div className="filters">
            <div className="filters-transfers_amout">
              <div className="filters-transfers_amout-title">
                КОЛИЧЕСТВО ПЕРЕСАДОК
              </div>
              <div className="filters-transfers_amout-cell filters-transfers_amout-all">
                <input
                  type="checkbox"
                  id="filter-amout-all"
                  name="filter-amout-all"
                />
                <label for="filter-amout-all">Все</label>
              </div>
              <div className="filters-transfers_amout-cell filters-transfers_amout-zero">
                <input
                  type="checkbox"
                  id="filter-amout-zero"
                  name="filter-amout-zero"
                />
                <label for="filter-amout-zero">Без пересадок</label>
              </div>
              <div className="filters-transfers_amout-cell filters-transfers_amout-one">
                <input
                  type="checkbox"
                  id="filter-amout-one"
                  name="filter-amout-one"
                />
                <label for="filter-amout-one">1 пересадка</label>
              </div>
              <div className="filters-transfers_amout-cell filters-transfers_amout-two">
                <input
                  type="checkbox"
                  id="filter-amout-two"
                  name="filter-amout-two"
                />
                <label for="filter-amout-two">2 пересадки</label>
              </div>
              <div className="filters-transfers_amout-cell filters-transfers_amout-three">
                <input
                  type="checkbox"
                  id="filter-amout-three"
                  name="filter-amout-three"
                />
                <label for="filter-amout-three">3 пересадки</label>
              </div>
            </div>
          </div>
    );
}