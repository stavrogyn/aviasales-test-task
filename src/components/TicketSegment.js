export default function TicketSegment ({ origin, destination, date, stops, duration }) {

    const getHoursAndMinutesString = date => (date.toTimeString()).slice(0, 5)

    const departureTime = new Date(date) 
    const arrivalTime = new Date(departureTime.getTime() + duration * 60000);
    const departureTimeToDisplay = getHoursAndMinutesString(departureTime);
    const arrivalTimeToDisplay = getHoursAndMinutesString(arrivalTime);
    const hoursDuration = parseInt(duration / 60);
    const minutesDuration = duration % 60;

    return (
        <div className="ticket-info">
            <div className="ticket-info__destination">
                <div className="ticket-info__destination-iatas">
                {`${origin} - ${destination}`}
                </div>
                <div className="ticket-info__destination-times">
                {`${departureTimeToDisplay} - ${arrivalTimeToDisplay}`}
                </div>
            </div>
            <div className="ticket-info__duration">
                <div className="ticket-info__duration-title">
                    В пути
                </div>
                <div className="ticket-info__duration-time">
                    {`${hoursDuration}ч ${minutesDuration}м`}
                </div>
            </div>
            <div className="ticket-info__transfers">
                <div className="ticket-info__transfers-amount">
                    {`${stops.length} пересадки`}
                </div>
                <div className="ticket-info__transfers-iatas">
                    {stops.join(', ')}
                </div>
            </div>
        </div>
    );
  }