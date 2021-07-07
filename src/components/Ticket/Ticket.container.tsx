import CarrierLogo from "./Ticket.CarrierLogo";
import TicketSegment from "./Ticket.Segment";
import { TicketInterface } from "../../state/state.type";

const Ticket: React.FC<TicketInterface> = ({ price, carrier, segments }) => {
  const ticketSegments = segments.map((segment, i) => (
    <TicketSegment {...segment} key={i} />
  ));
  const priceWithSpacing = price
    .toString()
    .split("")
    .reverse()
    .map((e, i) => {
      if (i % 3 === 0 && i !== 0) {
        e = `${e} `;
      }
      return e;
    })
    .reverse()
    .join("");

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

export default Ticket;
