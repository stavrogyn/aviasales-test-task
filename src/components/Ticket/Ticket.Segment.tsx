import { stringifyTransfersAmounts } from "../../utils/ticket.stringifyTransfersAmounts";
import { Segment, TransferNumber } from "../../state/state.types";
import { getTicketInfoToDisplay } from "../../utils/ticket.info";

export const TicketSegment = ({
  origin,
  destination,
  date,
  stops,
  duration,
}: Segment) => {
  const { departureTime, arrivalTime, hoursDuration, minutesDuration } = getTicketInfoToDisplay(date, duration)

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
          {`${departureTime} - ${arrivalTime}`}
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

