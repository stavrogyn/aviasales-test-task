import CarrierLogo from './CarrierLogo'
import TicketSegment from './TicketSegment'


export default function Ticket ({ price, carrier, segments }) {

    const ticketSegments = segments.map((segment, i) => <TicketSegment {...segment} key={i} />)
    const priceToDisplay = price.toString().split('').reverse().map((e, i) => {
      if (i % 3 === 0 && i !== 0) {
          e = `${e} `
      }
      return e;
    }).reverse().join('')

    return (
        <div className="ticket">
          <div className="ticket-header">
            <div className="ticket-header__price">{`${priceToDisplay} P`}</div>
            <div className="ticket-header__logos">
              <div className="ticket-header__logos-logo">
                  <CarrierLogo carrier={carrier} />
              </div>
            </div>
          </div>
          {ticketSegments}
        </div>
    );
}