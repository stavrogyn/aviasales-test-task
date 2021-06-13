const tickets = [
    {
      "price": 90166,
      "carrier": "S7",
      "segments": [
        {
          "origin": "MOW",
          "destination": "HKT",
          "date": "2021-06-15T22:12:00.000Z",
          "stops": [
            "DXB",
            "AUH",
            "IST"
          ],
          "duration": 1254
        },
        {
          "origin": "HKT",
          "destination": "MOW",
          "date": "2021-07-06T09:09:00.000Z",
          "stops": [
            "IST",
            "DXB",
            "AUH"
          ],
          "duration": 1711
        }
      ]
    },
    {
      "price": 24112,
      "carrier": "S7",
      "segments": [
        {
          "origin": "MOW",
          "destination": "HKT",
          "date": "2021-06-15T22:11:00.000Z",
          "stops": [
            "AUH",
            "SIN",
            "KUL"
          ],
          "duration": 635
        },
        {
          "origin": "HKT",
          "destination": "MOW",
          "date": "2021-07-06T01:19:00.000Z",
          "stops": [
            "AUH",
            "BKK"
          ],
          "duration": 630
        }
      ]
    },
    {
      "price": 72032,
      "carrier": "FV",
      "segments": [
        {
          "origin": "MOW",
          "destination": "HKT",
          "date": "2021-06-16T11:00:00.000Z",
          "stops": [
            "AUH",
            "BKK",
            "SIN"
          ],
          "duration": 771
        },
        {
          "origin": "HKT",
          "destination": "MOW",
          "date": "2021-07-06T16:48:00.000Z",
          "stops": [
            "BKK",
            "KUL"
          ],
          "duration": 1422
        }
      ]
    }
  ]

const initialState = {
    search: {
        allTickets: [...tickets],
        ticketsToDisplay: [...tickets]
    },
    sort: 'CHEAPEST',
    filters: {
        transfersAmount: {
        }
    }
}

export default initialState