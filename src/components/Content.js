export default function () {
    return (
        <div className="content">
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
          <div className="results-display-screen">
            <div className="sorts">
              <div className="sort sort-cheapest">
                <input
                  type="radio"
                  id="sort-cheapest"
                  name="sort"
                  value="sort-cheapest"
                />
                <label for="sort-cheapest">САМЫЙ ДЕШЕВЫЙ</label>
              </div>
              <div className="sort sort-fastest">
                <input
                  type="radio"
                  id="sort-fastest"
                  name="sort"
                  value="sort-fastest"
                />
                <label for="sort-fastest">САМЫЙ БЫСТРЫЙ</label>
              </div>
              <div className="sort sort-optimal">
                <input
                  type="radio"
                  id="sort-optimal"
                  name="sort"
                  value="sort-optimal"
                />
                <label for="sort-optimal">ОПТИМАЛЬНЫЙ</label>
              </div>
            </div>
            <div className="results">
              <div className="ticket">
                <div className="ticket-header">
                  <div className="ticket-header__price">13 400 P</div>
                  <div className="ticket-header__logos">
                    <div className="ticket-header__logos-logo">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/S7_new_logo.svg/800px-S7_new_logo.svg.png"
                        width="110"
                        height="36"
                      />
                    </div>
                  </div>
                </div>
                <div className="ticket-info">
                  <div className="ticket-info__destination">
                    <div className="ticket-info__destination-iatas">
                      MOW - HKT
                    </div>
                    <div className="ticket-info__destination-times">
                      10:00-12:45
                    </div>
                  </div>
                  <div className="ticket-info__duration">
                    <div className="ticket-info__duration-title">В пути</div>
                    <div className="ticket-info__duration-time">21ч 30м</div>
                  </div>
                  <div className="ticket-info__transfers">
                    <div className="ticket-info__transfers-amount">
                      2 пересадки
                    </div>
                    <div className="ticket-info__transfers-iatas">HGJ, JNG</div>
                  </div>
                </div>
                <div className="ticket-info">
                  <div className="ticket-info__destination">
                    <div className="ticket-info__destination-iatas">
                      MOW - HKT
                    </div>
                    <div className="ticket-info__destination-times">
                      10:00-12:45
                    </div>
                  </div>
                  <div className="ticket-info__duration">
                    <div className="ticket-info__duration-title">В пути</div>
                    <div className="ticket-info__duration-time">21ч 30м</div>
                  </div>
                  <div className="ticket-info__transfers">
                    <div className="ticket-info__transfers-amount">
                      2 пересадки
                    </div>
                    <div className="ticket-info__transfers-iatas">HGJ, JNG</div>
                  </div>
                </div>
              </div>
              <div className="ticket">
                <div className="ticket-header">
                  <div className="ticket-header__price">13 400 P</div>
                  <div className="ticket-header__logos">
                    <div className="ticket-header__logos-logo">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/S7_new_logo.svg/800px-S7_new_logo.svg.png"
                        width="110"
                        height="36"
                      />
                    </div>
                  </div>
                </div>
                <div className="ticket-info">
                  <div className="ticket-info__destination">
                    <div className="ticket-info__destination-iatas">
                      MOW - HKT
                    </div>
                    <div className="ticket-info__destination-times">
                      10:00-12:45
                    </div>
                  </div>
                  <div className="ticket-info__duration">
                    <div className="ticket-info__duration-title">В пути</div>
                    <div className="ticket-info__duration-time">21ч 30м</div>
                  </div>
                  <div className="ticket-info__transfers">
                    <div className="ticket-info__transfers-amount">
                      2 пересадки
                    </div>
                    <div className="ticket-info__transfers-iatas">HGJ, JNG</div>
                  </div>
                </div>
                <div className="ticket-info">
                  <div className="ticket-info__destination">
                    <div className="ticket-info__destination-iatas">
                      MOW - HKT
                    </div>
                    <div className="ticket-info__destination-times">
                      10:00-12:45
                    </div>
                  </div>
                  <div className="ticket-info__duration">
                    <div className="ticket-info__duration-title">В пути</div>
                    <div className="ticket-info__duration-time">21ч 30м</div>
                  </div>
                  <div className="ticket-info__transfers">
                    <div className="ticket-info__transfers-amount">
                      2 пересадки
                    </div>
                    <div className="ticket-info__transfers-iatas">HGJ, JNG</div>
                  </div>
                </div>
              </div>
              <div className="ticket">
                <div className="ticket-header">
                  <div className="ticket-header__price">13 400 P</div>
                  <div className="ticket-header__logos">
                    <div className="ticket-header__logos-logo">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/S7_new_logo.svg/800px-S7_new_logo.svg.png"
                        width="110"
                        height="36"
                      />
                    </div>
                  </div>
                </div>
                <div className="ticket-info">
                  <div className="ticket-info__destination">
                    <div className="ticket-info__destination-iatas">
                      MOW - HKT
                    </div>
                    <div className="ticket-info__destination-times">
                      10:00-12:45
                    </div>
                  </div>
                  <div className="ticket-info__duration">
                    <div className="ticket-info__duration-title">В пути</div>
                    <div className="ticket-info__duration-time">21ч 30м</div>
                  </div>
                  <div className="ticket-info__transfers">
                    <div className="ticket-info__transfers-amount">
                      2 пересадки
                    </div>
                    <div className="ticket-info__transfers-iatas">HGJ, JNG</div>
                  </div>
                </div>
                <div className="ticket-info">
                  <div className="ticket-info__destination">
                    <div className="ticket-info__destination-iatas">
                      MOW - HKT
                    </div>
                    <div className="ticket-info__destination-times">
                      10:00-12:45
                    </div>
                  </div>
                  <div className="ticket-info__duration">
                    <div className="ticket-info__duration-title">В пути</div>
                    <div className="ticket-info__duration-time">21ч 30м</div>
                  </div>
                  <div className="ticket-info__transfers">
                    <div className="ticket-info__transfers-amount">
                      2 пересадки
                    </div>
                    <div className="ticket-info__transfers-iatas">HGJ, JNG</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}