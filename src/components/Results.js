import Ticket from './Ticket'

export default function Results () {
    const ticketProps = { 
      price: '13 400 P', 
      destinationIatas: 'MOW - HKT', 
      destinationTimes: '10:00-12:45',
      duration: '21ч 30м',
      transfersAmount: 2, 
      transfersIatas: 'HGJ, JNG',
      carrierIata: 'S7'
    }

    return (
        <div className="results">
          <Ticket {...ticketProps}/>
          <Ticket {...ticketProps}/>
          <Ticket {...ticketProps}/>
        </div>
    );
}