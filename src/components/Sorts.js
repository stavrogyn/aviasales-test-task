export default function Sorts () {
    return (
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
    );
}