import React from "react";
import stringifyTransfersAmounts from "../../utils/stringifyTransfersAmounts";
import { Segment, TransferNumber } from "../../state/state.types";

const TicketSegment: React.FC<Segment> = ({
  origin,
  destination,
  date,
  stops,
  duration,
}) => {
  const getHoursAndMinutesString: (date: Date) => string = (date) =>
    date.toTimeString().slice(0, 5);

  const departureTime: Date = new Date(date);
  const arrivalTime: Date = new Date(
    departureTime.getTime() + duration * 60000
  );
  const departureTimeToDisplay: string =
    getHoursAndMinutesString(departureTime);
  const arrivalTimeToDisplay: string = getHoursAndMinutesString(arrivalTime);
  const hoursDuration: number = Math.trunc(duration / 60);
  const minutesDuration: number = duration % 60;
  const { ru: transfersAmountString } = stringifyTransfersAmounts(
    stops.length as TransferNumber
  );

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
        <div className="ticket-segment__duration-title">В пути</div>
        <div className="ticket-segment__duration-time">
          {`${hoursDuration}ч ${minutesDuration}м`}
        </div>
      </div>
      <div className="ticket-segment__transfers">
        <div className="ticket-segment__transfers-amount">
          {transfersAmountString}
        </div>
        <div className="ticket-segment__transfers-iatas">
          {stops.join(", ")}
        </div>
      </div>
    </div>
  );
};

export default TicketSegment;
