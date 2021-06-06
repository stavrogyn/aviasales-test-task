import CarrierLogo from './CarrierLogo'


export default function Ticket ({ price, destinationIatas, destinationTimes, duration, transfersAmount, transfersIatas, carrierIata }) {

    return (
        <div className="ticket">
                <div className="ticket-header">
                  <div className="ticket-header__price">{price}</div>
                  <div className="ticket-header__logos">
                    <div className="ticket-header__logos-logo">
                        <CarrierLogo carrier={carrierIata} />
                    </div>
                  </div>
                </div>
                <div className="ticket-info">
                  <div className="ticket-info__destination">
                    <div className="ticket-info__destination-iatas">
                      {destinationIatas}
                    </div>
                    <div className="ticket-info__destination-times">
                      {destinationTimes}
                    </div>
                  </div>
                  <div className="ticket-info__duration">
                    <div className="ticket-info__duration-title">В пути</div>
                    <div className="ticket-info__duration-time">{duration}</div>
                  </div>
                  <div className="ticket-info__transfers">
                    <div className="ticket-info__transfers-amount">
                      {`${transfersAmount} пересадки`}
                    </div>
                    <div className="ticket-info__transfers-iatas">{transfersIatas}</div>
                  </div>
                </div>
                <div className="ticket-info">
                  <div className="ticket-info__destination">
                    <div className="ticket-info__destination-iatas">
                        {destinationIatas}
                    </div>
                    <div className="ticket-info__destination-times">
                        {destinationTimes}
                    </div>
                  </div>
                  <div className="ticket-info__duration">
                    <div className="ticket-info__duration-title">В пути</div>
                    <div className="ticket-info__duration-time">{duration}</div>
                  </div>
                  <div className="ticket-info__transfers">
                    <div className="ticket-info__transfers-amount">
                        {`${transfersAmount} пересадки`}
                    </div>
                    <div className="ticket-info__transfers-iatas">{transfersIatas}</div>
                  </div>
                </div>
              </div>
    );
}