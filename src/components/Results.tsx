import useTickets from '../hooks/useTickets'

const EmptyResultsStub: React.FC = () => {
  return (
      <div className="results-stub">
          <h2>Билетов — нет.</h2> 
          <p>Попробуй запустить поиск кликом по логотипу, или, если результаты поиска уже есть, расслабить фильтры.</p>
      </div>
  );
}

const Results: React.FC = () => {
    let ticketsToDisplay = useTickets();
    return (
        <div className="results">
          {ticketsToDisplay.length === 0 ? <EmptyResultsStub /> : ticketsToDisplay}
        </div>
    );
}

export default Results