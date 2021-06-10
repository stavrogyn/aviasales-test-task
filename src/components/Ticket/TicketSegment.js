export default function TicketSegment ({ origin, destination, date, stops, duration }) {

    const getHoursAndMinutesString = date => (date.toTimeString()).slice(0, 5)

    const departureTime = new Date(date) 
    const arrivalTime = new Date(departureTime.getTime() + duration * 60000);
    const departureTimeToDisplay = getHoursAndMinutesString(departureTime);
    const arrivalTimeToDisplay = getHoursAndMinutesString(arrivalTime);
    const hoursDuration = parseInt(duration / 60);
    const minutesDuration = duration % 60;

    return (
        <div className="ticket-segment">
            <div className="ticket-segment__destination">
                <div className="ticket-segment__destination-iatas">
                {`${origin} - ${destination}`}
                </div>
                <div className="ticket-segment__destination-times">
                {`${departureTimeToDisplay} - ${arrivalTimeToDisplay}`}
                </div>
            </div>
            <div className="ticket-segment__duration">
                <div className="ticket-segment__duration-title">
                    В пути
                </div>
                <div className="ticket-segment__duration-time">
                    {`${hoursDuration}ч ${minutesDuration}м`}
                </div>
            </div>
            <div className="ticket-segment__transfers">
                <div className="ticket-segment__transfers-amount">
                    {`${stops.length} пересадки`}
                </div>
                <div className="ticket-segment__transfers-iatas">
                    {stops.join(', ')}
                </div>
            </div>
        </div>
    );
  }