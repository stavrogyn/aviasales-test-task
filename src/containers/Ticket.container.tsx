import { CarrierLogo } from "../components/Ticket/Ticket.CarrierLogo";
import { TicketSegment } from "../components/Ticket/Ticket.Segment";
import { Ticket as TicketType } from "../state/state.types";

export const Ticket = ({ price, carrier, segments }: TicketType) => {
  const ticketSegments = segments.map((segment, i) => (
    <TicketSegment {...segment} key={i} />
  ));
  const priceWithSpacing = Intl.NumberFormat('ru').format(price)

  return (
    <div className="ticket">
      <div className="ticket-header">
        <div className="ticket-header__price">{`${priceWithSpacing} P`}</div>
        <div className="ticket-header__logos">
          <div className="ticket-header__logos-logo">
            <CarrierLogo carrier={carrier} />
          </div>
        </div>
      </div>
      {ticketSegments}
    </div>
  );
};

