import useTickets from "../hooks/useTickets";

const EmptyResultsStub = () => {
  return (
    <div className="results-stub">
      <h2>Билетов — нет.</h2>
      <p>
        Попробуй запустить поиск кликом по логотипу, или, если результаты поиска
        уже есть, расслабить фильтры.
      </p>
    </div>
  );
};

export const Results = () => {
  const ticketsToDisplay = useTickets();
  return (
    <div className="results">
      {ticketsToDisplay.length === 0 ? <EmptyResultsStub /> : ticketsToDisplay}
    </div>
  );
};

